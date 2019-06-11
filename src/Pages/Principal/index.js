import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as FazerCreators } from "../../Store/Fazer/reducer";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import Loading from "../../Components/Loading";
import AFazer from "../../Components/AFazer";
import Feito from "../../Components/Feito";

import { Container, Titulo, FormTarefas, ContainerTarefa } from "./styles";

class Principal extends Component {
  state = {
    descricao: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ descricao: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addTarefaFazer } = this.props;
    this.setState({ descricao: "" });
    addTarefaFazer(this.state);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { descricao } = this.state;

    return (
      <Container>
        <Titulo>aFazeres</Titulo>
        <FormTarefas onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            value={descricao}
            placeholder="Adicione sua tarefa aqui :)"
          />
          <Button type="submit" descricao="Adicionar" />
        </FormTarefas>
        <Loading />
        <ContainerTarefa>
          <AFazer />
          <Feito />
        </ContainerTarefa>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(FazerCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Principal);
