import Image from "next/image";

import kotrLogo from "@/KOTRlogotransparent.png";

export function PageBackgroundLogo() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 hidden h-[126vh] w-[58rem] -translate-x-[44%] opacity-10 md:block">
      <div className="relative h-full">
        <Image
          src={kotrLogo}
          alt=""
          fill
          className="object-contain object-left-top"
          priority
        />
      </div>
    </div>
  );
}
