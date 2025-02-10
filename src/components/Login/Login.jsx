import { GoogleAuthProvider, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";
import {signInWithPopup} from "firebase/auth"
import { useState } from "react";

const Login = () => {
    const[user,setUser] = useState(null);

    const provider = new GoogleAuthProvider()
    // Sign in with google
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,provider)
       
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)
            
        })
        .catch(error=>{
            console.log('Error',error)
            setUser(null)
        })
 
    }
    //Signout 
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('Sign Out Done')
            setUser(null);
        })
        .catch(error=>console.log(error))
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login With Google</button>
            <button onClick={handleSignOut}>Sign Out</button>
            {
                user &&<h3>{user.displayName}</h3>
            }
        </div>
    );
};

export default Login;