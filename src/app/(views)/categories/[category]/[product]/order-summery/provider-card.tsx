import React from "react";
import { DataItem } from "./page";
import Title from "antd/es/typography/Title";
import { Button } from "antd";

export const ProviderCard: React.FC<{ data: DataItem[] }> = ({ data }) => (
  <>
    <div className="p-6 bg-gray-200 rounded-lg">
      <Title level={4} className="text-center">
        Provider information
      </Title>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.label && item.value && (
            <p className="flex flex-row justify-between items-start gap-2 w-full text-lg">
              <span>{item.label}</span>
              <span className="font-bold flex items-center">
                {item.currency && "$"} {item.value}
              </span>
            </p>
          )}
          {/* Last component to "see more" */}
        </React.Fragment>
      ))}
      <p className="flex flex-row justify-between items-start gap-2 w-full text-lg">
        <span>More info: </span>
        <span className="font-bold flex items-center">
          <Button size="large" type="primary" className="px-6">
            See more
          </Button>
        </span>
      </p>
    </div>
  </>
);
