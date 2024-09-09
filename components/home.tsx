import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import RootStackParamList from "../types/RootStackParamList";

interface taskDef {
  id: number;
  task: string;
}

export default function Home() {
  const [task, setTask] = useState<taskDef[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const handleAddTask = () => {
    if (!taskInput) return;
    const newTask = {
      id: Math.random(),
      task: taskInput,
    };
    setTask([...task, newTask]);
    setTaskInput("");
  };

  const handleNavigate = (item: taskDef) => {
    navigation.navigate("DetailTodo", { item });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <View style={styles.container}>
          <Text nativeID="formLabel" style={styles.header}>
            Label for Input Field
          </Text>
          <TextInput
            value={taskInput}
            style={styles.input}
            onChangeText={(value) => setTaskInput(value)}
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
        <View style={styles.listTasks}>
          <Text>List of Task</Text>
          <FlatList
            data={task}
            style={styles.FlatList}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => handleNavigate(item)}>
                  <Text style={styles.task}>{item.task}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  input: {
    borderBottomColor: "#000",
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  listTasks: {
    paddingHorizontal: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  task: {
    padding: 10,
    backgroundColor: "pink",
    borderBottomWidth: 1,
    fontSize: 30,
    borderWidth: 1,
    margin: 10,
  },
  FlatList: {
    marginBottom: 20,
  },
});
