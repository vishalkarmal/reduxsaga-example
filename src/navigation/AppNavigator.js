import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import UserListScreen from "../screens/UserListScreen";
import RegisterUserScreen from "../screens/RegisterUserScreen";

import Color from "../constants/Color";

const AppNavigator = createStackNavigator(
  {
    RegisterUserScreen: {
      screen: RegisterUserScreen,
      navigationOptions: {
        title: "Register",
        headerLeft: null
      }
    },
    UserListScreen: {
      screen: UserListScreen,
      navigationOptions: {
        title: "Dashboard",
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "UserListScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary
      },
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(AppNavigator);
