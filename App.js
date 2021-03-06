import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Weather from "./Weather";
import axios from "axios";

const API_KEY = "255c6505f7cd60548704c864dbaaf0e6";

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: "",
    condition: "",
    tempmax: "",
    tempmin: "",
  };
  render() {
    const { isLoading, temp, condition, tempmax, tempmin } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        tempmax={Math.round(tempmax)}
        tempmin={Math.round(tempmin)}
      />
    );
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert(
        "위치를 찾을 수 없어요 ( ˃̣̣̥᷄⌓˂̣̣̥᷅ )",
        "위치를 키고 다시 만나요!"
      );
    }
  };
  getWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp, temp_min, temp_max },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(
        lat
      )}&lon=${Math.floor(lon)}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
      tempmax: temp_max,
      tempmin: temp_min,
    });
  };
}
