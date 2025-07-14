import React, {useState} from 'react';

function CounterButton() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={updateCount}>
            Count: {count}
        </button>
    )
}

export default React.memo(CounterButton);