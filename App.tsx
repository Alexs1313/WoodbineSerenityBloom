import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ContextProvider } from './serenitybloomSrc/serenitybloomst/serenitybloomctxt';
import SerenityBloomLoader from './serenitybloomSrc/serenitybloomcp/SerenityBloomLoader';
import { useEffect, useState } from 'react';
import SenerityBloomStack from './serenitybloomSrc/serenitybloomnv/SenerityBloomStack';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5300);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isLoading ? <SerenityBloomLoader /> : <SenerityBloomStack />}
        <Toast position="top" topOffset={55} />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
