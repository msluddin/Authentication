import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn('onSendPressed');
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
          placeholder="Enter your code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Enter your New Password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
export default NewPasswordScreen;

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
