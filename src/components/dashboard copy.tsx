"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
// components
import { Text, Heading, Img, Button } from ".";

const BASE_URL = process.env.BASE_PATH || "/images/";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center" id="dashboard">
      <div className="grid grid-cols-4 md:grid-cols-1 gap-2">
        <div className="col-span-3 md:col-span-4 pl-4">
          <Image
            src={`${BASE_URL}img_6898_vector.png`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-5/6 h-auto"
            alt="image"
          />
        </div>
        <div className="col-span-1 md:col-span-4 flex">
          <div className="flex flex-1 flex-col gap-[13px] sm:self-stretch mt-5 border-l-8">
            <div className="flex">
              <Text
                size="3xl"
                as="p"
                className="w-[75%] leading-[22px] !text-blue-400"
              >
                Transformeer jouw visie naar digitale realiteit
              </Text>
            </div>
            <div className="flex items-start gap-4 sm:flex-col">
              <Text
                size="xl"
                as="p"
                className="w-[93%] leading-[22px] !text-black-900 sm:w-full"
              >
                Samen maken we van jouw visie een online realiteit. Onze
                expertise en creativiteit creëren een sterke digitale
                aanwezigheid die indruk maakt en groeit. Laat ons jouw digitale
                succesverhaal schrijven.
              </Text>
              <div className="mt-[18px] h-px w-px border-l border-solid border-gray-700_01 sm:mt-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[62px] h-[965px] self-stretch bg-[url(/images/img_group_11.png)] bg-cover bg-no-repeat">
        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[965px] w-[40px] bg-white-A700" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center md:relative md:flex-col">
          <div className="relative z-[1] mt-[209px] flex-1 py-[25px] pl-[25px] md:self-stretch md:p-5 sm:py-5 sm:pl-5">
            <p className="text-[120px] font-normal md:text-5xl mt-11 text-center leading-[140px] tracking-[-0.30px] !text-blue-50">
              Grandsolution gives your business the digital boost it needs.
            </p>
          </div>
          <div className="relative ml-[-40px] h-[965px] w-[40px] bg-white-A700 md:ml-0 md:p-5" />
        </div>
        <div className="absolute bottom-[22%] left-0 right-0 m-auto flex w-[12%] justify-center p-2  ">
          <motion.div
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className={`flex w-full items-center justify-start hover:justify-between gap-3.5 rounded-[25px] border border-solid border-blue-400 bg-blue-400_01 p-3.5`}
          >
            <Text
              size="s"
              as="p"
              className="text-center capitalize tracking-[-0.28px] !text-white-A700"
            >
              Onze services
            </Text>
            <Img
              src="img_close.svg"
              width={22}
              height={20}
              alt="close_one"
              className="h-[20px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
