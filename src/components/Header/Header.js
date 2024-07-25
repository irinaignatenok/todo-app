import { View, Text } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formBackground } from './../../includes/variables'

export default function Header() {
    return (
        <View style={styles.container}>
            {/* <FontAwesome5 name="task" size={24} /> */}
            <View style={styles.logo}>
                <MaterialCommunityIcons name="menu" size={24} color={formBackground} />
                <Text style={styles.title}>Todo App</Text>
                <Text style={styles.title}>by Irina Ignatenok</Text>
            </View>
        </View>
    )
}