

 import { Button, StyleSheet,Text,View } from "react-native";
 



function Home(props) {
    console.log(props);

  return(
    <View style={styles.viewstyle}>
      <Text  style={styles.heading}>welcome</Text>
      <Text style={styles.textstyle}>Hello</Text>
      <Button title="User"
      onPress={()=>props.navigation.navigate('User')}></Button>
      <Button title="Detailscreen"onPress={()=>props.navigation.navigate('Details',{name:"priyasasika"})}></Button>
      
    
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
export default Home;