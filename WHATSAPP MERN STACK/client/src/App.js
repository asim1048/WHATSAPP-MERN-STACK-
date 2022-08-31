import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId = '615240551037-nqqgaem871oo2kkq6erfcfb754grbcfk.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
