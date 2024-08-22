import React from "react";

export default function Service() {
  return (
    <div className="justify-self-center grid grid-cols-3 gap-2">
        
      <div className="flex flex-col items-center justify-center p-2 lg:p-4 lg:max-w-[80%] rounded-lg bg-teal-600">
        <p className="text-white text-center">Service</p>
        <p className="text-white">$$50</p>
      </div>

      <div className="flex flex-col items-center justify-center p-2 lg:p-4 lg:max-w-[80%] rounded-lg bg-teal-600">
        <p className="text-white text-center">Service Description</p>
        <p className="text-white">$$50</p>
      </div>

      <div className="flex flex-col items-center justify-center p-2 lg:p-4 lg:max-w-[80%] rounded-lg bg-teal-600">
        <p className="text-white text-center">Service Description</p>
        <p className="text-white">$$50</p>
      </div>

    </div>
  );
}
