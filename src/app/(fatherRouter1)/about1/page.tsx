"use client";

import { useSearchParams } from "next/navigation";

function About() {
  const searchParams = useSearchParams();
  const xd = searchParams.get("xd") as string;
  const name = searchParams.get("name") as string;

  return (
    <div className="min-h-screen">
      关于的页面1
      <div>personal1 页面传递过来的参数：{xd + name}</div>
    </div>
  );
}
export default About;
