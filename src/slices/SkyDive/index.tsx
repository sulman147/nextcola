"use client";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

/**
 * Component for "SkyDive".
 */
const SkyDive = () => {
  // Static data to replace Prismic content
  const flavor = "blackCherry"; // Replace with your desired static value
  const sentence = "Dive into Better Health ";

  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">{sentence}</h2>
      <View className="h-screen w-screen">
        <Scene flavor={flavor} sentence={sentence} />
      </View>
    </Bounded>
  );
};

export default SkyDive;
