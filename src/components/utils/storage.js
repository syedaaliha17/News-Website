
const UserKey = 'News_clone_user';

const storeUser = async user => {
  try {
    await localStorage.setItem(UserKey, JSON.stringify(user));
  } catch (error) {
    console.log(error);
    console.log('Error saving user.');
  }
};

const getUser = async () => {
  try { 
    const user = await localStorage.getItem(UserKey);
    return JSON.parse(user);
  } catch (error) {
    console.log('Error getting the user');
  }
};

const removeUser = async () => {
  try {
    await localStorage.removeItem(UserKey);
  } catch (error) {
    console.log('Error deleting the user');
  }
};

//User

export {storeUser, getUser, removeUser};
