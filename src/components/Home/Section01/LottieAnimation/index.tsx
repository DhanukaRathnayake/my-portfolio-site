// components/LottieAnimation.tsx
import Lottie from "lottie-react";
import animationData from "../../../../../public/LottieAnimaton.json"; // Import your Lottie JSON file

export default function LottieAnimation() {
  return <Lottie animationData={animationData} loop={true} />;
}
