import { View,StyleSheet,Dimensions } from "react-native";
import Colors from "../constants/Colors";


const DeviceWidth = Dimensions.get('screen').width

function Card({children}){
return(
    <View style={styles.input_container}>
        {children}
    </View>
);
}
export default Card;

const styles = StyleSheet.create({

    input_container: {
        // flex: 1,
        marginTop: DeviceWidth < 380 ? 18 : 36,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 16,
        backgroundColor:Colors.LGRADIENT1,
        justifyContent:'center',
        alignItems:'center'
    }
});