import {Text,StyleSheet } from "react-native";
import Colors from "../constants/Colors";

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
        backgroundColor:Colors.LGRADIENT2,
        textAlign:'center',
        overflow:'hidden',
        borderWidth:1,
        borderRadius:5,
        borderColor: Colors.LGRADIENT1,
        padding:12,
        maxWidth:'80%',
        width:300,
        
        
    }
});