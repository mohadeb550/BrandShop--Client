import { createContext, useEffect, useState } from "react"


export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

    const [ companies, setCompanies ] = useState(null);
    const [ dataLoading, setDataLoading ] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/companies')
        .then(res => res.json())
        .then(data => { 
        setCompanies(data)
        setDataLoading(false)
     })
    },[])


    const authInfo = { companies }

    if(dataLoading){return  <span className="loading loading-spinner text-red-400 w-9 md:w-10 absolute top-[13%] left-2/4"></span>}

  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}
