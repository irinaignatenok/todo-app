import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    notFoundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: '#444',
        fontSize: 21,
        marginTop: 10
    }
});

export default styles;