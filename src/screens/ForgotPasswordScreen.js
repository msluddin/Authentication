import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn('onSendPressed');
    navigation.navigate('NewPassword');
  };

  const onSignInPress = () => {
    //console.warn('onSignUpPress');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        {/* Input Area */}
        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="SEND" onPress={onSendPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
