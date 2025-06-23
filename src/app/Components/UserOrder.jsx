'use client'
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

function UserOrder({ userId }) {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    axios.get(`/api/order/myorder/${userId}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("💥 Failed to fetch orders:", err);
      });
  }, [userId]);

  const formatStatus = (status) => {
    const s = status.toLowerCase();
    if (s.includes('delivered')) return 'Delivered';
    if (s.includes('cancelled') || s.includes('canceled')) return 'Canceled';
    if (s.includes('processing') || s.includes('pending')) return 'In progress';
    if (s.includes('shipped')) return 'Shipped';
    return status;
  };

  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s.includes('delivered')) return 'text-green-600';
    if (s.includes('cancelled') || s.includes('canceled')) return 'text-red-500';
    if (s.includes('processing') || s.includes('pending')) return 'text-yellow-500';
    return 'text-gray-600';
  };

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>

      {orders.length === 0 && (
        <p className="text-center text-gray-500">No orders found for this user.</p>
      )}

      <Accordion type="single" collapsible className="space-y-4">
        {orders.map((order, index) => (
          <AccordionItem key={index} value={`item-${index}`} className=" rounded-lg bg-white p-4">
            
            {/* Accordion Header */}
            
              
              <div className="flex flex-wrap items-center justify-between w-full text-sm text-gray-700">
                <div className="font-medium truncate">Order #{order._id.slice(-6)}</div>
                <div>{new Date(order.createdAt).toLocaleDateString()}</div>
                <div className={`flex items-center gap-1 font-medium ${getStatusColor(order.status)}`}>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span>{formatStatus(order.status)}</span>
                </div>
                <div className="font-semibold">${order.totalPrice.toFixed(2)}</div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="mt-2 flex items-center gap-2">
                  {order.orderItems.slice(0, 3).map((item, i) => (
                    <Image 
                      key={i}
                      src={item.productId?.imgSrc1 || item.image}
                      alt={item.name}
                      width={1000}
                      height={1000}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  ))}
                  {order.orderItems.length > 3 && (
                    <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-700 rounded-md text-xs font-medium">
                      +{order.orderItems.length - 3}
                    </div>
                  )}
                </div>

                {/* Chevron Icon */}
                <AccordionTrigger className="flex flex-col gap-3 w-full text-left">
            </AccordionTrigger>
              </div>

<hr className='opacity-30 mt-2' />
            {/* Accordion Content */}
          <AccordionContent className="text-sm text-gray-700 pt-4 border-t">
  <div>
    <h3 className="text-lg font-semibold mb-4">Order Details</h3>

    {/* Order Meta */}
    <div className="flex flex-wrap gap-4 text-sm mb-4">
      <div>
        <span className="font-semibold">Order Date:</span>{" "}
        {new Date(order.createdAt).toLocaleDateString()}
      </div>
      <div>
        <span className="font-semibold">Payment Method:</span>{" "}
        Credit Card (**** 4589)
      </div>
    </div>

    {/* Product List */}
    <div className="space-y-4 divide-y">
      {order.orderItems.map((item, i) => (
        <div key={i} className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-4">
            <Image
              src={item.productId?.imgSrc1 || item.image}
              alt={item.name}
              width={80}
              height={80}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-medium text-base">{item.name}</p>
              <div className="text-xs text-gray-500 flex gap-4 mt-1">
                <span>SKU: {item.productId?.sku || 'PRD-XXX'}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            </div>
          </div>

          <div className="text-right font-semibold">
            ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </div>

    {/* 👉 Cost Summary Section */}
    <div className="bg-gray-50 p-4 mt-6 rounded-lg space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal:</span>
        <span>${order.totalPrice?.toFixed(2) || '0.00'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Shipping:</span>
        <span>${order.shippingPrice?.toFixed(2) || '10.00'}</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-gray-600">Tax:</span>
        <span>${order.taxPrice?.toFixed(2) || '0.00'}</span>
      </div>
      <div className="flex justify-between font-semibold pt-2 quaternary-color text-base">
        <span>Total:</span>
        <span>${(order.totalPrice+10).toFixed(2)}</span>
      </div>
    </div>

    {/* 👉 Shipping Info */}
    <div className="mt-6 flex flex-col gap-6 md:flex-row text-sm text-gray-700">
      <div>
        <h4 className="font-semibold mb-1">Shipping Address</h4>
        <p>{order.shippingInfo?.address}</p>
        {order.shippingInfo?.apartment && <p>{order.shippingInfo.apartment}</p>}
        <p>
          {order.shippingInfo?.city}, {order.shippingInfo?.zip}
        </p>
        <p>{order.shippingInfo?.country}</p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Shipping Method</h4>
        <p>{order.shippingMethod || 'Express Delivery (2-3 business days)'}</p>
      </div>
    </div>
  </div>
</AccordionContent>

          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default UserOrder;
