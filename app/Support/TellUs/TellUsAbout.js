import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import Back from "../../../assets/Back.png";

const TellUsAbout = () => {
  const options = [
    "Service Related Query",
    "Other",
    "Feedback",
    "Wish To Partner-up",
    "Franchise Related Query",
  ];
  const [agree, setAgree] = useState(false);
  return (
    <SafeAreaView style={Styles.container} className="bg-[#242424] relative">
      <ScrollView>
        <View className="px-5">
          <View className="flex-row  py-3">
            <Image source={Back} className="h-[32px] w-[32px]" />
            <Text className="text-2xl text-white font-semibold px-2">
              Tell Us About It Here
            </Text>
          </View>
          <View className="space-y-4">
            <TextInput
             
              placeholderTextColor="white"
              className=" bg-black border border-white  placeholder-slate-200 text-white rounded-2xl place-items-center h-[40px]"
              placeholder="Full Name"
            />
            <TextInput
             
              placeholderTextColor="white"
              className=" bg-black border border-white  placeholder-slate-200 text-white rounded-2xl place-items-center h-[40px]"
              placeholder="Phone Number"
            />
            <TextInput
             
              placeholderTextColor="white"
              className=" bg-black border border-white  placeholder-slate-200 text-white rounded-2xl place-items-center h-[40px]"
              placeholder="Email"
            />
            <TextInput
             
              placeholderTextColor="white"
              className=" bg-black border border-white plac h-[120px]  placeholder-slate-200 text-white rounded-2xl place-items-center"
              placeholder="Type Your Massege Here"
            />
            <View style={{
    flex: 0.3,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center"
    }}></View>
          </View>
          <View>
            <Text className="text-2xl py-4 text-white font-semibold">
              Please Choose a niche Below:
            </Text>
          </View>
          <View className="pb-20">

          {options.map((item) => (
            <View className="flex-row  items-center space-y-1 text-center ">
              <CheckBox
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? "#4630EB" : undefined}
              />
              <Text className="text-xl px-3 text-white">{item}</Text>
            </View>
          ))}
          </View>
        </View>
      </ScrollView>
      <View className=" w-full bottom-5 absolute">
        <TouchableOpacity className="bg-yellow-300 h-[40px] text-center items-center flex justify-center rounded-2xl mx-5">
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default TellUsAbout;
