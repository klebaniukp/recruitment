export const setUsers = (users) => (dispatch) => {
    try {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
    } catch (error) {
        console.log(error);
    }
};
