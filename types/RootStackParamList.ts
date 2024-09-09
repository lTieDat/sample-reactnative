interface taskDef {
    id: number;
    task: string;
}

type RootStackParamList = {
    Home: undefined;
    DetailTodo: { item: taskDef };
};

export default RootStackParamList;
