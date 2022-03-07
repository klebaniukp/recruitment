import React from 'react';
import SearchResultField from '../SearchResultField';

const SearchResult = ({ searchedUsers }) => {
    return (
        <>
            {searchedUsers.map((user) => (
                <div key={user.id}>
                    <SearchResultField value={user.name} />
                </div>
            ))}
        </>
    );
};

export default SearchResult;
