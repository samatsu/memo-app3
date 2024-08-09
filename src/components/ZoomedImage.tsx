"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ZoomedImage.module.css";

type ZoomedImageProps = {
  img: any;
};
const ZoomImage = ({ img }: ZoomedImageProps) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };
  return (
    <>
      <div
        className="mt-10 -mx-7 md:mx-0"
        onClick={() => openZoomedImage(img.fields.file.url)}
      >
        <img
          src={img.fields.file.url}
          alt={img.fields.title}
          className="max-w-2xl mx-auto"
        ></img>
      </div>
      {zoomedImage && (
        <div
          className={styles["zoomed-image-container"]}
          onClick={closeZoomedImage}
        >
          <Image
            src={`https:${zoomedImage}`}
            alt="zoomed-image"
            layout="fill"
            style={{ objectFit: "none" }}
          />
        </div>
      )}
    </>
  );
};

export default ZoomImage;
