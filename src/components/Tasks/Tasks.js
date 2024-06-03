import { ScrollView, View } from 'react-native';
import styles from './styles';
import Task from './Task/Task';

export default function Tasks(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {props.tasks.map(
                    (task, index) => (
                        <Task key={index} task={task} />)
                )}
            </ScrollView>
        </View>
    )
}