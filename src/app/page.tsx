import AlternatingText from "@/slices/AlternatingText";
import BigText from "@/slices/BigText";
import Carousel from "@/slices/Carousel";
import Hero from "@/slices/Hero";
import SkyDive from "@/slices/SkyDive";
import { Metadata } from "next";
// import { SliceZone } from "@/slices"; // Adjust this import based on your components
// import { components } from "@/slices";

// Example static data for demonstration
const homeData = {
  title: "Home Page Title",
  meta_description: "This is a description for the home page.",
  meta_title: "Home Meta Title",
  meta_image: { url: "https://example.com/image.jpg" },
  slices: [], // Populate with your slice data
};

// This component renders your homepage.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: homeData.title,
    description: homeData.meta_description,
    openGraph: {
      title: homeData.meta_title ?? undefined,
      images: [{ url: homeData.meta_image.url ?? "" }],
    },
  };
}

export default function Index() {
  return (
    <div>
      <Hero/>
      <SkyDive/>
      <Carousel/>
      <AlternatingText/>
      <BigText/>
      {/* You can add more static content here as needed */}
    </div>
  );
}
