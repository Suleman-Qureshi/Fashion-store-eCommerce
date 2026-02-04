"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import UserOrder from "../../Components/UserOrder";
function Page() {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const [statustype, setStatusType] = React.useState([
    { isactive: true, type: "All status" },
    { isactive: false, type: "In progress" },
    { isactive: false, type: "Delivered" },
    { isactive: false, type: "Cancled" },
  ]);
  const [duration, setDuration] = React.useState([
    { isactive: true, type: "For all time" },
    { isactive: false, type: "Last 30 days" },
    { isactive: false, type: "Last 6 month" },
    { isactive: false, type: "Last year" },
  ]);
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <h5 className="text-4xl font-semibold quaternary-color">Orders</h5>
        <div className="flex gap-2 items-center">
          <Select>
            <SelectTrigger className="w-[180px] max-lg:w-[140px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statustype.map((item, index) => (
                <SelectItem key={index} value={item.type}>
                  {item.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] max-lg:w-[140px]">
              <SelectValue placeholder="For all time" />
            </SelectTrigger>
            <SelectContent>
              {duration.map((item, index) => (
                <SelectItem key={index} value={item.type}>
                  {item.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {userId ? (
        <UserOrder userId={userId} />
      ) : (
        <p className="text-gray-500 mt-10 text-center">
          Loading your orders...
        </p>
      )}
    </section>
  );
}
export default Page;
