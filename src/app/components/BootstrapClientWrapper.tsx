"use client";

import { useEffect } from "react";

export function BootstrapClient() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return null;
}
