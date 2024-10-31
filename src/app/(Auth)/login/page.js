import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const metadata = {
  title: "Login",
  description: "Login page of financial assistance website",
};

export default function LoginPage() {
  return (
    <div>
      {/* Go back button */}
      <Link
        href="/home"
        className="mb-10 block space-x-2 font-medium text-primary-white"
      >
        <ArrowLeftOutlined className="mr-1 text-sm" /> Back to home
      </Link>

      <h2 className="mb-6 text-center text-5xl font-extrabold text-primary-white">
        Log In
      </h2>

      <LoginForm />

      <div className="flex-center mt-4 gap-x-5">
        <Link
          href="/privacy-policy"
          className="text-primary-white/85 underline hover:text-primary-white"
        >
          Privacy Policy
        </Link>
        <Link
          href="/register"
          className="text-primary-white/85 underline hover:text-primary-white"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
