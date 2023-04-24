import { StatusBar } from "expo-status-bar";

import { Image, SafeAreaView, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <View className="bg-content pt-10 h-full">
        <Image source={require("../assets/Logo.png")} />
        <Text>sadasda</Text>
      </View>
    </SafeAreaView>
  );
}
