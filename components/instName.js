import { View,StyleSheet,Text } from "react-native";
import Colors from "../constants/colors";

function InstructionName({instName}){
    return(
        <View>
             <Text style={styles.instruction}>{instName}</Text>
        </View>
    );
}
export default InstructionName;

const styles = StyleSheet.create({

    instruction:{
        color:Colors.LGradient2,
        fontSize:24,
        fontWeight:'bold'
    }
});