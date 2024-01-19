"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Personal() {
  const pathname = usePathname();
  const router = useRouter();
  const xd = "other";
  return (
    <div className="min-h-screen">
      {/* <Link
        href={`/about/${xd}`}
        className={`${pathname === "/personal" ? "text-red-500" : ""}`}
      >
        去关于页面
      </Link> */}
      <div onClick={() => router.push("/about")}>去关于页面</div>
      <div>个人的页面2</div>
    </div>
  );
}
export default Personal;
