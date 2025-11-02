import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ContextProvider } from './SrntBlm/srntblmst/serenitybloomctxt';
import SerenityBloomLoader from './SrntBlm/srntblmcm/SerenityBloomLoader';
import { useEffect, useState } from 'react';
import SenerityBloomStack from './SrntBlm/srntblmn/SenerityBloomStack';

const App = () => {
  const [showWelcomeLoader, setShowWelcomeLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeLoader(false);
    }, 5300);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {showWelcomeLoader ? <SerenityBloomLoader /> : <SenerityBloomStack />}
        <Toast position="top" topOffset={53} />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
