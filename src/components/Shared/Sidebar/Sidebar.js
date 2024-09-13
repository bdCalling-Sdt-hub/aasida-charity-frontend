"use client";

import SidebarLink from "../SidebarLink/SidebarLink";

const SIDEBAR_LINKS = [
  {
    key: 1,
    label: "Login",
    route: "/login",
    public: true,
  },
  {
    key: 2,
    label: "Create Account",
    route: "/register",
    public: true,
  },
  {
    key: 3,
    label: "Privacy Policy",
    route: "/privacy-policy",
    public: true,
  },
  {
    key: 4,
    label: "Apply for Financial Assistance",
    route: "/apply-application",
  },
  {
    key: 5,
    label: "Update Existing Application for Financial Assistance",
    route: "/update-application",
  },
  {
    key: 6,
    label: "Draft Agreement for Financial Assistance",
    route: "/draft-agreement",
  },
  {
    key: 7,
    label: "FAQ",
    route: "/faq",
  },
  {
    key: 8,
    label: "Contact Us",
    route: "/contact",
  },
];

export default function Sidebar() {
  const user = false;

  return (
    <div className="md:w-full">
      <div className="flex flex-col items-stretch gap-y-5">
        {SIDEBAR_LINKS.map((link) => (
          <>
            {link?.public ? (
              <SidebarLink link={link} />
            ) : (
              user && <SidebarLink link={link} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
