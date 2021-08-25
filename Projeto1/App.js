import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gerando Números Randômicos</Text>
        <TouchableOpacity>
          <Text>Clique Aqui</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const teste(props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
