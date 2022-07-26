import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchFromProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchFromProps)(Main);

export default App;