"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import AddressForm from "../../Components/AddressForm";

function Page() {
  const [userId, setUserId] = useState(null);
  const [addressData, setAddressData] = useState([]);
  const [activeForm, setActiveForm] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("userId");
      if (id) setUserId(id);
    }
  }, []);
  const fetchingAddressData = async () => {
    if (!userId) return;
    try {
      const response = await axios.get(`/api/address/${userId}`);
      setAddressData(response.data);
    } catch (error) {
      console.log("Failed to fetch addresses:", error);
    }
  };

  useEffect(() => {
    if (userId) fetchingAddressData();
  }, [userId]);
  const deleteAddress = async (addressId) => {
    try {
      await axios.delete(`/api/address/${addressId}/delete`);
      alert("🗑️ Address deleted successfully");
      setAddressData((prev) => prev.filter((address) => address._id !== addressId));

      await axios.post("/api/notification", {
        userId,
        message: "You deleted an address.",
        type: "success",
      });
    } catch (err) {
      console.error("Delete failed:", err.message);
      alert("Delete failed!");

      try {
        await axios.post("/api/notification", {
          userId,
          message: "⚠️ Failed to delete address.",
          type: "error",
        });
      } catch (notifErr) {
        console.error("Error sending failure-notification:", notifErr.message);
      }
    }
  };
  const makeDefaultAddress = async (addressId) => {
    try {
      await axios.put(`/api/address/${addressId}`);

      setAddressData((prev) =>
        prev.map((address) =>
          address._id === addressId
            ? { ...address, isDefault: true }
            : { ...address, isDefault: false }
        )
      );
      alert("📌 Address set as default");
      await axios.post("/api/notification", {
        userId,
        message: "You set an address as your default.",
        type: "info",
      });
    } catch (err) {
      console.error("❌ Error setting default address:", err.message);
      alert("Failed to set address as default.");
      try {
        await axios.post("/api/notification", {
          userId,
          message: "⚠️ Failed to set default address.",
          type: "error",
        });
      } catch (notifErr) {
        console.error("❌ Failed to create notification:", notifErr.message);
      }
    }
  };
  return (
    <section className="flex flex-col w-full min-h-screen gap-6 relative">
      {activeForm && (
        <AddressForm
          setFormActive={setActiveForm}
          refreshAddressdata={fetchingAddressData}
        />
      )}
      <div className="w-full flex justify-between items-center">
        <h2 className="text-4xl font-semibold quaternary-color">My Addresses</h2>
        <button
          className="w-60 tracking-tight text-lg quaternary-bg primary-color py-2 cursor-pointer text-center content-center rounded-md"
          onClick={() => setActiveForm(true)}
        >
          + Add Address
        </button>
      </div>
      <div className="w-full flex gap-8 items-center justify-between flex-wrap">
        {addressData.map((address) => (
          <div
            key={address._id}
            className="w-3/7 max-sm:w-full h-[342px] justify-between flex gap-8 p-4 shadow-md flex-col"
          >
            <div className="w-full flex items-center justify-between">
              <h4 className="text-xl font-medium quaternary-color">Home Address</h4>
              <AiOutlineDelete
                onClick={() => deleteAddress(address._id)}
                className="p-1.5 rounded-full primary-bg text-red-500 text-4xl cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-0 text-base">
              <span>House No: {address.address.houseNo}</span>
              <span>Street: {address.address.street}</span>
              <span>City: {address.address.city}</span>
              {address.address.state && <span>State: {address.address.state}</span>}
              <span>Pincode: {address.address.pincode}</span>
              <span>Country: {address.address.country}</span>
            </div>
            {address.isDefault ? (
              <button className="primary-bg quaternary-color text-sm p-1 px-2 rounded-full font-semibold w-fit">
                Default
              </button>
            ) : (
              <button
                className="primary-bg tertiary-color text-sm p-1 px-2 rounded-full font-semibold w-fit cursor-pointer"
                onClick={() => makeDefaultAddress(address._id)}
              >
                Make Default
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;