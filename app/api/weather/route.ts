import { NextResponse } from "next/server";

const GIBRALTAR_LATITUDE = 36.1408;
const GIBRALTAR_LONGITUDE = -5.3536;
const FORECAST_DAYS = 7;

interface OpenMeteoResponse {
  current?: {
    temperature_2m: number;
    weather_code: number;
  };
  daily?: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

export const revalidate = 1800;

export async function GET() {
  const searchParams = new URLSearchParams({
    latitude: String(GIBRALTAR_LATITUDE),
    longitude: String(GIBRALTAR_LONGITUDE),
    current: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    forecast_days: String(FORECAST_DAYS),
    timezone: "Europe/Gibraltar",
  });

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?${searchParams.toString()}`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      throw new Error(`Weather request failed with ${response.status}`);
    }

    const payload = (await response.json()) as OpenMeteoResponse;
    const forecast =
      payload.daily?.time.map((date, index) => ({
        date,
        weatherCode: payload.daily?.weather_code[index] ?? 0,
        maxTemp: Math.round(payload.daily?.temperature_2m_max[index] ?? 0),
        minTemp: Math.round(payload.daily?.temperature_2m_min[index] ?? 0),
      })) ?? [];

    return NextResponse.json({
      current: {
        temperature: Math.round(payload.current?.temperature_2m ?? 0),
        weatherCode: payload.current?.weather_code ?? 0,
      },
      forecast,
      location: "Gibraltar",
    });
  } catch (error) {
    console.error("Weather API error", error);

    return NextResponse.json(
      { error: "Unable to fetch weather right now." },
      { status: 500 }
    );
  }
}
