import styled from "styled-components";
import Colors from "../../Styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 30px;

  @media screen and (min-width: 200px) and (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.tarefas.backgroundTitle};
  color: ${Colors.tarefas.colorTitle};
  font-size: 1.2em;
  height: 50px;
  width: 100%;
`;

export const ContainerTarefas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${Colors.tarefas.backgroundBody};
  color: ${Colors.fonts.label};
  padding: 10px;
`;

export const Tarefa = styled.div`
  display: flex;
  padding: 5px;
`;

export const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  color: ${props =>
    props.isCheck ? Colors.tarefas.colorTitle : "transparent"};
  border: 1px solid ${Colors.tarefas.borderColor};
  background: ${props => (props.isCheck ? Colors.tarefas.borderColor : "")};
  cursor: pointer;
`;
