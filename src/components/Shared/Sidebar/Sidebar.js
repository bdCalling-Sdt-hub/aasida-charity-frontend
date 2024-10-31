"use client";

import { useSelector } from "react-redux";
import SidebarLink from "../SidebarLink/SidebarLink";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import clsx from "clsx";
import { X } from "lucide-react";

const NON_AUTH_LINKS = [
  {
    key: 1,
    label: "Home",
    route: "/home",
  },
  {
    key: 2,
    label: "Login",
    route: "/login",
  },
  {
    key: 3,
    label: "Create Account",
    route: "/register",
  },
  {
    key: 4,
    label: "Privacy Policy",
    route: "/privacy-policy",
  },
];

const AUTHENTICATED_LINKS = [
  {
    key: 1,
    label: "Home",
    route: "/home",
  },
  {
    key: 2,
    label: "Apply for Financial Assistance",
    route: "/apply-application",
  },
  {
    key: 3,
    label: "Update Existing Application for Financial Assistance",
    route: "/update-application",
  },
  {
    key: 4,
    label: "Draft Agreement for Financial Assistance",
    route: "/draft-agreement",
  },
  {
    key: 5,
    label: "Privacy Policy",
    route: "/privacy-policy",
  },
  {
    key: 6,
    label: "FAQ",
    route: "/faq",
  },
  {
    key: 7,
    label: "Contact Us",
    route: "/contact",
  },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = useSelector((state) => state.auth.user)?.userId;
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.refresh();
    toast.success("Logged out successfully!");
  };

  return (
    <div>
      {/* ------------------ Desktop Version ------------------ */}
      <div className="hidden flex-col items-stretch gap-y-5 lg:flex">
        {!userId &&
          NON_AUTH_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}

        {userId && (
          <>
            {AUTHENTICATED_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}

            <button
              className="rounded-lg border border-secondary-1/75 px-10 py-2 text-center font-medium text-secondary-1 transition-all duration-300 ease-in-out hover:bg-secondary-1 hover:text-primary-white"
              onClick={handleLogout}
            >
              <LogoutOutlined className="mr-2" /> Logout
            </button>
          </>
        )}
      </div>

      {/* ------------------ Mobile Version ------------------ */}
      <div className="block px-2 lg:hidden">
        <button
          onClick={() => setShowMobileSidebar(true)}
          className="mb-5 rounded-xl bg-slate-200 p-2"
        >
          <AlignJustify size={25} />
        </button>

        {/* Mobile Sidebar Content */}
        <div
          className={clsx(
            "fixed left-0 top-0 h-screen w-full bg-white transition-all duration-300 ease-in-out",
            showMobileSidebar
              ? "visible translate-x-0"
              : "invisible -translate-x-[100vw]",
          )}
        >
          {/* Close Icon */}
          <button
            className="absolute right-2 top-2"
            onClick={() => setShowMobileSidebar(false)}
          >
            <X size={25} />
          </button>

          {!userId && (
            <div className="flex h-screen flex-col justify-center gap-y-5 px-5">
              {NON_AUTH_LINKS.map((link) => (
                <SidebarLink key={link.key} link={link} />
              ))}
            </div>
          )}

          {userId && (
            <div className="flex h-screen flex-col justify-center gap-y-5 px-5">
              {AUTHENTICATED_LINKS.map((link) => (
                <SidebarLink key={link.key} link={link} />
              ))}

              <button
                className="rounded-lg border border-secondary-1/75 px-10 py-2 text-center font-medium text-secondary-1 transition-all duration-300 ease-in-out hover:bg-secondary-1 hover:text-primary-white"
                onClick={handleLogout}
              >
                <LogoutOutlined className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
