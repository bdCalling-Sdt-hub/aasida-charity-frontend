import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({ link }) {
  const pathname = usePathname();

  return (
    <Link
      key={link?.key}
      href={link?.route}
      className={clsx(
        "rounded-lg border border-secondary-1/75 py-2 text-center font-medium transition-all duration-300 ease-in-out hover:bg-secondary-1 hover:text-primary-white",
        pathname?.toLowerCase() === link?.route
          ? "bg-secondary-1 text-primary-white"
          : "bg-transparent text-secondary-1",
      )}
    >
      {link?.label}
    </Link>
  );
}
