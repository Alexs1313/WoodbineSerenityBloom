import { createStackNavigator } from '@react-navigation/stack';
import SenerityBloomTab from './SenerityBloomTab';
import SenerityBloomMeditationDetails from '../WudbineSerenityBloomScreens/SenerityBloomMeditationDetails';
import SenerityBloomWelcome from '../WudbineSerenityBloomScreens/SenerityBloomWelcome';

const Stack = createStackNavigator();

const SenerityBloomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SenerityBloomWelcom"
        component={SenerityBloomWelcom}
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
