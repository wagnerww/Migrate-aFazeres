import styled from "styled-components";
import Colors from "../../Styles/colors";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.button.fundo};
  color: ${Colors.button.colorFont};
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
`;
