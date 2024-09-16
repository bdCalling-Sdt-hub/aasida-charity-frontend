import Link from "next/link";
import VerifyOtpForm from "./_components/VerifyOtpForm";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const metadata = {
  title: "Verify OTP",
  description: "Verify OTP page of financial assistance website",
};

export default function VerifyOtpPage() {
  return (
    <div>
      {/* Go back button */}
      <Link
        href="/register"
        className="mb-10 block space-x-2 font-medium text-primary-white"
      >
        <ArrowLeftOutlined className="mr-1 text-sm" /> Create Account
      </Link>

      <div className="mb-6 space-y-2 text-center text-primary-white">
        <h2 className="text-5xl font-extrabold">Verify OTP</h2>
        <p className="text-primary-white/75">
          Enter the OTP sent to your email within 3 minutes
        </p>
      </div>

      <VerifyOtpForm />

      <div className="text-center">
        <Link
          href="/privacy-policy"
          className="text-primary-white/85 underline hover:text-primary-white"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
