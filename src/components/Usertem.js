import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

class UserItem extends Component {
  item = this.props.item;
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: this.item.avatar }} />
        <View style={styles.textContainer}>
          <Text>{this.item.first_name + " " + this.item.last_name}</Text>
          <Text>{this.item.email}</Text>
        </View>
      </View>
    );
  }
}

export default UserItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 10
  },
  image: { height: 50, width: 50 },
  textContainer: {
    marginHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center"
  }
});
