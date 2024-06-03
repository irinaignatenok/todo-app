import { StyleSheet, Platform } from "react-native";
import { formBackground, secondaryColor, primaryColor } from './../../includes/variables'
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // backgroundColor: '#f7f2fa',
        backgroundColor: formBackground,
        padding: 10
    },
    errorContainer: {
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c00',
        borderLeftColor: '#c00',
        padding: 7,
        backgroundColor: '#fff'
    },
    errorMessage: {
        color: '#c00'
    },
    errorTitle: {
        color: '#c00',
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: 5,
        backgroundColor: '#fff'
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 10 : 0
    },
    switchText: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: Platform.OS === 'ios' ? 10 : 0
    },
    btn: {
        color: '#fff'
    }
})

export default styles;