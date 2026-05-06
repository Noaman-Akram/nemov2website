import type { Metadata } from "next";
import {
  CareersHero,
  CareersAbout,
  CareersRoles,
  CareersLife,
  CareersProcess,
  CareersNoRole,
} from "@/components/sections/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Nemo team. We're a small focused studio building digital products that matter — hiring for craft, curiosity, and drive.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersAbout />
      <CareersRoles />
      <CareersLife />
      <CareersProcess />
      <CareersNoRole />
    </>
  );
}
