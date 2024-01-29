import { View,StyleSheet,Alert,Text, FlatList } from "react-native";
import Title from "../components/Title";
import { useState,useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import InstructionName from "../components/InstructionName";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItems from "../components/GuessLogItems";

function generateRandomNumber(min,max,exclude){
    const randomNum = Math.floor(Math.random() * (max-min)) + min;

    if(randomNum === exclude){
        return generateRandomNumber(min,max,exclude);
    }
    else{
        return randomNum;
    }
}

let MINLIMIT = 1;
let MAXLIMIT = 100;

function GameScreen({user_input,on_correctguess}){
    const initialGuess = generateRandomNumber(1,100,user_input);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessCount, setGuessCount] = useState([initialGuess])

    useEffect(() => {
        if(currentGuess === user_input){
            on_correctguess(guessCount.length);
        }
    },[currentGuess,user_input,on_correctguess])

    useEffect(() => {
        MAXLIMIT = 1;
        MAXLIMIT = 100;
    },[])
    
    function guessHandler(size){
        if((size === 'smaller' && currentGuess < user_input) || (size === 'greater' && currentGuess > user_input))
        {
            Alert.alert("Don't lie 🤥","Please play fairly...",[
                {text:'Sorry!',style:'cancel'}
            ]);
            return;
        }
        if(size === 'smaller'){
            MAXLIMIT = currentGuess;
        }
        else{
            MINLIMIT = currentGuess + 1;
        }
        console.log(MINLIMIT, MAXLIMIT);
        const newRandomNum = generateRandomNumber(MINLIMIT,MAXLIMIT,currentGuess);
        setCurrentGuess(newRandomNum);
        setGuessCount(prevGuessCount => [newRandomNum,  ...prevGuessCount]);
    }

    console.log("PREV GUESS COUNT:",guessCount);

    const guessCountLength = guessCount.length;
    
return(
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionName  instruction_name={"Greater or Smaller?"}/>
            <View style={styles.buttons_container}>
                <View style={styles.button_container}>
                    <CustomButton onButtonPress={guessHandler.bind(this,'smaller')}>
                    <Ionicons name='remove-sharp' size={24}/>
                    </CustomButton>
                </View>
                <View style={styles.button_container}>
                    <CustomButton onButtonPress={guessHandler.bind(this,'greater')}>
                        <Ionicons name='add-sharp' size={24}/>
                    </CustomButton>
                </View>
            </View>
        </Card>
        <View style={styles.guess_list_container}>
            {/* {guessCount.map(guessCount => <Text key={guessCount}>{guessCount}</Text>)} */}
            <FlatList data={guessCount} renderItem={
                (itemData) => (
                <GuessLogItems 
                    round_number={guessCountLength - itemData.index}
                    opponent_guess={itemData.item} />
                    )}
                    keyExtractor={(item) => item }/>
        </View>
    </View>
)
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 50,
        alignItems:'center'
    },
    buttons_container:{
        flexDirection:'row',
        marginTop:30
    },
    button_container:{
        flex:1,
    },
    guess_list_container:{
        flex: 1,
        padding: 16
    }

   
});