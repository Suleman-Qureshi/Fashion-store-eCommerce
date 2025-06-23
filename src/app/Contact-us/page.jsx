"use client";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
const ClientMap = dynamic(() => import("../Components/ClientMap"), {
  ssr: false
});
import axios from "axios"
function Page() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{
      const response=await axios.post("/api/contactForm",data);
      alert("Message sent successfully!");
      reset();
    }catch(error){
       console.log(error);
       alert("failed to sent message.");
    }
  }
  return (
    <>
      <Header />
      <main>
        <section className="w-screen py-20">
          <ClientMap />
        </section>
        <section className="w-screen flex justify-center">
          <div className="w-[67rem] flex ">
            <div className="flex flex-col w-1/3 gap-4">
              <div className="flex gap-2 items-center">
                <SlLocationPin className="tertiary-bg primary-color w-10 h-10 rounded-md p-2.5" />
                <div className="flex flex-col gap-0">
                  <div className="quaternary-color font-semibold">Address</div>
                  <div className="tertiary-color text-sm">
                    XYZ, st.no2, City ABC, Country
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FiPhone className="tertiary-bg primary-color w-10 h-10 rounded-md p-2.5" />
                <div className="flex flex-col gap-0">
                  <div className="quaternary-color font-semibold">Call Us</div>
                  <div className="tertiary-color text-sm">+92 3400 772889</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <HiOutlineEnvelope className="tertiary-bg primary-color w-10 h-10 rounded-lg p-2.5" />
                <div className="flex flex-col gap-0">
                  <div className="quaternary-color font-semibold">Email Us</div>
                  <div className="tertiary-color text-sm">
                    99sulemanqureshi99@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-4 w-2/3"
            >
              <div className="flex gap-4 w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  required
                  name="name"
                  className="w-full p-2.5 text-sm border border-[#A0C878] rounded-md focus:outline-[#EB5B00]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                  required
                  name="email"
                  className="w-full p-2.5 text-sm border border-[#A0C878] rounded-md focus:outline-[#EB5B00]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                {...register("subject")}
                required
                className="w-full p-2.5 text-sm border border-[#A0C878] rounded-md focus:outline-[#EB5B00]"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={6}
                className="w-full p-2.5 text-sm border border-[#A0C878] rounded-md focus:outline-[#EB5B00]"
                {...register("message")}
                required
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="hover:text-[#143D60] bg-[#A0C878] text-[#143D60] hover:bg-[#EB5B00] w-40 rounded-md py-4 cursor-pointer font-semibold duration-200"
              />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
