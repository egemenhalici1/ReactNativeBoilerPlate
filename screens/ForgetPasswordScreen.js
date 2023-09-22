
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import I18n from '../langs/_i18n';
import { useTheme } from 'react-native-paper';
import POTextInput from '../customComponents/poInput';

const ForgetPasswordScreen = ({ navigation }) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <POTextInput placeholder={I18n.t('forgetPassword.emailAddress')} />
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}><Text style={[styles.buttonText, { color: theme.colors.secondary }]}>{I18n.t('forgetPassword.sendEmail')}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.forgetPasswordAlign} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.rememberButton}>{I18n.t('forgetPassword.remember')}</Text>
            </TouchableOpacity>
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
    button: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 24
    },
    buttonText: {
        textAlign: 'center'
    },
    rememberButton: {
        marginTop: 40
    },
});

export default ForgetPasswordScreen;