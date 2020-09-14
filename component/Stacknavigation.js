import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  let data={ name: 'Prerana', email: 'prerana@gmail.com'}
  
  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Home Screen</Text>
      <Text>Count: {count}</Text>
      {/* navigate is used for to go to another screen */}
      {/* <Button title="Go to details" onPress={() => navigation.navigate('Details')} />   */}
      <Button title="Go to details" onPress={() => navigation.push('Details', data)} />
    </View>
  );
}

// route is use as a props
function DetailScreen({route, navigation}){
  // console.warn(route.params)
  let data = route.params;
  return (
    <View>
      <Text style={{alignItems: 'center', fontSize: 30}}> Detail Screen</Text>
      <Text style={{fontSize: 20}}>{data.name}</Text>
      <Text style={{fontSize: 20}}>{data.email}</Text>
      {/* change title of header using button */}
      <Button title="Update title" onPress={() => navigation.setOptions({title:'Custom Details'})} />
    </View>
  )
}
// we cannot use stacknavigator direct so used executed function
const Stack = createStackNavigator();
//

function App() {
  return (
    // NavigatorContainer use as an wrapper in App component
    <NavigationContainer>
       {/* To set the default screen use initialRouteName */}
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" 
        component={DetailScreen}
        options={{
          title: 'My Details',
          headerStyle: {
            backgroundColor: '#1A73E8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
