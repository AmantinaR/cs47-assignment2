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


export default function NavBar() {
  return(
    <View style = {styles.flexParent}>
      <View style = {styles.flexIcon}>
        <TouchableOpacity>
          <Image source={Icons.discover.dark} style = {styles.icons}/>
        </TouchableOpacity>
        <Text style={styles.text}>Discover</Text>
      </View>
      <View style = {styles.flexIcon}>
        <TouchableOpacity>
          <Image source={Icons.heart.dark} style = {styles.iconHeart}/>
        </TouchableOpacity>
        <Text style={styles.text}>Matches</Text>
      </View>
      <View style = {styles.flexIcon}>
        <TouchableOpacity>
          <Image source={Icons.messages.dark} style = {styles.icons}/>
        </TouchableOpacity>
        <Text style={styles.text}>DMs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexParent: {
    height: Platform.OS === 'ios' ? '8%' : '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    backgroundColor: Themes.dark.navigation
    //borderWidth: 1,
    //borderColor: Themes.dark.text,
  },
  flexIcon: {
    padding: 4,
    width: '10%',
    minWidth: 75,
    height: '90%',
    display: 'flex',
    justifyContent: "center", // if flexDirection === "row", justifyContent handles x-axis, else: y-axis
    alignItems: "center",
    //borderWidth: 1,
    //borderColor: 'black',
  },
  icons: {
    width: 38,
    height: 37,
    //aspectRatio: 1.1/1,

  },
  iconHeart: {
    width: 40,
    height: 35
  },
  text: {
    fontSize: 16,
    color: Themes.dark.textSecondary,
    fontFamily: "Sydney",
  }
});
