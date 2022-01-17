import React, {useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as ActionsCreators from '../actions/Actions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

function Home(){

    const [user, setUser] = useState('');
    const [currUser, setCurrUser] = useState({});
    const dispatch = useDispatch();
    //const currUser = useSelector(state => state.User);
    
    onAuthStateChanged(auth, (currentUser) => {
        console.log("inside - onAuth")
        console.log(currentUser);
        setUser(currentUser.email);
        setCurrUser(currentUser);

        // let userData ={
        //     email: currentUser.email,
        //     loginStatus: true,
        // }
        //setCurrUser(userData);
        //dispatch(ActionsCreators.postUserData(userData));
    })


    useEffect(() => {
    }, []);
    
    return(
        <div>
            <h1>Welcome Home, {user}</h1>  
        </div>
    );
}

export default Home;