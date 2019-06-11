import styled from "styled-components";
import Colors from "../../Styles/colors";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Titulo = styled.h1`
  font-size: 3.5em;
  font-style: italic;
  color: ${Colors.h1.colorFont};
  margin-bottom: 20px;
`;

export const FormTarefas = styled.form`
  display: flex;
  margin-bottom: 30px;
  width: 35%;

  @media screen and (min-width: 200px) and (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerTarefa = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 30px;
  @media screen and (min-width: 200px) and (max-width: 700px) {
    width: 100%;
  }
`;
