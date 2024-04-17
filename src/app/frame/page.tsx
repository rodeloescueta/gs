import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Digital Services - Transform Your Vision into Reality | Grandsolution",
  description:
    "Discover Grandsolution's comprehensive digital services. From custom websites to online marketing and e-commerce solutions, we help businesses grow and succeed in the digital world. Explore our portfolio and let's write your digital success story together.",
  //ogTitle:'...'
};

export default function FramePage() {
  return <Page />;
}
