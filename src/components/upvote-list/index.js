import React from 'react'
import './styles.css';
import PlusIcon from '../icons/plus';
import BinIcon from '../icons/bin';

const UpVoteList = ({ handleRemove, id }) => {
    return (
        <div className='list-container'>
            <div className='list'>UpVoteList</div>
            <button className='list-action'><PlusIcon /></button>
            <button className='list-action' onClick={() => handleRemove(id)}><BinIcon /></button>
        </div>
    )
}

export default UpVoteList