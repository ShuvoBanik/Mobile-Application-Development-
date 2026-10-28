import { StyleSheet, Text, View } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>SB</Text>
      </View>

      <Text style={styles.name}>Shuvo Banik</Text>

      <Text style={styles.role}>Computer Science Student</Text>

      <View style={styles.divider} />

      <Text style={styles.bio}>
        Passionate about UI/UX design, graphic design, and learning mobile
        application development.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 28,
    width: "88%",
    alignItems: "center",
    elevation: 4,
    marginBottom: 20,
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#0d9488",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  avatarText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0d1f4e",
    marginBottom: 6,
  },

  role: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 16,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e2e8f0",
    marginBottom: 16,
  },

  bio: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 22,
  },
});
