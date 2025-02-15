"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { PencilIcon } from "lucide-react";
import EditCatForm from "./edit-cat-form";
export default function EditCat() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="space-x-2 flex flex-row justify-center items-center font-semibold"
        onClick={showModal}
      >
        <span>Edit</span> <PencilIcon size={16} />
      </a>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div
            key={10}
            className="w-full h-auto flex flex-row justify-center items-center px-[7%]"
          >
            <Button
              size="large"
              className="w-full bg-[#E9DABB] hover:!bg-[#b8aa8f] hover:!text-background border-none"
            >
              Save
            </Button>
          </div>,
        ]}
      >
        <EditCatForm />
      </Modal>
    </>
  );
}
