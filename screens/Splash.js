import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as WatchModel from "../firebase/watchModel";
import { useDispatch } from "react-redux";
import { addWatch } from "../redux/slice/watchSlice";
import { addField } from "../redux/slice/fieldSlice";
import { useSelector } from "react-redux";

export const Splash = (props) => {
  const navigation = props.nav;
  const dispatch = useDispatch();

  const loadWatchToStore = (doc) => {
    dispatch(
      addWatch({
        id: doc.id,
        name: doc.data().name,
        review: doc.data().review,
        type: doc.data().type,
        country: doc.data().country,
        category: doc.data().category,
        love: doc.data().love,
        img: doc.data().img,
        trailer: doc.data().trailer,
      })
    );
  };

  const loadCountry = (doc) => {
    dispatch(addField({ id: doc.id, country: doc.data().country }));
  };

  useEffect(() => {
    setTimeout(() => {
      // WatchModel.getAllWatches(loadWatchToStore, loadCountry);
      navigation.navigate("TabNav");
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={styles.welcome}>
      <LinearGradient
        colors={["#191919", "#006262"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.6 }}
        style={styles.background}
      ></LinearGradient>
      <View>
        <Text style={styles.welcomeText}>ไออุ่น</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: "900",
    color: "#FAA307",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // fontFamily: "Trirong",
  },
});
