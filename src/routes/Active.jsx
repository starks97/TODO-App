import React from 'react'
import Input from '../components/Input';
import Print from '../components/Print';
import useStore from '../store/useStore';
import { useEffect } from 'react';

const Active = () => {
    const setTracking = useStore(state => state.setTracking);
    useEffect(() =>{
        setTracking('active');
    },[setTracking]);
    return (
        <div>
            < Input
                mode="active"  
            />
            <Print/>
        </div>
    )
}

export default Active
