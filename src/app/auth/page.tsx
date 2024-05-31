import SigninForm from "@/components/auth/SigninForm";
import SocialSigninButtons from "@/components/auth/SocialSigninButtons";
import BackButton from "@/components/globals/BackButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authorization } from "@/lib/actions/auth";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AuthPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/client");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-10">
      <Card className="w-full lg:w-1/3">
        <CardHeader className="flex lg:flex-row lg:items-center lg:gap-5 gap-0 justify-start items-start">
          <div className="">
            <BackButton />
          </div>
          <div className="grid gap-0 py-4">
            <CardTitle className="font-bold text-2xl lg:text-3xl">
              Welcom Back!
            </CardTitle>
            <CardDescription className="text-xs lg:text-sm text-gray-600">
              Let's get you authenticated
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SigninForm />
            <SocialSigninButtons />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
