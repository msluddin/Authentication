import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const DeshboardScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <Text style={styles.text}>AUTHENTICATION</Text>
          <Text style={styles.text}>Hello World</Text>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeshboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FBFC',
  },

  root: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
