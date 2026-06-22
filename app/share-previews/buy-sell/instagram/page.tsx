import Image from "next/image";

import unboxingDoodle from "@/app/open-doodles/png/UnboxingDoodle.png";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function BuySellInstagramPreviewPage() {
  return (
    <main className="min-h-screen bg-beige text-navy">
      <section className="mx-auto flex min-h-screen w-full max-w-[1080px] flex-col px-20 py-20">
        <div className="flex flex-1 flex-col rounded-[3rem] border border-white/70 bg-beige">
          <div className="mx-auto flex w-full max-w-[840px] flex-1 flex-col items-center justify-center">
            <p className="mb-7 text-center text-xl font-semibold uppercase tracking-[0.35em] text-salmon">
              Useful Stuff
            </p>
            <h1 className="text-center text-[5rem] font-bold leading-[1.02] tracking-[-0.04em] text-navy">
              Baby Buy & Sell
            </h1>

            <div className="relative mt-14 h-[27rem] w-full max-w-[27rem]">
              <Image
                src={unboxingDoodle}
                alt=""
                fill
                className="object-contain object-center"
                sizes="432px"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
