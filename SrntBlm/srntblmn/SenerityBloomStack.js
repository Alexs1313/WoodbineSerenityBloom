import { createStackNavigator } from '@react-navigation/stack';
import SenerityBloomTab from './SenerityBloomTab';
import SenerityBloomMeditationDetails from '../srntblms/SenerityBloomMeditationDetails';
import SenerityBloomWelcome from '../srntblms/SenerityBloomWelcome';

const Stack = createStackNavigator();

const SenerityBloomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SenerityBloomWelcome"
        component={SenerityBloomWelcome}
      />
      <Stack.Screen name="SenerityBloomTab" component={SenerityBloomTab} />
      <Stack.Screen
        name="SenerityBloomMeditationDetails"
        component={SenerityBloomMeditationDetails}
      />
    </Stack.Navigator>
  );
};

export default SenerityBloomStack;
