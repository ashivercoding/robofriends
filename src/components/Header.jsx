import React from 'react';
import CounterButton from './CounterButton';

function Header() {
    return ( 
        <div>
            <h1 className="f1">RoboFriends</h1>
            <CounterButton color={'red'} />
        </div>
    )
}

export default React.memo(Header)