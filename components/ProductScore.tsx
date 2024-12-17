import React from "react";
import { LowScore } from "./svg/scores/LowScore";
import { ModerateScore } from "./svg/scores/ModerateScore";
import { HighScore } from "./svg/scores/HighScore";
import { VeryLowScore } from "./svg/scores/VeryLowScore";
import { VeryHighScore } from "./svg/scores/VeryHighScore";
import { TShirt } from "./svg/products/T-Shirt";
import { Socks } from "./svg/products/Socks";

interface ProductScoreProps {
  score: "veryLow" | "low" | "moderate" | "high" | "veryHigh";
  product: "tShirt" | "socks";
}

export const ProductScore: React.FC<ProductScoreProps> = ({
  score,
  product,
}) => {
  const ScoreComponent = (() => {
    switch (score) {
      case "veryLow":
        return VeryLowScore;
      case "low":
        return LowScore;
      case "moderate":
        return ModerateScore;
      case "high":
        return HighScore;
      case "veryHigh":
        return VeryHighScore;
      default:
        return null;
    }
  })();

  const ProductComponent = (() => {
    switch (product) {
      case "tShirt":
        return TShirt;
      case "socks":
        return Socks;
      default:
        return null;
    }
  })();

  if (!ScoreComponent || !ProductComponent) {
    return null;
  }

  return (
    <ScoreComponent>
      <ProductComponent />
    </ScoreComponent>
  );
};
