import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function NotFound() {
  return (
    <>
      <View className="flex flex-grow items-center justify-center align-middle space-y-5">
        <MaterialIcons name="error-outline" size={50} className="text-red-500"></MaterialIcons>
        <Text className="font-bold text-4xl text-red-500 text-center">Page not found.</Text>
        <Text>The path you requested did not match any of the defined routes</Text>
        <Link href={"/"} className="italic hover:underline">
          Go back to Home
        </Link>
      </View>
    </>
  );
}
