import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchFactContext, useThemeContext } from "../context";

export const SpinningLoader = React.memo(() => {
  const { loading } = useSearchFactContext();
  const { theme } = useThemeContext();
  const loaderColor = theme === "light" ? "#333" : "#ddd";

  return <ClipLoader color={loaderColor} loading={loading} size={50} />;
});
