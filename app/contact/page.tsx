import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Un projet, une opportunité, ou juste envie d'échanger ? Je réponds sous 24h.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
