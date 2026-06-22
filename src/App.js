import React, { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaDeTarefas from "./components/ListaDeTarefas";

function Gerenciador() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState("TODAS");

  const { state, dispatch } = useContext(TarefasContext);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    dispatch({
      type: "ADICIONAR_TAREFA",
      payload: novaTarefa,
    });

    setNovaTarefa("");
  };

  const tarefasFiltradas = state.tarefas.filter((tarefa) => {
    if (filtro === "CONCLUIDAS") return tarefa.concluida;
    if (filtro === "PENDENTES") return !tarefa.concluida;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <hr />

      <button onClick={() => setFiltro("TODAS")}>Todas</button>

      <button onClick={() => setFiltro("CONCLUIDAS")}>Concluídas</button>

      <button onClick={() => setFiltro("PENDENTES")}>Pendentes</button>

      <ListaDeTarefas tarefas={tarefasFiltradas} />
    </div>
  );
}

export default function App() {
  return (
    <TarefasProvider>
      <Gerenciador />
    </TarefasProvider>
  );
}
