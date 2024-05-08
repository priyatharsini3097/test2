

import { StyleSheet,Text,View,Button} from "react-native";


function Details(props){
    console.log(props)

  return(
    <View style={styles.viewstyle}>
      <Text  style={styles.heading}>Name details</Text>
      <Text style={styles.textstyle}>Address details</Text>
       <Button title="GO back" onPress={()=>props.navigation.navigate('Home')}></Button> 
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
export default Details;