import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default function AuthProvider({children}) {

    const [ companies, setCompanies ] = useState(null);
    const [ dataLoading, setDataLoading ] = useState(true);
    const [ authLoading , setAuthLoading ] = useState(true);
    const [ currentUser ,setCurrentUser ] = useState(null);
    const [ darkMode, setDarkMode ] = useState(false);
  

    useEffect(()=>{
        fetch('https://brands-shop-server.vercel.app/companies')
        .then(res => res.json())
        .then(data => { 
        setCompanies(data)
        setDataLoading(false)
     })
    },[])

    // useEffect(()=>{
    //   setDarkMode(JSON.parse(localStorage.getItem('dark')));
    // },[])

     // sign up with email & password 
     const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    }

    // login with github
    const loginWithGithub = () => {
      return signInWithPopup(auth, githubProvider);
    }

    // login with email & password
    const loginUser = (email, password ) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user 
    const logOut = () => {
     return signOut(auth);
    }

    // firebase observer
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setCurrentUser(currentUser);
        setAuthLoading(false);
      })
      return ()=>{
        unsubscribe();
      }
    },[])



    const authInfo = { companies, createUser , loginWithGoogle, loginWithGithub ,loginUser, logOut ,currentUser,  darkMode, setDarkMode  }

    if(dataLoading || authLoading ){return  <span className="loading loading-spinner text-black/70 w-9 md:w-10 absolute top-[6%] md:top-[8%] left-2/4"></span>}

  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}
