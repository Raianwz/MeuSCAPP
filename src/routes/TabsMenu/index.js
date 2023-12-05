import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
//Páginas
import Conta from '../../pages/Conta';
import Pedidos from '../../pages/Pedidos';
import Home from '../../pages/Home'
import Carrinho from '../../pages/Carrinho';
import Notifications from '../../pages/Notifications'

const Tab = createBottomTabNavigator();

export default function TabHome() {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen
                name="Conta"
                component={Conta}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#1f7e0c',
                    tabBarInactiveTintColor: '#bcbcbc',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="person-circle" />
                        }

                        return <Ionicons size={size} color={color} name="person-circle-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={Pedidos}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#1f7e0c',
                    tabBarInactiveTintColor: '#bcbcbc',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="basket" />
                        }

                        return <Ionicons size={size} color={color} name="basket-outline" />
                    }
                }}
            />
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
            <Tab.Screen
                name="Carrinho"
                component={Carrinho}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#1f7e0c',
                    tabBarInactiveTintColor: '#bcbcbc',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="cart" />
                        }

                        return <Ionicons size={size} color={color} name="cart-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="Notificacoes"
                component={Notifications}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#1f7e0c',
                    tabBarInactiveTintColor: '#bcbcbc',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="notifications" />
                        }

                        return <Ionicons size={size} color={color} name="notifications-outline" />
                    }
                }}
            />
        
        </Tab.Navigator>
    )
}
