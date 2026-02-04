"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCube, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import CountdownTimer from "../CountdownTimer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { FaArrowRightLong, FaHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
import axios from "axios";
import {useWishlist} from "../../../context/WishlistContext";
import { useMemo } from "react";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import StarRating from "../StarRating";
function HeroSection() {
  const { wishlist = [], toggleWishlist, isWished } = useWishlist() || {};
  const wishedSet = useMemo(() => {
  return new Set(wishlist.map((item) => item.itemNo));
}, [wishlist]);
  const [version, setVersion] = React.useState(0); // add this

  const [product,setProduct]=React.useState([])
  React.useEffect(() => {
  console.log("Wishlist updated!", wishlist);
}, [wishlist]);

  React.useEffect(() => {
    const fetchingProduct=async()=>{
      try{
       const response =await axios.get("/api/product");
       setProduct(response.data)
      }catch(error){
        console.error("Failed to fetching data...")
        console.log(error) 
      }
    };fetchingProduct()
  },[])
  const center = {
    lat: 33.6844, // Example: Lahore
    lng: 73.0479,
  };
  const sliderContent = [
    {
      id: 1,
      tag: "New Arrivals",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      btnText: "Shop New Arrivals",
      href: "/",
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-9.webp",
    },
    {
      id: 2,
      tag: "Limited Time",
      para: "Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
      btnText: "Shop Sale",
      href: "/",
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8.webp",
    },
    {
      id: 3,
      tag: "Features Colections",
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.",
      btnText: "Explore Collections",
      href: "/",
      card: [
        {
          id: "a",
          imgsrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp",
          title: "Modern Style",
          price: "79.99",
        },
        {
          id: "b",
          imgsrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2.webp",
          title: "Casual Collection",
          price: "64.99",
        },
        {
          id: "c",
          imgsrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-6.webp",
          title: "Premium Design",
          price: "69.99",
        },
        {
          id: "d",
          imgsrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8.webp",
          title: "Elegant Series",
          price: "74.99",
        },
      ],
    },
  ];
  const cardsContent = [
    {
      id: 1,
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp",
      title: "Etiam vel augue",
      heading: "Nullam quis ante",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.",
      cardColor: "bg-[#DDEB9D]/40",
    },
    {
      id: 2,
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2.webp",
      title: "Maecenas tempus",
      heading: "Sed fringilla mauris",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.",
      cardColor: "bg-[#EB5B00]/30",
    },
    {
      id: 3,
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-1.webp",
      title: "Aenean commodo",
      heading: "Fusce vulputate eleifend",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.",
      cardColor: "bg-[#A0C878]/40",
    },
    {
      id: 4,
      imgSrc:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-1.webp",
      title: "Pellentesque auctor",
      heading: "Vestibulum dapibus nunc",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.",
      cardColor: "bg-[#143D60]/30",
    },
  ];
  const [active1, setActive1] = React.useState([
    {
      btnText: "Shop Men",
      isactive: true,
      id: "0",
      content: [
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-11.webp",
          title: "leather",
          href: "/",
        },
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-12.webp",
          title: "denim",
          href: "/",
        },
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-19.webp",
          title: "swimwear",
          href: "/",
        },
      ],
    },
    {
      btnText: "Shop Women",
      isactive: false,
      id: "1",
      content: [
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-11.webp",
          title: "dresses",
          href: "/",
        },
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-18.webp",
          title: "tops",
          href: "/",
        },
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-13.webp",
          title: "Accessories",
          href: "/",
        },
      ],
    },
    {
      btnText: "Shop Accessories",
      isactive: false,
      id: "2",
      content: [
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp",
          title: "boys",
          href: "/",
        },
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2.webp",
          title: "girls",
          href: "/",
        },
        {
          imgSrc:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3.webp",
          title: "toys",
          href: "/",
        },
      ],
    },
  ]);
  const cartContent = [
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-1.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-2.webp",
      label: "Women's Fashion",
      name: "Tempor Incididunt",
      price: "129.00",
      rating: "4.8",
      cardno: "42",
      new: null,
      discount: false,
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-1.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-2.webp",
      label: "Men's Collection",
      name: "Elite Consectetur",
      price: "95.00",
      rating: "4.6",
      cardno: "28",
      new: true,
      discount: null,
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-3.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-4.webp",
      label: "Accessories",
      name: "Adipiscing Magna",
      price: "75.00",
      rating: "4.9",
      cardno: "56",
      new: false,
      discount: { oldPrice: "99.00", offer: "25" },
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-3.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-4.webp",
      label: "Footwear",
      name: "Labore Dolore",
      price: "145.00",
      rating: "4.7",
      cardno: "35",
      new: false,
      discount: false,
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-5.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-6.webp",
      label: "Women's Fashion",
      name: "Magna Aliqua",
      price: "145.00",
      rating: "4.5",
      cardno: "23",
      new: false,
      discount: false,
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-5.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-6.webp",
      label: "Men's Fashion",
      name: "Eiusmod Tempor",
      price: "110.00",
      rating: "4.7",
      cardno: "47",
      new: false,
      discount: { oldPrice: "129.00", offer: "15" },
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-7.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-f-8.webp",
      label: "Accessories",
      name: "Incididunt Labore",
      price: "55.00",
      rating: "4.6",
      cardno: "31",
      new: false,
      discount: false,
    },
    {
      imgSrc1:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-7.webp",
      imgSrc2:
        "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-m-8.webp",
      label: "Men's Fashion",
      name: "Aliqua Magna",
      price: "79.00",
      rating: "4.7",
      cardno: "39",
      new: true,
      discount: false,
    },
  ];
  const [productsContent, setProductsContent] = React.useState([
    {
      isactive: true,
      btnText: "All",
      content: [
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1-variant.webp",
          description: "Lorem ipsum dolor sit amet",
          price: "89.99",
          discount: { oldPrice: "$129.99" },
          itemNo: 24,
          rating: 4.5,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2-variant.webp",
          description: "Consectetur adipiscing elit",
          price: "249.99",
          discount: false,
          itemNo: 18,
          rating: 4,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3-variant.webp",
          description: "Sed do eiusmod tempor",
          price: "59.99",
          discount: false,
          itemNo: 7,
          rating: 3,
          new: true,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-4.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-4-variant.webp",
          description: "Incididunt ut labore et dolore",
          price: "79.99",
          discount: false,
          itemNo: 32,
          rating: 5,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-5.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-5-variant.webp",
          description: "Magna aliqua ut enim ad minim",
          price: "199.99",
          discount: { oldPrice: "$249.99" },
          itemNo: 15,
          rating: 3.5,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-6.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-6-variant.webp",
          description: "Veniam quis nostrud exercitation",
          price: "45.99",
          discount: false,
          itemNo: 21,
          rating: 4,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-7.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-7-variant.webp",
          description: "Ullamco laboris nisi ut aliquip",
          price: "69.99",
          discount: false,
          itemNo: 11,
          rating: 3.5,
          new: true,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8-variant.webp",
          description: "Ex ea commodo consequat",
          price: "159.99",
          discount: false,
          itemNo: 29,
          rating: 5,
          new: false,
        },
      ],
    },
    {
      isactive: false,
      btnText: "Cloathing",
      content: [
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1-variant.webp",
          description: "Lorem ipsum dolor sit amet",
          price: "89.99",
          discount: { oldPrice: "$129.99" },
          itemNo: 24,
          rating: 4.5,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-4.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-4-variant.webp",
          description: "Incididunt ut labore et dolore",
          price: "79.99",
          discount: false,
          itemNo: 32,
          rating: 5,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-7.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-7-variant.webp",
          description: "Ullamco laboris nisi ut aliquip",
          price: "69.99",
          discount: false,
          itemNo: 11,
          rating: 3.5,
          new: true,
        },
      ],
    },
    {
      isactive: false,
      btnText: "Accessoies",
      content: [
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3-variant.webp",
          description: "Sed do eiusmod tempor",
          price: "59.99",
          discount: false,
          itemNo: 7,
          rating: 3,
          new: true,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-6.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-6-variant.webp",
          description: "Veniam quis nostrud exercitation",
          price: "45.99",
          discount: false,
          itemNo: 21,
          rating: 4,
          new: false,
        },
      ],
    },
    {
      isactive: false,
      btnText: "Electronics",
      content: [
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2-variant.webp",
          description: "Consectetur adipiscing elit",
          price: "249.99",
          discount: false,
          itemNo: 18,
          rating: 4,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-5.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-5-variant.webp",
          description: "Magna aliqua ut enim ad minim",
          price: "199.99",
          discount: { oldPrice: "$249.99" },
          itemNo: 15,
          rating: 3.5,
          new: false,
        },
        {
          imgSrc1:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8.webp",
          imgSrc2:
            "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-8-variant.webp",
          description: "Ex ea commodo consequat",
          price: "159.99",
          discount: false,
          itemNo: 29,
          rating: 5,
          new: false,
        },
      ],
    },
  ]);
  const handleClick = (e) => {
    setActive1((prevState) =>
      prevState.map((item) =>
        item.id === e.target.id
          ? { ...item, isactive: true }
          : { ...item, isactive: false }
      )
    );
  };
  const handleClick1 = (e) => {
    setProductsContent((prevState) =>
      prevState.map((item) =>
        item.btnText === e.target.innerText
          ? { ...item, isactive: true }
          : { ...item, isactive: false }
      )
    );
  };
  return (
    <>
      <section className="w-screen px-20 py-8 flex">
        <div className="w-full flex justify-center">
          <div className="flex flex-col h-auto gap-4 w-[68rem] items-center">
            <Swiper
              // modules={[EffectCube, Autoplay, EffectFade, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              scrollbar={{ draggable: true }}
              // autoplay={{ delay: 3000 }}
              effect={"fade"}
              speed={1000}
              className="w-full h-full relative"
              navigation={{
                clickable: true,
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            >
              {sliderContent.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="bg-white tertiary-bg p-4 rounded-md"
                >
                  <div className="w-full h-full flex max-md:flex-col gap-8 items-center">
                    <div className="w-[65rem] h-full flex flex-col max-md:items-center gap-8">
                      <span className="bg-[#eb5a008e] secondary-color w-40 text-center py-2 font-semibold text-sm rounded-full">
                        {item.tag}
                      </span>
                      {(index == 0 && (
                        <h2 className="text-6xl font-semibold primary-color heading-font max-md:text-center">
                          Discover Our{" "}
                          <div className="quaternary-color relative before:absolute before:w-44 before:h-2 before:rounded-full before:bg-[#eb5a008e] before:bottom-1 before:left-1 max-md:before:left-1/2 max-md:before:-translate-x-1/2">
                            Latest
                          </div>{" "}
                          Collection
                        </h2>
                      )) ||
                        (index == 1 && (
                          <h2 className="text-6xl font-semibold primary-color heading-font max-md:flex max-md:flex-col max-md:items-center">
                            Season{" "}
                            <span className="quaternary-color">Sale</span> Upto
                            50&#x25; Off
                          </h2>
                        )) ||
                        (index == 2 && (
                          <h2 className="text-6xl font-semibold primary-color ">
                            <span className="text-6xl font-semibold primary-color heading-font max-md:text-center max-md:flex max-md:flex-col">
                              Premimum{" "}
                              <span className="quaternary-color">Quality </span>
                              Product
                            </span>
                          </h2>
                        ))}
                      <p className="text-white text-lg max-md:w-1/2 max-md:text-center">{item.para}</p>
                      <Link href={item.href}>
                        <button className="flex gap-2 items-center cursor-pointer quaternary-bg tertiary-color w-44 justify-center text-center py-2 font-semibold text-sm rounded-lg">
                          {item.btnText} <FaArrowRightLong />
                        </button>
                      </Link>
                      {index == 1 && (
                        <div className="w-full max-md:flex max-md:justify-center max-md:text-center">
                          <CountdownTimer />
                        </div>
                      )}
                    </div>
                    <div className="w-full h-full max-md:items-center flex flex-col gap-8">
                      {(index == 0 && (
                        <div className="w-[30rem] relative max-md:flex max-md:flex-col max-md:items-center">
                          <span className="absolute w-36 py-2 text-center flex item-center justify-center gap-2 quaternary-bg rounded-full tertiary-color heading-font max-md:-translate-y-8">
                            <TiStarFullOutline className="text-2xl translate-y-0.5" />
                            <span className="text-xl font-medium ">
                              Featured
                            </span>
                          </span>
                          <Image
                            src={item.imgSrc}
                            alt="hero"
                            width={1000}
                            height={1000}
                            className="w-full "
                          />
                          <span className="absolute bottom-10 right-0 bg-white w-48 rounded-lg p-4 flex flex-col gap-2">
                            <div className="flex gap-1 items-center">
                              <TiStarFullOutline className="text-yellow-400 text-xl" />
                              <TiStarFullOutline className="text-yellow-400 text-xl" />
                              <TiStarFullOutline className="text-yellow-400 text-xl" />
                              <TiStarFullOutline className="text-yellow-400 text-xl" />
                              <TiStarFullOutline className="text-yellow-400 text-xl" />
                            </div>
                            <i className="font-normal">
                              "Expectional Quality and Design"
                            </i>
                            <span className="text-sm font-semibold text-slate-600">
                              - Satisfied Costumer
                            </span>
                          </span>
                        </div>
                      )) ||
                        (index == 1 && (
                          <div className="w-[30rem] relative">
                            <span className="absolute right-0 p-2 w-24 h-24 text-center flex flex-col item-center justify-center text-2xl font-bold quaternary-bg rounded-full tertiary-color heading-font">
                              <span>50&#x25;</span>
                              <span>Off</span>
                            </span>
                            <Image
                              src={item.imgSrc}
                              alt="hero"
                              width={1000}
                              height={1000}
                              className="w-full "
                            />
                            <span className="absolute bottom-0 left-0 bg-white w-48 rounded-lg p-4 flex flex-col gap-2">
                              <p className="text-lg font-semibold text-slate-700">
                                Best Seller
                              </p>
                              <span className="flex gap-2 font-semibold">
                                <span className="text-lg text-gray-500 line-through">
                                  $129.99
                                </span>
                                <span className="text-lg quaternary-color">
                                  $64.99
                                </span>
                              </span>
                            </span>
                          </div>
                        )) ||
                        (index == 2 && (
                          <div className="grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 gap-4">
                            {item.card.map((cardItem) => (
                              <Card
                                key={cardItem.id}
                                sx={{ width: 250, maxHeight: 280 }}
                                className="p-2"
                              >
                                <CardActionArea>
                                  <Image
                                    src={cardItem.imgsrc}
                                    alt="hero"
                                    width={1000}
                                    height={1000}
                                    className="w-40 mx-auto"
                                  />
                                  <CardContent>
                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="div"
                                    >
                                      {cardItem.title}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      sx={{ color: "text.secondary" }}
                                    >
                                      ${cardItem.price}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                              </Card>
                            ))}
                            
                          </div>
                        ))}
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
        </div>
      </section>
      <section className="w-screen px-20 py-20 flex justify-center">
        <div className="flex gap-8 mx-auto max-md:flex-wrap max-md:justify-center">
          {cardsContent.map((card, index) => (
            <div
              key={index}
              className={`w-60 hover:-translate-y-1 duration-200 ${card.cardColor} p-4 flex flex-col justify-center gap-6`}
            >
              <span className="text-gray-700 font-semibold">{card.title}</span>
              <h3 className="text-4xl font-semibold tertiary-color">
                {card.heading}
              </h3>
              <p className="text-gray-700 pr-12">{card.para}</p>
              <div className="flex gap-2">
                <Link href="/">
                  <button className="outline-none border-b-2 tertiary-[#143D60] text-[#143D60] text-lg font-medium pb-1 cursor-pointer hover:text-[#EB5B00] hover:border-[#EB5B00] duration-150">
                    Shop Now
                  </button>
                </Link>
                <Image
                  src={card.imgSrc}
                  alt="arrow"
                  width={2000}
                  height={2000}
                  className="w-20"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-screen flex justify-center py-8">
        <div className="w-[67rem] flex flex-col items-center gap-8">
          <div className="flex gap-8 items-center py-2 w-full border-b border-slate-400 justify-center  tertiary-color z-10 text-xl font-medium">
            {active1.map((item, index) => (
              <button
                key={index}
                id={item.id}
                className={`${
                  item.isactive
                    ? "text-[#EB5B00] before:block  hover:before:block  before:absolute before:w-full before:h-[1px] before:bg-[#EB5B00] before:-bottom-2"
                    : " hover:text-[#EB5B00] "
                } cursor-pointer relative`}
                onClick={handleClick}
              >
                {item.btnText}
              </button>
            ))}
          </div>
          {active1.map((item) =>
            item.isactive ? (
              <div
                key={item.id}
                className="flex gap-4 justify-between max-md:flex-col w-full items-center"
              >
                {item.content.map((contentItem, index) => (
                  <div
                    key={index}
                    className="w-80 h-82 relative flex flex-col items-center justify-center secondary-bg  hover:duration-300 duration-300 hover:-translate-y-0.5 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={contentItem.imgSrc}
                      alt="hero"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-200"
                    />
                    <Link
                      href={contentItem.href}
                      className="absolute bottom-2 text-lg text-[#143D60] font-medium group-hover:bg-[#EB5B00] w-40 py-2 cursor-pointer group-hover:text-[#DDEB9D] text-center bg-[#DDEB9D] rounded-full flex items-center justify-center gap-2 duration-150"
                    >
                      {contentItem.title.toUpperCase()} <FaArrowRightLong />
                    </Link>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </section>
      <section className="w-screen flex flex-col items-center justify-center gap-8 py-10">
        <div className="flex flex-col gap-4 text-center max-md:flex-wrap">
          <h2 className="text-2xl font-semibold quaternary-color">
            Best Sellers
          </h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="w-[67rem] h-auto flex gap-8 justify-between max-md:flex-col flex-wrap max-md:items-center">
          {cartContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-60 shadow-md group"
            >
              <div className="w-full h-64 overflow-hidden relative">
                {item.new && (
                  <span className="absolute top-2 right-2 font-medium bg-[#EB5B00] text-white w-14 h-8 rounded-lg text-center content-center z-10">
                    New
                  </span>
                )}
                {item.discount && (
                  <span className="absolute top-2 right-2 font-medium secondary-bg tertiary-color w-14 h-8 rounded-lg text-center content-center z-10">
                    -{item.discount.offer}&#x25;
                  </span>
                )}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col gap-2 z-10">
                  <abbr title="Quick View">
                    <IoEyeOutline className="w-12 h-12 bg-white rounded-full text-center content-center  text-[#EB5B00] hover:text-white hover:bg-[#EB5B00] p-3 duration-150 cursor-pointer" />
                  </abbr>
                  <abbr title="Add to cart">
                    <MdAddShoppingCart className="w-12 h-12 bg-white rounded-full text-center content-center  text-[#EB5B00] hover:text-white hover:bg-[#EB5B00] p-3 duration-150 cursor-pointer" />
                  </abbr>
                </span>
                <Image
                  src={item.imgSrc1}
                  alt={`${item.name} image`}
                  width={10000}
                  height={10000}
                  className="absolute top-0 left-0 opacity-100 group-hover:scale-100 scale-95 group-hover:opacity-0 duration-300 group-hover:duration-300 h-full w-auto"
                />
                <Image
                  src={item.imgSrc2}
                  alt={`${item.name} image`}
                  width={10000}
                  height={10000}
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-85 duration-300 group-hover:duration-300 h-full w-auto group-hover:scale-95 scale-100"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 w-full">
                <span className="text-gray-500">{item.label}</span>
                <h5 className="text-xl quaternary-color">{item.name}</h5>
                <div className="flex justify-between items-center w-full py-2">
                  <span className="text-lg font-semibold quaternary-color flex gap-1">
                    ${item.price}&nbsp;&nbsp;
                    {item.discount && (
                      <span className="secondary-color font-medium line-through">
                        {item.discount.oldPrice}
                      </span>
                    )}
                  </span>
                  <span className="flex gap-2 items-center">
                    <TiStarFullOutline className="text-yellow-400 text-xl" />
                    <span className="tertiary-color text-lg font-medium flex gap-1">
                      {item.rating}{" "}
                      <span className="text-slate-500 font-light">
                        ({item.cardno})
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-screen flex justify-center items-center py-10">
        <div className="w-[67rem] flex flex-col items-center gap-8">
          <div className="flex justify-center items-center gap-8 w-full">
            {productsContent.map((item, index) => (
              <button
                key={index}
                className={`${
                  item.isactive ? "bg-[#EB5B00] text-white" : "text-[#EB5B00]"
                } hover:bg-[#EB5B00] hover:text-white px-6 py-2  rounded-full cursor-pointer duration-150`}
                onClick={handleClick1}
              >
                {item.btnText}
              </button>
            ))}
          </div>
          <div className="w-full flex flex-wrap gap-8 justify-center items-center">
            {productsContent.map((item) =>
              item.content.map(
                (contentItem, index) =>
                  item.isactive && (
                    <div
                      key={contentItem.itemNo}
                      className="w-60 flex flex-col  rounded-md shadow-md overflow-hidden relative group hover:-translate-y-1 duration-200"
                    >
                      {contentItem.new && (
                        <span className="w-12 text-sm py-0.5 quaternary-bg primary-color rounded-full text-center content-center">
                          {contentItem.new && "new"}
                        </span>
                      )}
                      {contentItem.discount && (
                        <span className="w-12 text-sm py-0.5 quaternary-bg primary-color rounded-full text-center content-center">
                          {contentItem.discount && "sale"}
                        </span>
                      )}
                      <div className="h-64 relative overflow-hidden">
                        <span className="absolute group-hover:flex flex-col items-center gap-2 bottom-2 left-1/2 -translate-x-1/2 z-10 hidden pb-2">
                          <Link
                            href="/"
                            className="w-36 py-2 quaternary-bg primary-color flex gap-2 item-center justify-center rounded-full hover:-translate-y-1 duration-200"
                          >
                            <MdAddShoppingCart className="text-lg translate-y-0.5" />
                            <span className="text-sm font-medium">
                              Add to Cart
                            </span>
                          </Link>
                          <span className="flex gap-1 item-center justify-center">
                          {wishedSet.has(contentItem.itemNo)?
                          <FaHeart className="w-8 h-8 bg-white p-1 rounded-full text-[#EB5B00] hover:bg-[#EB5B00] duration-200 hover:text-white cursor-pointer hover:-translate-y-1" onClick={() => {toggleWishlist(contentItem);}} />
                          :<CiHeart className="w-8 h-8 bg-white p-1 rounded-full text-[#143D60] hover:bg-[#EB5B00] duration-200 hover:text-white cursor-pointer hover:-translate-y-1" onClick={() => {toggleWishlist(contentItem);}} />}
                            <IoEyeOutline className="w-8 h-8 bg-white p-1 rounded-full text-[#143D60] hover:bg-[#EB5B00] duration-200 hover:text-white cursor-pointer hover:-translate-y-1"  />
                            <GoArrowSwitch className="w-8 h-8 bg-white p-1 rounded-full text-[#143D60] hover:bg-[#EB5B00] duration-200 hover:text-white cursor-pointer hover:-translate-y-1" />
                          </span>
                        </span>
                        <Image
                          src={contentItem.imgSrc1}
                          alt={`${contentItem.description} image`}
                          width={10000}
                          height={10000}
                          className="absolute top-0 left-0 opacity-100 group-hover:opacity-0 duration-300 group-hover:duration-300 group-hover:scale-100 scale-95 h-full w-auto"
                        />
                        <Image
                          src={contentItem.imgSrc2}
                          alt={`${contentItem.description} image`}
                          width={10000}
                          height={10000}
                          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 group-hover:duration-300 bg-gradient-to-b from-white via-white to-gray-600 h-full w-auto group-hover:scale-95 scale-100"
                        />
                      </div>
                      <div className="flex flex-col h-32 gap-0.5 justify-between p-2">
                        <p className="text-[#EB5B00] font-medium text-base">
                          {contentItem.description}
                        </p>
                        <span className="flex text-lg font-semibold quaternary-color items-center">
                          <span>{contentItem.price}</span>&nbsp;
                          <span className="text-gray-500 font-light text-sm line-through">
                            {contentItem.discount &&
                              contentItem.discount.oldPrice}
                          </span>
                        </span>
                        <span className="flex gap-1 items-center">
                          <StarRating rating={contentItem.rating} />
                          <span className="text-sm font-light text-gray-500">
                            ({contentItem.itemNo})
                          </span>
                        </span>
                      </div>
                    </div>
                  )))}
          </div>
          <Link href="/">
            <button className="flex gap-2 items-center quaternary-bg primary-color justify-center text-lg font-medium rounded-full py-1 px-6 group cursor-pointer">
              <span>View All Products</span>
              <FaArrowRightLong className="group-hover:translate-x-2 duration-200" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
