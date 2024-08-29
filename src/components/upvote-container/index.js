import React, { useState } from 'react'
import './styles.css'
import UpVoteList from '../upvote-list'
import MainTitle from './title'
import { v4 as uuidv4 } from 'uuid';

const UpVoteContainer = () => {
    const [list, setList] = useState([])

    const handleAddList = () => {
        setList([
            ...list,
            uuidv4()
        ])
    }

    const handelRemove = (id) => {
        setList([
            ...list.filter(val => val !== id),
        ])
    }

    return (
        <div className='container'>
            <MainTitle handleAddList={handleAddList} />
            <div className='vote-list-container'>
                {
                    list.map(id => (
                        <UpVoteList handleRemove={handelRemove} id={id} key={id} />
                    ))
                }
            </div>
        </div>
    )
}

export default UpVoteContainer