import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import verified_symbol from "../../../../assets/verified_symbol.png";
import Back from "../../../../assets/Back.png";
const submit = () => {
  return (
    <SafeAreaView style={styles.container} className="bg-[#242424] ">
      <ScrollView >
        <View className="pb-16 px-5">

        <View className="py-3">
          <Image className="h-[32px] w-[32px]" source={Back} />
        </View>

        <View className="flex h-80 justify-center  items-center">
          <Image className="w-[128px] h-[128px]  " source={verified_symbol} />
        </View>
        <View className="items-center space-y-4">
          <Text className="text-white text-[16px]">
            Your response has been recorded
          </Text>
          <Text className="text-white text-[20px] font-semibold">
            We’ll reach you shortly
          </Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
export default submit;
