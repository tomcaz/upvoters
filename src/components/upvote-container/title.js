import React from 'react'
import PlusIcon from '../icons/plus'
import IconButton from '../icon-button'

const MainTitle = ({ handleAddList }) => {
    return (
        <>
            <span className='main-title'>Up Voters</span>
            <IconButton styles={{ float: 'right', marginTop: '-12px' }} handleClick={handleAddList} icon={<PlusIcon />}></IconButton>
        </>
    )
}

export default MainTitle