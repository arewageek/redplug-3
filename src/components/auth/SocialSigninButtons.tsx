"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { BiLogoGoogle } from "react-icons/bi";
import { useState } from "react";

const SocialSigninButtons = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      className="flex gap-3 mt-4"
      variant="secondary"
      onClick={() => {
        setLoading(true);
        const signedIn = signIn("google", {
          callbackUrl: `${window.location.origin}/client`,
        });
        if (!signedIn) setLoading(false);
      }}
    >
      Login with Google
      {loading ? (
        <div className="h-3 w-3 border-2 border-t-transparent border-black animate-spin rounded-full"></div>
      ) : (
        <BiLogoGoogle />
      )}
    </Button>
  );
};

export default SocialSigninButtons;
