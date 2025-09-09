import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.png";
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}> My Name Is Harish</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}> My Name Is Latha</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 20,
  },
});
