import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Checkbox from "expo-checkbox";

import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [isChecked, setChecked] = useState(true);
  const ValidateLogin = Yup.object().shape({
    password: Yup.string()
      .min(8, "Pssword must me greater that 8 charachters!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must be characters, at least one letter, one number and one special character"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const checked = () => {
    setChecked(false);
  };
  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight, backgroundColor: "#7696db" }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          height: Dimensions.get("window").height * 0.8,
        }}
      >
        <View
          style={{
            padding: 40,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Login</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
              By Signing in you are agreeing
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: 18,
                marginTop: 5,
              }}
            >
              <Text>Our</Text>
              <Text style={{ color: "blue" }}>Terms and privacy policy</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 25,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                marginRight: 10,
                fontWeight: "bold",
                fontSize: 18,
                color: "blue",
              }}
            >
              Login
            </Text>
            <Text style={{ fontSize: 18 }}>Register </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validateOnMount={true}
              validationSchema={ValidateLogin}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
                isValid,
              }) => (
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderBottomColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="mail" size={18} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10 }}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Email Address"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.email && touched.email ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",

                      borderBottomWidth: 1,
                      borderBottomColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="lock" size={22} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10 }}
                      placeholder="Password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: 30,
                        alignItems: "center",
                      }}
                    >
                      <Checkbox value={isChecked} onValueChange={checked} />
                      <Text style={{ marginLeft: 5 }}>Remember Password</Text>
                    </View>

                    <Text style={{ color: "blue" }}>Forgot Password</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#597ac2",
                      borderRadius: 10,
                      height: 35,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                    onPress={handleSubmit}
                  >
                    <Text style={{ color: "white" }}>Login</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <Text style={{ alignSelf: "center" }}>or connect with</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Ionicons name="logo-facebook" size={24} color="blue" />
              <Ionicons name="logo-instagram" size={24} color="blue" />
              <Ionicons name="logo-pinterest" size={24} color="red" />
              <Ionicons name="logo-linkedin" size={24} color="#5679c4" />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          height: Dimensions.get("window").height * 0.2,
        }}
      >
        <TouchableOpacity
          style={{
            height: 80,
            width: 80,
            borderRadius: 10,
            backgroundColor: "#5c87e6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="finger-print-outline" size={40} color="white" />
        </TouchableOpacity>

        <Text style={{ color: "white" }}>Login with touch id</Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
