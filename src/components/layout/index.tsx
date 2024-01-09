"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const showNavAndFooter = !["/signin", "/signup"].includes(pathname);
  return (
    <div>
      {showNavAndFooter && (
        <>
          <Navbar />
          <main>{children}</main>
          <div></div>
        </>
      )}
      {!showNavAndFooter && <main></main>}
    </div>
  );
};

export default Layout;
