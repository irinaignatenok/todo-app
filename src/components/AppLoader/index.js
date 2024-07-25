import React, { useEffect, useState } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import * as database from '../../database/index';

export default function AppLoader({ onTasksLoaded, onNotFound }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            console.log("My Load Function Called");

            try {
                // Prevent the splash screen from auto-hiding
                // await SplashScreen.preventAutoHideAsync();


                const data = await database.load();


                if (data.length === 0) {
                    onNotFound();
                } else {

                    onTasksLoaded(data);

                }


                // Hide the splash screen
                // await SplashScreen.hideAsync();
                console.log("Splash screen hidden");


                setIsLoading(false);
            } catch (error) {
                console.log("Error loading data or hiding splash screen:", error);
                setIsLoading(false);

            }
        };


        loadData();
    }, []); // Dependency array ensures useEffect runs only once


    return null;
}
