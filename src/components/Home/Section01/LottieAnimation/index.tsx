import Lottie from "lottie-react";
import animationData from "../../../../../public/LottieAnimation7.json"; // Import your Lottie JSON file
import { FollowMouseCard } from "@/components/Common/GloreCard/FollowMouseCard";

export default function LottieAnimation() {
  return (
    <div className="w-full h-full">
      <FollowMouseCard>
        <Lottie animationData={animationData} loop={true} />
      </FollowMouseCard>
    </div>
  );
}
