import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignInButtons from '../components/SocialButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn('Sign In');
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    // console.warn('Forgot password?');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    //console.warn('onSignUpPress');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>SignIn</Text>
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
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account ?"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
