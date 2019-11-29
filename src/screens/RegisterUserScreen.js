import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { registerUser } from "../actions/RegisterAction";

class RegisterUserScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput />
        <View style={{ flexDirection: "row" }}>
          <Button title={"Login"} onPress={this.props.registerUser}/>
        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  console.log("State:");
  console.log(state);
  return {
    //isFetching: state.user.isFetching,
    //userList: state.user.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: () => dispatch(registerUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserScreen);
