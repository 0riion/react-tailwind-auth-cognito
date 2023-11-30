import { Auth } from 'aws-amplify';
import { awsConfig } from '../config/aws-exports';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

const AwsCognitoContext = createContext();
const AwsCognitoActionsContext = createContext();
export const useAwsCognito = () => useContext(AwsCognitoContext);
export const useAwsCognitoActions = () => useContext(AwsCognitoActionsContext);

const AwsAuthProvider = ({ children }) => {
  const [awsCognitoData, setAwsCognitoData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const auth = useMemo(() => {
    Auth.configure(awsConfig);
    return Auth;
  }, []);

  useEffect(() => {
    auth
      .currentAuthenticatedUser()
      .then((user) =>
        setAwsCognitoData({
          user,
          isAuthenticated: true,
          isLoading: false,
        }),
      )
      .catch(() =>
        setAwsCognitoData({
          user: undefined,
          isAuthenticated: false,
          isLoading: false,
        }),
      );
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const user = await Auth.signIn(email, password);
      console.log('user: ', user);
      setAwsCognitoData({
        user: user,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  const signUpCognitoUser = async ({ email, password, name }) => {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
        },
      });
      // INFO: I recommend you to navigate to verify-email and send feedback to user
    } catch (error) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  const confirmCognitoUserSignup = async (username, code) => {
    try {
      await Auth.confirmSignUp(username, code, {
        forceAliasCreation: false,
      });
      // INFO: I recommend you to navigate to sign-in
    } catch (error) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  const forgotPassword = async (username, code) => {
    try {
      await Auth.confirmSignUp(username, code, {
        forceAliasCreation: false,
      });
      // INFO: I recommend you to navigate to sign-in and send feedback
    } catch (error) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  const logout = async () => {
    setAwsCognitoData({ ...awsCognitoData, isLoading: true });
    try {
      await auth.signOut();
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <AwsCognitoContext.Provider
      value={{
        ...awsCognitoData,
        auth,
      }}>
      <AwsCognitoActionsContext.Provider
        value={{
          logout,
          signIn,
          signUpCognitoUser,
          confirmCognitoUserSignup,
          forgotPassword,
        }}>
        {children}
      </AwsCognitoActionsContext.Provider>
    </AwsCognitoContext.Provider>
  );
};

export default AwsAuthProvider;
