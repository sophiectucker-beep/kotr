import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:
          "/blog/childrens-dentists-gibraltar-dont-wait-for-wating-list",
        destination: "/blog/childrens-dentists-gibraltar",
        permanent: true,
      },
      {
        source:
          "/blog/childrens-dentists-gibraltar-dont-wait-for-waiting-list",
        destination: "/blog/childrens-dentists-gibraltar",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.culture.gi",
      },
      {
        protocol: "https",
        hostname: "culture.gi",
      },
      {
        protocol: "https",
        hostname: "www.visitgibraltar.gi",
      },
      {
        protocol: "https",
        hostname: "visitgibraltar.gi",
      },
      {
        protocol: "https",
        hostname: "www.buytickets.gi",
      },
      {
        protocol: "https",
        hostname: "buytickets.gi",
      },
      {
        protocol: "https",
        hostname: "www.gibraltarfa.com",
      },
      {
        protocol: "https",
        hostname: "gibraltarfa.com",
      },
      {
        protocol: "https",
        hostname: "gibshot.com",
      },
      {
        protocol: "https",
        hostname: "titanacademy.eu",
      },
      {
        protocol: "https",
        hostname: "www.stagecoach.gi",
      },
      {
        protocol: "https",
        hostname: "stagecoach.gi",
      },
      {
        protocol: "https",
        hostname: "gibraltardance.com",
      },
      {
        protocol: "https",
        hostname: "gibraltarartiststudio.com",
      },
      {
        protocol: "https",
        hostname: "www.gibraltartaekwondo.com",
      },
      {
        protocol: "https",
        hostname: "gibraltartaekwondo.com",
      },
      {
        protocol: "https",
        hostname: "www.mbsgib.com",
      },
      {
        protocol: "https",
        hostname: "mbsgib.com",
      },
      {
        protocol: "https",
        hostname: "growingartists.com",
      },
      {
        protocol: "https",
        hostname: "www.digitalacademy.gi",
      },
      {
        protocol: "https",
        hostname: "digitalacademy.gi",
      },
      {
        protocol: "https",
        hostname: "www.thedancecollectivegib.com",
      },
      {
        protocol: "https",
        hostname: "thedancecollectivegib.com",
      },
      {
        protocol: "https",
        hostname: "gibraltarcricket.com",
      },
      {
        protocol: "https",
        hostname: "www.gsla.gi",
      },
      {
        protocol: "https",
        hostname: "gsla.gi",
      },
      {
        protocol: "https",
        hostname: "inside.cev.eu",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
      },
      {
        protocol: "https",
        hostname: "instagram.com",
      },
      {
        protocol: "https",
        hostname: "www.gampa.gi",
      },
      {
        protocol: "https",
        hostname: "gampa.gi",
      },
      {
        protocol: "https",
        hostname: "www.girlguiding.org.uk",
      },
      {
        protocol: "https",
        hostname: "girlguiding.org.uk",
      },
      {
        protocol: "https",
        hostname: "www.gibraltarhockey.gi",
      },
      {
        protocol: "https",
        hostname: "gibraltarhockey.gi",
      },
      {
        protocol: "https",
        hostname: "www.gibraltarscouts.gi",
      },
      {
        protocol: "https",
        hostname: "gibraltarscouts.gi",
      },
      {
        protocol: "https",
        hostname: "bushido-jiu-jitsu.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
