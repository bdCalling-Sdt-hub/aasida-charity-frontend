"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import { authValidationSchema } from "@/schema/authSchema";
import UInput from "@/components/Form/UInput";
import { MailOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    let toastId = toast.loading("Logging in...");

    setTimeout(() => {
      dispatch(setUser({ user: true, token: "token" }));

      toast.success("Logged in successfully!", {
        id: toastId,
      });

      router.push("/");
    }, 3000);
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
