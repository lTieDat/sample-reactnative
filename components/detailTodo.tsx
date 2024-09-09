import { View, Text, Button } from "react-native";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import RootStackParamList from "../types/RootStackParamList";
interface taskDef {
  id: number;
  task: string;
}

const DetailTodo = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute();
  const { item } = route.params as { item: taskDef };
  return (
    <View>
      <Text>Detail Todo</Text>
      <Text>{item.id}</Text>
      <Text>{item.task}</Text>
      <Button
        title="Back to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default DetailTodo;
