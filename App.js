import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet,ImageBackground } from 'react-native';
import HomeScreen from './pages/HomeScreen';

export default function App() {
  return (
    <LinearGradient colors={['#8F94FB','#FFB6C1']} style={styles.homeScreen}>
      <ImageBackground source={require('./assets/images/cubes.jpg')}
       resizeMode={'cover'} 
       style={styles.homeScreen}
       imageStyle={styles.bgImage}
       >
        <HomeScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  homeScreen:{
  flex: 1,
  },
  bgImage:{
    opacity:0.30
  }
});
