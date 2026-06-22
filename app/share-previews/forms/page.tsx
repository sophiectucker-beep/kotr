import messyDoodle from "@/app/open-doodles/png/MessyDoodle.png";
import { FormsContent } from "@/components/forms-content";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import { usefulForms } from "@/lib/forms";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormsSharePreviewPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-beige text-navy">
      <PageBackgroundLogo />
      <main className="mx-auto flex w-[61rem] max-w-[61rem] flex-col gap-6 px-0 pt-[30px]">
        <FormsContent forms={usefulForms} doodleSrc={messyDoodle.src} />
      </main>
    </div>
  );
}
