import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { useState } from 'react';


export default function App() {

  const handleAddTask = (taskDescription, taskDone) => {
    const updateTasks = [...tasks];
    updateTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone

    })

    setTasks(updateTasks)
  }

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true
    },
    {
      id: uuid(),
      description: "Prepare to the test",
      done: true
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false
    },
  ])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Tasks tasks={tasks} />
      <Form onAddTask={handleAddTask} />
    </View>
  );
}


