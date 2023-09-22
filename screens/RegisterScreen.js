
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import I18n from '../langs/_i18n';
import { useTheme } from 'react-native-paper';
import POTextInput from '../customComponents/poInput';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterScreen = ({ navigation }) => {
    const theme = useTheme();
    const [date, setDate] = useState(null);
    const [openDatePicker, setOpenDatePicker] = useState(false);

    const onDatePickerChange = (e, selectedDate) => {
        setDate(selectedDate);
        setOpenDatePicker(false);
    };

    const showDatepicker = () => {
        setOpenDatePicker(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <POTextInput placeholder={I18n.t('register.firstName')} />
            <POTextInput placeholder={I18n.t('register.lastName')} />
            <POTextInput placeholder={I18n.t('register.emailPlaceHolder')} />
            <POTextInput placeholder={I18n.t('register.passwordPlaceHolder')} secureTextEntry={true} />
            <TouchableOpacity onPress={showDatepicker}>
                <POTextInput value={date ? date.toDateString() : ""} editable={false} placeholder={I18n.t('register.birthdayPlaceHolder')} />
            </TouchableOpacity>
            {openDatePicker && <DateTimePicker
                onChange={onDatePickerChange}
                value={new Date()} mode="date"
                maximumDate={new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())}
            />}
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}><Text style={[styles.buttonText, { color: theme.colors.secondary }]}>{I18n.t('register.register')}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.forgetPasswordAlign} >
                <Text style={styles.signUpButton}>{I18n.t('register.haveAnAccount')}
                    <Text style={[styles.linkText, { color: theme.colors.primary }]}> {I18n.t('register.letsSignIn')}</Text>
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

export default RegisterScreen;