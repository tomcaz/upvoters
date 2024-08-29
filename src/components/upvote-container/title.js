import React from 'react'
import PlusIcon from '../icons/plus'

const MainTitle = ({ handleAddList }) => {
    return (
        <>
            Up Vote Container
            <button style={{ float: 'right' }} onClick={handleAddList}><PlusIcon /></button>
        </>
    )
}

export default MainTitle