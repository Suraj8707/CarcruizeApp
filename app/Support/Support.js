import React from "react";
import {Image, ScrollView, StatusBar , TouchableOpacity} from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import arrow from "../../assets/arrow.png";
import { SafeAreaView } from "react-native";
import phone from "../../assets/phone.png";
import map from "../../assets/map.png";
import mail from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import instagram from "../../assets/instagram.png";
import messege from "../../assets/messege.png";

const Support = () => {
  const social = [linkedin, facebook, google, instagram];

  const items = [
    {
      icon: mail,
      tital: "Write To Us",
      para: "Our Friendly team is here to help",
      contact: "Info@carcruize.com",
    },
    {
      icon: map,
      tital: "Visit Us",
      para: "Come say hello at our Office HQ592 & 448 Damodarpur, near Bishwanath Mandir, Dhanbad, Jharkhand 826004",
      contact: "",
    },
    {
      icon: phone,
      tital: "Call Us",
      para: "Our Friendly team is here to help",
      contact: "Info@carcruize.com",
    },
  ];

  return (
    <SafeAreaView className=" pt-14 bg-[#242424] h-full">
      <ScrollView>
      <View className="px-6">
        <Text className="text-[#EFEFEF] text-2xl">
          Looks Like You've Got Something We Can Help With.
        </Text>
        <View className="">
          <TouchableOpacity className="w-full rounded-2xl my-3 bg-black ">
            <View className="flex-row items-center">
              <Text className="text-[#FFFFFF] p-3  text-left text-2xl">
                Talk to us
              </Text>
              <View className="absolute right-4">
                <Image
                  className="h-[26px] w-[26px]  float-right"
                  source={arrow}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full rounded-2xl my-3 bg-black ">
            <View className="flex-row items-center ">
              <Text className="text-[#FFFFFF] p-3 text-left text-2xl">
                FAQs
              </Text>
              <View className="absolute right-4">
                <Image
                  className="h-[26px] w-[26px]  float-right"
                  source={arrow}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-[#EFEFEF] py-2 m-0 font-semibold text-2xl">
          Contact Us
        </Text>
        <View className="w-full rounded-2xl m-0  py-2 bg-black ">
          {items.map(({ tital, icon, para, contact }) => (
            <View className="flex-row  py-2 ">
              <Image
                className="h-[26px] w-[26px] mx-5 my-2 flex  "
                source={icon}
              ></Image>
              <View>
                <Text className="text-[#FFFFFF]  text-left text-2xl">
                  {tital}
                </Text>
                <Text className="text-[#FFFFFF] text-left text-sm w-56">
                  {para}
                </Text>
                <Text className="text-yellow-300 text-left text-sm ">
                  {contact}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Text className="text-[#EFEFEF] font-semibold text-2xl pt-6 pb-2">
          Get in touch with us on:
        </Text>
        <View className="flex-row px-10 items-center rounded-2xl justify-around bg-black">
          {social.map((item) => (
            <TouchableOpacity>
              <Image className="h-[32px] w-[40px] my-3 p-6" source={item} />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <TouchableOpacity>
            <Text className="text-yellow-400 underline m-0 pt-6  text-xl">
              Terms & Conditions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-yellow-400 underline text m-0 p-0 text-xl">
              Privacy Policy
            </Text>
          </TouchableOpacity>
  
        </View>
      </View>
      <View>
   
      </View>
      </ScrollView>
      <TouchableOpacity className="absolute right-1 -bottom-0">
            <Image className="w-[120px] h-[120px]" source={messege} />
          </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Support;
