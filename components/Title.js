import {Text,StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({children}){

    return(
        <Text style={styles.title}>{children}</Text>
    );
}
export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily:'BoldItalicFont',
        color: 'white',
        backgroundColor:Colors.LGradient2,
        textAlign:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor: Colors.LGradient1,
        padding:20
        
    }
});