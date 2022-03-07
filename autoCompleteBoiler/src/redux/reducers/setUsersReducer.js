export const setUsersReducer = (state, action) => {
    try {
        switch (action.type) {
            case 'SET_USERS':
                return action.payload;
            default:
                if (state) {
                    return state;
                } else {
                    return [];
                }
        }
    } catch (error) {
        console.log(error);
    }
};
