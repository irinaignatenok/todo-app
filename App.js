import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import Settings from './src/components/Settings/Settings'
import styles from './src/styles/main';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AppLoader from './src/components/AppLoader';
import { Text } from 'react-native'
import { save } from './src/database';
import * as Notifications from 'expo-notifications';

// Handle Notification display.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  }),
  handleSuccess: (notificationId) => {
    console.log('handler Success', notificationId)
  },
  handleError: (notificationId, error) => {
    console.log("Handle Error", error)
  }
})




const Tab = createBottomTabNavigator();

export default function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);


  const [tasks, setTasks] = useState([]);
  /**
   * Handle Task add in the form
   * @param {*} taskDescription 
   * @param {*} taskDone 
   */
  const handleAddTask = async (taskDescription, taskDone) => {
    console.log("Does it work")
    try {
      // Create a new task object
      const newTask = {
        description: taskDescription,
        done: taskDone,
      };
      console.log("Saving new task:", newTask);

      // Save the new task to the database
      const docId = await save(newTask);
      console.log("Doc Id", docId)

      if (docId) {
        // Assign the returned docId to the newTask object
        newTask.id = docId;
        // Update tasks state 
        setTasks(prevTasks => [...prevTasks, newTask]);

      }
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };


  const handlePostDelete = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    )
    setTasks(filteredTasks)
  }


  const handleTasksLoaded = (loadedTasks) => {
    setTasks(loadedTasks);
    setIsLoading(false);
  };

  const handleNotFound = () => {
    setNotFound(true)
    setIsLoading(false)

  }
  useEffect(() => {
    // Simulating loading data asynchronously
    setTimeout(() => {
      handleNotFound(); // Simulate not found condition
    }, 2000); // Adjust timeout as per your database loading logic
  }, []);
  return (
    <>
      <AppLoader onTasksLoaded={handleTasksLoaded} onNotFound={handleNotFound} />
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header />

          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          ) : (
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: { position: 'absolute' },
              }}
            >
              <Tab.Screen
                name="Tasks"
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="list" size={size} color={color} />
                  ),
                }}
              >
                {(props) => (
                  <Tasks
                    {...props}
                    tasks={tasks}
                    onPostDelete={handlePostDelete}
                    notFound={tasks.length === 0}// Pass notFound state to Tasks component
                  />
                )}
              </Tab.Screen>

              <Tab.Screen
                name='Form'
                options={{
                  tabBarIcon: ({ size, color }) => (
                    <AntDesign name="addfile" size={size} color={color} />
                  ),
                }}
              >
                {(props) => (
                  <Form
                    {...props}
                    onAddTask={handleAddTask}
                    isNotFound={notFound} // Pass notFound state to Form component
                  />
                )}
              </Tab.Screen>
              <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                  tabBarIcon: ({ size, color }) => (
                    <AntDesign name="setting" size={size} color={color} />
                  ),
                }}
              />

              {/* </Tab.Screen> */}
            </Tab.Navigator>
          )}
        </View>
      </NavigationContainer>
    </>
  );

}  
