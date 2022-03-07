import React from 'react';
import { useDispatch } from 'react-redux';

const SearchResultField = ({ value }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_USER', payload: value });
    };
    return (
        <p style={{ cursor: 'pointer' }} onClick={() => handleClick()}>
            {value}
        </p>
    );
};

export default SearchResultField;
