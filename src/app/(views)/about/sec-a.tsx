import React from "react";
import { Button } from "antd";
import Title from "antd/es/typography/Title";

export default function SectionA() {
  return (
    <section className="py-20 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          className="bg-purple-300 rounded-2xl bg-cover h-[50dvh] md:h-auto" // Added height for smaller screens
          style={{ backgroundImage: `url('/images/about/about-a.png')` }}
        ></div>
        <div className="grid grid-rows-12 gap-8 rounded-2xl">
          <div
            className="row-span-9 bg-yellow-300 rounded-2xl bg-cover h-[50dvh] md:h-auto" // Added height for smaller screens
            style={{ backgroundImage: `url('/images/about/about-b.png')` }}
          ></div>
          <div className="row-span-3 bg-[#6F5B36] rounded-2xl text-center flex flex-col justify-center items-center">
            <Title level={2} className="!m-0 !text-background">
              25+
            </Title>
            <Title level={4} className="!m-0 !text-background !font-normal">
              Years of experience
            </Title>
          </div>
        </div>
      </div>
      <div className="space-y-8 flex flex-col justify-center items-start bg-[#F7F3EB] p-4 md:p-8 py-12 md:py-[100px] h-full rounded-xl">
        {" "}
        {/* Adjusted padding and py */}
        <Title level={5}>About Tawun</Title>
        <Title level={2} className="!mt-2">
          The best e-commerce platform in town since 2022
        </Title>
        <p className="text-base md:text-lg text-gray-500">
          {" "}
          {/* Adjusted text size */}
          Lorem ipsum dolor sit amet consectetur. Varius vel pharetra lobortis
          nulla. Imperdiet mattis nam velit urna auctor quis nullam pellentesque
          in. Eu condimentum pulvinar scelerisque dolor volutpat. Platea eget
          vestibulum velit in. Lorem ipsum dolor sit amet consectetur. Varius
          vel pharetra lobortis nulla. Imperdiet mattis nam velit urna auctor
          quis nullam pellentesque in. Eu condimentum pulvinar scelerisque dolor
          volutpat. Platea eget vestibulum velit in. Lorem ipsum dolor sit amet
          consectetur. Varius vel pharetra lobortis nulla. Imperdiet mattis nam
          velit urna auctor quis nullam pellentesque in. Eu condimentum pulvinar
          scelerisque dolor volutpat.
        </p>
        <Button
          className="bg-[#D5C19C] hover:!bg-[#a8987b] text-base md:text-lg py-4 md:py-6 px-8 md:px-16 w-full md:w-auto" // Adjusted padding, text size, and width
          size="large"
          href="/service/categories"
        >
          Our Categtories
        </Button>
      </div>
    </section>
  );
}
