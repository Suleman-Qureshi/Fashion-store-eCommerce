import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import {useForm,Controller} from "react-hook-form"
import axios from "axios"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
function AddressForm({setFormActive,refreshAddressdata}) {
      const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    const {register,handleSubmit,reset,watch,setValue,control,formState:{errors}}=useForm()
   const onSubmit = async (data) => {
  const userId = localStorage.getItem("userId");
  try {
    const response = await axios.post(`/api/address/${userId}`, data, {
      headers: {"Content-Type": "application/json",},});
    alert("📍 Address created successfully");
    await refreshAddressdata();
    setFormActive(false);
    const notifResponse = await axios.post("/api/notification", {
      userId,
      message: "You successfully added a new address.",
      type: "success",
    });
  } catch (error) {
    console.error("❌ Error in onSubmit try block:", error.response?.data || error.message);
    alert("Submission failed.");
    try {
      await axios.post("/api/notification", {
        userId,
        message: "⚠️ Failed to add a new address.",
        type: "error",
      });
    } catch (notificationErr) {
      console.error("❌ Failed to create error-notification:", notificationErr.response?.data || notificationErr.message);
    }
  }
};
  return (
    <section className='w-screen h-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-lg flex justify-center items-center p-8'>
        <form  onSubmit={handleSubmit(onSubmit)} className='min-w-96 relative bg-white p-4 rounded-lg flex flex-col gap-4 overflow-y-scroll'>
            <RxCross2 className='absolute top-2 right-2 text-lg cursor-pointer' onClick={()=>{setFormActive(false)}} />
                <h2 className="text-lg font-semibold tertiary-color">Add Address</h2>
                <div className="flex flex-col gap-2 w-full">
                <div className="w-full flex flex-col gap-1">
                    <label className="text-sm font-medium" htmlFor="houseNo" value="">House-Number</label>
                    <input type='text' id="houseNo" className="border tertiary-border rounded-md p-1 px-2 focus:outline-[#ED5B00] text-sm" placeholder="Enter your house number eg. #ED-0000" {...register("address.houseNo")} required />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-sm font-medium" htmlFor="street" value="">Street-Number/Street-Name</label>
                    <input type='text' id="street" className="border tertiary-border rounded-md p-1 px-2 focus:outline-[#ED5B00] text-sm" placeholder="Enter your street no eg. xyzStreet.no-5" {...register("address.street")} required />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-sm font-medium" htmlFor="city" value="">City</label>
                    <input type='text' id="city" className="border tertiary-border rounded-md p-1 px-2 focus:outline-[#ED5B00] text-sm" placeholder="City name eg. xyz" {...register("address.city")} required />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-sm font-medium" htmlFor="state" value="">State (optional)</label>
                    <input type='text' id="state" className="border tertiary-border rounded-md p-1 px-2 focus:outline-[#ED5B00] text-sm" placeholder="State name eg. xyz" {...register("address.state")} />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-sm font-medium" htmlFor="code" value="">Pincode</label>
                    <input type='text' id="code" className="border tertiary-border rounded-md p-1 px-2 focus:outline-[#ED5B00] text-sm" placeholder="Pin code eg. 000000" {...register("address.pincode")} required />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-sm font-medium" htmlFor="country" value="">Country</label>
                    <input type='text' id="country" className="border tertiary-border rounded-md p-1 px-2 focus:outline-[#ED5B00] text-sm" placeholder="Country name eg. xyz" {...register("address.country")} required />
                </div>
                <Controller
  name="addressPlace" 
  control={control}
  defaultValue=""
  rules={{ required: "Address type is required" }}
  render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px] tertiary-border tertiary-color bg-white">
                    <SelectValue placeholder="Address-type" />
                  </SelectTrigger>
                  <SelectContent className="white-bg tertiary-border">
                    <SelectItem value="Home" className="hover:translate-x-1 duration-200">Home</SelectItem>
                    <hr />
                    <SelectItem value="Work" className="hover:translate-x-1 duration-200">Work</SelectItem>
                    <hr />
                    <SelectItem value="Other" className="hover:translate-x-1 duration-200">Other</SelectItem>
                  </SelectContent>
                </Select>
  )}/>
                </div>
                <input type="submit" className="cursor-pointer w-full text-center content-center tertiary-bg text-white text-base font-semibold rounded-md py-1" value="+ ADD"/>
        </form>
      
    </section>
  )
}

export default AddressForm
