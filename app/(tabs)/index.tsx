import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 1. Deep Neutral Background */}
      <LinearGradient
        colors={["#0A0A0A", "#171717", "#0A0A0A"]}
        style={StyleSheet.absoluteFill}
      />

      {/* 2. Soft "Industrial Glow" Elements */}
      <View style={[styles.circle, styles.circleTop]} />
      <View style={[styles.circle, styles.circleBottom]} />

      {/* Navbar */}
      <View style={styles.navbar}>
        <View>
          <Text style={styles.logo}>
            EAGLE <Text style={{ color: "#F59E0B" }}>ENG.</Text>
          </Text>
          <Text style={styles.logoSub}>Work Management System</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={styles.navText}>Search</Text>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.glassCard}>
          <Text style={styles.heading}>Engineering Operations, Simplified</Text>

          <Text style={styles.subheading}>
            Manage inventory, track sales, and search records with
            precision-engineered tools.
          </Text>

          <View style={styles.buttonRow}>
            <Pressable
              style={({ pressed }) => [styles.primaryButton, pressed && { opacity: 0.9 }]}
              onPress={() => router.push("/inventory")}
            >
              <Text style={styles.primaryButtonText}>Manage Inventory</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.secondaryButton, pressed && { opacity: 0.7 }]}
              onPress={() => router.push("/sales")}
            >
              <Text style={styles.secondaryButtonText}>View Sales</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* Industrial Glow */
  circle: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: 200,
    opacity: 0.15, // Very subtle glow
  },
  navItems: { flexDirection: "row", gap: 18, },
  circleTop: {
    top: -150,
    right: -100,
    backgroundColor: "#F59E0B", // Amber
  },
  circleBottom: {
    bottom: -150,
    left: -100,
    backgroundColor: "#7C3AED", // Deep Violet
  },

  /* Navbar */
  navbar: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  logoSub: {
    fontSize: 10,
    color: "#737373",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  navText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#F59E0B",
    textTransform: "uppercase",
  },

  /* Hero & Glass Card */
  hero: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  glassCard: {
    width: "100%",
    padding: 32,
    borderRadius: 32,
    backgroundColor: "rgba(38, 38, 38, 0.4)", // Dark glass
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FAFAFA",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 38,
  },
  subheading: {
    fontSize: 16,
    color: "#A3A3A3",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },

  /* Buttons */
  buttonRow: {
    width: "100%",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#F59E0B",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 8,
    shadowColor: "#F59E0B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  primaryButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "800",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#404040",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});