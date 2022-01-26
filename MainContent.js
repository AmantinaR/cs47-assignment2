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
import ProfileCard from './ProfileCard';
import Audio from './Audio';


export default function MainContent() {
  return(
    <View style = {styles.flexParent}>
      <ProfileCard/>
      <Audio/>
    </View>
  );
}

const styles = StyleSheet.create({
  flexParent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '10%',
    marginTop: '4%',
    marginRight: '2%',
    marginLeft: '2%',
    width: '90%',
    maxWidth: 525,
    alignSelf: 'center',
    
  },

});
