import React, { useState } from 'react'
import SwipeButtons from '../../components/SwipeButtons/SwipeButtons';
import Header from "../../components/Header/Header";
import TinderCard from 'react-tinder-card'
import './TinderCard.css'

function TinderCards() {
    
    const [people, setPeople] = useState([
        {
            name: 'athena',
            photo: 'https://avatars3.githubusercontent.com/u/23267293?s=460&u=cb2237120aba2f1292658bd815effe0f0cb304a3&v=4'
        },
        {
            name: 'josy',
            photo: 'https://avatars2.githubusercontent.com/u/43102874?s=400&u=8030cb9021983e9ff6d5f4fb381072fde0265cb7&v=4'
        },
        {
            name: 'vito',
            photo: 'https://avatars1.githubusercontent.com/u/37223412?s=400&u=f92c051d32393da9d9a2d4e99e1bd4f118904c32&v=4'
        }

    ]);

    //setPeople([...people, 'athena', 'josy', 'vito'])
    return (
        <React.Fragment>

        <Header />
        <div>
            <div className="tinderContainer">

                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div className="card" style={{ backgroundImage: `url(${person.photo})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
        <SwipeButtons />

        </React.Fragment>

    )
}

export default TinderCards
