import { useState } from "react";

import { buildBoard } from "../utilities/Board.js";

export const useBoard = ({ rows, columns }) => {
    const [board] = useState(buildBoard({ rows, columns }));



    return [board];
};