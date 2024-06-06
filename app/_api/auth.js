import pb from './pocketbase';

export const registerUser = async (email, password) => {
    try {
        const user = await pb.collection('users').create({
            email,
            password,
            passwordConfirm: password,
        });
        return user;
    } catch (error) {
        throw new Error('Error registering user: ' + error.message);
    }
};

export const loginUser = async (email, password) => {
    try {
        const authData = await pb
            .collection('users')
            .authWithPassword(email, password);
        localStorage.setItem('authToken', authData.token);
        return authData;
    } catch (error) {
        throw new Error('Error logging in user: ' + error.message);
    }
};
