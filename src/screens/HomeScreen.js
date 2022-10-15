import { StatusBar } from 'expo-status-bar';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import SigninScreen from './SigninScreen';
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from './SignUpScreen';
import ConfirmEmailScreen from './ConfirmEmailScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import NewPasswordScreen from './NewPasswordScreen';

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
        </View>
        <SigninScreen />

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
