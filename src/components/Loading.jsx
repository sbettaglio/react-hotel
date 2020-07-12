import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
};

export default loading;
