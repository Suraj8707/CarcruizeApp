import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Back from "../../../assets/Back.png";
import Chatbot from "../../../assets/Chatbot.png";
import Chatbg from "../../../assets/Chatbg.png";
import send from "../../../assets/send.png";
import attachment from "../../../assets/attachment.png";
import mic from "../../../assets/mic.png";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native";

const Chat = () => {
  const HelpList = [
    "Do you offer service for electric Vehicals",
    "My service is taking longer than usual",
    "I want to cancel my service order",
    "How to use wallet cash",
    "Do you offer service for electric Vehicals",
    "I want to cancel my service order",
    "How to use wallet cash",
    "Do you offer service for electric Vehicals",
  ];
  return (
    <SafeAreaView style={styles.container} className="bg-[#242424]">
      <View className="px-5  relative h-full ">
        <View className="flex-row  py-3">
          <TouchableOpacity>
            <Image source={Back} className="h-[32px] w-[32px]" />
          </TouchableOpacity>
          <Text className="text-2xl text-white font-semibold  px-2">
            Chat with us
          </Text>
        </View>
        <View className=" rounded-2xl max-w-full bg-black max-h-[87%] ">
          <ImageBackground source={Chatbg} resizeMode="center">
            <ScrollView className="h-full">
              <View className="flex-row py-4">
                <View className="px-4">
                  <Image className="h-[39px] w-[39px]" source={Chatbot} />
                </View>
                <View className="rounded-2xl">
                  <View className="w-auto">
                    <Text className="text-[20px] bg-[#242424] py-2 px-5 rounded-r-2xl rounded-bl-2xl text-white">
                      How may I Help you?
                    </Text>
                  </View>
                  <View className="bg-[#242424] border border-white rounded-2xl mt-5 p-3">
                    {HelpList.map((item, index) => (
                      <View className="">
                        <TouchableOpacity>
                          <Text className="text-white text-sm py-1">
                            {item}
                          </Text>
                        </TouchableOpacity>
                        <View
                          className={`bg-[#A0A0A0] ${
                            index === HelpList.length - 1 ? "hidden" : undefined
                          } w-auto my-1 h-[1px]`}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
          <View></View>
        </View>
        <View className="flex-row absolute bottom-0 my-4 px-5">
          <View className="flex-row ">
            <TextInput
              placeholder="Write a  message"
              className=" rounded-l-full text-lg bg-[#EDEDED] py-2  w-[72%]"
            />
            <View className="flex-row  bg-[#EDEDED] rounded-r-full py-2">
              <TouchableOpacity>
                <Image className="w-[20px] h-[20px] mx-2" source={attachment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={mic} className="w-[24px] mx-2 h-[24px] " />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={send} className="w-[45px] h-[45px]" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  botbg: {
    backgroundImage: Chatbg,
  },
});
export default Chat;
