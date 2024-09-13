"use client";

import { useSelector } from "react-redux";
import SidebarLink from "../SidebarLink/SidebarLink";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import { toast } from "sonner";

const NON_AUTH_LINKS = [
  {
    key: 1,
    label: "Login",
    route: "/login",
  },
  {
    key: 2,
    label: "Create Account",
    route: "/register",
  },
  {
    key: 3,
    label: "Privacy Policy",
    route: "/privacy-policy",
  },
];

const AUTHENTICATED_LINKS = [
  {
    key: 1,
    label: "Apply for Financial Assistance",
    route: "/apply-application",
  },
  {
    key: 2,
    label: "Update Existing Application for Financial Assistance",
    route: "/update-application",
  },
  {
    key: 3,
    label: "Draft Agreement for Financial Assistance",
    route: "/draft-agreement",
  },
  {
    key: 4,
    label: "Privacy Policy",
    route: "/privacy-policy",
  },
  {
    key: 5,
    label: "FAQ",
    route: "/faq",
  },
  {
    key: 6,
    label: "Contact Us",
    route: "/contact",
  },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  return (
    <div className="md:w-full">
      <div className="flex flex-col items-stretch gap-y-5">
        {!user &&
          NON_AUTH_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}

        {user && (
          <>
            {AUTHENTICATED_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}

            <button
              className="rounded-lg border border-secondary-1/75 px-10 py-2 text-center font-medium text-secondary-1 transition-all duration-300 ease-in-out hover:bg-secondary-1 hover:text-primary-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
