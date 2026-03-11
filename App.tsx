import SenerityBloomStack from './bloomserenittySrc/bloomserenitynavigtr/SenerityBloomStack';
import { NavigationContainer } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import { ContextProvider } from './bloomserenittySrc/bloomstorecntx/serenitybloomctxt';
import SerenityBloomLoader from './bloomserenittySrc/[bloomserenitycmpnts]/SerenityBloomLoader';
import { useEffect, useState } from 'react';

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
