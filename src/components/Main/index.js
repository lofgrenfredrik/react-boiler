import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from './Main';

const mapStateToProps = (state) => {
  const { example } = state.example;

  return ({
    example
  });
}

import {
  setNewValue
} from '../../reducer/actions';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({setNewValue}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
