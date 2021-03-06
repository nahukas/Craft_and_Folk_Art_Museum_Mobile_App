import React, { Component } from "react";
import {StyleSheet, Text, View, Animated } from "react-native";

export default class ProgressBar extends Component {
  // for some reason this needs to be componentWillMount
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }

  componentWillUnmount() {
    Animated.timing(this.animation, {
      toValue: 0,
      duration: 0
    })
  }
  
  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
      row,
      maxValue
    } = this.props;

    console.log('progressbar props', this.props);

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, maxValue],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    })

    return (
      <View style={[{borderWidth: 2, borderColor: '#4D4D4D', borderRadius: 10, flexDirection: "row", height }, row ? { flex: 1} : undefined ]}>
        <View style={{ flex: 1, borderColor, borderWidth, borderRadius}}>
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
          />
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: barColor
            }}
          />
        </View>
      </View>
    )
  }
}

ProgressBar.defaultProps = {
  height: 10,
  borderColor: "#000",
  borderWidth: 2,
  borderRadius: 4,
  barColor: "green",
  fillColor: "rgba(0,0,0,.5)",
  duration: 300
}