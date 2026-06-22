"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudRain,
  CloudSun,
  LoaderCircle,
  Sun,
} from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";

interface WeatherForecastDay {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
}

interface WeatherResponse {
  current: {
    temperature: number;
    weatherCode: number;
  };
  forecast: WeatherForecastDay[];
  location: string;
}

export function NavUtilities() {
  const { language, setLanguage } = useSiteLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const now = useMemo(() => new Date(), []);
  const activeWeatherRequest = useRef<AbortController | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const activeLanguage = hasMounted ? language : "en";

  const dateLabel = new Intl.DateTimeFormat(
    activeLanguage === "es" ? "es-ES" : "en-GB",
    {
      weekday: "short",
      day: "numeric",
      month: "long",
      timeZone: "Europe/Gibraltar",
    }
  ).format(now);

  const loadWeather = useCallback(async () => {
    activeWeatherRequest.current?.abort();
    const controller = new AbortController();
    activeWeatherRequest.current = controller;

    try {
      setIsLoading(true);
      setHasError(false);

      const response = await fetch("/api/weather", {
        signal: controller.signal,
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Weather request failed with ${response.status}`);
      }

      const payload = (await response.json()) as WeatherResponse;
      setWeather(payload);
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        setHasError(true);
      }
    } finally {
      if (activeWeatherRequest.current === controller) {
        activeWeatherRequest.current = null;
      }
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadWeather();

    return () => activeWeatherRequest.current?.abort();
  }, [loadWeather]);

  useEffect(() => {
    if (!isOpen && !isLanguageOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isLanguageOpen]);

  useEffect(() => {
    if (!isOpen && !isLanguageOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
      setIsLanguageOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isLanguageOpen, isOpen]);

  const WeatherIcon = getWeatherIcon(weather?.current.weatherCode);
  const upcomingForecast = weather?.forecast.slice(1) ?? [];
  const alternateLanguage = activeLanguage === "es" ? "en" : "es";

  return (
    <div ref={rootRef} className="relative z-[80] flex items-center gap-1.5 md:gap-2">
      <div className="relative z-[81] hidden md:block">
        <div className="flex h-9 min-h-9 items-center rounded-full border border-navy/8 bg-beige/95 p-0.5 shadow-[inset_0_1px_2px_rgba(45,56,77,0.12),inset_0_-1px_2px_rgba(255,255,255,0.65)]">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-2.5 py-1.5 text-sm leading-none transition-colors ${
              activeLanguage === "en"
                ? "bg-white/70 text-navy shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_1px_2px_rgba(45,56,77,0.04)]"
                : "text-navy/50 hover:text-navy/75"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-full px-2.5 py-1.5 text-sm leading-none transition-colors ${
              activeLanguage === "es"
                ? "bg-white/70 text-navy shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_1px_2px_rgba(45,56,77,0.04)]"
                : "text-navy/50 hover:text-navy/75"
            }`}
          >
            ES
          </button>
        </div>
      </div>

      <div className="relative z-[81] hidden md:block">
        <button
          type="button"
          onClick={() => {
            setIsLanguageOpen(false);
            setIsOpen((current) => {
              const next = !current;
              if (next && (!weather || hasError)) {
                void loadWeather();
              }
              return next;
            });
          }}
          className="relative z-40 flex h-full items-center justify-center gap-1.5 rounded-full px-2.5 text-navy/72 transition-colors hover:text-navy"
          aria-expanded={isOpen}
          aria-label={
            activeLanguage === "es"
              ? "Abrir prevision semanal"
              : "Open weekly forecast"
          }
        >
          <WeatherIcon className="size-4 text-kotr-orange/85" />
          <span className="text-sm capitalize">{dateLabel}</span>
          <ChevronDown
            className={`size-3.5 text-navy/42 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen ? (
          <div className="absolute right-0 top-[calc(100%+8px)] z-50 hidden w-[19rem] rounded-[1.5rem] border border-white/80 bg-white/95 p-4 shadow-[0_18px_40px_rgba(45,56,77,0.12)] backdrop-blur-sm md:block">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-salmon">
                  {activeLanguage === "es" ? "Tiempo" : "Weather"}
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy">
                  {activeLanguage === "es" ? "Pronostico semanal" : "Weekly forecast"}
                </h3>
              </div>
              {weather ? (
                <div className="text-right">
                  <p className="font-sans text-xs text-navy/55">
                    {weather.location}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-lg font-bold text-navy">
                    <WeatherIcon className="size-4 text-kotr-orange" />
                    <p>{weather.current.temperature}°C</p>
                  </div>
                </div>
              ) : null}
            </div>

            {isLoading ? (
              <div className="flex items-center gap-2 py-6 font-sans text-sm text-navy/65">
                <LoaderCircle className="size-4 animate-spin text-salmon" />
                <span>
                  {activeLanguage === "es"
                    ? "Cargando previsiones..."
                    : "Loading forecast..."}
                </span>
              </div>
            ) : null}

            {hasError ? (
              <div className="mt-4 rounded-2xl bg-beige p-4 font-sans text-sm leading-6 text-navy/70">
                <p>
                  {activeLanguage === "es"
                    ? "No hemos podido cargar el tiempo ahora mismo."
                    : "We couldn't load the forecast right now."}
                </p>
                <button
                  type="button"
                  onClick={() => void loadWeather()}
                  className="mt-3 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:bg-white/80"
                >
                  {activeLanguage === "es" ? "Reintentar" : "Try again"}
                </button>
              </div>
            ) : null}

            {weather ? (
              <div className="mt-4 space-y-2">
                {upcomingForecast.map((day) => {
                  const DayIcon = getWeatherIcon(day.weatherCode);
                  const weekday = new Intl.DateTimeFormat(
                    activeLanguage === "es" ? "es-ES" : "en-GB",
                    {
                      weekday: "short",
                      day: "numeric",
                      timeZone: "Europe/Gibraltar",
                    }
                  ).format(new Date(day.date));

                  return (
                    <div
                      key={day.date}
                      className="flex items-center justify-between rounded-2xl bg-beige px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <DayIcon className="size-4 text-kotr-orange" />
                        <span className="font-sans text-sm font-medium capitalize text-navy">
                          {weekday}
                        </span>
                      </div>
                      <span className="font-sans text-sm text-navy/70">
                        {day.maxTemp}°C / {day.minTemp}°C
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="relative z-[81] md:hidden">
        <button
          type="button"
          onClick={() => {
            setIsOpen(false);
            setIsLanguageOpen((current) => !current);
          }}
          className="flex size-9 items-center justify-center rounded-full border border-navy/8 bg-beige/95 text-navy/72 shadow-[inset_0_1px_2px_rgba(45,56,77,0.12),inset_0_-1px_2px_rgba(255,255,255,0.65)] transition-colors hover:bg-white/88 hover:text-navy"
          aria-expanded={isLanguageOpen}
          aria-label={activeLanguage === "es" ? "Cambiar idioma" : "Change language"}
        >
          <FlagDot language={activeLanguage} />
        </button>

        {isLanguageOpen ? (
          <div className="absolute right-0 top-full z-30 mt-2 rounded-[1.25rem] border border-white/80 bg-white/95 p-2 shadow-[0_18px_40px_rgba(45,56,77,0.12)] backdrop-blur-sm">
            <button
              type="button"
              onClick={() => {
                setLanguage(alternateLanguage);
                setIsLanguageOpen(false);
              }}
              className="inline-flex min-w-[4.25rem] items-center justify-center rounded-full border border-navy/8 bg-beige/95 px-3 py-2 text-sm text-navy/72 shadow-[inset_0_1px_2px_rgba(45,56,77,0.12),inset_0_-1px_2px_rgba(255,255,255,0.65)] transition-colors hover:bg-white/88 hover:text-navy"
              aria-label={alternateLanguage === "es" ? "Cambiar a espanol" : "Switch to English"}
            >
              <span className="mr-2 inline-flex">
                <FlagDot language={alternateLanguage} />
              </span>
              {alternateLanguage.toUpperCase()}
            </button>
          </div>
        ) : null}
      </div>

      <div className="relative z-[81] md:hidden">
        <button
          type="button"
          onClick={() => {
            setIsLanguageOpen(false);
            setIsOpen((current) => {
              const next = !current;
              if (next && (!weather || hasError)) {
                void loadWeather();
              }
              return next;
            });
          }}
          className="flex h-9 min-h-9 items-center justify-center rounded-full border border-navy/8 bg-white/72 px-2.5 text-navy/72 shadow-[0_4px_12px_rgba(45,56,77,0.04)] transition-colors hover:bg-white/88 hover:text-navy"
          aria-expanded={isOpen}
          aria-label={
            activeLanguage === "es"
              ? "Abrir prevision semanal"
              : "Open weekly forecast"
          }
        >
          <WeatherIcon className="size-4 text-kotr-orange/85" />
        </button>

        {isOpen ? (
          <div className="absolute right-0 top-full z-30 mt-2 w-[19rem] rounded-[1.5rem] border border-white/80 bg-white/95 p-4 shadow-[0_18px_40px_rgba(45,56,77,0.12)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-salmon">
                  {activeLanguage === "es" ? "Tiempo" : "Weather"}
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy">
                  {activeLanguage === "es" ? "Pronostico semanal" : "Weekly forecast"}
                </h3>
              </div>
              {weather ? (
                <div className="text-right">
                  <p className="font-sans text-xs text-navy/55">
                    {weather.location}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-lg font-bold text-navy">
                    <WeatherIcon className="size-4 text-kotr-orange" />
                    <p>{weather.current.temperature}°C</p>
                  </div>
                </div>
              ) : null}
            </div>

            {isLoading ? (
              <div className="flex items-center gap-2 py-6 font-sans text-sm text-navy/65">
                <LoaderCircle className="size-4 animate-spin text-salmon" />
                <span>
                  {activeLanguage === "es"
                    ? "Cargando previsiones..."
                    : "Loading forecast..."}
                </span>
              </div>
            ) : null}

            {hasError ? (
              <div className="mt-4 rounded-2xl bg-beige p-4 font-sans text-sm leading-6 text-navy/70">
                <p>
                  {activeLanguage === "es"
                    ? "No hemos podido cargar el tiempo ahora mismo."
                    : "We couldn't load the forecast right now."}
                </p>
                <button
                  type="button"
                  onClick={() => void loadWeather()}
                  className="mt-3 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:bg-white/80"
                >
                  {activeLanguage === "es" ? "Reintentar" : "Try again"}
                </button>
              </div>
            ) : null}

            {weather ? (
              <div className="mt-4 space-y-2">
                {upcomingForecast.map((day) => {
                  const DayIcon = getWeatherIcon(day.weatherCode);
                  const weekday = new Intl.DateTimeFormat(
                    activeLanguage === "es" ? "es-ES" : "en-GB",
                    {
                      weekday: "short",
                      day: "numeric",
                      timeZone: "Europe/Gibraltar",
                    }
                  ).format(new Date(day.date));

                  return (
                    <div
                      key={day.date}
                      className="flex items-center justify-between rounded-2xl bg-beige px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <DayIcon className="size-4 text-kotr-orange" />
                        <span className="font-sans text-sm font-medium capitalize text-navy">
                          {weekday}
                        </span>
                      </div>
                      <span className="font-sans text-sm text-navy/70">
                        {day.maxTemp}°C / {day.minTemp}°C
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FlagDot({ language }: { language: "en" | "es" }) {
  if (language === "es") {
    return (
      <span
        aria-hidden="true"
        className="relative block h-4 w-4 overflow-hidden rounded-full ring-1 ring-navy/8"
      >
        <span className="absolute inset-x-0 top-0 h-[28%] bg-[#c73737]" />
        <span className="absolute inset-x-0 top-[28%] h-[44%] bg-[#f2c94c]" />
        <span className="absolute inset-x-0 bottom-0 h-[28%] bg-[#c73737]" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="relative block h-4 w-4 overflow-hidden rounded-full bg-[#234a9b] ring-1 ring-navy/8"
    >
      <span className="absolute inset-0 bg-[linear-gradient(35deg,transparent_43%,white_43%,white_57%,transparent_57%),linear-gradient(-35deg,transparent_43%,white_43%,white_57%,transparent_57%)] opacity-95" />
      <span className="absolute inset-0 bg-[linear-gradient(35deg,transparent_47%,#d74b4b_47%,#d74b4b_53%,transparent_53%),linear-gradient(-35deg,transparent_47%,#d74b4b_47%,#d74b4b_53%,transparent_53%)]" />
      <span className="absolute left-1/2 top-0 h-full w-[24%] -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-[24%] w-full -translate-y-1/2 bg-white" />
      <span className="absolute left-1/2 top-0 h-full w-[12%] -translate-x-1/2 bg-[#d74b4b]" />
      <span className="absolute left-0 top-1/2 h-[12%] w-full -translate-y-1/2 bg-[#d74b4b]" />
    </span>
  );
}

function getWeatherIcon(weatherCode = 0) {
  if (weatherCode === 0) {
    return Sun;
  }

  if ([1, 2].includes(weatherCode)) {
    return CloudSun;
  }

  if (weatherCode === 3) {
    return Cloud;
  }

  if ([45, 48].includes(weatherCode)) {
    return CloudFog;
  }

  if ([51, 53, 55, 56, 57].includes(weatherCode)) {
    return CloudDrizzle;
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return CloudRain;
  }

  return CloudSun;
}
