


import { Button, StyleSheet,Text,View } from "react-native";



function Subscribition(props){
    console.log(props);
  return(
    <View style={styles.viewstyle}>
      <Text  style={styles.heading}>Subscribe</Text>
      <Text style={styles.textstyle}>Only prime user</Text>
      <Button title="pay" onPress={()=>props.navigation.navigate('Details',{adress:"no 2a 3rd main road"})}></Button>
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
export default Subscribition;