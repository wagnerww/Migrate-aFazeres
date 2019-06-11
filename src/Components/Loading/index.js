import React, { Component } from "react";

import { connect } from "react-redux";

import { Container, Loaded, ContainerText } from "./styles";

let oldValue = 0;

class Loading extends Component {
  render() {
    const { fazer, feito } = this.props;
    const dataFazer = fazer.data.length;
    const dataFeito = feito.data.length;
    const oldPercent = oldValue;
    const percent = (dataFeito / (dataFazer + dataFeito)) * 100 || 0;
    oldValue = percent;

    return (
      <Container>
        <Loaded load={percent} old={oldPercent} />
        <ContainerText>{`${percent.toFixed(0)}% Concluído`}</ContainerText>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  fazer: state.fazer,
  feito: state.feito
});

export default connect(
  mapStateToProps,
  null
)(Loading);
