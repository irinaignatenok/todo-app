import { StyleSheet } from 'react-native';
import { taskBackground } from "./../../includes/variables"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: taskBackground
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
})
export default styles;