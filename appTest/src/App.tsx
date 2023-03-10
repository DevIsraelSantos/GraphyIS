import { useState } from 'react';

import { Button } from '../../src/index';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button onClick={() => setCount((count) => count + 1)} color={'#ff0'} backgroundColor="#000">
                Aperte o btn: {count}
            </Button>
        </>
    );
}

export default App;
