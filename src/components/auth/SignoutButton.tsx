"use client";
import React, { useState } from "react";
import { BiExit } from "react-icons/bi";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignoutButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignout = async () => {
    setLoading(true);
    signOut({ callbackUrl: `${window.location.origin}/auth` });
  };

  return (
    <Button variant="outline" onClick={handleSignout}>
      {loading ? (
        <div className="h-3 w-3 border-2 border-t-transparent border-black animate-spin rounded-full"></div>
      ) : (
        <BiExit />
      )}
    </Button>
  );
};

export default SignoutButton;
