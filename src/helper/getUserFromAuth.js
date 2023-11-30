export const authRole = {
  admin: ['user', 'admin'],
  user: ['user'],
};

export const getUserFromAuth = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.username,
      displayName: user.attributes.name ? user.attributes.name : 'Admin User',
      email: user.attributes.email,
      photoURL: user.photoURL,
      role: authRole.user,
    };
  return user;
};
