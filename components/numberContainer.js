import { View,Text,StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.userInput}>{children}</Text>
        </View>
    );
}
export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: Colors.LGradient1,
        backgroundColor:Colors.primary,
        padding:20,
        borderRadius:5,
        margin: 25,
        alignItems:'center',
        justifyContent:'center',

    },
    userInput:{
        fontSize:24,
        fontWeight:'700',
        color:"white"
    }
});