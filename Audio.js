import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';
import { Fonts } from './assets/Themes';


export default function Audio() {
  return(
    <View style = {styles.flexParent}>
      <Text style={styles.text}>  My hottest take</Text>
      <View style = {styles.audioBar}>
        <TouchableOpacity>
          <Image source={Icons.player.dark} style={styles.playButton}/>
        </TouchableOpacity>
        <Image source={Icons.audioWave.dark} style={styles.soundWave} resizeMode='contain'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexParent: {

    aspectRatio: 2.3/1,
    backgroundColor: Themes.dark.bgSecondary,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    padding: 16

  },
  text: {
    color: Themes.dark.text,
    fontSize: 28,
    fontFamily: "Sydney",
  },
  audioBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    padding: 10,
  },
  playButton: {
    width: 55,
    height: 55,
    marginRight: 10
  },
  soundWave: {
    width: 244,
    height: 45,
  }

});
