import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import { useState } from 'react';
import GameScreen from './pages/GameScreen';
import Colors from './constants/Colors';
import GameEndScreen from './pages/GameEndScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userInput,setUserInput] = useState();
  const [isGameOver,setIsGameOver] = useState(true);
  const [guessCount, setGuessCount] = useState(0);

  const [fontsLoaded]= useFonts({
    'PrimaryFont': require('./assets/fonts/NeueHaasDisplay-Mediu.ttf'),
    'BoldFont':require('./assets/fonts/NeueHaasDisplay-Bold.ttf'),
    'BoldItalicFont': require('./assets/fonts/NeueHaasDisplay-BoldItalic.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  function InputHandler(InputNumbers){
    setUserInput(InputNumbers);
    setIsGameOver(false);
  }
  let screen =  <HomeScreen on_confirm={InputHandler}/>

  function gameOverHandler(noOfGuess){
    setIsGameOver(true);
    setGuessCount(noOfGuess);
  }

  function startNewGameHandler(){
    setUserInput(null);
    setGuessCount(0);
  }

  if(userInput){
    screen = <GameScreen user_input={userInput} on_correctguess={gameOverHandler}/>
  }

  if(isGameOver && userInput){
    screen = <GameEndScreen user_number={userInput} guess_count={guessCount} on_restart={startNewGameHandler}/>
  }



  return (
    <LinearGradient colors={[Colors.LGRADIENT1, Colors.LGRADIENT2]} style={styles.home_screen}>
      <ImageBackground source={require('./assets/images/cubes.jpg')}
       resizeMode={'cover'} 
       style={styles.home_screen}
       imageStyle={styles.bg_image}
       >
        <SafeAreaView style={styles.home_screen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  home_screen:{
  flex: 1,
  },
  bg_image:{
    opacity:0.30
  }
});
