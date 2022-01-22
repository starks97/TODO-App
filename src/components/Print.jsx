import React  from 'react'
import useStore from '../store/useStore';
import deleteIcon from'../img/trash.svg'

const Print = ({mode}) => {
    const data = useStore(state =>state.data);
    const setCheckbox = useStore(state => state.setCheckbox);
    const removeData = useStore(state => state.removeData);

    return (
        <div className="flex justify-center mt-5" >
            <nav className="font-normal normal-case">
                <ul>
                    {data.filter(item => mode === 'all' ? true : (mode === 'completed' ? item.completed : !item.completed)).map(item => (
                        <li 
                            className="flex flex-initial gap-5"
                        key={item.id}>
                            <input
                                className="flex-none w-14 h-5"
                                type="checkbox"
                                value ={item.item}
                                checked={item.completed}
                                onChange={e=>setCheckbox(item.id, e.target.checked)}
                            />
                            <label
                                className={["flex-initial w-64 text-black dark:text-orange-800", item.completed ? 'line-through' : ''].join(' ')}
                            >
                                {item.item}
                            </label> 
                            {(mode === 'completed') && (<img 
                            className="flex-initial h-7 dark:invert"
                            onClick={() => removeData(item)}
                                src={deleteIcon}/>)

                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default Print
