import React from 'react'
import PlusIcon from '../icons/plus';
import BinIcon from '../icons/bin';
import VoteItem from '../vote-item';
import IconButton from '../icon-button';

import './styles.css';

const UpVoteList = ({ handleAddVote, handleRemove, id, votes, handleChangeVote }) => {
    return (
        <div className='list-container'>
            <div className='list'>
                {
                    votes.map((vote, index) => (
                        <VoteItem key={index} vote={vote} handleVoteChange={() => handleChangeVote(id, index)} />
                    ))
                }
            </div>
            <div className='list-action'>
                <IconButton icon={<PlusIcon />} handleClick={() => handleAddVote(id)}></IconButton>
            </div>
            <div className='list-action'>
                <IconButton icon={<BinIcon />} handleClick={() => handleRemove(id)}></IconButton>
            </div>
        </div>
    )
}

export default UpVoteList