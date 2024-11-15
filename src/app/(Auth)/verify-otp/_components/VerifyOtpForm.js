"use client";
import { useVerifyOtpMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { ErrorToast, SuccessToast } from "@/utils/custom-toast";
import { removeFromSessionStorage } from "@/utils/handle-session-storage";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function VerifyOtpForm() {
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleVerifyOtp = async () => {
    setErrorMsg("");

    if (otp?.length < 4) {
      setErrorMsg("Please input otp correctly");
      return;
    }

    try {
      const res = await verifyOtp({ otp }).unwrap();

      SuccessToast(
        "Account verification successful",
        null,
        "Please login with email and password",
      );

      router.push("/login");
      router.refresh();
      removeFromSessionStorage("sign-up-token");
    } catch (error) {
      ErrorToast(error?.data?.message || error?.message);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-max">
      <Input.OTP
        length={4}
        size="large"
        onBlur={(e) => setOtp((prev) => prev + e.target.value)}
      />
      {errorMsg && <p className="my-2 text-center text-red-500">{errorMsg}</p>}

      <Button
        loading={isLoading}
        className="primary-button mb-1 mt-5"
        onClick={handleVerifyOtp}
      >
        Submit
      </Button>
    </div>
  );
}
