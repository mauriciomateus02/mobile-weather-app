import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./style";

interface IContainerProps{

    children ?: React.ReactNode;
    style?: ViewStyle
}

const Container = (props: IContainerProps) => {
    return(
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

export default Container;