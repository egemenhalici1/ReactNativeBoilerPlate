
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import I18n from '../langs/_i18n';
import { useTheme } from 'react-native-paper';

const MainScreen = ({ navigation }) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={styles.container}>
            <Text>{I18n.t('main.loggedIn')}</Text>
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

export default MainScreen;