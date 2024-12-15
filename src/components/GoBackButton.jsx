import { div } from "framer-motion/client";
import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton({ onGoBack, className }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    if (onGoBack) {
      onGoBack();
    }
  };

  return (
    <button className={`flex items-center ${className}`} onClick={goBack}>
      <i className="text-xl fa-solid fa-circle-arrow-left text-[#B47AEA]"></i>
      <span className="ml-4 text-xs text-[#B47AEA]">Go Back</span>
    </button>
  );
}

export default GoBackButton;
