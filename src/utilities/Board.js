import { defaultCell } from "./Cell.js";
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
    const builtRows = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => ({ ...defaultCell }))
    );
  
    return {
      rows: builtRows,
      size: { rows, columns }
    };
};