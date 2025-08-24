"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TeamAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export default function TeamAvatar({ src, alt, className }: TeamAvatarProps) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={200}
      height={200}
      className={className}
      onError={() => setImgSrc("/images/team/placeholder.svg")}
    />
  );
}


