import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound() {
  return (
    <>
      <View className="flex flex-grow items-center justify-center align-middle">
        <Text className="font-bold text-6xl text-red-500">Page not found.</Text>
      </View>
    </>
  );
}
