import { Dispatch } from "redux";
import { connect } from "react-redux";

import { IReduxState } from "../redux/reduxStore/IState";
import { updateIsOnSearchScreen } from "../redux/reduxActions/commonActions/commonActionCreators";

import SearchScreenComponent from "../screens/SearchScreenComponent";

const mapStateToProps = (state: IReduxState) => ({
  selectedItem: state.commonState.selectedItem,
  searchTerm: state.commonState.searchTerm
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateIsOnSearchScreen: (isOnSearchScreen: boolean) => {
    dispatch(updateIsOnSearchScreen(isOnSearchScreen));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreenComponent);
