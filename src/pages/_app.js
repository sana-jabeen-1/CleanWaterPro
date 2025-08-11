import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast"; // Import Toaster from react-hot-toast
import { FaAngleUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { animationCreate } from "../../utils/utils";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <QueryClientProvider client={client}>
      <Head></Head>
      <div className="page-wrapper">
        <Toaster position="top-center" />{" "}
        {/* Replace ToastContainer with Toaster */}
        <Component {...pageProps} />
      </div>
      <ScrollToTop className="scroll-to-top" smooth component={<FaAngleUp />} />
    </QueryClientProvider>
  );
}
export default MyApp;
