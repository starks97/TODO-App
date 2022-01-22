import React, {createRef} from 'react';
import { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import ErrorMessage from './ErrorMessage'

const Input = () => {
    const inputRef = createRef();
    const addData = useStore(state => state.addData);

    //reset input
    const [data, setData] = useState('');

    //error ErrorMessage
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //validate input
        if((inputRef.current.value).length === 0){
            setError(true);
            return;
        }
        setError(false);
        addData(inputRef.current.value)
        
        //reset input
        setData('')
    };
    return (
        <div 
            className="xl:w-full mx-auto text-center mt-5 ">
                {error && <ErrorMessage>!You must to refill the field</ErrorMessage>}
            <form 
                onSubmit={handleSubmit}
                className=" mt-10 flex flex-row justify-center ">
                
                <div>
                    <label htmlFor="add details"></label>
                    <input className="bg-slate-50 shadow-md rounded-md py-3 px-5 xl:w-96 md:w-96 dark:bg-stone-50"
                        type="text"
                        placeholder="add details"
                        ref={inputRef}  
                        value={data}
                        onChange={e => setData(e.target.value)}
                    />
                </div>
                <div>
                    <button className="bg-sky-500 py-3 px-5 text-white rounded-md ml-12 hover:bg-sky-700 dark:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 dark:uppercase"
                        >Add</button>
                </div>
            </form>
        </div>
    )
};
export default Input
