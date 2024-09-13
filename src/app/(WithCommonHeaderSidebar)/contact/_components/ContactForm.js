"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import UInput from "@/components/Form/UInput";
import UTextArea from "@/components/Form/UTextArea";
import { contactSchema } from "@/schema/contactSchema";
import { MailOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

export default function ContactForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper
      resolver={zodResolver(contactSchema.contactFormValidationSchema)}
      onSubmit={onSubmit}
    >
      <div className="space-y-5">
        <UInput
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your valid mail"
          labelStyles={{ fontWeight: 600 }}
          suffix={<MailOutlined style={{ color: "gray" }} />}
        />

        <div>
          <UTextArea
            name="message"
            label="Your Question"
            placeholder="Tell us about your queries in detail"
            labelStyles={{ fontWeight: 600 }}
            minRows={8}
          />
        </div>

        <button type="submit" className="primary-button mt-10">
          Submit
        </button>
      </div>
    </FormWrapper>
  );
}
