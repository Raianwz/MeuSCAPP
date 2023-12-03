import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabHub from "./TabsMenu"; './TabsMenu'
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Menu"
                component={TabHub}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}