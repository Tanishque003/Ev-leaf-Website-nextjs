import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EvLeaf & Lx Power Engineering",
  description:
    "Get in touch with EvLeaf (OPC) Private Limited & Lx Power Engineering Private Limited. We specialize in power generation, renewable energy solutions, and offer comprehensive services across various sectors. Contact us for more information.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us" />

      <Contact />
    </>
  );
};

export default ContactPage;
