import "./Tetris.css";

import Board from "./Board.js";
import GameStats from "./GameStats.js";
import Previews from "./Previews.js";

import { useBoard } from "../hooks/useBoard.js";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer.js";

const Tetris = ({rows, columns, setGameOver}) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({ rows, columns });
    const [player, setPlayer, resetPlayer] = usePlayer();

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
        </div>
    )

}

export default Tetris;