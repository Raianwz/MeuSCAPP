import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from '../../pages/Home'

const Tab = createBottomTabNavigator();

export default function TabHome() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#1f7e0c',
                    tabBarInactiveTintColor: '#bcbcbc',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }

                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
