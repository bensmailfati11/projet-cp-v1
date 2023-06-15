import React from "react";
import ReactDOM from "react-dom";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
 import "./Planings.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      backgroundColor: "#fff",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
          name:"name",
          time:new Date().getTime()
        },
      ]
    },
    
  ]
};
// function ControlledBoard() {
//   // You need to control the state yourself.
//   const [controlledBoard, setBoard] = useState(board);

//   function handleCardMove(_card, source, destination) {
//     const updatedBoard = moveCard(controlledBoard, source, destination);
//     setBoard(updatedBoard);
//   }

//   return (
//     <Board onCardDragEnd={handleCardMove} disableColumnDrag>
//       {controlledBoard}
//     </Board>
//   );
// }

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board }
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
  );
}

function Planings() {
    return (
    <>
    <UncontrolledBoard />
    
    </>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Planings />, rootElement);

export default Planings