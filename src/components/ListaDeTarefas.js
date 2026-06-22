import React from "react";
import Tarefa from "./Tarefa";

function ListaDeTarefas({ tarefas }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
