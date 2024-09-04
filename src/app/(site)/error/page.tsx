import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Ev&Lx Power Company",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 - Page Not Found" />

      <NotFound  />
    </>
  );
};

export default ErrorPage;
