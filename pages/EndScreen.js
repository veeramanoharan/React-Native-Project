import { View,Image, StyleSheet,Text } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import CustomButton from "../components/customButton";

function GameEnd({guessCount,userNumber,onRestart}){

    return(
        <View style={styles.rootContainer}>
            <Title >Game Over...!</Title>
            <View>
                 <Image source={require('../assets/images/gameoverImg.png')} style={styles.CircleImg}/>
            </View>
            <View>
                <Text style={styles.endText}>Your opponent needed <Text style={styles.highligtText}> {guessCount} </Text> rounds to guess the number <Text style={styles.highligtText}> {userNumber} </Text></Text>
            </View>
            <CustomButton onButtonPress={onRestart}>Start New Game</CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({

    CircleImg:{
        borderRadius:150,
        width:300,
        height:300, 
        borderWidth:3,
        borderColor:Colors.primary,
        overflow:'hidden',
        margin:50
        // Equal height and width creates square and
        //  border radius with half of the both(h&w) will create a circle.
    },
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent:'center',
        alignItems:'center'

    },
    endText:{
        fontFamily:'PrimaryFont',
        fontSize:18,
        textAlign:'center'

    },
    highligtText:{
        fontFamily:'BoldItalicFont',
        color:'white'
    }
});

export default GameEnd;

