"use client";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleReturn = () => {
    setLoading(true);
    router.back();
  };

  return (
    <div className="w-full">
      <Button variant="outline" onClick={handleReturn}>
        {loading ? (
          <div className="w-3 h-3 rounded-full border-l-transparent border-2 border-black animate-spin"></div>
        ) : (
          <BiArrowBack />
        )}
      </Button>
    </div>
  );
};

export default BackButton;
