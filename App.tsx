import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, Button, ImageBackground } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 4000);

import Homepage from './src/Home/Homepage';
import Loadingpage from './src/Loading/Loadingpage';
import Loginpage from './src/Login/Loginpage';

interface Props{
  navigation: any;
};


const Startpage = ({navigation}: Props) => {
  const [clickCount, setClickCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTitleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount + 1 === 5) {
      setIsModalVisible(true);
      setClickCount(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.subcontainer}
        source={require("./assets/backgroundimg.png")}
      >
        <TouchableOpacity onPress={handleTitleClick}>
          <Text style={styles.title}>아주 찌릿</Text>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.8}>
            <Text style={styles.cardText}>홈화면</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Login")}
            activeOpacity={0.8}>
            <Text style={styles.cardText}>로그인 화면</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Loading")}
            activeOpacity={0.8}>
            <Text style={styles.cardText}>로딩 화면</Text>
          </TouchableOpacity>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>원대한</Text>
              <Button title="닫기" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Startpage} />
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Loading" component={Loadingpage} />
        <Stack.Screen name="Login" component={Loginpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",

      backgroundColor: '#f0f0f0',

  },
  subcontainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 40,
  },
  title: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 50,
      color: '#444',
  },
  cardContainer: {
      width: '100%',
  },
  card: {
      backgroundColor: '#007BFF',
      borderRadius: 20,
      paddingVertical: 30,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginVertical: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 10,
  },
  cardText: {
      fontSize: 25,
      fontWeight: '600',
      color: '#fff',
      marginLeft: 15,
  },
  modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      width: '80%',
      alignItems: 'center',
  },
  modalText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
  },
  modalImage: {
      width: 200,
      height: 200,
      marginBottom: 20,
  }
});

export default App;