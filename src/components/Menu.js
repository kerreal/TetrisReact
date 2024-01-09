import "./Menu.css";

const Menu = ({onClick}) => {
    return (
        <div className="game-menu">
            <button className="game-button" onClick={onClick}>
                Start the Game
            </button>
        </div>
    )
}

export default Menu;