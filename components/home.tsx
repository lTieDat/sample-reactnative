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
import { RootStackParamList, taskDef } from "../types/RootStackParamList";

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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
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
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  header: {
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
    flex: 1,
    marginBottom: 100,
  },
  task: {
    padding: 10,
    backgroundColor: "pink",
    borderBottomWidth: 1,
    fontSize: 20,
    borderWidth: 1,
    marginVertical: 5,
  },
});
