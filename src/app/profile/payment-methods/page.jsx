'use client'
import React from 'react'
import { PiCreditCardDuotone  } from "react-icons/pi";
import { AiOutlineDelete  } from "react-icons/ai";
import AddPayment from '../../Components/AddPayment';
import axios from 'axios';
function Page() {
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const [formactive,setFormActive]=React.useState(false);
  const[cardData,setCardData]=React.useState([])
  const fetchingCardData=async()=>{ 
      try{
        const response=await axios.get(`/api/payment/cards/user/${userId}`,{headers:{'Cache-Control':'no-cache'}})
       setCardData(response.data)
       await axios.post("/api/notification", {
      userId,
      message: "Payment method updated successfully",
      type: "success",
    });
      }catch(error){
        console.log(error)
        try {
      await axios.post("/api/notification", {
        userId,
        message: "⚠️ Failed to update the payment method",
        type: "error",
      });
    } catch (err) {
      console.error("❌ Failed to create error-notification:", err.response?.data || err.message);
    }
      }
    };
  React.useEffect(()=>{fetchingCardData();},[]);
  const makeDefaultCard=async (cardId) =>{
 try{
   await axios.put(`/api/payment/cards/put/${cardId}`);
    setCardData(prevCards =>
      prevCards.map(card =>
        card._id === cardId
          ? { ...card, isDefault: true }
          : { ...card, isDefault: false }
      )
    );
   alert("Card set as default");
    await axios.post("/api/notification", {
      userId,
      message: "Default payment updated",
      type: "success",
    });
 }catch(error){
  console.log(error);
  try {
      await axios.post("/api/notification", {
        userId,
        message: "⚠️ Failed to set default payment method",
        type: "error",
      });
    } catch (err) {
      console.error("❌ Failed to create error-notification:", err.response?.data || err.message);
    }
 }
  }
  const handleDelete=async (cardId)=>{
    try{
        await axios.delete(`/api/payment/cards/delete/${cardId}`)
        setCardData(prevCards => prevCards.filter(card => card._id !== cardId));
        alert("Card deleted successfully");
         await axios.post("/api/notification", {
      userId,
      message: "Payment method delete successfully",
      type: "success",
    });
    }catch(error){
      console.log(error);
        try {
      await axios.post("/api/notification", {
        userId,
        message: "⚠️ Failed to set delete payment method",
        type: "error",
      });
    } catch (err) {
      console.error("❌ Failed to create error-notification:", err.response?.data || err.message);
    }
    }
  }
  console.log(cardData)
  return (
    <section className='w-full min-h-screen flex flex-col gap-8'>
      {formactive &&<AddPayment setFormActive={setFormActive} refreshCard={fetchingCardData} />}
      <div className='w-full flex items-center justify-between'>
      <h2 className="text-4xl font-semibold quaternary-color">
        Payment Method
      </h2>
      <button className='w-60 tracking-tight text-lg quaternary-bg primary-color py-2 cursor-pointer text-center content-center rounded-md' onClick={()=>setFormActive(!formactive)} >
        +&nbsp;Add payment method
      </button>
      </div>
{
  cardData.map(card=>
      <div id={card._id} key={card._id} className='flex w-full justify-between item-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <div className='p-2 rounded-md primary-bg h-fit'>
            <PiCreditCardDuotone className='text-3xl' />
            </div>
            <div className='flex flex-col text-lg font-medium '>
              <span>{`**** **** **** ${card.last4digit}`}</span>
              <span className='secondary-color text-base font-normal'>Expires {card.expiryMonth}/{card.expiryYear}</span>
            </div>
          </div>
          {card.isDefault?<button className='primary-bg quaternary-color text-sm p-1 px-2 rounded-full font-semibold w-fit'>Default</button>:<button className='primary-bg tertiary-color text-sm p-1 px-2 rounded-full font-semibold w-fit cursor-pointer' onClick={e=>{makeDefaultCard(card._id)}} >Make Default</button>}
        </div>
        <div className='flex items-center gap-4'>
         <AiOutlineDelete   className='p-1.5 rounded-full primary-bg text-red-500 text-4xl cursor-pointer' onClick={e=>{handleDelete(card._id)}} />
        </div>
      </div>
      )}

    </section>
  )
}

export default Page
