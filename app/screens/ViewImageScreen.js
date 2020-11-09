import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
} from 'react-native';
import colors from '../config/colors';

export default function App() {

    const displayImg = require('../assets/chair.jpg');

    return (
        <View style={styles.container}>
            <View style={styles.buttonSections}>
                <View style={styles.redButton} />
                <View style={styles.greenButton} />
            </View>
            <View style={styles.imgageSection}>
                <Image source={displayImg} style={styles.displayImage} resizeMode='cover'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", // default
        justifyContent: "center",
    },
    buttonSections: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
    },
    redButton: {
        backgroundColor: colors.primary,
        flexBasis: 50,
        height: 50,
        left: 20,
    },
    greenButton: {
        backgroundColor: colors.secondary,
        flexBasis: 50,
        height: 50,
        right: 20,
    },
    imgageSection: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    displayImage: {
        height: "100%",
        width: "100%",
    }
});