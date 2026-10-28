import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="dark" />

      <ProfileCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
});
