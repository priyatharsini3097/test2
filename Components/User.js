
import { Button, StyleSheet,Text,View } from "react-native";



function User(props) {
    console.log(props);
   return(
    <View style={styles.viewstyle}>
      <Text  style={styles.heading}>Login your id</Text>
       <Button title="DetailScreen" onPress={()=>props.navigation.navigate('Details',{name:"priyasasika"})}></Button> 
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
export default User;