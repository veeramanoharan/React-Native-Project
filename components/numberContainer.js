import { View,Text,StyleSheet,Dimensions } from "react-native";
import Colors from "../constants/Colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.user_input}>{children}</Text>
        </View>
    );
}
export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: Colors.LGRADIENT1,
        backgroundColor:Colors.PRIMARY,
        padding:20,
        borderRadius:5,
        margin: 25,
        alignItems:'center',
        justifyContent:'center',

    },
    user_input:{
        fontSize:24,
        fontWeight:'700',
        color:"white"
    }
});