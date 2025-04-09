import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Button } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  const router = useRouter()
   
  return (
      <Stack
        screenOptions={{
          headerTitle: "SPC",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
              <Button title="Home" onPress={() => router.replace("/")} />
              {/*<Button title="Login" onPress={() => router.replace("/screens/login")} />*/}
            </View>
          ),
          headerLeft: () => <MaterialCommunityIcons name="dog" size={24} color="black" />
        }} 
      />
  );
}
