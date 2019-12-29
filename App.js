/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button
} from 'react-native';

import Messages from './Messages'
import SocketProvider from './src/providers/SocketProvider'
import MessageStore from './src/stores/MessageStore'

const App  = (props) => {
  sendMessage = ()=>{
  }

  const token = null
  return (
    <>
      <SocketProvider
        socketUrl="http://localhost:4000/socket"
        options={{token}}
      >
        <Messages store={MessageStore}/>
      </SocketProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  },
});

export default App;
