import React from "react";

import { Container } from "./styles";

const Button = ({ descricao, ...options }) => (
  <Container {...options}>{descricao}</Container>
);

export default Button;
