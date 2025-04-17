import React from 'react';

const Header = ({ title }) => {
    return (
        <>
            <h1 className='fs-5'>{title}</h1>
            <hr />
        </>
    );
};

export default Header;