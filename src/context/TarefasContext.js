import React, { createContext, useReducer } from "react";

export const TarefasContext = createContext();

const estadoInicial = {
  tarefas: [],
};

function tarefasReducer(state, action) {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          {
            id: Date.now(),
            texto: action.payload,
            concluida: false,
          },
        ],
      };

    case "TOGGLE_TAREFA":
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa,
        ),
      };

    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(tarefasReducer, estadoInicial);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}
