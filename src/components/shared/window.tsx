import React from "react";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { Carousel } from "antd";

interface Cat {
  image: string;
  title: string;
  description: string;
}
interface CatSel {
  title: string;
  key: string;
  image: string;
}

interface WindowProps {
  cat: Cat;
  catSel?: CatSel[];
}
export default function Window({ cat, catSel }: WindowProps) {
  const category = cat;
  const categorySelection = catSel; // Ensure it's an array

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
  };

  return (
    <>
      <div
        className="h-[500px]  w-full bg-cover bg-no-repeat bg-center overflow-visible"
        style={{ backgroundImage: `url('${category.image}')` }}
      >
        <div className="h-full w-full bg-[#00000071] flex flex-col justify-center items-center relative">
          <Title className="!text-5xl !text-background">{category.title}</Title>
          <p className="text-background text-lg">{category.description}</p>
          <div className="h-1/3" />
          {categorySelection ? (
            <div className="absolute !bg-[#7849D4] w-[90%] h-[200px] md:h-[300px -bottom-[100px] md:-bottom-[150px] p-2 md:p-6 rounded-lg">
              <div className="flex">
                <Title
                  level={2}
                  className="!text-lg  md:!text-3xl !text-background text-center md:text-start"
                >
                  Source by category
                </Title>
              </div>
              <div className="h-auto w-full">
                <Carousel
                  afterChange={onChange}
                  className="w-full h-full overflow-visible"
                  dotPosition="bottom"
                  dots={false}
                  arrows
                  infinite
                  draggable
                  autoplay
                >
                  <div>
                    <div className="flex flex-row justify-around gap-3 p-2">
                      {categorySelection.slice(0, 6).map((item) => (
                        <Link
                          href="/service/categories/sub-categories"
                          key={item.title}
                        >
                          <div className="w-[94px] h-[94px] md:w-[200px] md:h-[200px] hover:shadow-lg rounded-lg transition-shadow duration-500 cursor-pointer">
                            <div className="w-full h-full flex flex-col justify-start items-center">
                              <div
                                className=" h-[48px] w-[48px] md:h-[100px] md:w-[100px] bg-cover bg-center rounded-full"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              ></div>
                              <p className="text-center text-background font-semibold text-sm md:text-2xl break-words max-w-full pt-4">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row justify-around gap-3">
                    <div className="flex flex-row justify-around gap-3 p-2">
                      {categorySelection.slice(0, 6).map((item) => (
                        <Link
                          href="/service/categories/sub-categories"
                          key={item.title}
                        >
                          <div className="w-[94px] h-[94px] md:w-[200px] md:h-[200px] hover:shadow-lg rounded-lg transition-shadow duration-500 cursor-pointer">
                            <div className="w-full h-full flex flex-col justify-start items-center">
                              <div
                                className=" h-[48px] w-[48px] md:h-[100px] md:w-[100px] bg-cover bg-center rounded-full"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              ></div>
                              <p className="text-center !text-background font-semibold text-sm md:text-2xl break-words max-w-full pt-4">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row justify-around gap-3">
                    <div className="flex flex-row justify-around gap-3 p-2">
                      {categorySelection.slice(0, 6).map((item) => (
                        <Link
                          href="/service/categories/sub-categories"
                          key={item.title}
                        >
                          <div className="w-[94px] h-[94px] md:w-[200px] md:h-[200px] hover:shadow-lg rounded-lg transition-shadow duration-500 cursor-pointer">
                            <div className="w-full h-full flex flex-col justify-start items-center">
                              <div
                                className=" h-[48px] w-[48px] md:h-[100px] md:w-[100px] bg-cover bg-center rounded-full"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              ></div>
                              <p className="text-center !text-background font-semibold text-sm md:text-2xl break-words max-w-full pt-4">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row justify-around gap-3">
                    <div className="flex flex-row justify-around gap-3 p-2">
                      {categorySelection.slice(0, 6).map((item) => (
                        <Link
                          href="/service/categories/sub-categories"
                          key={item.title}
                        >
                          <div className="w-[94px] h-[94px] md:w-[200px] md:h-[200px] hover:shadow-lg rounded-lg transition-shadow duration-500 cursor-pointer">
                            <div className="w-full h-full flex flex-col justify-start items-center">
                              <div
                                className=" h-[48px] w-[48px] md:h-[100px] md:w-[100px] bg-cover bg-center rounded-full"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              ></div>
                              <p className="text-center !text-background font-semibold text-sm md:text-2xl break-words max-w-full pt-4">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`h-[${
          categorySelection ? "200" : "100"
        }px] w-full rounded-xl`}
      ></div>
    </>
  );
}
