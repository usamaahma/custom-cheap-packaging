"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Split path: "/categories/sub" → ["categories", "sub"]
  const paths = pathname.split("/").filter(Boolean);

  if (paths.length === 0) return null; // hide breadcrumb on homepage

  return (
    <div className="bg-gray-100 py-3 px-6 text-sm">
      <div className="container mx-auto flex items-center flex-wrap gap-2 text-gray-700">
        <Link href="/" className="hover:text-green-600 font-medium">
          Home
        </Link>

        {paths.map((segment, index) => {
          const route = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          return (
            <span key={index} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="capitalize text-gray-800 font-semibold">
                  {segment.replace(/-/g, " ")}
                </span>
              ) : (
                <Link
                  href={route}
                  className="capitalize hover:text-green-600"
                >
                  {segment.replace(/-/g, " ")}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
