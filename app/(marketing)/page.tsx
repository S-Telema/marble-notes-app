import { Heading } from "@/components/marketing/heading";
import { Footer } from "@/components/marketing/footer";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
  <div className="flex flex-col items-center justify-center flex-1 px-6 pb-10 text-center gap-y-8">
    <Heading />
  </div>
  <Footer />
</div>

  );
}
