import {connect} from 'react-redux';
import Main from './Main';
import * as actions from '../redux/action';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

function mapStateToProps(state){
    return{
        reports:state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App