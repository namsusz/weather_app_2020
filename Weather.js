import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA"],
    title: "맑은 하늘이에요! 🌞",
    subtitle: "밖에 산책하러 나갈까요? (~˘▾˘)~",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#292E49", "#536976", "#BBD2C5"],
    title: "천둥이쳐요 🌩⚡",
    subtitle: "무서우니까 이불에 들어가요 (o´〰`o)",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#00467F", "#A5CC82"],
    title: "이슬비가 내려요 ☂",
    subtitle: "혹시 모르니 우산을 챙겨요! ٩(๑•̀o•́๑)و",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#314755", "#26a0da"],
    title: "비가 내려요! ☔",
    subtitle: "우산 챙기고! 늦지않게 서둘러요! ( ง ᵒ̌ ∽ᵒ̌)ง⁼³₌₃",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#CFDEF3", "#E0EAFC"],
    title: "눈이 내려요! 🌨❄",
    subtitle: "같이 눈사람 만들래요? (ง˙∇˙)ว",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "구름이 많아요 ☁",
    subtitle: "기분이 꿀꿀해질거 같아요 ( •᷄⌓•᷅ )",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#8DC26F"],
    title: "",
    subtitle: "",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#304352", "#d7d2cc"],
    title: "",
    subtitle: "",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#9DA1A5", "#354F68"],
    title: "",
    subtitle: "",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#9EA18D", "#404529"],
    title: "",
    subtitle: "",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#555555", "#E8EAE3"],
    title: "",
    subtitle: "",
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#555555", "#98A555"],
    title: "황사에요 😟",
    subtitle: "마스크 꼭 착용하고 나가요! •̀.̫•́✧",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "",
    subtitle: "",
  },
  Squall: {
    iconName: "weather-windy-variant",
    gradient: ["#9CB1CC", "#1F4778"],
    title: "",
    subtitle: "",
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#3B3B3B", "#1B2634"],
    title: "",
    subtitle: "",
  },
};

export default function Weather({ temp, condition, tempmax, tempmin }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        <View style={styles.tempcontainer}>
          <Text style={styles.tempmax}>최고온도 : {tempmax}°</Text>
          <Text style={styles.tempmin}>최저온도 : {tempmin}°</Text>
        </View>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfcontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textcontainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    fontSize: 40,
    color: "white",
    fontWeight: "500",
  },
  title: {
    color: "white",
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: "400",
  },
  subtitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
  },
  tempmax: {
    color: "white",
    fontSize: 25,
    paddingRight: 10,
    fontWeight: "300",
  },
  tempmin: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
  },
  tempcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 10,
  },
});
