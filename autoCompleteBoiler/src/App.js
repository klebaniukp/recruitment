import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import AutoComplete from './components/AutoComplete';

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({
                    type: 'SET_USERS',
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [dispatch]);

    return (
        <div>
            <AutoComplete />
        </div>
    );
};

export default App;
