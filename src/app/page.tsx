"use client";
import React from "react";
import { Text, Heading, Img, Button } from "../components";
import Link from "next/link";

const data = [
  { text: "Waarom kiezen voor Grandsolution?" },
  { text: " Welke diensten bieden jullie aan?" },
  { text: "Hebben jullie voorbeelden van projecten?" },
  { text: "Waar vraag ik een vrijblijvende offerte aan?" },
  { text: "Wat zijn jullie openingstijden?" },
];

export default function FramePage() {
  return (
    <>
      {/* main content section */}
      <div className="flex h-[5869px] w-full flex-col gap-[130px] bg-[url(/images/img_6721_frame.png)] bg-cover bg-no-repeat pb-5 md:h-auto md:gap-[97px] sm:gap-[65px]">
        {/* header navigation section */}

        {/* hero section */}
        <div className="flex flex-col items-center">
          <div className="mx-auto flex w-full max-w-[1827px] items-center justify-between gap-5 md:flex-col md:p-5">
            <Img
              src="img_6898_vector.png"
              width={1217}
              height={308}
              alt="6898vector_one"
              className="h-[308px] w-[67%] object-cover md:w-full"
            />
            <div className="mb-9 flex w-[24%] items-center justify-center gap-7 self-end md:w-full sm:flex-col">
              <div className="h-full w-[2px] bg-black-900 sm:h-[2px] sm:w-full" />
              <div className="flex flex-1 flex-col gap-[13px] sm:self-stretch">
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
                    aanwezigheid die indruk maakt en groeit. Laat ons jouw
                    digitale succesverhaal schrijven.
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
                <Text
                  size="13xl"
                  as="p"
                  className="mb-[46px] mt-11 text-center leading-[140px] tracking-[-0.30px] !text-blue-50"
                >
                  Grandsolution gives your business the digital boost it needs.
                </Text>
              </div>
              <div className="relative ml-[-40px] h-[965px] w-[40px] bg-white-A700 md:ml-0 md:p-5" />
            </div>
            <div className="absolute bottom-[22%] left-0 right-0 m-auto flex w-[12%] justify-center p-2">
              <div className="flex w-full items-center justify-end gap-3.5 rounded-[25px] border border-solid border-blue-400 bg-blue-400_01 p-3.5">
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
              </div>
            </div>
          </div>
          <Text
            size="12xl"
            as="p"
            className="mt-[116px] w-[61%] leading-[73px] tracking-[-3.60px] !text-gray-900 md:w-full md:p-5"
          >
            Wij trekken de aandacht, creëren verandering en vergroten impact.
            Wij dragen bij aan de groei van bedrijven in de digitale wereld.
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
                          gevarieerde portfolio met gerealiseerde websites en
                          laat je inspireren door het vakmanschap achter elk
                          project.{" "}
                        </Text>
                      </div>
                      <div className="flex">
                        <Text
                          size="6xl"
                          as="p"
                          className="tracking-[-1.12px] !text-blue-400"
                        >
                          Portfolio
                        </Text>
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
                      className="h-[95px] w-[94px] rounded-[47px] object-cover sm:w-full"
                    />
                    <div className="flex w-[71%] flex-col gap-3.5 sm:w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="leading-[22px] tracking-[-0.48px] !text-gray-900"
                      >
                        Van het ontdekken van digitale kansen tot het ontwerpen
                        van jouw website, webshop of app, en het stimuleren van
                        je online aanwezigheid. Als full-service digital agency
                        begeleiden we je naar digitale groei.
                      </Text>
                      <div className="flex self-start">
                        <Text
                          size="6xl"
                          as="p"
                          className="tracking-[-1.12px] !text-blue-400"
                        >
                          Over Grandsolution
                        </Text>
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
                  <Text
                    size="8xl"
                    as="p"
                    className="w-[61%] leading-[42px] tracking-[-1.56px] !text-white-A700"
                  >
                    <>
                      Ontdek <br />
                      onze blogs
                    </>
                  </Text>
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
          <div className="mx-auto mt-2.5 flex w-full max-w-[1641px] items-start gap-4 self-end md:flex-col md:p-5">
            {/* features section */}
            <div className="flex flex-1 flex-col gap-[70px] md:gap-[52px] md:self-stretch sm:gap-[35px]">
              <div>
                <div className="relative h-[620px] py-[5px]">
                  <div className="absolute left-0 right-0 top-[5.00px] m-auto flex w-full items-center md:relative md:flex-col">
                    <div className="relative h-[443px] w-[25%] self-end md:w-full">
                      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[90%] flex-col items-center gap-[29px] rounded-[12px] border border-solid border-blue_gray-100_01 bg-white-A700">
                        <Img
                          src="img_6783_rectangle.png"
                          width={356}
                          height={222}
                          alt="image_four"
                          className="h-[222px] w-full rounded-tl-[11px] rounded-tr-[11px] object-cover md:h-auto"
                        />
                        <div className="mb-[156px] flex">
                          <div className="flex pt-3">
                            <Text
                              size="5xl"
                              as="p"
                              className="tracking-[-1.20px] !text-gray-900_03"
                            >
                              Maatwerk websites
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[18%] right-[0.00px] m-auto flex w-[89%] pt-4">
                        <Text
                          as="p"
                          className="w-[81%] leading-[21px] tracking-[-0.30px] !text-blue_gray-400"
                        >
                          Behaal online succes met een website die speciaal voor
                          jouw is ontworpen.
                        </Text>
                      </div>
                    </div>
                    <div className="relative z-[2] ml-[-396px] flex flex-1 flex-col items-center md:ml-0 md:self-stretch">
                      <div className="relative z-[3] h-[74px] self-stretch border-t border-solid border-gray-900_3f" />
                      <div className="relative mt-[-21px] h-[443px] w-[34%]">
                        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[90%] flex-col items-center gap-[29px] rounded-[12px] border border-solid border-blue_gray-100_01 bg-white-A700">
                          <Img
                            src="img_6791_rectangle.png"
                            width={356}
                            height={222}
                            alt="image_five"
                            className="h-[222px] w-full rounded-tl-[11px] rounded-tr-[11px] object-cover md:h-auto"
                          />
                          <div className="mb-[156px] flex">
                            <div className="flex pt-3.5">
                              <Text
                                size="5xl"
                                as="p"
                                className="tracking-[-0.30px] !text-gray-900_03"
                              >
                                Online marketing
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[14%] right-[0.00px] m-auto flex w-[89%] pt-4">
                          <div className="flex w-[81%] justify-center pr-[18px] md:w-full">
                            <Text
                              as="p"
                              className="leading-[21px] tracking-[-0.30px] !text-blue_gray-400"
                            >
                              Vergroot je zichtbaarheid, stimuleer je groei en
                              bereik meer klanten met online marketing.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-[8%] top-[10%] m-auto flex w-[26%] flex-col items-end gap-[29px] rounded-[12px] border border-solid border-blue_gray-100_01 bg-white-A700">
                    <Img
                      src="img_6799_rectangle.png"
                      width={356}
                      height={222}
                      alt="image_six"
                      className="h-[222px] w-full rounded-tl-[11px] rounded-tr-[11px] object-cover md:h-auto"
                    />
                    <div className="mb-[79px] flex w-[88%] flex-col gap-[18px] md:w-full md:p-5">
                      <div className="flex">
                        <div className="flex pt-3">
                          <Text
                            size="5xl"
                            as="p"
                            className="tracking-[-0.30px] !text-gray-900_03"
                          >
                            E-commerce
                          </Text>
                        </div>
                      </div>
                      <div className="pr-4 pt-4">
                        <div className="pr-[18px]">
                          <Text
                            as="p"
                            className="leading-[21px] tracking-[-0.30px] !text-blue_gray-400"
                          >
                            Verbeter je online verkoopresultaten met een op maat
                            gemaakte webshop.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center rounded-[24px] bg-gray-900_03 px-[55px] pt-[55px] md:px-5 md:pt-5">
                  <div className="flex w-[95%] flex-col gap-[136px] py-16 md:w-full md:gap-[102px] md:py-5 sm:gap-[68px]">
                    <div className="flex items-start gap-[15px] md:flex-col">
                      <Text
                        size="11xl"
                        as="p"
                        className="tracking-[-2.56px] !text-white-A700"
                      >
                        Inspirerend Succes
                      </Text>
                      <div className="mb-4 flex p-4">
                        <Text
                          size="9xl"
                          as="p"
                          className="mt-[5px] tracking-[-1.60px] !text-white-A700"
                        >
                          Innovatief, dynamisch en helder
                        </Text>
                      </div>
                    </div>
                    <div className="mb-11 pl-3">
                      <div className="relative h-[242px]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center gap-10 border-t border-solid border-blue_gray-800 pt-[37px] md:relative md:flex-col sm:pt-5">
                          <div className="flex w-[33%] flex-col gap-[52px] pb-5 md:w-full sm:gap-[26px]">
                            <div className="flex pr-2">
                              <Heading
                                size="lg"
                                as="h1"
                                className="tracking-[-0.63px] !text-white-A700"
                              >
                                Innovatief
                              </Heading>
                            </div>
                            <div className="pb-[21px] sm:pb-5">
                              <Text
                                as="p"
                                className="leading-[21px] tracking-[-0.30px]"
                              >
                                Innovatief denken zit in ons DNA en drijft ons
                                agency aan. We brengen voortdurend nieuwe ideeën
                                tot leven, waarbij we de grenzen van
                                creativiteit en technologie verleggen
                              </Text>
                            </div>
                          </div>
                          <div className="flex w-[33%] flex-col justify-center gap-[52px] pb-[17px] md:w-full sm:gap-[26px]">
                            <div className="flex">
                              <Heading
                                size="lg"
                                as="h2"
                                className="tracking-[-0.63px] !text-white-A700"
                              >
                                Dynamisch
                              </Heading>
                            </div>
                            <div className="mb-1 pr-[17px]">
                              <Text
                                as="p"
                                className="leading-[21px] tracking-[-0.30px]"
                              >
                                In een wereld die voortdurend verandert, blijft
                                ons agency niet achter. We zijn niet alleen
                                voorbereid op verandering, we verwelkomen het.
                                Onze aanpak is altijd fris, vooruitstrevend en
                                afgestemd op de toekomst.
                              </Text>
                            </div>
                          </div>
                          <div className="flex self-start">
                            <Heading
                              size="lg"
                              as="h3"
                              className="tracking-[-0.63px] !text-white-A700"
                            >
                              Helder{" "}
                            </Heading>
                          </div>
                        </div>
                        <div className="absolute bottom-[0.00px] right-[-0.54px] m-auto flex w-[32%] justify-center pr-[18px]">
                          <Text
                            as="p"
                            className="leading-[21px] tracking-[-0.30px]"
                          >
                            De kern van communicatie: zorg dat je boodschap
                            duidelijk is. Elk woord, ontwerp of stukje code moet
                            makkelijk te begrijpen zijn. Dingen helder maken is
                            echt een kunst en wij zijn er dol op. Of het nu gaat
                            om een verhaal over een merk of het ontwerp van een
                            website.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* about section */}
              <div className="flex flex-col gap-[59px] pt-[61px] md:pt-5 sm:gap-[29px]">
                {/* faq section */}
                <div className="flex flex-col items-start gap-9">
                  <div className="flex">
                    <Text
                      size="10xl"
                      as="p"
                      className="tracking-[-2.16px] !text-gray-900_03"
                    >
                      <span className="text-gray-900_03">FAQ</span>
                      <span className="text-blue-400">.</span>
                    </Text>
                  </div>
                  <div className="flex w-[61%] md:w-full md:flex-col">
                    <Button
                      color="blue_400"
                      variant="fill"
                      shape="round"
                      className="w-full flex-1 border border-solid border-blue-400 font-medium tracking-[-0.28px] md:self-stretch"
                    >
                      Algemene vragen
                    </Button>
                    <Button
                      shape="round"
                      className="ml-[13px] w-full flex-1 font-medium tracking-[-0.28px] md:ml-0 md:self-stretch"
                    >
                      Maatwerk websites{" "}
                    </Button>
                    <Button
                      shape="round"
                      className="ml-2 min-w-[102px] font-medium tracking-[-0.28px] md:ml-0 sm:px-5"
                    >
                      Branding
                    </Button>
                    <Button
                      shape="round"
                      className="ml-2 min-w-[108px] font-medium tracking-[-0.28px] md:ml-0"
                    >
                      Marketing
                    </Button>
                    <Button
                      shape="round"
                      className="ml-3 min-w-[128px] font-medium tracking-[-0.28px] md:ml-0"
                    >
                      Development
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5 self-stretch border-t border-solid border-blue_gray-100 md:flex-col">
                    <div className="ml-[19px] flex w-[37%] justify-center self-end rounded-[24px] md:ml-0 md:w-full">
                      <Img
                        src="img_6873_frame.png"
                        width={418}
                        height={395}
                        alt="image_seven"
                        className="h-[395px] w-full rounded-[24px] object-cover md:h-auto"
                      />
                    </div>
                    <div className="flex w-[49%] justify-center pt-5 md:w-full">
                      <div className="flex w-full flex-col gap-5">
                        {data.map((d, index) => (
                          <div
                            key={"grandsolution" + index}
                            className="flex flex-1 border-b border-solid border-gray-800 py-[9px]"
                          >
                            <div className="mb-[7px] flex w-full items-start justify-between gap-5 sm:flex-col">
                              <Text
                                size="4xl"
                                as="p"
                                className="mt-[5px] tracking-[-0.84px] !text-gray-900"
                              >
                                {d.text}
                              </Text>
                              <Img
                                src="img_6841_frame.svg"
                                width={38}
                                height={39}
                                alt="image"
                                className="h-[39px] w-[38px] sm:w-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 border-t border-solid border-blue_gray-100_01 pt-[38px] md:flex-col sm:pt-5">
                  <div className="flex">
                    <Text
                      size="9xl"
                      as="p"
                      className="tracking-[-1.60px] !text-gray-900"
                    >
                      <span className="text-gray-900">About</span>
                      <span className="text-blue-400">.</span>
                    </Text>
                  </div>
                  <div className="flex self-end">
                    <Text as="p" className="tracking-[-0.30px] !text-gray-900">
                      Grandsolution is een digital agency met strategen,
                      ontwerpers en ontwikkelaars. Wij combineren onze expertise
                      om verwachtingen te overtreffen en bedrijven te helpen
                      groeien.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* contact section */}
            <div className="mt-[398px] flex w-[15%] flex-col items-center md:w-full">
              <div className="relative z-[4] w-[48%] rounded-[60px] md:w-full">
                <Img
                  src="img_7105_frame.png"
                  width={120}
                  height={120}
                  alt="circleimage"
                  className="relative z-[5] h-[120px] w-[120px] rounded-[50%]"
                />
                <div className="relative mt-[-100px] h-[100px] rounded-[50px] bg-indigo-300" />
              </div>
              <div className="relative mt-[-65px] flex flex-col items-center gap-12 self-stretch rounded-[16px] bg-white-A700 px-2.5 pt-2.5 shadow-xs">
                <Img
                  src="img_close_gray_700.svg"
                  width={20}
                  height={20}
                  alt="close_three"
                  className="h-[20px] w-[20px] self-end"
                />
                <div className="flex flex-col self-stretch">
                  <div className="flex px-1.5">
                    <Heading
                      size="md"
                      as="h4"
                      className="text-center !font-roboto !text-gray-900_02"
                    >
                      Kunnen wij je ergens mee van dienst zijn?
                    </Heading>
                  </div>
                  <div className="px-[15px] pt-[15px]">
                    <Button
                      color="blue_400"
                      size="xs"
                      variant="fill"
                      className="w-full rounded-md font-roboto font-semibold sm:px-5"
                    >
                      Neem contact op
                    </Button>
                  </div>
                  <div className="flex self-start pt-2.5">
                    <div className="flex flex-wrap items-center px-[27px] sm:px-5">
                      <Text
                        size="xs"
                        as="p"
                        className="text-center !font-opensans !font-normal !text-gray-900_02"
                      >
                        Liever bellen?{" "}
                      </Text>
                      <Heading
                        size="xs"
                        as="h5"
                        className="border-b border-solid border-blue_gray-900 p-px text-center !font-opensans !text-blue_gray-900"
                      >
                        010-5223427
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <footer className="w-[96%] md:w-full md:p-5">
          <div className="relative h-[546px] pr-[70px] md:pr-5">
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center rounded-[18px] bg-gray-900_03 px-14 py-[83px] md:p-5">
              <div className="mt-[77px] flex w-[71%] flex-col gap-[114px] md:w-full md:gap-[85px] sm:gap-[57px]">
                <div className="flex flex-col items-start px-[50px] md:px-5">
                  <div className="flex w-[37%] flex-col items-start gap-[23px] md:w-full">
                    <div className="flex py-[5px]">
                      <Text
                        size="7xl"
                        as="p"
                        className="mt-1.5 tracking-[-1.60px] !text-white-A700"
                      >
                        <span className="text-white-A700">
                          Let’s work&nbsp;
                        </span>
                        <span className="text-blue-400">together.</span>
                      </Text>
                    </div>
                    <div className="flex w-[85%] gap-[7px] md:w-full">
                      <div className="flex w-full justify-center rounded-[19px] border border-solid border-gray-900 bg-white-A700 p-[5px]">
                        <Text
                          size="s"
                          as="p"
                          className="mt-[9px] text-right tracking-[-0.28px] !text-black-900"
                        >
                          Contact
                        </Text>
                      </div>
                      <div className="flex w-full items-end justify-center rounded-[19px] border border-solid border-white-A700">
                        <Img
                          src="img_arrow_left.svg"
                          width={20}
                          height={20}
                          alt="arrowleft_one"
                          className="mt-2.5 h-[20px] w-[20px]"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="relative ml-[-8px] text-right tracking-[-0.28px] !text-blue-50"
                        >
                          Stuur email
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-end border-t border-solid border-gray-200_01 py-[15px]">
                  <Text
                    size="xs"
                    as="p"
                    className="mt-[17px] text-center !font-normal tracking-[-0.36px] !text-white-A700"
                  >
                    <span className="font-medium text-white-A700">
                      © 2023&nbsp;
                    </span>
                    <span className="font-medium text-white-A700">
                      Copyright Grandsolution. All rights reserved.
                    </span>
                  </Text>
                  <Text
                    size="xs"
                    as="p"
                    className="ml-[7px] text-center tracking-[-0.36px] !text-white-A700"
                  >
                    Algemene voorwaarden
                  </Text>
                  <Text
                    size="xs"
                    as="p"
                    className="ml-5 text-center tracking-[-0.36px] !text-white-A700"
                  >
                    Privacy verklaring
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute right-[22%] top-[31%] m-auto flex w-[29%] items-center justify-between gap-5">
              <div className="flex flex-col items-start gap-[17px]">
                <Heading as="p" className="tracking-[-0.30px]">
                  Services
                </Heading>
                <Text as="p" className="tracking-[-0.30px]">
                  Website
                </Text>
                <div className="flex flex-col items-start gap-[13px]">
                  <Text as="p" className="tracking-[-0.30px]">
                    E-commerce
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Online marketing
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Branding
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Video & Animatie
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[17px]">
                <Heading as="p" className="tracking-[-0.30px]">
                  Contact
                </Heading>
                <div className="flex flex-col items-start gap-[13px]">
                  <Text as="p" className="tracking-[-0.30px]">
                    Over ons
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Contact
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Offerte
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Portofolio
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Vacatures
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[17px]">
                <Heading as="p" className="tracking-[-0.30px]">
                  Socials
                </Heading>
                <div className="flex flex-col items-start gap-[13px]">
                  <Text as="p" className="tracking-[-0.30px]">
                    Linkdln
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Instagram
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Tiktok
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Facebook
                  </Text>
                  <Text as="p" className="tracking-[-0.30px]">
                    Youtube
                  </Text>
                </div>
              </div>
            </div>
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-col items-center justify-end gap-11 rounded-[18px] bg-gray-900_03 py-[79px] md:p-5 md:py-5">
              <div className="mt-[87px] w-full">
                <div className="flex items-center md:flex-col">
                  <div className="mt-1.5 flex w-[54%] flex-col gap-7 self-start md:w-full">
                    <Text
                      size="7xl"
                      as="p"
                      className="tracking-[-1.60px] !text-white-A700"
                    >
                      <span className="text-white-A700">Let’s work&nbsp;</span>
                      <span className="text-blue-400">together.</span>
                    </Text>
                    <div className="flex gap-[7px]">
                      <Button
                        color="white_A700"
                        variant="fill"
                        shape="round"
                        className="w-full border border-solid border-gray-900 font-medium tracking-[-0.28px] sm:px-5"
                      >
                        Contact
                      </Button>
                      <div className="flex w-full items-end justify-center rounded-[19px] border border-solid border-white-A700">
                        <Img
                          src="img_arrow_left.svg"
                          width={20}
                          height={20}
                          alt="arrowleft_three"
                          className="mt-2.5 h-[20px] w-[20px]"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="relative ml-[-14px] text-right tracking-[-0.28px] !text-blue-50"
                        >
                          Stuur e-mail
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[261px] flex flex-col items-start gap-[13px] md:ml-0">
                    <div className="flex">
                      <Heading as="p" className="tracking-[-0.30px]">
                        Services
                      </Heading>
                    </div>
                    <Text as="p" className="tracking-[-0.30px]">
                      Maatwerk websites
                    </Text>
                    <div className="flex">
                      <Text as="p" className="tracking-[-0.30px]">
                        E-commerce
                      </Text>
                    </div>
                    <div className="flex">
                      <Text as="p" className="self-end tracking-[-0.30px]">
                        Online marketing
                      </Text>
                    </div>
                    <div className="flex">
                      <Text as="p" className="tracking-[-0.30px]">
                        Branding
                      </Text>
                    </div>
                    <div className="flex">
                      <Text as="p" className="tracking-[-0.30px]">
                        Video & Animatie
                      </Text>
                    </div>
                  </div>
                  <div className="ml-[109px] flex flex-col items-start gap-[15px] md:ml-0">
                    <div className="flex">
                      <Heading as="p" className="tracking-[-0.30px]">
                        Contact
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start gap-[11px]">
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Over ons
                        </Text>
                      </div>
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Contact
                        </Text>
                      </div>
                      <div className="flex py-px">
                        <Text as="p" className="tracking-[-0.30px]">
                          Offerte
                        </Text>
                      </div>
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Portfolio
                        </Text>
                      </div>
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Vacatures
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[126px] flex flex-col items-start gap-[15px] md:ml-0">
                    <div className="flex">
                      <Heading as="p" className="tracking-[-0.30px]">
                        Socials
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start gap-[11px]">
                      <div className="flex py-px">
                        <Text as="p" className="tracking-[-0.30px]">
                          Linkdln
                        </Text>
                      </div>
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Instagram
                        </Text>
                      </div>
                      <div className="flex py-px">
                        <Text as="p" className="tracking-[-0.30px]">
                          Tiktok
                        </Text>
                      </div>
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Facebook
                        </Text>
                      </div>
                      <div className="flex">
                        <Text as="p" className="tracking-[-0.30px]">
                          Youtube
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[64px] w-[66%] md:h-auto">
                <div className="flex w-full flex-wrap items-end border-t border-solid border-gray-200_01 py-[15px]">
                  <Text
                    size="xs"
                    as="p"
                    className="mt-[17px] text-center tracking-[-0.36px] !text-blue-50"
                  >
                    © 2023 Copyright Grandsolution. All rights reserved.
                  </Text>
                  <Text
                    size="xs"
                    as="p"
                    className="ml-[7px] text-center tracking-[-0.36px] !text-blue-50"
                  >
                    Algemene voorwaarden
                  </Text>
                  <Text
                    size="xs"
                    as="p"
                    className="ml-[11px] text-center tracking-[-0.36px] !text-blue-50"
                  >
                    Privacy verklaring
                  </Text>
                </div>
                <div className="absolute bottom-[16.07px] right-[1.58px] m-auto flex w-[20%] flex-wrap items-center justify-between gap-5">
                  <Text
                    size="xs"
                    as="p"
                    className="text-center tracking-[-0.36px] !text-blue-50"
                  >
                    KVK: 89518160
                  </Text>
                  <Text
                    size="xs"
                    as="p"
                    className="text-center tracking-[-0.36px] !text-blue-50"
                  >
                    BTW: 865007238B01
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
