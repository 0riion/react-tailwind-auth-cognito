
import { useAwsCognito, useAwsCognitoActions } from '../context/AWSAuthProvider';
import { getUserFromAuth } from '../helper/getUserFromAuth';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useAwsCognito();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromAuth(user),
  };
};

export const useAuthMethod = () => {
  const {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  } = useAwsCognitoActions();

  return {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  };
};
