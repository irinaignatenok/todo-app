import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import Task from './Task/Task';

export default function Tasks(props) {
    const { tasks, onPostDelete, notFound } = props;

    if (notFound) {
        return (
            <View style={styles.loadingContainer}>
                {/* <ActivityIndicator size="large" color="#0000ff" /> */}
                <Text style={styles.loadingText}>Data not found...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} onPostDelete={onPostDelete} />
                ))}
            </ScrollView>
        </View>
    );
}
