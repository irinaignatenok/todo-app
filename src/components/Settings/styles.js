import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    options: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
        },
        label: {
            marginLeft: 10,
            fontSize: 17
        }
    },
    logs: {
        container: {
            marginTop: 30
        }, title: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#777777'
        },
        text: {
            fontSize: 12,
            color: '#777777',
            marginTop: 5
        }
    }
})