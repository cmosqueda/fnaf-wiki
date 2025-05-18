// tabs layout -> bottom navigation tabs

import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: true, title: "Characters" }}></Tabs.Screen>
        <Tabs.Screen name="games" options={{ headerShown: true, title: "Games" }}></Tabs.Screen>
        <Tabs.Screen name="lore" options={{ headerShown: true, title: "Lore" }}></Tabs.Screen>
        <Tabs.Screen name="books" options={{ headerShown: true, title: "Books" }}></Tabs.Screen>
        <Tabs.Screen name="extras" options={{ headerShown: true, title: "Extras" }}></Tabs.Screen>
      </Tabs>
    </>
  );
}
