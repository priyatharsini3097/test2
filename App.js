import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Components/Home';
import Details from './Components/Details';
import Subscribition from './Components/Subscribition';
import Help from './Components/Help';
import User from './Components/User';

function TabNavigator(){
const Tab = createBottomTabNavigator();
return(
   <Tab.Navigator initialRouteName='drawer' screenOptions={{headerShown:false}}>
       <Tab.Screen name='Main' component={StackNavigator}/> 
      {/* <Tab.Screen name='Home' component={Home}/> */}
      <Tab.Screen name='Subscribition' component={Subscribition}/>
      <Tab.Screen name='Help' component={Help}/>
      <Tab.Screen name='drawer' component={MyDrawer}/>
     </Tab.Navigator>
    );
}

function StackNavigator(){
  const Stack = createNativeStackNavigator();
   return(
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Details' component={Details}/>
      <Stack.Screen name='User' component={User}/>
      </Stack.Navigator>
   );
}
function MyDrawer() {
   const Drawer = createDrawerNavigator();

   return(

      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="User" component={User} />
      <Drawer.Screen name="Subscribition" component={Subscribition} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
   )

}
export default  function App (){
   return(
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>

   )
};