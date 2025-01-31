import { Pressable, Text, View, Switch, Platform } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';

export default function Settings() {

    const [reminder, setReminder] = useState(false);
    const [schedule, setSchedule] = useState([])

    const handleReminderPress = async () => {
        if (!reminder) {
            // setReminder(true)
            const scheduled = await scheduledReminder()
            if (scheduled) {
                setReminder(true)
                setSchedule(await getSchedule())
            }
        } else {
            const cancelled = await cancelReminder()
            if (cancelled) {
                setReminder(false)
                setSchedule(await getSchedule())
            }
        }
    }

    // Load Schedule reminders
    useEffect(() => {
        (async () => {
            const previousScheduled = await getSchedule();
            setSchedule(previousScheduled)
            if (previousScheduled.find((item) => item.type === 'reminder')) {
                setReminder(true)
            }
        })
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications:</Text>
            <View style={styles.options.container}>
                <Switch
                    value={reminder}
                    onValueChange={handleReminderPress}
                />
                <Pressable >
                    <Text style={styles.options.label}>
                        Set Daily Reminder
                    </Text>
                </Pressable>
            </View>
            {/* Logs */}
            <View style={styles.logs.container}>
                <Text style={styles.logs.title}>
                    Scheduled Notifications: {schedule.length}
                </Text>
            </View>

        </View>

    )
}

async function scheduledReminder() {
    console.log('Schedule for', Platform.OS)
    try {
        // Check for the permission
        const permission = await Notifications.getPermissionsAsync();
        console.log("Permission,", permission)
        // Permission?
        if (!permission.granted) {
            const request = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true
                }
            })
            console.log("-Request", request)
            if (!request.granted) {
                return false;
            }
        }
        // Schedule a notification.
        const id = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Todo Reminder',
                body: 'Remember to check your tasks',
                sound: true,
                color: '#FF0000',
                priority: Notifications.AndroidNotificationPriority.HIGH,
                badge: 0,
                data: {
                    taskId: 123,
                    title: '',
                    type: 'reminder'
                }

            },
            trigger: {
                hour: 8,
                minute: 0,
                repeats: true
            }
        })
        console.log("Schedule id", id)
        if (!id) {
            return false
        }
        return true
    }
    catch {
        return false
    }
}

async function cancelReminder() {
    let canceled = false
    const schedule = await getSchedule()

    for (const item of schedule) {
        if (item.type === 'reminder') {
            await Notifications.cancelAllScheduledNotificationsAsync(item.id)
            canceled = true;
        }
    }
    return canceled
}


async function getSchedule() {
    const scheduleNotifications = await Notifications.getAllScheduledNotificationsAsync();
    const schedule = [];
    scheduleNotifications.forEach((scheduleNotification) => {
        schedule.push({
            id: scheduleNotification.identifier,
            type: scheduleNotification.content.data.type,
            title: scheduleNotification.content.data.title,
        })
    })
    return schedule
}