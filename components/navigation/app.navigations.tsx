import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home";
import DetailTodo from "../detailTodo";
import About from "../AboutMe";
import TabBar from "./tabBar";
const HomeLayout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailTodo" component={DetailTodo} />
    </Stack.Navigator>
  );
};

const DrawerLayout = () => {
  // const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeLayout} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export { HomeLayout, DrawerLayout };
