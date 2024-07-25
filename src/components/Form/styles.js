import { StyleSheet, Platform } from "react-native";
import { formBackground, secondaryColor, taskBackground, primaryColor } from './../../includes/variables'
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // backgroundColor: '#f7f2fa',
        backgroundColor: taskBackground,
        padding: 10,
        flex: 1,

    },
    errorContainer: {
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c00',
        borderLeftColor: '#c00',
        padding: 7,
        backgroundColor: secondaryColor
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
        marginTop: 10,
        backgroundColor: secondaryColor
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 10 : 0
    },
    switchText: {
        color: formBackground,
        fontWeight: 'bold',
        marginRight: Platform.OS === 'ios' ? 10 : 0
    },
    btn: {
        color: '#fff'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: '#444',
        fontSize: 21,
        marginTop: 10
    }
})

export default styles;