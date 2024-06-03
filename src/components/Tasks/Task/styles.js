import { StyleSheet } from "react-native";
import { secondaryColor, primaryColor, formBackground, taskBackground } from './../../../includes/variables'
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // backgroundColor: '#f7f2fa',
        backgroundColor: secondaryColor,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#aaa0c2'

    },
    title: {
        color: formBackground,
        fontWeight: 'bold'
    },
    description: {
        color: '#9c9c9c'
    }
})

export default styles;