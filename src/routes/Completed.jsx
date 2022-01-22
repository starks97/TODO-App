import React from 'react';
import Print from '../components/Print';
import DeleteAll from '../components/DeleteAll';
import useStore from '../store/useStore';
import { useEffect } from 'react';

const Completed = () => {
    const setTracking = useStore(state => state.setTracking);
    useEffect(() =>{
        setTracking('completed');
    },[setTracking]);
    return (
        <>
        <div className=" mx-auto  mt-12 ">
            <Print
                mode="completed"
            />
        </div>
        <div className=" flex justify-center ">
            <DeleteAll/>
        </div>
            
         </>   
        
    )
}

export default Completed
