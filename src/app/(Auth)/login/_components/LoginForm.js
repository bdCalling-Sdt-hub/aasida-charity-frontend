"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import FormWrapper from "@/components/Form/FormWrapper/FormWrapper";
import { authValidationSchema } from "@/schema/authSchema";
import UInput from "@/components/Form/UInput";
import { MailOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Button } from "antd";
import { ErrorToast, SuccessToast } from "@/utils/custom-toast";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.success) {
        // Decode access token for user data
        dispatch(
          setUser({
            user: jwtDecode(res?.data?.accessToken),
            token: res?.data?.accessToken,
          }),
        );

        router.push("/apply-application");
        router.refresh();
        SuccessToast("Login Successful");
      }
    } catch (error) {
      ErrorToast(error?.data?.message);
    }
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

        <Button
          loading={isLoggingIn}
          htmlType="submit"
          className="primary-button"
        >
          Submit
        </Button>
      </div>
    </FormWrapper>
  );
}
