import React from 'react';

const Film = ({name, children}) => {
    return(
        <div className="film">
            <h3>{children}</h3>
            <h3>{name}</h3>
        </div>
    )
}

export default Film;