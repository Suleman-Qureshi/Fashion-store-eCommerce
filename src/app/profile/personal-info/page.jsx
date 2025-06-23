"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
function Page() {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const {
    register,
    handleSubmit,
    watch,
    reset,
     setValue   ,
    formState: { errors },
  } = useForm({ defaultValues: { gender: "male" } });
   const [previewImage, setPreviewImage] = React.useState(null);
  const avatarFile = watch("avatar");
  const onSubmit = async (data) => {
     const file = data.avatar?.[0];
    const formData = new FormData();
    if(file) formData.append("avatar", file);
      formData.append("phoneNo", data.phoneNo);
  formData.append("DOB", data.DOB);
  formData.append("gender", data.gender);
  formData.append("username", data.username);
    console.log({...data,...file});
    window.location.reload();
    try{ 
      axios.put(`/api/user/${userId}`,formData,{headers: { "Content-Type": "multipart/form-data" }})
      alert("User Updated");
      await axios.post("api/notification", {
      userId,
      message: "Your profile update successfully",
      type: "success",
    });
   }catch(error){
    console.error("Update error:",error.response?.data||error.message);
    try {
      await axios.post("/api/notification", {
        userId,
        message: "⚠️ Failed to date profile.",
        type: "error",
      });
    } catch (err) {
      console.error("❌ Failed to create error-notification:", err.response?.data || err.message);
    }
   }
  };
    const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  React.useState(async()=>{
    try{
    const {data} = await axios.get(`/api/user/${userId}`);
 setValue("username", data.username);
        setValue("email", data.email);
        setValue("phoneNo", data.phoneNo);
        setValue("DOB", data.DOB?.split("T")[0]);
        setValue("gender", data.gender);
    }catch(error){
      console.log(error.message)
    }
  },[userId, setValue]) 
  return (
    <section className="w-full min-h-screen flex flex-col gap-8">
      <h2 className="text-4xl font-semibold quaternary-color">
        Personal Information
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 p-4"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="quaternary-color text-sm font-medium"
          >
            Full Name
          </label>
          <input
            type="text"
            name="username"
            className="border secondary-border outline-none ring-none rounded-md text-lg font-medium py-1.5 px-2"
            {...register("username")}
            disabled
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="quaternary-color text-sm font-medium"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="border secondary-border outline-none ring-none rounded-md text-lg font-medium py-1.5 px-2"
              {...register("email")}
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="quaternary-color text-sm font-medium"
            >
              Phone
            </label>
            <input
              type="text"
              className="border secondary-border outline-none ring-none rounded-md text-lg font-medium py-1.5 px-2"
              {...register("phoneNo")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="DOB" className="quaternary-color text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            className="border secondary-border outline-none ring-none rounded-md text-lg font-medium py-1.5 px-2"
            {...register("DOB")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="gender"
            className="quaternary-color text-sm font-medium"
          >
            Gender
          </label>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                {...register("gender")}
                required
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                {...register("gender")}
                required
              />
              <label htmlFor="male">Female</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                {...register("gender")}
                required
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="quaternary-color text-sm font-medium"
          >
            Avatar
          </label>
       <label htmlFor="avatar" className="w-24 h-14 quaternary-bg text-center content-center text-lg primary-color rounded-md cursor-pointer" >+</label>
       <input type="file" accept="image/*" id="avatar" {...register("avatar")}  />
        </div>
        <div className="w-full flex justify-end">
          <input type="submit" value='Save Changes' className="w-40 py-2 text-lg font-medium text-center content-center rounded-md quaternary-bg primary-color cursor-pointer" />
        </div>
      </form>
    </section>
  );
}

export default Page;
