import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../home";
import DetailTodo from "../detailTodo";
import About from "../AboutMe";

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
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home1" component={HomeLayout} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export { HomeLayout, DrawerLayout };
