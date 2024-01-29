import { TextInput,View,StyleSheet,Alert } from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionName from "../components/InstructionName";

function HomeScreen({on_confirm}){
    const [inputValue,setInputValue] = useState('');

    function inputHandler(inputText){
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
        on_confirm(enteredNumber);
    }

return(
    <View style={styles.root_container}>
        <Title>Guess the Number</Title>
            <Card>
                <InstructionName instruction_name={"Enter a Number"}/>
                <TextInput style={styles.input_field}
                maxLength={2}
                keyboardType='number-pad'
                value={inputValue}
                onChangeText={inputHandler}
                />
                <View style={styles.buttons_container}>
                    <View style={styles.button_container}>
                    <CustomButton onButtonPress={resetButtonHandler}>Reset</CustomButton>
                    </View>
                    <View  style={styles.button_container}>
                    <CustomButton onButtonPress={confirmButtonHandler}>Confirm</CustomButton>
                    </View>            
                </View>
            </Card>    
    </View>
)
}
export default HomeScreen;

const styles = StyleSheet.create({

    root_container: {
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    input_container: {
        // flex: 1,
        margin_op: 40,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 16,
        backgroundColor:Colors.LGRADIENT1,
        justifyContent:'center',
        alignItems:'center'
    },
    input_field:{
        height:50,
        fontSize: 24,
        width:50,
        borderBottomColor:Colors.LGRADIENT2,
        borderBottomWidth:2,
        color:'white',
        marginVertical: 5,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttons_container:{
        flexDirection:"row"
    },
    button_container:{
        flex:1
    }
});