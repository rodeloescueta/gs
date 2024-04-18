"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { Text, Heading, Img, Button } from ".";
const BASE_URL = process.env.BASE_PATH || "/images/";

export default function TextParallaxContentExample() {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={`${BASE_URL}img_group_11.png`}
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      {children}
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <>
      <motion.div
        style={{
          y,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center md:relative md:flex-col">
          <div className="relative z-[1] mt-[209px] flex-1 py-[25px] pl-[25px] md:self-stretch md:p-5 sm:py-5 sm:pl-5">
            <p className="text-[120px] font-normal md:text-5xl mt-11 text-center leading-[140px] tracking-[-0.30px] !text-blue-50">
              Grandsolution gives your business the digital boost it needs.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="absolute left-0 right-0 m-auto flex w-[12%] justify-center p-2  ">
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
          <FaArrowRight color="white" />
        </motion.div>
      </div>
    </>
  );
};

const ExampleContent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start start"],
  });
  return (
    <div
      className="grid md:grid-cols-1 gap-8 px-4 pb-8 pt-12 grid-cols-12"
      ref={targetRef}
    >
      <motion.div
        style={{
          scaleX: scrollYProgress,
          scaleY: scrollYProgress,
          originX: 0,
          originY: 1,
        }}
        className="md:col-span-1 font-bold col-span-8"
      >
        <Image
          src={`${BASE_URL}img_6898_vector.png`}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt="image"
        />
      </motion.div>
      <div className="md:col-span-1 col-span-4 flex items-end ">
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
              Samen maken we van jouw visie een online realiteit. Onze expertise
              en creativiteit creëren een sterke digitale aanwezigheid die
              indruk maakt en groeit. Laat ons jouw digitale succesverhaal
              schrijven.
            </Text>
            <div className="mt-[18px] h-px w-px border-l border-solid border-gray-700_01 sm:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
