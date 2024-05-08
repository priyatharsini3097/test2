import { Button, StyleSheet,Text,View } from "react-native";

function Help(props){
    console.log(props);
   return(
    <View style={styles.viewstyle}>
      <Text  style={styles.heading}>Course</Text>
      <Text style={styles.textstyle}>Reactnative</Text>
      <Button title="Contact" onPress={()=>props.navigation.navigate('User',{adress:"no 2a 3rd main road"})}></Button>
    </View>
    );
}
const styles = StyleSheet.create({
    viewstyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    textstyle: {
         fontSize: 28,
         color : 'black',
        },

heading: {
    fontSize: 28,
    color:'red',
}
});
export default Help;