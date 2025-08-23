"use client";

import React, { useState } from "react";

interface TeamAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export default function TeamAvatar({ src, alt, className }: TeamAvatarProps) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setImgSrc("/images/team/placeholder.svg")}
    />
  );
}


