"use client";

import { Flex, RevealFx, SmartImage } from "@/once-ui/components";
import { useEffect, useState } from "react";

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
  indicator?: "line" | "thumbnail";
  aspectRatio?: string;
  sizes?: string;
  revealedByDefault?: boolean;
  width?: string; // Optional width prop
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  indicator = "line",
  aspectRatio = "16 / 9",
  sizes,
  revealedByDefault = false,
  width = "100%",
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleImageClick = () => {
    if (images.length > 1) {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }
  };

  const handleControlClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <Flex
      fillWidth
      gap="12"
      direction="column"
      style={{
        maxWidth: width,
        margin: "0 auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#000000",
      }}
    >
      <Flex onClick={handleImageClick}>
        <RevealFx
          revealedByDefault={revealedByDefault}
          style={{
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          trigger={true}
          translateY="16"
          speed="fast"
        >
          <SmartImage
            sizes={sizes}
            priority
            tabIndex={0}
            alt={images[activeIndex]?.alt}
            aspectRatio={aspectRatio}
            src={images[activeIndex]?.src}
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              cursor: images.length > 1 ? "pointer" : "default",
            }}
          />
        </RevealFx>
      </Flex>
      {images.length > 1 && (
        <Flex
          paddingX="s"
          fillWidth
          justifyContent="center"
          style={{
            position: "relative",
            height: "4px",
            marginTop: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: `${100 / images.length}%`,
              backgroundColor: "#FFFFFF",
              transform: `translateX(${(300 / images.length) * activeIndex}%)`,
              transition: "transform 0.3s ease",
              borderLeft: "5px solid #000",
              borderRight: "5px solid #000",
              // borderRadius: "4px",
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};

Carousel.displayName = "Carousel";
export { Carousel };
