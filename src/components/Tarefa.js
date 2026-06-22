import React, { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";

function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() =>
          dispatch({
            type: "TOGGLE_TAREFA",
            payload: tarefa.id,
          })
        }
      />

      <span
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none",
        }}
      >
        {tarefa.texto}
      </span>
    </li>
  );
}

export default Tarefa;
