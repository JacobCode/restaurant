import React from 'react';

const Image = ({property}) => {
    return (
        <div className="current-image" style={{backgroundImage: 'url(' + property + ')'}}>
            
        </div>
    )
}

export default Image;