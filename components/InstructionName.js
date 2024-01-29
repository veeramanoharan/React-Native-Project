import { View,StyleSheet,Text } from "react-native";
import Colors from "../constants/Colors";

function InstructionName({instruction_name}){
    return(
        <View>
             <Text style={styles.instruction}>{instruction_name}</Text>
        </View>
    );
}
export default InstructionName;

const styles = StyleSheet.create({

    instruction:{
        color:Colors.LGRADIENT2,
        fontSize:24,
        fontWeight:'bold'
    }
});