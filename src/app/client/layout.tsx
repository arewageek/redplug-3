import SignoutButton from "@/components/auth/SignoutButton";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/auth");
  }

  return (
    <div className="p-5">
      <SignoutButton />
      {children}
    </div>
  );
};

export default layout;
