import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BlockRGB from "./components/BlockRGB";
import { useState } from "react";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);
  // {item} refers to a single item we pass in
  // e.g. {item} = {red: 255, green: 0, blue: 0, id: "0"}
  function renderItem({ item }) {
    // e.g. {item} = {red: 255, green: 0, blue: 0, id: "0"}
    // item.red = 255
    // item.green = 0
    // item.blue = 0
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function addColor() {
    // ... dots means spread operator. e.g.
    // list = [1, 2, 3]
    // newList = [...list, 4]
    // which is the same as newList = [1, 2, 3, 4]
    setColorArray([
      {
        // e.g. Math.random() give a value from 0 to 1 i.e 0.8, 0.4
        // e.g. 0.4 * 256 = 12.8
        // e.g. Math.floor(12.8) = 12
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },

      ...colorArray,
    ]);
  }

  function reset() {
    setColorArray([]);
  }

  return (
    <View style={styles.container}>
      {/* Reset button */}
      <TouchableOpacity
        onPress={reset}
        style={{ height: 40, justifyContent: "center" }}
      >
        <Text style={{ fontSize: 20, color: "red" }}>Reset</Text>
      </TouchableOpacity>

      {/* New colour button */}
      <TouchableOpacity
        onPress={addColor}
        style={{ height: 40, justifyContent: "center" }}
      >
        <Text style={{ fontSize: 20, color: "red" }}>Add a new color</Text>
      </TouchableOpacity>

      <FlatList data={colorArray} renderItem={renderItem} style={styles.list} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
});
