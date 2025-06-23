'use client'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form"
import axios from "axios"
function AddPayment({setFormActive,refreshCard}) {
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId"):null
    const {register,handleSubmit,reset,watch,setValue,formState:{errors}}=useForm()
    const cardNumberRaw = watch("cardNumber");
    const expiryMonth = watch("expiryMonth");
    const expiryYear = watch("expiryYear");
    const formatCardNumber=value=>{var numberOnly= value.replace(/\D/g, "");return numberOnly = numberOnly.replace(/(\d{4})(?=\d)/g, "$1 ");}
      const onSubmit = async (data) => {
        const now =new Date()
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth()+1;
        const year = parseInt(data.expiryYear);
        const month = parseInt(data.expiryMonth);
        const paddedMonth = month < 10 ? `0${month}` : month;
        const brand="Visa"
        data.expiryMonth = paddedMonth;
        if(year<currentYear || (year === currentYear && month < currentMonth)){alert("Card Expired");return;}
         if (data.cardNumber.length !== 19) {alert("Card number must be exactly 12 digits");return;}
         const last4digit=  cardNumberRaw.slice(-4)
        console.log("Validated Date:",typeof(paddedMonth));
        try{axios.post("/api/payment/cards",{userId,last4digit,expiryMonth:paddedMonth,expiryYear,brand,});alert("Payment Method added");await refreshCard();reset();setFormActive(false)}catch(error){console.log(error)};}
  return (
    <>
     <section className='w-screen h-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-lg flex justify-center items-center'>
    <form onSubmit={handleSubmit(onSubmit)} className='relative bg-white p-8 rounded-lg flex flex-col gap-8'>
       <RxCross2 className='absolute top-2 right-2 text-lg cursor-pointer' onClick={()=>{setFormActive(false)}} />
        <h2 className='text-lg font-semibold tertiary-color'>Add Payment Method</h2>
        <div className='flex flex-col gap-2'>
            <label htmlFor="cardNo" className='font-medium'>Card Number</label>
            <input type='text' id='cardNo' className='border tertiary-border rounded-md p-1 px-2 inputControls-none focus:outline-[#EB5B00]' maxLength={19} minLength={19} required {...register("cardNumber")} value={formatCardNumber(cardNumberRaw||"")} onChange={e=>{const raw = e.target.value.replace(/\D/g,"");setValue("cardNumber",raw)}} />
        </div>
            <div className=' flex item-center gap-4'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="month" className='font-medium text-sm'>E/M</label>
            <input type='number' id='month' className='border w-14 tertiary-border rounded-md p-1 text-center inputControls-none focus:outline-[#EB5B00]' {...register("expiryMonth",{required:true,min:1,max:12,valueAsNumber:true,})} maxLength={2} minLength={1} required />
             {errors.expiryMonth && (
              <span className='text-red-500 text-xs'>Valid month required (1-12)</span>
            )}
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="year" className='font-medium text-sm'>E/Y</label>
            <input type='number' id='year' className='border w-16 tertiary-border rounded-md p-1  text-center inputControls-none focus:outline-[#EB5B00]' maxLength={4} minLength={4} required {...register("expiryYear",{required:true,min:new Date().getFullYear(),valueAsNumber:true})} />
            {errors.expiryYear && (
              <span className='text-red-500 text-xs'>Enter valid future year</span>)}
        </div>
            </div>
 <input type='submit' value="Add" className='cursor-pointer w-full text-center content-center tertiary-bg text-white text-base font-semibold rounded-md py-1'  />
    </form>
    </section>
    </>
  )
}

export default AddPayment
