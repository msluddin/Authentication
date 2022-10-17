import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSubmitPressed = (data) => {
    console.warn(data);
    navigation.navigate('Deshboard');
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
          name="code"
          control={control}
          placeholder="Enter your code"
          rules={{ required: 'Code is required' }}
        />

        <CustomInput
          name="password"
          control={control}
          placeholder="Enter your New Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password should be minimum 5 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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
