import React from "react";

import {
  Container,
  ContainerTitle,
  ContainerTarefas,
  Tarefa,
  Check
} from "./styles";

const Tarefas = ({ titulo, data, isCheck, remove, add }) => (
  <Container>
    <ContainerTitle>
      <h2>{titulo}</h2>
    </ContainerTitle>
    <ContainerTarefas>
      {data.map((tarefa, index) => (
        <Tarefa key={index}>
          <Check isCheck={isCheck} onClick={() => [remove(index), add(tarefa)]}>
            <i className="fas fa-check" />
          </Check>
          {tarefa.descricao}
        </Tarefa>
      ))}
    </ContainerTarefas>
  </Container>
);

export default Tarefas;
