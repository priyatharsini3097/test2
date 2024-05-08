import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import Details from './Components/Details';
import Subscribition from './Components/Subscribition';
import Help from './Components/Help';
import User from './Components/User';

function TabNavigator(){
const Tab = createBottomTabNavigator();
return(
   <Tab.Navigator>
      <Tab.Screen name='Main' component={StackNavigator}/>
      <Tab.Screen name='Subscribition' component={Subscribition}/>
      <Tab.Screen name='Help' component={Help}/>
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
export default  function App (){
   return(
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>

   )
};