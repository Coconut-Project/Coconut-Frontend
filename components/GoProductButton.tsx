import { Colors } from "@/constants/Colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TShirt } from "./svg/products/T-Shirt";

export function GoProductButton({
  title,
  progress,
  date,
  time,
}: {
  title: string;
  progress: number;
  date: string;
  time: string;
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View style={styles.image_container}>
          <View style={styles.image}>
            <TShirt />
          </View>
        </View>

        <View style={styles.container3}>
          <View style={styles.headerLine}>
            <ThemedText variant="heading3">{title}</ThemedText>
            <ThemedText variant="body">
              {date} - {time}
            </ThemedText>
          </View>

          <View style={styles.progress_bar_container}>
            <LinearGradient
              colors={["#F69030", "#F63030"]}
              style={[styles.progress_bar, { width: `${progress}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>

          <View style={styles.bottomLine}>
            <ThemedText variant="body">
              {progress < 20
                ? "Impact faible"
                : progress < 50
                ? "Impact modéré"
                : "Impact élevé"}
            </ThemedText>
            {/* <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.arrowButton}>
                            <MaterialIcons
                                name={} 
                                size={24} 
                                color="black" 
                            />
                        </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: "auto",
    height: "auto",
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.light.White,
  },
  container2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image_container: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light.lightGreen,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scale: 0.25 }],
  },
  container3: {
    flex: 1,
    justifyContent: "center",
  },
  headerLine: {
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progress_bar_container: {
    width: "auto",
    height: 10,
    backgroundColor: Colors.light.Background,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 8,
    marginTop: 8,
  },
  progress_bar: {
    height: 10,
    borderRadius: 100,
  },
  bottomLine: {
    width: "auto",
    height: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    width: 20,
    height: 15,
  },
});
