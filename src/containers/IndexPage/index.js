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
    this.props.indexActions.requestInfo()
    
  }
  click = (data) => {
    this.props.nav.push(`/live/${data.live_id}`)
    this.props.indexActions.setCurrent(data)
  }
  renderImage = (data) => {
    let img = data.live_img
    return (
        <img onClick={()=>this.click(data)}  src={img}/>
    )

  }
  render() {
    let url = 'http://video.langlive.com/live/150012263524sjtB0.flv'
    return (
      <div className="index-page" >
      {this.props.index.last_hour_list.map(this.renderImage)}  
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
