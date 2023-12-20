import { View,Text,StyleSheet,Pressable } from "react-native";


function CustomButton({children,onButtonPress}){

    return(
        <View style={style.buttonContainer}>
            <Pressable style={({pressed}) => pressed ? 
                [style.buttonColor, style.iosButton] : style.buttonColor}
             onPress={onButtonPress} android_ripple={{color:'#ddc42f'}}>
                 <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}

export default CustomButton;

const style = StyleSheet.create({
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    buttonColor:{
        backgroundColor:'#ddb52f',
        paddingVertical:10,
        paddingHorizontal:20,
        elevation:2,
    },
    buttonContainer:{
        borderRadius:20,
        margin:5,
        overflow:'hidden'
    },
    iosButton:{
        opacity:0.75
    }
})