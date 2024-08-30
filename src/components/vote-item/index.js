import React from 'react'
import VoteIcon from '../icons/vote'
import IconButton from '../icon-button'

import './styles.css'

const VoteItem = ({ vote, handleVoteChange }) => {
    return (
        <div className='vote'>
            <IconButton
                handleClick={handleVoteChange}
                styles={{
                    backgroundColor: vote === 0 ? '#F4F6F8' : '#E5E8FD'
                }}
                icon={
                    <VoteIcon state={vote} />
                }
            />
        </div>
    )
}

export default VoteItem