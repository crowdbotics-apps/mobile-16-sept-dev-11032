import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Input_4: "tetjhjhkh",
    Datepicker_5: new Date("09/16/2020"),
    Input_6: "",
    Toggle_7: true
  }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Button
        textStyle={{
          fontSize: 12,
          color: "#eac2c2",
          textAlign: "center",
          fontFamily: "Roboto-Regular"
        }}
        style={{
          width: 100,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "flex-start",
          fontSize: 12,
          color: "#eac2c2",
          backgroundColor: "#3366FF",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "center",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0,
          height: 100
        }}
        onPress={() => alert("Pressed!")}
      >
        Press me!
      </Button>
      <Text
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "center",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 0,
          textAlign: "center",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "uppercase",
          lineHeight: 12,
          letterSpacing: 0,
          width: 100,
          height: 100
        }}
      >
        Sample text content
      </Text>
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "left",
          fontFamily: "Roboto-Regular"
        }}
        style={{
          width: 100,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "center",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_4}
        onChangeText={nextValue => this.setState({ Input_4: nextValue })}
      />
      <Datepicker
        style={{
          width: 100,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "flex-start",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        date={this.state.Datepicker_5}
        onSelect={nextValue => this.setState({ Datepicker_5: nextValue })}
      />
      <Input
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "left",
          fontFamily: "Roboto-Regular"
        }}
        style={{
          width: 100,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "flex-end",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_6}
        onChangeText={nextValue => this.setState({ Input_6: nextValue })}
      />
      <Toggle
        text="switch ON/OFF"
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "center",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        checked={this.state.Toggle_7}
        onChange={nextChecked => this.setState({ Toggle_7: nextChecked })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disabled={false}
        maximumTrackTintColor="#E4E7ED"
        minimumTrackTintColor="#3366FF"
        thumbTintColor="#3366FF"
        style={{
          width: 100,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "center",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
      />
      <Text
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          alignSelf: "center",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 0,
          textAlign: "center",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "uppercase",
          lineHeight: 12,
          letterSpacing: 0,
          width: 100,
          height: 100
        }}
      >
        Sample text content
      </Text>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
