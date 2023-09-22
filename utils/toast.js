import Toast from 'react-native-toast-message';

export function showToastMessage(type, header, message) {
    Toast.show({
        type,
        text1: header,
        text2: message
    });
}