import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AfazerCreators } from "../../Store/Fazer/reducer";
import { Creators as FeitoCreators } from "../../Store/Feito/reducer";

// import { Container } from './styles';
import Tarefas from "../Tarefas";

class Feito extends Component {
  render() {
    const { feito, removeTarefaFeito, addTarefaFazer } = this.props;
    const { data } = feito;

    return (
      <Tarefas
        titulo="Feito"
        data={data}
        isCheck={true}
        remove={removeTarefaFeito}
        add={addTarefaFazer}
      />
    );
  }
}

const mapStateToProps = state => ({
  feito: state.feito,
  fazer: state.fazer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AfazerCreators, ...FeitoCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feito);
