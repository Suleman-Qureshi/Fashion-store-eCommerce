"use client";
import React from "react";
import Header from "../Components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaHeadphones } from "react-icons/fa6";
import { Autoplay, Navigation } from "swiper/modules";
import { CiFaceSmile } from "react-icons/ci";
import { BsJournalRichtext } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Footer from "../Components/Footer";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import AnimationCounter from "../Components/AnimationCounter";
function Page() {
  const card1 = [
    {
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/about/about-portrait-16.webp",
      heading: "Ut enim ad minima veniam",
      para: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      btnHref: "/",
    },
    {
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/about/about-portrait-4.webp",
      heading: "Quis autem vel eum iure",
      para: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      btnHref: "/",
    },
    {
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/about/about-portrait-1.webp",
      heading: "Nam libero tempore",
      para: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
      btnHref: "/",
    },
  ];
  const card2 = [
    {
      icon: <CiFaceSmile className="tertiary-color text-5xl" />,
      number: 232,
      title: "Happy Clients",
      text: "consequuntur quae",
    },
    {
      icon: <BsJournalRichtext className="tertiary-color text-5xl" />,
      number: 521,
      title: "Projects ",
      text: "adipisci atque cum quia aut",
    },
    {
      icon: <FaHeadphones className="tertiary-color text-5xl" />,
      number: 1453,
      title: "Hours Of Support",
      text: "aut commodi quaerat",
    },
    {
      icon: <FiUsers className="tertiary-color text-5xl" />,
      number: 32,
      title: "Hard Workers",
      text: "rerum asperiores dolor",
    },
  ];
  const sliderContent = [
    {
      dp: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/person/person-m-9.webp",
      title: "Freelancer",
      heading: "Loabore nostrum eos impedit",
      name: "Matt Brandon",
      para1:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      para2:
        "Itaque ut explicabo vero occaecati est quam rerum sed. Numquam tempora aut aut quaerat quia illum. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga. Hic nostrum suscipit corrupti nam expedita adipisci aut optio.",
    },
    {
      dp: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/person/person-f-10.webp",
      title: "Store Owner",
      heading: "Impedit dolor facilis nulla",
      name: "Jena karlis",
      para1:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      para2:
        "Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto laborum.",
    },
    {
      dp: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/person/person-m-7.webp",
      title: "Client",
      heading: "Sed ut perspiciatis unde omnis",
      name: "Saul Goodmen",
      para1:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      para2:
        "Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur. Enim ut eos quo.",
    },
    {
      dp: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/person/person-f-8.webp",
      title: "Designer",
      heading: "Nemo enim ipsam voluptatem",
      name: "Sara wilsson",
      para1:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      para2:
        "Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas voluptatem iure dolorum rerum. Repudiandae doloribus ut repellat harum vero aut. Modi aut velit aperiam aspernatur odit ut vitae.",
    },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="w-screen flex justify-center items-center">
          <div className="w-[67rem] flex items-center py-10 gap-8">
            <div className="w-full flex flex-col gap-8">
              <h1 className="text-3xl font-semibold tertiary-color ">About</h1>
              <div className="flex flex-col gap-4 border-r-2 border-[#EB5B00]">
                <span className="quaternary-color font-semibold text-lg">
                  ABOUT OUR COMPANY
                </span>
                <span className="text-4xl font-semibold tertiary-color">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem.
                </span>
              </div>
            </div>
            <div className="w-full items-center text-lg font-medium secondary-color">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </div>
          </div>
        </section>
        <section className="w-screen flex flex-col justify-center items-center py-10">
          <div className="w-[67rem] flex gap-1 items-center justify-between flex-wrap">
            {card1.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 w-[21rem] group">
                <div className="w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.imgSrc}
                    alt=""
                    width={10000}
                    height={10000}
                    className="h-full w-auto group-hover:scale-105 duration-200"
                  />
                </div>
                <div className="flex flex-col gap-4 p-2">
                  <h5 className="text-xl font-semibold quaternary-color">
                    {item.heading}
                  </h5>
                  <p className=" tertiary-color font-medium">{item.para}</p>
                  <Link
                    href={item.btnHref}
                    className="flex items-center gap-2 hover:gap-4 duration-200 hover:opacity-75"
                  >
                    <span className="text-lg font-medium quaternary-color">
                      Explore More
                    </span>
                    <FaArrowRightLong className=" quaternary-color" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-screen flex justify-center bg-[#DDEB9D]/50 py-10">
          <div className="w-[67rem] flex flex-wrap gap-8 ">
            {card2.map((item, index) => (
              <div key={index} className="flex gap-2 items-start w-60">
                {item.icon}
                <div className="flex flex-col gap-2 secondary-color">
                  {/* <div className="text-4xl font-bold tertiary-color">
                    {item.number}
                  </div> */}
                  <AnimationCounter className='text-4xl font-bold tertiary-color' targetNumber={item.number} />
                  <div>
                    <b>{item.title}</b>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="w-screen flex justify-center py-10">
          <div className="w-[67rem] ">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              // onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 3000 }}
              className="mySwiper h-full"
              speed={1000}
              navigation={{
                clickable: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            >
              {sliderContent.map((item, index) => (
                <SwiperSlide key={index} className=" rounded-lg h-full p-4">
                  <div className="w-full h-full flex gap-4">
                    <div className="flex flex-col gap-8 w-3/5">
                      <h5 className="text-3xl font-medium quaternary-color">
                        {item.heading}
                      </h5>
                      <p className="tertiary-color italic">{item.para1}</p>
                      <p className="tertiary-color italic">{item.para2}</p>
                      <div className="flex gap-2 items-center">
                        <div className="rounded-full w-16 h-16 overflow-hidden">
                          <Image
                            src={item.dp}
                            alt={`${item.name}'s dp`}
                            width={10000}
                            height={10000}
                            className="w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="quaternary-color text-xl font-medium">
                            {item.name}
                          </div>
                          <p className="tertiary-color">{item.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-96 h-full flex justify-center overflow-hidden rounded-lg ">
                      <Image
                        src={item.dp}
                        alt={`${item.name}'s dp`}
                        width={10000}
                        height={10000}
                        className="w-full scale-105"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-8 w-full justify-center z-10 text-4xl quaternary-color">
              <button className="custom-prev cursor-pointer bg-white rounded-full p-2 shadow-xl">
                <TbArrowBadgeLeftFilled />
              </button>
              <button className="custom-next cursor-pointer bg-white rounded-full p-2 shadow-xl">
                <TbArrowBadgeRightFilled />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
