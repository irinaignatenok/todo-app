import { View, Text, TextInput, Switch, Button, Keyboard, Pressable } from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function Form(props) {
    const handleAddPress = () => {
        if (taskDescription) {
            props.onAddTask(taskDescription, taskDone);

            setErrorMessage(null);
            setTaskDescription('');
            setTaskDone(false);

            Keyboard.dismiss()
        } else {
            setErrorMessage('The description is required')
        }

    }
    const handleLabelPressed = () => {
        setTaskDone(!taskDone)
    }

    const handleDescriptionChange = (value) => {
        setTaskDescription(value)
    }

    const handleStatusChange = (value) => {
        setTaskDone(value)
    }
    // States
    const [taskDescription, setTaskDescription] = useState('');

    const [taskDone, setTaskDone] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);


    return (

        <View style={styles.container}>
            {errorMessage && (
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