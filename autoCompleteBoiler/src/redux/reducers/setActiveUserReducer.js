export const setActiveUserReducer = (state, action) => {
    try {
        switch (action.type) {
            case 'SET_ACTIVE_USER':
                return action.payload;
            default:
                if (state) {
                    return state;
                } else {
                    return '';
                }
        }
    } catch (error) {
        console.log(error);
    }
};
