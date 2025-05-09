import React from "react";
import { Grid } from "ldrs/react";
import "ldrs/react/Grid.css";
function LoadingScreen() {
  return (
    <div className="site-loader   flex-center fixed z-[1000] h-screen w-screen overflow-hidden bg-[#5724ff]">
      <div className="loader">
        <Grid size="150" speed="1.5" color="black" />
      </div>
    </div>
  );
}

export default LoadingScreen;
