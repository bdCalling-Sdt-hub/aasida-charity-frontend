import React from "react";
import RegisterForm from "./_components/RegisterForm";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function RegisterPage() {
  return (
    <div>
      {/* Go back button */}
      <Link
        href="/home"
        className="mb-10 block space-x-2 font-medium text-primary-white"
      >
        <ArrowLeftOutlined className="mr-1 text-sm" /> Home
      </Link>

      <h2 className="mb-6 text-center text-5xl font-extrabold text-primary-white">
        Create Account
      </h2>

      <RegisterForm />

      <div className="flex-center mt-4 gap-x-5">
        <Link
          href="/privacy-policy"
          className="text-primary-white/85 underline hover:text-primary-white"
        >
          Privacy Policy
        </Link>
        <Link
          href="/login"
          className="text-primary-white/85 underline hover:text-primary-white"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
