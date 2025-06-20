'use client'
import React from 'react'
import axios from 'axios';
import { AiOutlineDelete  } from "react-icons/ai";
import AddressForm from '../../Components/AddressForm';
function Page() {
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const [activeForm, setActiveForm] = React.useState(false);
  const [addressData,setAddressData]=React.useState([])
  const fetchingAddressData=async ()=>{
    try{
      const response =await axios(`http://localhost:5000/api/address/${userId}`)
      setAddressData(response.data)
    }catch(error){
      console.log(error)
    }
  }
  React.useEffect(()=>{
    fetchingAddressData();
  },[])
 const deleteAddress = async (addressId) => {
  const userId = localStorage.getItem("userId");

  try {
    await axios.delete(`http://localhost:5000/api/address/${addressId}/delete`);
    alert("🗑️ Address deleted successfully");
    setAddressData(prev => prev.filter(address => address._id !== addressId));
    await axios.post("http://localhost:5000/api/notification", {
      userId,
      message: "You deleted an address.",
      type: "success",
    });

  } catch (error) {
    console.error("❌ Failed to delete address:", error.response?.data || error.message);
    alert("Delete failed!");
    try {
      await axios.post("http://localhost:5000/api/notification", {
        userId,
        message: "⚠️ Failed to delete address.",
        type: "error",
      });
    } catch (err) {
      console.error("❌ Failed to create error-notification:", err.response?.data || err.message);
    }
  }
};
  const makeDefaultAddress = async (addressId) => {
  const userId = localStorage.getItem("userId");
  try {
    await axios.put(`http://localhost:5000/api/address/${addressId}`);

    setAddressData(prevAddressData =>
      prevAddressData.map(address =>
        address._id === addressId
          ? { ...address, isDefault: true }
          : { ...address, isDefault: false }
      )
    );
    alert("📌 Address set as default");
    await axios.post("http://localhost:5000/api/notification", {
      userId,
      message: "You set an address as your default.",
      type: "info",
    });

  } catch (error) {
    console.error("❌ Error setting default address:", error);

    alert("Failed to set address as default.");
    try {
      await axios.post("http://localhost:5000/api/notification", {
        userId,
        message: "⚠️ Failed to set default address.",
        type: "error",
      });
    } catch (notifErr) {
      console.error("❌ Failed to log error-notification:", notifErr);
    }
  }
};
  return (
    <section className="flex flex-col w-full min-h-screen gap-6 relative">
      {activeForm && <AddressForm  setFormActive={setActiveForm} refreshAddressdata={fetchingAddressData} />}
      <div className='w-full flex justify-between items-center'>
      <h2 className="text-4xl font-semibold quaternary-color">
        My Addresses
      </h2>
      <button className='w-60 tracking-tight text-lg quaternary-bg primary-color py-2 cursor-pointer text-center content-center rounded-md' onClick={()=>setActiveForm(true)} >
        +&nbsp;Add Address
      </button>
      </div>
      <div className='w-full flex gap-8 items-center justify-between flex-wrap'>
        {addressData.map(address=>  <div key={address._id} className="w-3/7 h-[342px] justify-between flex gap-8 p-4 shadow-md flex-col">
        <div className='w-full flex items-center justify-between'>
       <h4 className="text-xl font-medium quaternary-color">Home Address</h4>
       <AiOutlineDelete  onClick={e=>{deleteAddress(address._id)}}  className='p-1.5 rounded-full primary-bg text-red-500 text-4xl cursor-pointer'/>
        </div>
        <div className='flex flex-col gap-0 text-base'>
          <span className=''>House No: {address.address.houseNo}</span>
          <span className=''>Street: {address.address.street}</span>
          <span className=''>City: {address.address.city}</span>
          {address.address.state&&<span className=''>State: IL</span>
          }
          <span className=''>Pincode: {address.address.pincode}</span>
          <span className=''>Country: {address.address.country} </span>
        </div>
        {address.isDefault?
          <button className='primary-bg quaternary-color text-sm p-1 px-2 rounded-full font-semibold w-fit'>Default</button>:<button className='primary-bg tertiary-color text-sm p-1 px-2 rounded-full font-semibold w-fit cursor-pointer' onClick={()=>{makeDefaultAddress(address._id)}}>Make Default</button>
          
        }
      </div>
        )}
      </div>
    </section>
  )
}

export default Page
