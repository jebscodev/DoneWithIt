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

    const bgImg = require('../assets/background.jpg');
    const logo = require('../assets/logo-red.png');

    return (
        <ImageBackground source={bgImg} style={styles.backgroundImage}>
            <View style={styles.logoSection}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.textSection}>
                    <Text>Sell What You Don't Need</Text>
                </View>
            </View>
            <View style={styles.buttonSection}>
                <View style={styles.redButton} />
                <View style={styles.greenButton} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        //resizeMode: "cover",
    },
    logoSection: {
        flex: 1,
        alignItems: "center",
        paddingTop: 80,
    },
    logo: {
        height: 100,
        width: 100,
    },
    textSection: {
    },
    text: {
    },
    buttonSection: {
        flex: 1,
        justifyContent: "flex-end",
    },
    redButton: {
        backgroundColor: colors.primary,
        flexBasis: 50,
    },
    greenButton: {
        backgroundColor: colors.secondary,
        flexBasis: 50,
    },
});
