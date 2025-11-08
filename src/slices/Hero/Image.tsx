"use client";

import { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage } from "@prismicio/client";
import dynamic from "next/dynamic";
const Skeleton = dynamic(() => import("react-loading-skeleton"), {
  ssr: false,
});

export default function Image({ field }: { field: ImageFieldImage }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className=" max-md:w-4/5 md:w-[500px]  xl:w-[600px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/10 bg-white/5 backdrop-blur-sm">
      <PrismicNextImage
        field={field}
        alt=""
        className="w-full h-full object-cover"
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="max-md:w-4/5 md:w-[500px]  xl:w-[600px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/10 bg-white/5 backdrop-blur-sm" />
      )}
    </div>
  );
}
