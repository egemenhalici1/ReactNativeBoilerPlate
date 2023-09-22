import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from 'react-native-paper';
import POTextInput from '../customComponents/poInput';
import I18n from '../langs/_i18n';
import axiosInstance from '../api/axios';
import { showToastMessage } from '../utils/toast';

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onLoginPress = () => {
    const loginData = {
      EmailAddress: emailAddress,
      Password: password
    };
    setIsLoading(true);

    axiosInstance.post("auth/login", loginData).then((data) => {
      showToastMessage("success", I18n.t('common.success'), I18n.t('login.successMessage'),)
      navigation.navigate('Main')
    }).catch((e) => {
      showToastMessage("error", I18n.t('common.failed'), I18n.t('login.failedMessage'))
    }).finally(() => {
      setIsLoading(false);
    })
  }

  setPasswordInput = (text) => {
    setPassword(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <POTextInput value={emailAddress} onChangeText={text => setEmailAddress(text)} placeholder={I18n.t('login.emailPlaceHolder')} />
      <POTextInput value={password} onChangeText={text => setPasswordInput(text)} placeholder={I18n.t('login.passwordPlaceHolder')} secureTextEntry={true} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={styles.forgetPasswordAlign} ><Text>{I18n.t('login.forgetPassword')}</Text></TouchableOpacity>
      <TouchableOpacity disabled={isLoading} onPress={onLoginPress} style={[styles.button, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.buttonText, { color: theme.colors.secondary }]}>
          {isLoading && <ActivityIndicator />}
          {!isLoading && I18n.t('login.login')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgetPasswordAlign} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpButton}>{I18n.t('login.doNotHaveAnAccount')}
          <Text style={[styles.linkText, { color: theme.colors.primary }]}> {I18n.t('login.letsSignUp')}</Text>
        </Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  container: {
    marginHorizontal: 30
  },
  forgetPasswordAlign: {
    marginHorizontal: 15
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 24
  },
  buttonText: {
    textAlign: 'center'
  },
  signUpButton: {
    marginTop: 40
  },
  linkText: {
    fontWeight: 800
  }
});


export default LoginScreen;