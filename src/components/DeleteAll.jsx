import React from 'react'
import deleteAllIcon from'../img/deleteAll.svg'
import useStore from '../store/useStore'
const DeleteAll = ({children}) => {
    //just in case if you want to remove from the all state
    const removeAllData = useStore(state => state.removeAllData);

    const removeAllCompleted = useStore(state => state.removeAllCompleted);
    return (
        <div  className="flex justify-center bg-red-700 rounded-lg w-80 max-w-sm mt-10 hover:bg-red-900 ">
            <img
                className="w-10 "
                src={deleteAllIcon}
                onClick={() => removeAllCompleted()}
            />
        </div>
    )
};
export default DeleteAll
