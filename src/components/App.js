import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Helmet from "react-helmet";
import * as actions from '../actions/appActions';
import { asyncConnect } from 'redux-async-connect';
import Breadcrumbs from 'react-breadcrumbs';


@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  constructor(){
    super();
  }
  componentWillMount(){
  }
  componentWillUpdate(nextProps){

  }
  render(){
    const {app} = this.props;
    return(
      <div>
        <Helmet
          title={app.title}
          titleTemplate="%s - reactjs-boilerplate"
          defaultTitle="reactjs-boilerplate"
          meta={app.meta}
          />
        <div className="container">
          {this.props.children}

        </div>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    app: state.app
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
