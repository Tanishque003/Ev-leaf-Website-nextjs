import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | EvLeaf & Lx Power Engineering",
  description:
    "Discover the pricing for our comprehensive power generation and renewable energy solutions. EvLeaf & Lx Power Engineering offers competitive rates for diesel and gas gensets, electrical control panels, transformers, and solar power solutions.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
