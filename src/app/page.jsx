"use client";

import { fallbackLng } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push(`/${fallbackLng}/preview`);
    }, 0);
  }, [router]);

  return <></>;
}
