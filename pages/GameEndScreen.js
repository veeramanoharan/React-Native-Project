import { View,Image, StyleSheet,Text,Dimensions } from "react-native";
import Colors from "../constants/Colors";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";

function GameEndScreen ({guess_count,user_number,on_restart}){

    return(
        <View style={styles.root_container}>
            <Title >Game Over...!</Title>
            <View>
                 <Image source={require('../assets/images/gameoverImg.png')} style={styles.circle_img}/>
            </View>
            <View>
                <Text style={styles.end_text}>Your opponent needed
                    <Text style={styles.highligt_text}> {guess_count} </Text>
                     rounds to guess the number
                    <Text style={styles.highligt_text}> {user_number} </Text>
                </Text>
            </View>
            <CustomButton onButtonPress={on_restart}>Start New Game</CustomButton>
        </View>
    );
}

const DeviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    circle_img:{
        borderRadius: DeviceWidth > 380 ? 75 : 150,
        width: DeviceWidth < 380 ? 150 : 300,
        height: DeviceWidth < 380 ? 150 : 300, 
        borderWidth:3,
        borderColor:Colors.PRIMARY,
        overflow:'hidden',
        margin:50
        // Equal height and width creates square and
        //  border radius with half of the both(h&w) will create a circle.
    },
    root_container:{
        flex: 1,
        padding: 24,
        justifyContent:'center',
        alignItems:'center'

    },
    end_text:{
        fontFamily:'PrimaryFont',
        fontSize:18,
        textAlign:'center'

    },
    highligt_text:{
        fontFamily:'BoldItalicFont',
        color:'white'
    }
});

export default GameEndScreen;

