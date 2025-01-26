import Lottie from "lottie-react";
import animationData from "../../../../../public/LattieAnimation7.json"; // Import your Lottie JSON file

export default function LottieAnimation() {
  return (
    <div className="w-full h-full">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
