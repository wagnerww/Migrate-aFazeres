import styled, { keyframes } from "styled-components";
import Colors from "../../Styles/colors";

export const Container = styled.div`
  display: flex;
  min-height: 50px;
  background: ${Colors.loading.background};
  font-size: 1.5em;
  color: ${Colors.fonts.label};
  border-radius: 50px;
  width: 50%;
  position: relative;

  @media screen and (min-width: 200px) and (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

function animation(props) {
  return keyframes`
    from {
      width: ${`${props.old}%`};
    }
    to {
      width: ${`${props.load}%`};
    }
`;
}

export const Loaded = styled.div`
  border-radius: 50px;
  background: ${Colors.loading.loaded};
  z-index: 1;
  animation: ${props => animation} 0.5s linear both;
`;
