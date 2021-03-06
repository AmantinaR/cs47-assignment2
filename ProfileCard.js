import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';
import { Fonts } from './assets/Themes';


export default function ProfileCard() {
  return(
    <View style = {styles.flexParent}>
      <ImageBackground source={Profiles.mtl.image} style={styles.image} imageStyle={styles.image}>
        <Text style={styles.nameText}>{Profiles.mtl.name}</Text>
        <Text style={styles.captionText}>{Profiles.mtl.caption}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  flexParent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  imagebkd: {

  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',

    borderRadius: 12,
    aspectRatio: 1/1.1,
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    shadowOffset: Themes.dark.shadows.shadowOffset,
    padding: 10

  },
  text: {
    color: 'white',
    fontSize: 32,
  },
  nameText: {
    color: Themes.dark.text,
    fontSize: 32,
    fontFamily: "Sydney",

  },
  captionText: {
    color: Themes.dark.text,
    fontSize: 18,
    fontFamily: "Sydney",
    
  },
});
