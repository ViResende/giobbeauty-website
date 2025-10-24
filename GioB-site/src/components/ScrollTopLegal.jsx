import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LEGAL_PATHS = new Set(["/privacy", "/terms"]);

export default function ScrollTopLegal() {
  const { pathname } = useLocation();

useEffect(() => {
  // Force instant scroll to very top
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  if (LEGAL_PATHS.has(pathname)) {
    const main = document.getElementById("main");
    if (main) main.focus({ preventScroll: true });
  }
}, [pathname]);


  return null;
}

