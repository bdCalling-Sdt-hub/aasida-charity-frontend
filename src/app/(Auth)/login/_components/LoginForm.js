"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import { authValidationSchema } from "@/schema/authSchema";
import UInput from "@/components/Form/UInput";
import { MailOutlined } from "@ant-design/icons";

export default function LoginForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper
      onSubmit={onSubmit}
      resolver={zodResolver(authValidationSchema.loginValidationSchema)}
    >
      <div className="space-y-4">
        <UInput
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your valid email"
          suffix={<MailOutlined style={{ color: "gray" }} />}
        />

        <UInput
          type="password"
          name="password"
          label="Password"
          placeholder="********"
        />

        <button type="submit" className="primary-button">
          Submit
        </button>
      </div>
    </FormWrapper>
  );
}
