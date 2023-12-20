import { TextInput,View,StyleSheet,Alert } from "react-native";
import CustomButton from "../components/customButton";
import { useState } from "react";


function HomeScreen(){
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
        console.log("Valid Number...!",enteredNumber);
    }

return(
    <View style={styles.inputContainer}>
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
        
    </View>
)
}
export default HomeScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 100,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 16,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center'
    },
    inputField:{
        height:50,
        fontSize: 24,
        width:50,
        borderBottomColor:'#ddb52f',
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