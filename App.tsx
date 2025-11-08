import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ContextProvider } from './WudbineSerenityBloomSrc/WudbineSerenityBloomStore/serenitybloomctxt';
import SerenityBloomLoader from './WudbineSerenityBloomSrc/WudbineSerenityBloomComponents/SerenityBloomLoader';
import { useEffect, useState } from 'react';
import SenerityBloomStack from './WudbineSerenityBloomSrc/WudbineSerenityBloomNavigation/SenerityBloomStack';

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
        <Toast position="top" topOffset={53} />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
