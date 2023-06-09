import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, FeaturedBooks } from "./screens";
const Stack = createNativeStackNavigator();
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    // <Text className="font-bold text-blue-600"> Hello react native</Text>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Featured"
            component={FeaturedBooks}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
