import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import { useState } from 'react';
import GameScreen from './pages/GameScreen';
import Colors from './constants/colors';
import GameEnd from './pages/EndScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userInput,setUserInput] = useState();
  const [gameOver,setGameOver] = useState(true);
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
    setGameOver(false);
  }
  let screen =  <HomeScreen onConfirm={InputHandler}/>

  function gameOverHandler(noOfGuess){
    setGameOver(true);
    setGuessCount(noOfGuess);
  }

  function startNewGameHandler(){
    setUserInput(null);
    setGuessCount(0);
  }

  if(userInput){
    screen = <GameScreen userInput={userInput} onCorrectGuess={gameOverHandler}/>
  }

  if(gameOver && userInput){
    screen = <GameEnd userNumber={userInput} guessCount={guessCount} onRestart={startNewGameHandler}/>
  }



  return (
    <LinearGradient colors={[Colors.LGradient1, Colors.LGradient2]} style={styles.homeScreen}>
      <ImageBackground source={require('./assets/images/cubes.jpg')}
       resizeMode={'cover'} 
       style={styles.homeScreen}
       imageStyle={styles.bgImage}
       >
        <SafeAreaView style={styles.homeScreen}>
          {screen}
        </SafeAreaView>
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
