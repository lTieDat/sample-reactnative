import { View, Text, Button } from "react-native";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../types/RootStackParamList";
interface taskDef {
  id: number;
  task: string;
}

const DetailTodo = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute();
  const { item } = route.params as { item: taskDef };
  return (
    <>
      <View>
        <Text>Detail Todo</Text>
        <Text>ID : {Math.floor(item.id * 1000)}</Text>
        <Text>Task : {item.task}</Text>
      </View>
      <View>
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

export default DetailTodo;
