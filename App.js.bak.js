import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  Image, 
  SafeAreaView, 
  Button,
  Alert,
  Platform
} from 'react-native';
import Constants from 'expo-constants'; // ?
import { useDimensions, useDeviceOrientation  } from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation());
  const handlePress = () => console.log("Clicked Text.");
  const handleImgPress = () => console.log("Image is clicked");
  const handleBtnPressAlert = () => Alert.alert("Warning", "This is an alert!", [
    {"text": "Yes", onPress: () => console.log("YES is clicked")},
    {"text": "No", onPress: () => console.log("NO is clicked")},
  ]);
  const handleBtnPressPrompt = () => Alert.prompt("Wait!", "This is a prompt."); // doesn't work in android yet

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>DoneWithIt by alphalogic</Text>
      <Text>built on React Native</Text>
      
      {/* insert local image */}
      <Image style={styles.img} source={require("./assets/icon.png")} />

      {/* TouchableWithoutFeedback
      TouchableHighlight
      TouchableOpacity */}
      <TouchableHighlight onPress={handleImgPress}>
        
        {/* insert network image */}
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }} />

      </TouchableHighlight>

      <Button title="Click Me" onPress={handleBtnPressAlert}>Click Me</Button>

      <StatusBar style="auto" />

      <View style={{
          flex: 1,
          width: "100%",
          backgroundColor: "#fff",
          flexDirection: "row", // default, or column-reverse/row/row-reverse
          justifyContent: 'center', //  ref main axis. alignments depend on flex direction/primary axis
          alignItems: 'center', // ref secondary axis. alignments depend on flex direction/primary axis, determines alignment of items within EACH LINE
          // alignContent: 'center', // determines alignment of the entire content, only works if there is wrapping
          flexWrap: 'wrap-reverse',
          // flexBasis: 100, // can map to width or height depending on flex direction
          // flexGrow: 1, // fills xtra space, same as 'flex'
          // flexShrink: 1, // accommodates overflow, same as 'flex'
        }}>

        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          backgroundColor: "red",
        }} />
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          backgroundColor: "yellow"
        }} />
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          backgroundColor: "green",
        }} />
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          backgroundColor: "blue",
        }} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    // justifyContent: 'center', //  main. alignments depend on flex direction/primary axis
    alignItems: 'center', // secondary. alignments depend on flex direction/primary axis
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    paddingTop: 10
  },
  img: {
    height: 100,
    width: 100
  }
});
