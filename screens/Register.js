import React from "react";
import {
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const Register = () => {
  return (
    <ScrollView>
      <View>
        <Text>Login</Text>
        <Text>By Signing in you are agreeing</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Our</Text>
          <Text style={{ color: "blue" }}>Terms and privacy policy</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Text style={{ textDecorationLine: "underline" }}>Login </Text>
          <Text>Register </Text>
        </View>
        <View>
          <View style={{ flex: 1 }}>
            <Icon name="mail" size={22} />
            <TextInput placeholder="Email Address" />
          </View>

          <View style={{ flex: 1 }}>
            <Icon name="lock" size={22} />
            <TextInput placeholder="Password" />
            <Icon name="eye" size={22} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <CheckBox />
              <Text>Remember Password</Text>
            </View>

            <Text>Forgot Password</Text>
          </View>

          <TouchableOpacity
            style={{ backgroundColor: "blue", borderRadius: 10 }}
          >
            <Text style={{ color: "white", b }}>Login</Text>
          </TouchableOpacity>
          <Text>or connect with</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Ionicons name="logo-facebook" size={24} />
            <Ionicons name="logo-instagram" size={24} />
            <Ionicons name="logo-pinterest" size={24} />
            <Ionicons name="logo-linkedin" size={24} />
          </View>

          <View>
            <Ionicons name="finger-print-outline" size={30} />
            <Text>Login with touch id</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
