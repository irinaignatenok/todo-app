import { View, Text } from 'react-native';
import styles from './styles';


export default function Task(props) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>{props.task.description}</Text>
                <View>
                    <Text style={styles.description}>Id: {props.task.id}</Text>
                    <Text style={styles.description}>Status: {props.task.done ? 'Completed' : 'Open'}</Text>
                </View>
            </View>
        </View>
    )
}