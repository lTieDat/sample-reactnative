import { View, Text, Image } from "react-native";

const About = () => {
  return (
    <View>
      <Text>About Page</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default About;
