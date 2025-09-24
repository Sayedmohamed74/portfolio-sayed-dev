"use client";

import { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage } from "@prismicio/client";
import dynamic from "next/dynamic";
import "react-loading-skeleton/dist/skeleton.css";
const Skeleton = dynamic(() => import("react-loading-skeleton"), {
  ssr: false,
});

export default function Image({ field }: { field: ImageFieldImage }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // No need to dynamically import the CSS, it's imported at the top level.
  }, []);

  return (
    <div className=" max-md:w-4/5 md:w-[500px]  xl:w-[600px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/10 bg-white/5 backdrop-blur-sm">
      <PrismicNextImage
        field={field}
        alt=""
        className="w-full h-full object-cover"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <Skeleton className="w-full h-full rounded-3xl" />}
    </div>
  );
}
