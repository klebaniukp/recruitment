import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchResult from './SearchResult';

const AutoComplete = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users);
    const activeUser = useSelector((state) => state.activeUser);

    const [searchedUsers, setSearchedUsers] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch({ type: 'SET_ACTIVE_USER', payload: value });

        const searched = [];
        users.forEach((user) => {
            if (user.name.includes(value)) {
                searched.push(user);
            }
        });

        console.log(searchedUsers);
        setSearchedUsers(searched);
        dispatch({ type: 'SET_SEARCHED_USERS', payload: searchedUsers });
    };

    return (
        <form autoComplete='off'>
            <div className='autocomplete' style={{ width: '300px' }}>
                <label>
                    <input
                        onChange={(e) => handleChange(e)}
                        id='myInput'
                        type='text'
                        name='myCountry'
                        // placeholder={activeUser}
                        value={activeUser}
                    />
                </label>
            </div>
            <div>
                <SearchResult searchedUsers={searchedUsers} />
            </div>
        </form>
    );
};

export default AutoComplete;
