import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { asyncConnect } from 'redux-async-connect';
import LivePlayer from '../../components/ListPlayer';
import * as indexActions from '../../actions/indexActions';
import { browserHistory } from 'react-router';

if (process.env.BROWSER) {
  require('./index.scss');
}
class IndexPage extends React.Component {
  constructor(){
    super();

  }
  componentWillMount() {
    const {id} = this.props.params;
    
    this.props.indexActions.requestInfo()
    this.props.indexActions.requestEnter(id)    
    global.rick = setInterval(() => {
      this.props.indexActions.requestEnter(id)
    }, 3000)
    
  }
  componentWillUnmount() {
    this.props.indexActions.initData()    
    clearInterval(global.rick)
  }
  render() {

    console.log()
    return (
      <div className="live-page" >
        <img src={this.props.index.current.headimg} />  
        <img src={`data:image/png;base64,${this.props.index.fileStream}`} />  
        <p>AdultClassificationScore:{this.props.index.data.data.AdultClassificationScore}</p>
        <p>IsImageAdultClassified:{this.props.index.data.data.IsImageAdultClassified?'true':'false'}</p>
        <p>RacyClassificationScore:{this.props.index.data.data.RacyClassificationScore}</p>
        <p>IsImageRacyClassified:{this.props.index.data.data.IsImageRacyClassified ? 'true' : 'false'}</p>
        {this.props.index.data.data.IsImageRacyClassified ?
          <p className="red">兒童不宜</p>
          :
          ''
        }
      </div>
    );
  }
}
IndexPage.propTypes ={
  indexActions:PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    index: state.index
  };
}

function mapDispatchToProps(dispatch) {
  return {
    indexActions: bindActionCreators(indexActions, dispatch),
    nav:browserHistory    
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
