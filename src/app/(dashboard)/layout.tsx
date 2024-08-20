import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/** Left side */}
      <div className="w-[15%] md:w-[8%] lg:w-[18%] xl:w-[15%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" width={32} height={32} alt="logo" />
          <span className="hidden lg:block">Mmatlapeng</span>
        </Link>
        <Menu />
      </div>
      {/** Right side */}
      <div className="w-[85%] md:w-[92%] lg:w-[82%] xl:w-[85%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
