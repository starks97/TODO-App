import Light from '../img/light.svg'
import black from '../img/black.svg'
import useDarkMode from '../hooks/useDarkMode';
import useStore from '../store/useStore';
const BtnDL = () => {
    const theme = useStore(state => state.theme);
    const setDark = useStore(state => state.setDark);

    const btnColor = () => {
       setDark(theme ==='dark'? 'light' : 'dark');
    };
    return (
        <div className='flex justify-end mt-5 pr-10 '>
            <button 
                onClick={() => btnColor()}
            >
                {theme === 'dark' ? (
                <img
                    src={black}
                    className='w-7 dark:border-orange-400 bg-orange-400'
                />
                ):(
                <img
                    src={Light}
                    className=" w-7 dark:bg-slate-100"
                />
                )}
            </button>
           
        </div>
    );
};

export default BtnDL;
