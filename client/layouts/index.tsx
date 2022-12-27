import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

type PropsType = {
   title: string;
   desc: string;
   children: ReactNode;
};

const Layout = ({ title, desc, children }: PropsType) => {
   return (
      <>
         <Head>
            <title>{`${title} | Finote`}</title>
            <meta name="description" content={desc} />
         </Head>
         <Navbar />
         <main>{children}</main>
      </>
   );
};

export default Layout;
