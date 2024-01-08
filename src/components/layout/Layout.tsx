"use client";

import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  const showNavAndFooter = !["/signin", "/signup"].includes(pathname);
  return (
    <div>
      {showNavAndFooter && (
        <>
          <nav></nav>
          <main>{children}</main>
          <div></div>
        </>
      )}
      {!showNavAndFooter && <main></main>}
    </div>
  );
};

export default Layout;
