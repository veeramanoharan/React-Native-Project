import { View,StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Card({children}){
return(
    <View style={styles.inputContainer}>
        {children}
    </View>
);
}
export default Card;

const styles = StyleSheet.create({

    inputContainer: {
        // flex: 1,
        marginTop: 40,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 16,
        backgroundColor:Colors.LGradient1,
        justifyContent:'center',
        alignItems:'center'
    }
});