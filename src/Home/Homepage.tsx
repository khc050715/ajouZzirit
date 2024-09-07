import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

function Homepage() {
  return (
    <View style={[{flex: 1},{justifyContent: "center"}]}>
      <ImageBackground
        style={styles.subcontainer}
        source={require("../../assets/backgroundimg.png")}
      >
        <Text style={[{fontSize:30}]}>Homepage</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    subcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 40,
    },
});

export default Homepage;