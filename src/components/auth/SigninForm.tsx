"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { BsEnvelope, BsFillRocketTakeoffFill } from "react-icons/bs";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "../ui/use-toast";

const SigninForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  const handleEmailSignin = async () => {
    setLoading(true);
    const signinResult = await signIn("email", {
      callbackUrl: `${window.location.origin}/client`,
      email,
      redirect: false,
    });

    if (!signinResult) {
      setLoading(false);
      return toast({
        title: "Could not Signin",
        description: "Something went wrong",
        variant: "destructive",
      });
    }

    setLoading(false);

    return toast({
      title: "Check your email",
      description: "A magic link has been sent to your email",
    });
  };

  return (
    <div className="w-full">
      <div className="gap-y-2 flex flex-col">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="arewa@gmail.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        variant="default"
        className="mt-4 w-full flex items-center gap-3"
        onClick={handleEmailSignin}
      >
        Login With Email{" "}
        {loading ? (
          <div className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"></div>
        ) : (
          <BsEnvelope />
        )}
      </Button>
    </div>
  );
};

export default SigninForm;
