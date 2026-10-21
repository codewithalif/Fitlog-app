"use client";

import React from "react";
import { MoonLoader } from "react-spinners";

type LoadingProps = {
  size?: number;
  color?: string;
  text?: string;
  fullScreen?: boolean;
};

const Loading = ({
  size = 40,
  color = "#858b96",
  text,
  fullScreen = false,
}: LoadingProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <MoonLoader color={color} size={size} />
      {text && <p className="text-sm text-[#858b96]">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
         <div className="fixed inset-0 flex items-center justify-center bg-[#171a20]/80 backdrop-blur-sm z-50">
      <div className="-translate-y-20">
        {content}
      </div>
    </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-var(--navbar-height))] items-center justify-center">
      {content}
    </div>
  );
};

export default Loading;