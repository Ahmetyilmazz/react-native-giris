import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Video } from "expo-av"; // expo-av kullanılıyor

export default function App() {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaProvider>
      {/* Üst AppBar */}
      <Appbar.Header style={styles.appBar}>
        <Text style={styles.title}>Video Oynatıcı</Text>
      </Appbar.Header>

      {/* Ana İçerik */}
      <View style={styles.container}>
        <Video
          //source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // Video URL'si
          source={require("./assets/bayraktar.mp4")} // Yerel video dosyası
          style={{ width: width * 0.9, height: height * 0.4 }} // Dinamik boyutlandırma
          useNativeControls // Kontrol butonları
          resizeMode="contain" // Videoyu ölçekle
          shouldPlay={false} // Videoyu otomatik oynatma
        />
      </View>

      {/* Alt AppBar */}
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        />
        <Appbar.Action
          icon="mail"
          onPress={() => console.log("Pressed mail")}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log("Pressed label")}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log("Pressed delete")}
        />
      </Appbar>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#6200ee", // Üst bar rengi
    justifyContent: "center", // İçeriği dikeyde ortala
    alignItems: "center", // İçeriği yatayda ortala
  },
  title: {
    color: "#fff", // Başlık rengi
    fontSize: 20, // Yazı boyutu
    fontWeight: "bold", // Yazı kalınlığı
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
