"use client";

import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import UInput from "@/components/Form/UInput";
import UPhoneInput from "@/components/Form/UPhoneInput";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { authValidationSchema } from "@/schema/authSchema";
import { ErrorToast, SuccessToast } from "@/utils/custom-toast";
import { setToSessionStorage } from "@/utils/handle-session-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
  const [signUp, { isLoading: isSigningUp }] = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data) => {
    const updatedData = {
      ...data,
      name: {
        firstName: data.firstName,
        middleName: data.middleName,
      },
      phoneNumber:
        data.phoneNumber.countryCode +
        data.phoneNumber.areaCode +
        data.phoneNumber.phoneNumber,
      countryCode: data.phoneNumber.isoCode,
      role: "applicant",
      status: "active",
      isVerified: true,
      isActive: true,
      isDeleted: false,
      verification: {
        otp: 123456,
        expiresAt: "2023-09-15T10:00:00.000Z",
        status: true,
      },
    };

    // delete unused data
    delete updatedData["firstName"];
    delete updatedData["middleName"];
    delete updatedData["confirmPassword"];

    try {
      const res = await signUp(updatedData).unwrap();

      if (res?.success) {
        SuccessToast(
          "Account creation successfully",
          null,
          "Please verify your email",
        );

        // Set to token to session-storage
        setToSessionStorage("sign-up-token", res?.data?.token);

        // Navigate to home page
        router.push("/verify-otp");
      }
    } catch (error) {
      ErrorToast(error?.message);
    }
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

        <UPhoneInput name="phoneNumber" label="Phone Number" />

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

        <Button
          loading={isSigningUp}
          htmlType="submit"
          className="primary-button"
        >
          Submit
        </Button>
      </FormWrapper>
    </div>
  );
}
