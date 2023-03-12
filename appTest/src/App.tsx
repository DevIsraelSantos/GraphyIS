import { Graph } from '../../src/index';
import styled from 'styled-components';

function App() {
    return (
        <Container>
            <Graph />
        </Container>
    );
}

export default App;

const Container = styled.div`
    border: 1px dashed black;
    width: 700px;
    height: 700px;
    margin: 10px;
    padding: 0;
`;
