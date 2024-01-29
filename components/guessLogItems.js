import { View,Text,StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function GuessLogItems({opponent_guess,round_number}){

    return(
        <View style={styles.list_item}>
            <Text style={styles.item_text}>#{round_number}</Text>
            <Text style={styles.item_text}>Opponenet's Guess: {opponent_guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list_item:{
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"100%",
        elevation:2,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity: 0.25,
        shadowRadius:3,
        backgroundColor:Colors.LGRADIENT1
    },
    item_text:{
        fontFamily:'BoldFont',
        
    }
});

export default GuessLogItems;