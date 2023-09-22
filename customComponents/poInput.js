import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const POTextInput = (props) => {
    const theme = useTheme();


    return (
        <TextInput
            style={[styles.input, { borderColor: theme.colors.inputBorderColor }]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
    },
});


export default POTextInput;