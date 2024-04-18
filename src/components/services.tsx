"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../lib/data";
import { motion } from "framer-motion";
// components
import { Text, Heading, Img, Button } from "../components";

export default function Header() {
  return (
    <div className="flex flex-col items-center" id="services">
      <Text
        size="12xl"
        as="p"
        className="mt-[116px] w-[61%] leading-[73px] tracking-[-3.60px] !text-gray-900 md:w-full md:p-5"
      >
        Wij trekken de aandacht, creëren verandering en vergroten impact. Wij
        dragen bij aan de groei van bedrijven in de digitale wereld.
      </Text>

      {/* services overview section */}
      <div className="mx-auto mt-[147px] flex w-full max-w-[1161px] flex-col gap-[123px] md:gap-[92px] md:p-5 sm:gap-[61px]">
        <div className="flex gap-[25px] md:flex-col">
          <div className="flex w-full flex-col gap-[18px]">
            <div className="flex flex-1 rounded-[18px] bg-gray-900_03 p-[39px] sm:p-5">
              <div className="flex w-full items-start justify-between gap-5 sm:flex-col">
                <Img
                  src="img_6742_rectangle.png"
                  width={95}
                  height={95}
                  alt="imageText"
                  className="h-[95px] w-[95px] rounded-[50%]"
                />
                <div className="mr-[7px] flex w-[71%] flex-col gap-[18px] sm:mr-0 sm:w-full">
                  <div className="flex">
                    <Text
                      size="2xl"
                      as="p"
                      className="w-[97%] leading-6 tracking-[-0.54px] !text-white-A700"
                    >
                      Laat je verrassen door onze prestaties! Ontdek ons
                      gevarieerde portfolio met gerealiseerde websites en laat
                      je inspireren door het vakmanschap achter elk project.{" "}
                    </Text>
                  </div>
                  <div className="flex">
                    <p className="text-[28px] font-medium md:text-[26px] sm:text-2xl tracking-[-1.12px] text-blue-400 hover:text-white-A700">
                      Portfolio
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 rounded-[18px] border border-solid border-gray-200 p-8 sm:p-5">
              <div className="mt-2 flex w-full items-start justify-between gap-5 sm:flex-col">
                <Img
                  src="img_6756_rectangle.png"
                  width={94}
                  height={95}
                  alt="image"
                  className="h-[95px] w-[94px] rounded-[50%]"
                />
                <div className="flex w-[71%] flex-col gap-3.5 sm:w-full">
                  <Text
                    size="lg"
                    as="p"
                    className="leading-[22px] tracking-[-0.48px] !text-gray-900"
                  >
                    Van het ontdekken van digitale kansen tot het ontwerpen van
                    jouw website, webshop of app, en het stimuleren van je
                    online aanwezigheid. Als full-service digital agency
                    begeleiden we je naar digitale groei.
                  </Text>
                  <div className="flex self-start">
                    <p className="text-[28px] font-medium md:text-[26px] sm:text-2xl tracking-[-1.12px] text-blue-400 hover:text-gray-900">
                      Over Grandsolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[526px] w-full rounded-[24px] md:h-auto">
            <Img
              src="img_6758_frame.png"
              width={579}
              height={526}
              alt="image_one"
              className="h-[526px] w-full rounded-[24px] object-cover"
            />
            <div className="absolute bottom-[10%] left-[10%] m-auto flex w-[54%]">
              <p className="text-[39px] font-medium md:text-[37px] sm:text-[35px] w-[61%] leading-[42px] tracking-[-1.56px] text-white-A700 hover:text-blue-400">
                <>
                  Ontdek <br />
                  onze blogs
                </>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-5 pr-[19px]">
          <div className="mb-[39px] flex">
            <Text
              size="13xl"
              as="p"
              className="!font-medium tracking-[-7.20px] !text-gray-900"
            >
              Onze
            </Text>
          </div>
          <div className="flex gap-[9px]">
            <Img
              src="img_6770_frame.svg"
              width={38}
              height={39}
              alt="image_two"
              className="h-[39px] w-[38px]"
            />
            <Img
              src="img_6775_frame.svg"
              width={38}
              height={39}
              alt="image_three"
              className="h-[39px] w-[38px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
