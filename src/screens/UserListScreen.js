// Imports: Dependencies
import React from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";
import { getUserData } from "../actions/userAction";
import Usertem from "../components/Usertem";

// Screen: Counter
class UserListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUserData();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.isFetching ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.props.userList.data}
            renderItem={({ item }) => <Usertem item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = state => {
  console.log("State:");
  console.log(state);

  // Redux Store --> Component
  return {
    isFetching: state.user.isFetching,
    userList: state.user.userList
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = dispatch => {
  // Action
  return {
    //Get User Data
    getUserData: () => dispatch(getUserData())
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen);
//export default UserListScreen
