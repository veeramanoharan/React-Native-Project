import { View,Text,StyleSheet,Pressable } from "react-native";
import Colors from "../constants/Colors";

function CustomButton({children,onButtonPress}){

    return(
        <View style={style.button_container}>
            <Pressable style={({pressed}) => pressed ? 
                [style.button_color, style.ios_button] : style.button_color}
             onPress={onButtonPress} android_ripple={{color:'#FFB6B1'}}>
                 <Text style={style.button_text}>{children}</Text>
            </Pressable>
        </View>

    )
}

export default CustomButton;

const style = StyleSheet.create({
    button_text:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontWeight:'600'
    },
    button_color:{
        backgroundColor: Colors.LGRADIENT2,
        paddingVertical:10,
        paddingHorizontal:20,
        elevation:2,
    },
    button_container:{
        borderRadius:20,
        margin:5,
        overflow:'hidden'
    },
    ios_button:{
        opacity:0.75
    }
})