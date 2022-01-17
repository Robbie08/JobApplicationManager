import React, {useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
function Home(){

    const [user, setUser] = useState('');
    const userEmail = useSelector(state => state.User.email);
   
    useEffect(() => {
        setUser(userEmail);
    }, []);
    
    return(
        <div>
            <h1>Welcome Home, {user}</h1>  
        </div>
    );
}

export default Home;