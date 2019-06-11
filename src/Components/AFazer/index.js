import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AfazerCreators } from "../../Store/Fazer/reducer";
import { Creators as FeitoCreators } from "../../Store/Feito/reducer";

import Tarefas from "../Tarefas";

class AFazer extends Component {
  render() {
    const { fazer, removeTarefaFazer, addTarefaFeito } = this.props;
    const { data } = fazer;
    return (
      <Tarefas
        titulo="A Fazer"
        data={data}
        remove={removeTarefaFazer}
        add={addTarefaFeito}
      />
    );
  }
}

const mapStateToProps = state => ({
  fazer: state.fazer,
  feito: state.feito
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AfazerCreators, ...FeitoCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AFazer);
