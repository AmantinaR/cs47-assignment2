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
          <Image source={Icons.menu.dark} style = {styles.icons}/>
        </TouchableOpacity>
      </View>
      <View style = {styles.flexLogo}>
        <TouchableOpacity>
          <Text style = {styles.logo}>ensom</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.flexIcon}>
        <TouchableOpacity>
          <Image source={Icons.moon} style = {styles.icons}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexParent: {
    height: Platform.OS === 'ios' ? 54 : 41,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  flexIcon: {
    padding: 10,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",

  },
  icons: {
    width: 44,
    height: 44,
  },
  flexLogo: {
    width: 150,
    height: 50,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontFamily: "Sydney-Bold",
    color: Themes.dark.text,
    fontSize: 32,
  },
});
