import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import UpVoteList from '../upvote-list'
import MainTitle from './title'
import { v4 as uuidv4 } from 'uuid';
import { MAX_VOTE_PER_LIST } from '../../constants';

const UpVoteContainer = () => {
    const [list, setList] = useState([])
    const saveLock = useRef(false);

    // init loading
    useEffect(() => {
        const list = localStorage.getItem('up-voter')
        try {
            setList(JSON.parse(list))
        } catch (error) {
            setList([])
        }
    }, [])

    // data update
    useEffect(() => {
        if (saveLock.current) {
            localStorage.setItem('up-voter', JSON.stringify(list))
            saveLock.current = false
        }
    }, [list])


    const handleAddList = () => {
        saveLock.current = true
        setList([
            ...list,
            { id: uuidv4(), votes: [] }
        ])
    }

    const handelRemove = (id) => {
        saveLock.current = true
        setList([
            ...list.filter(val => val.id !== id),
        ])
    }

    const handleAddVote = (id) => {
        saveLock.current = true
        setList([
            ...list.map(item => {
                if (item.id === id && item.votes.length < MAX_VOTE_PER_LIST) {
                    item.votes.push(0)
                }
                return item
            }
            )
        ])
    }

    const handleChangeVote = (id, voteIndex) => {
        saveLock.current = true
        setList([
            ...list.map(item => {
                if (item.id === id) {
                    item.votes[voteIndex] = item.votes[voteIndex] === 0 ? 1 : 0
                }
                return item
            }
            )
        ])
    }

    return (
        <div className='container rounded'>
            <MainTitle handleAddList={handleAddList} />
            <div className='vote-list-container'>
                {
                    list.map(({ id, votes }, index) => (
                        <UpVoteList
                            id={id} key={index} votes={votes}
                            handleAddVote={handleAddVote}
                            handleChangeVote={handleChangeVote}
                            handleRemove={handelRemove}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default UpVoteContainer