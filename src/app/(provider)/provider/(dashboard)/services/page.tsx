import React from "react";

import DashTitle from "@/components/ui/dash-title";
import { Hand } from "lucide-react";
import Title from "antd/es/typography/Title";
import { Button } from "antd";
import ProductCard from "@/components/ui/product-card";
import Link from "next/link";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { ServiceType } from "@/types/Services";

export default async function Page() {
  const token = cookies().get("token")?.value;
  const call = await getFetcher({ link: "/get-all-services", token });

  if (!call.status) {
    return <p>Error loading data</p>;
  }

  const products: ServiceType[] = call.data.data;

  return (
    <div className="flex flex-col min-h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Hello, Elena <Hand className="ml-2" size={20} />
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="pt-8 flex flex-row justify-between items-start">
        <div className="">
          <Title className="!m-0" level={3}>
            Service List
          </Title>
        </div>
        <div className="">
          <Button
            href="/provider/services/add"
            className="bg-[#7849D4] hover:!bg-[#7849D4] !text-background font-bold px-8 border-none"
            size="large"
          >
            + Add new
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-12 gap-6">
        {products.map((item, i) => (
          <Link href="/provider/services/product" key={i} legacyBehavior>
            <ProductCard product={item} checkProvider />
          </Link>
        ))}
      </div>
    </div>
  );
}
