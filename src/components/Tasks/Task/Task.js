import { View, Text, Pressable, Modal, Switch, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import * as database from '../../../database';
import { primaryColor } from '../../../includes/variables'


export default function Task(props) {
    const { task } = props;
    // console.log('ID all:', props)

    const [showModal, setShowModal] = useState(false)

    const [taskDone, setTaskDone] = useState(false);
    const [savingData, setSavingData] = useState(false);



    const handleStatusChange = async (value) => {
        // setTaskDone(value)
        try {
            // Update the database
            await database.update(task.id, { done: !value });

            // Update local state
            setTaskDone(value);
        } catch (error) {
            console.error("Error updating task:", error);
            Alert.alert("Error", "There was an error trying to update task");
        }
    };


    const handleDeletePress = () => {
        Alert.alert(
            'Delete Post',
            `This message will delete the task ${props.description}. \n\n Are you sure?`,
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        setSavingData(true);
                        try {
                            const deleted = await database.remove(props.task.id);
                            if (deleted) {
                                props.onPostDelete(props.task.id);
                                handleModalToggle();
                            } else {
                                Alert.alert("Error", "There was an error trying to delete");
                                // TODO prevent in Redux deleting
                            }
                        } catch (error) {
                            console.error("Error deleting task:", error);
                            Alert.alert("Error", "There was an error trying to delete");

                        } finally {
                            setSavingData(false);
                        }
                    }
                },
                { text: 'No' }
            ]
        );
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    if (savingData) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={primaryColor} />
                <Text style={styles.loadingText}>Deleting Data!</Text>
                <Text style={styles.loadingText}>Please wait...</Text>
            </View>
        );
    }


    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={handleModalToggle}>
                    <View >
                        <Text style={styles.title}>{props.task.description}</Text>
                        <View>
                            <Text style={styles.description}>Id: {props.task.id}</Text>
                            <Text style={styles.description}>Status: {taskDone ? 'Open' : 'Completed'}</Text>
                        </View>
                    </View>
                </Pressable>
            </View>

            <Modal visible={showModal} animationType='slide' transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <View style={styles.headerModal}>
                            <Text style={styles.title}>{props.task.description}</Text>
                            <Pressable onPress={handleModalToggle}>
                                <AntDesign
                                    name="closesquare" size={24} color="red" />
                            </Pressable>
                        </View>
                        <View style={styles.modalAction}>
                            <Text style={styles.publishTitle}>Status</Text>
                            <Switch
                                value={taskDone}
                                onValueChange={handleStatusChange}
                            />
                            <AntDesign.Button
                                style={styles.deleteBtn}
                                name="delete"
                                size={24}
                                color="#cc0000"
                                backgroundColor='transparent'
                                underlayColor='#ffdddd'// cnange background color of the buttonon
                                onPress={handleDeletePress}
                            >Delete</AntDesign.Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}