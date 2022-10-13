import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SigninScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot password?');
  };

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  const onSignUpPress = () => {
    console.warn('onSignUpPress');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{ uri: 'https://links.papareact.com/wru' }}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.text}>AUTHENTICATION</Text>

      {/* Input Area */}
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton
        text="Forgot password ?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      {/* Input Social Area */}
      <CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In With Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In With Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />

      <CustomButton
        text="Don't have an account ?"
        onPress={onSignUpPress}
        type="TERTIARY"
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
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
