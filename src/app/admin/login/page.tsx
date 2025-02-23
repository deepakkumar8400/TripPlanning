"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Architects_Daughter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const architects_Daughter = Architects_Daughter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Login logic here
  };

  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/home/home-bg.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-2xl"></div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-1 capitalize text-3xl items-center">
            <Image
              src="/logo.png"
              alt="logo"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <span>ArkLyte Admin Login</span>
          </div>
        </CardHeader>

        <CardBody>
          <div>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-2 w-full rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              type="password"
              placeholder="Enter password"
              className="border p-2 w-full rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardBody>

        <CardFooter>
          <button
            className="w-full capitalize bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
