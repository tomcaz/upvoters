import React from 'react'

import './styles.css'

const IconButton = ({ icon, handleClick, styles }) => {
    return (
        <button className='icon-button rounded' onClick={handleClick} style={styles}>
            {icon}
        </button>
    )
}

export default IconButton