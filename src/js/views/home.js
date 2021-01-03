import { useState } from 'react';

const Home = () => {

    // map https://www.youtube.com/watch?v=tHjxSVaj_wY
    const [name, setName] = useState('Pepe');
    
    const handleClick = () => {
        console.log('hi there');
        setName('lol');
    }
    
    const handleClickAgain = (name, e) => {
        console.log('hi there ' + name, e.target );
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{ name }</p>
            <button type="button" onClick={handleClick}>Click Me!</button>
            <button type="button" onClick={(e) => {handleClickAgain('Diego', e)}}>Click Me Again!</button>
        </div>
    );
}
 
export default Home;