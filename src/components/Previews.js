import React from "react";

import Preview from "./Preview.js";

const Previews = ({ tetrominoes }) => {
    // We want everything except the one the player is currently using
    const previewTetrominoes = tetrominoes
      .slice(1 - tetrominoes.length)
      .reverse();
  
    return (
      <>
        {previewTetrominoes.map((tetromino, index) => (
          <Preview tetromino={tetromino} index={index} key={index} />
        ))}
      </>
    );
  };
  
  export default React.memo(Previews);
  