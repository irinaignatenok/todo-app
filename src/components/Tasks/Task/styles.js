import { registerCallableModule, StyleSheet } from "react-native";
import { secondaryColor, formBackground } from './../../../includes/variables'
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // backgroundColor: '#f7f2fa',
        backgroundColor: secondaryColor,
        margin: 7,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#aaa0c2'

    },
    title: {
        color: formBackground,
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        color: '#9c9c9c'
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    modalBox: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 30,
        width: '70%',
        borderRadius: 15,
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    modalAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
        // backgroundColor: 'red'
    },
    deleteBtn: {
        marginLeft: 20
    },
    publishTitle: {
        marginRight: 10
    }
})

export default styles;