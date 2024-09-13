"use client";

import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React from "react";

export default function FaqContainer() {
  const getFaqItems = (itemStyle) => [
    {
      key: "1",
      label: (
        <label className="text-lg font-medium">
          How do I apply to a university through this platform?
        </label>
      ),
      children: (
        <p>
          To apply to a university, simply fill in the required details in the
          \"Degree\" section, including your chosen program, university name,
          planned start date, and any other relevant information. You can also
          track your application status and update your details at any time.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "2",
      label: (
        <label className="text-lg font-medium">
          What information do I need to provide when applying?
        </label>
      ),
      children: (
        <p>
          You will need to provide details about your degree (e.g., field of
          study, discipline, university), your start date, and your planned
          duration. Additionally, we will ask about your university tuition fees
          and visa status if applicable.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "3",
      label: (
        <label className="text-lg font-medium">
          What is the format required for the date fields (Planned Start and
          Duration)?
        </label>
      ),
      children: (
        <p>
          The planned start date and duration should be entered in the format of
          MM/YYYY. However, if you enter them differently, don't worry—our
          system will help guide you through formatting corrections.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "4",
      label: (
        <label className="text-lg font-medium">
          Can I apply to more than one university at the same time?
        </label>
      ),
      children: (
        <p>
          Yes, you can apply to multiple universities at once. Our platform
          allows you to fill out separate forms for each university under
          different options (Option 1, Option 2, and Option 3). Just make sure
          to provide the required information for each option.
        </p>
      ),
      style: itemStyle,
    },
    {
      key: "5",
      label: (
        <label className="text-lg font-medium">
          What if my application to a university is not granted?
        </label>
      ),
      children: (
        <p>
          If your application is not granted, you can update your admission
          status in the form and explore other universities or options. Our
          platform allows you to track your status and update it as needed.
        </p>
      ),
      style: itemStyle,
    },
  ];

  const collapseItemStyles = {
    marginBottom: 24,
    background: "white",
    borderRadius: 8,
    border: "none",
  };

  return (
    <div>
      <Collapse
        accordion
        items={getFaqItems(collapseItemStyles)}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <PlusOutlined rotate={isActive ? 45 : 0} />
        )}
        style={{
          border: "none",
          padding: "16px",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
