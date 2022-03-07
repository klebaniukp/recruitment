export const setActiveUsers = (searchedUsers) => (dispatch) => {
    try {
        dispatch({
            type: 'SET_ACTIVE_USER',
            payload: searchedUsers,
        });
    } catch (error) {
        console.log(error);
    }
};
