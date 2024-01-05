import { View,Text,StyleSheet } from "react-native";
import Colors from "../constants/colors";

function GuessLogItems({oppGuess,roundNum}){

    return(
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNum}</Text>
            <Text style={styles.itemText}>Opponenet's Guess: {oppGuess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
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
        backgroundColor:Colors.LGradient1
    },
    itemText:{
        fontFamily:'BoldFont'
    }
});

export default GuessLogItems;