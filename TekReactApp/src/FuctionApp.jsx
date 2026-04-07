import { useState } from 'react';
export const FuctionWithState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <br />
            <h4>Function With State</h4>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    );
}
//export default FuctionComponent;