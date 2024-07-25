import { View, Text, TextInput, Switch, Button, Keyboard, Pressable, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import * as database from '../../database/index';
import { primaryColor } from '../../includes/variables'

export default function Form({ navigation, onAddTask }) {

    // States
    const [taskDescription, setTaskDescription] = useState('');

    const [taskDone, setTaskDone] = useState(false);

    const [errorMessage, setErrorMessage] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [savingData, setSavingData] = useState(false);

    const handleAddPress = async () => {
        const validate = [];
        // Validate the data.
        if (taskDescription === "") {
            validate.push('The description is required.');
        }

        if (validate.length > 0) {
            setErrorMessage(validate);
        } else {

            // Call the passed in onAddTask function
            setSavingData(true); // Show loading image
            await onAddTask(taskDescription, taskDone);
            setSavingData(false); // Remove loading image

            // Clear up the form
            setTaskDescription('');
            setTaskDone(false);
            setErrorMessage([]);
            // Go back to the list screen
            navigation.goBack();
        }
    };


    useEffect(() => {
        const getTasks = async () => {
            try {
                const tasksFromFirebase = await database.load();
                setTasks([...tasks, tasksFromFirebase])
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        getTasks();
    }, [])
    const handleLabelPressed = () => {
        setTaskDone(!taskDone)
    }

    const handleDescriptionChange = (value) => {
        setTaskDescription(value)
    }

    const handleStatusChange = (value) => {
        setTaskDone(value)
    }


    if (savingData) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={primaryColor} />
                <Text style={styles.loadingText}>Saving Data!</Text>
                <Text style={styles.loadingText}>Please, wait ...</Text>
            </View>

        )
    }
    return (

        <View style={styles.container}>
            {errorMessage.length > 0 && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorTitle}>Attention:</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
            )}
            <TextInput
                style={styles.textInput}
                placeholder='Enter a task description'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
            />
            <View style={styles.switch}>
                <Pressable onPress={handleLabelPressed}>
                    <Text style={styles.switchText}>Completed:</Text>
                </Pressable >
                <Switch
                    value={taskDone}
                    onValueChange={handleStatusChange}
                />
            </View>

            <Button title='Add' onPress={handleAddPress} style={styles.btn} />
        </View>



    );
}