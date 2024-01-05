import { View,StyleSheet,Alert,Text, FlatList } from "react-native";
import Title from "../components/Title";
import { useState,useEffect } from "react";
import NumberContainer from "../components/numberContainer";
import CustomButton from "../components/customButton";
import Card from "../components/card";
import InstructionName from "../components/instName";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItems from "../components/guessLogItems";

function generateRandomNumber(min,max,exclude){
    const randomNum = Math.floor(Math.random() * (max-min)) + min;

    if(randomNum === exclude){
        return generateRandomNumber(min,max,exclude);
    }
    else{
        return randomNum;
    }
}

let minLimit = 1;
let maxLimit = 100;

function GameScreen({userInput,onCorrectGuess}){
    const initialGuess = generateRandomNumber(1,100,userInput);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessCount, setGuessCount] = useState([initialGuess])

    useEffect(() => {
        if(currentGuess === userInput){
            onCorrectGuess(guessCount.length);
        }
    },[currentGuess,userInput,onCorrectGuess])

    useEffect(() => {
        minLimit = 1;
        maxLimit = 100;
    },[])
    
    function guessHandler(size){
        if((size === 'smaller' && currentGuess < userInput) || (size === 'greater' && currentGuess > userInput))
        {
            Alert.alert("Don't lie 🤥","Please play fairly...",[
                {text:'Sorry!',style:'cancel'}
            ]);
            return;
        }
        if(size === 'smaller'){
            maxLimit = currentGuess;
        }
        else{
            minLimit = currentGuess + 1;
        }
        console.log(minLimit,maxLimit);
        const newRandomNum = generateRandomNumber(minLimit,maxLimit,currentGuess);
        setCurrentGuess(newRandomNum);
        setGuessCount(prevGuessCount => [newRandomNum,  ...prevGuessCount]);
    }

    console.log("PREV GUESS COUNT:",guessCount);

    const guessCountLength = guessCount.length;
    
return(
    <View style={styles.screen}>
        <Title>Oppnent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionName  instName={"Greater or Smaller?"}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <CustomButton onButtonPress={guessHandler.bind(this,'smaller')}>
                    <Ionicons name='remove-sharp' size={24}/>
                    </CustomButton>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton onButtonPress={guessHandler.bind(this,'greater')}>
                        <Ionicons name='add-sharp' size={24}/>
                    </CustomButton>
                </View>
            </View>
        </Card>
        <View style={styles.guessListContainer}>
            {/* {guessCount.map(guessCount => <Text key={guessCount}>{guessCount}</Text>)} */}
            <FlatList data={guessCount} renderItem={
                (itemData) => (
                <GuessLogItems 
                    roundNum={guessCountLength - itemData.index}
                    oppGuess={itemData.item} />
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
        padding: 50
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:30
    },
    buttonContainer:{
        flex:1,
    },
    guessListContainer:{
        flex: 1,
        padding: 16
    }

   
});