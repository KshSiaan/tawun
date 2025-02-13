import React from "react";
import Overview from "./overview";
import Chart from "./chart";
import DashTitle from "@/components/ui/dash-title";
import { Hand } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle>
        Hello, Elena <Hand className="ml-2" size={20} />
      </DashTitle>
      <div className="flex-grow w-full">
        <div className="h-full w-full grid grid-rows-6 gap-12">
          <div className="row-span-2 w-full bg-background h-full rounded-2xl">
            <div className="h-full w-full p-4 gap-2 flex flex-col justify-start items-start">
              <Overview />
            </div>
          </div>
          <div className="row-span-4 w-full bg-background rounded-2xl">
            <div className="h-full">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
