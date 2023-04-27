import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  
} from "react-native";
import Home from "../assets/Home.png";
import dashboard from "../assets/dashboard.png";
import cart from "../assets/cart.png";
import support from "../assets/support.png";
import wallet from "../assets/wallet.png";

export default function App() {
  const icons = [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: dashboard },
    { name: "Cart", icon: cart },
    { name: "Wallet", icon: wallet },
    { name: "Support", icon: support },
  ];
  return (
    <SafeAreaView className="bottom-2 flex border ">
      <View className="  flex-row  bg-black items-center justify-around ">
        {icons.map(({ name, icon }) => (
          <TouchableOpacity>
            <View>
              <Image
                className="items-center flex justify-center"
                source={icon}
              />
              <Text className="text-white text-center">{name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
