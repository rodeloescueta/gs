"use client";
import { Text, Heading, Img, Button } from "../components";
import Link from "next/link";
import { links } from "../lib/data";

export default function Header() {
  return (
    <header className="bg-gray-900_01">
      <div className="flex items-center justify-between gap-5 border border-solid border-blue-100_7f bg-white-A700 p-[13px] md:flex-col">
        <Img
          src="img_7097_rectangle.png"
          width={232}
          height={30}
          alt="image"
          className="h-[30px] w-[13%] object-cover md:w-full"
        />
        <div className="flex self-end p-[29px] sm:p-5">
          <ul className="flex self-start">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <div className="flex self-end p-[11px]">
                    <Link href={link.hash} className="mb-[21px] mt-[18px]">
                      <Text
                        as="p"
                        className="text-center capitalize tracking-[-0.30px]"
                      >
                        {link.name}
                      </Text>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mr-[82px] flex w-[16%] justify-between gap-5 md:mr-0 md:w-full">
          <div className="flex-1 py-[5px]">
            <Button
              color="blue_400"
              size="md"
              className="w-full rounded-[25px] font-medium capitalize tracking-[-0.28px] sm:px-5"
            >
              Seo check
            </Button>
          </div>
          <div className="flex py-[5px]">
            <ul className="flex">
              <li>
                <Link
                  href="#"
                  className="flex h-[50px] items-center justify-center rounded-[25px] border border-solid border-blue-400 bg-blue-400_01 sm:px-5"
                >
                  <Text
                    size="s"
                    as="p"
                    className="px-8 py-4 capitalize tracking-[-0.28px] !text-white-A700"
                  >
                    Contact
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}