import "./Board.css";

const Board = () => {
  return (
    <div className="content-bigger">
      <div className="content-chil">
        <h1>Management</h1>
        <div className="icons">xd</div>
      </div>
      <div className="contet-body">
        <div className="board">
          <div className="body-board">
            <h2 className="titles"> Por Hacer</h2>
          </div>
        </div>
        <div className="board">
          <div className="body-board">
            <h2 className="titles"> En curso </h2>
          </div>
        </div>
        <div className="board">
          <div className="body-board">
            <h2 className="titles"> Listo</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
