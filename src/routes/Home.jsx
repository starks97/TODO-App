import React from 'react'
import Input from '../components/Input';
import Print from '../components/Print';
import useStore from '../store/useStore';
import { useEffect } from 'react';
const Home = () => {
    const setTracking = useStore(state => state.setTracking);
    useEffect(() =>{
        setTracking('all');
    },[setTracking]);
    return (
        <div>
            < Input />
            < Print 
                mode= "all"
            />
        </div>
    )
}

export default Home


