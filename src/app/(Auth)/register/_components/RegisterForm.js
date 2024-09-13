"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import UInput from "@/components/Form/UInput";
import { authValidationSchema } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <FormWrapper
        onSubmit={onSubmit}
        resolver={zodResolver(authValidationSchema.registerValidationSchema)}
      >
        <UInput
          type="text"
          name="surName"
          label="Surname/Family Name"
          placeholder="Enter your surname"
        />
        <UInput
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />
        <UInput
          type="text"
          name="middleName"
          label="Middle Name"
          placeholder="Enter your middle name"
        />
        <UInput
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
        <UInput
          type="text"
          name="mobileNumber"
          label="Mobile Phone Number"
          placeholder="Enter your mobile number"
        />
        <UInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
        <UInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
        />

        {/* <button>Submit</button> */}
        <button htmlType="submit" className="primary-button">
          Submit
        </button>
      </FormWrapper>
    </div>
  );
}
