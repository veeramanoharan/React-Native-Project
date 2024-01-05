import { TextInput,View,StyleSheet,Alert } from "react-native";
import CustomButton from "../components/customButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/card";
import InstructionName from "../components/instName";

function HomeScreen({onConfirm}){
    const [inputValue,setInputValue] = useState('');

    function InputHandler(inputText){
        setInputValue(inputText);
    }

    function resetButtonHandler(){
        setInputValue('');
    }

    function confirmButtonHandler(){
        const enteredNumber = parseInt(inputValue);

        if(isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert('Invalid Number!',
            'Ensure that the provided number falls within the range of 0 to 99',
            [{text:"OK", style:'destructive',onPress: resetButtonHandler}]
            );
            return;
        }
        onConfirm(enteredNumber);
    }

return(
    <View style={styles.rootContainer}>
        <Title>Guess the Number</Title>
            <Card>
                <InstructionName instName={"Enter a Number"}/>
                <TextInput style={styles.inputField}
                maxLength={2}
                keyboardType='number-pad'
                value={inputValue}
                onChangeText={InputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <CustomButton onButtonPress={resetButtonHandler}>Reset</CustomButton>
                    </View>
                    <View  style={styles.buttonContainer}>
                    <CustomButton onButtonPress={confirmButtonHandler}>Confirm</CustomButton>
                    </View>            
                </View>
            </Card>    
    </View>
)
}
export default HomeScreen;

const styles = StyleSheet.create({

    rootContainer: {
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    inputContainer: {
        // flex: 1,
        marginTop: 40,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 16,
        backgroundColor:Colors.LGradient1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputField:{
        height:50,
        fontSize: 24,
        width:50,
        borderBottomColor:Colors.LGradient2,
        borderBottomWidth:2,
        color:'white',
        marginVertical: 5,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:"row"
    },
    buttonContainer:{
        flex:1
    }
});