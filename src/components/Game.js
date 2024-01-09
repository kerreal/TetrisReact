import Menu from "./Menu.js";

import { useGameOver } from "../hooks/useGameOver.js";

const Game = ({columns, rows}) => {

    const[gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => {console.log("start")}

    return (
        <div className="Game">
            <Menu onClick={start} />
            columns {columns}, rows {rows}
            
            
        </div>
    );
}
export default Game;