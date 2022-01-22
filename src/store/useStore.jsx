import React from 'react';
import create from 'zustand';
//set id
const getId = () => {
    const random = Math.random().toString(36).substr(2);
    const piece = Date.now().toString(36);
    return random + piece
};
//save theme local storage
const colorTheme = (color) => {
    const root = window.document.documentElement;

    //removing dark theme
    root.classList.remove(color === 'dark' ? 'light' : 'dark');

    //addding dark theme
    root.classList.add(color);

    //setting local storage
    window.localStorage.setItem('dark', color);
};
const defaulTheme = localStorage.getItem('dark') || 'light';

//save data from inpute
const saveData = (item) => {
    window.localStorage.setItem('data', JSON.stringify(item));
};

//data middleware
const dataMiddleware = (middleware) => {
    return (state) => {
        const newState = middleware(state);
        saveData(newState.data);
        return newState;
    };
}   


colorTheme(defaulTheme);//const [theme, setDark] = useState(defaulTheme)
const useStore = create(set => ({
    data: JSON.parse(localStorage.getItem('data') || '[]'),
    tracker: '',
    theme: defaulTheme,
    setDark: (color) => {
        set((state => ({
            ...state,
            theme: color,
        })));
        colorTheme(color);
    },

    setTracking: (item) => set((state => ({
        ...state,
        tracker: item
    }))),
    addData: (item) =>
        set((state => {
            const newState = ({
                ...state,
                data: [...state.data, {
                    id: getId(),
                    completed: false,
                    item: item
                },
                ],
            });
            saveData(newState.data);
            return newState;
        })),

    setCheckbox: (id, value) => set((state => ({
        ...state,
        data: state.data.map((element) => ({
            ...element,
            completed: element.id === id ? value : element.completed
        })),
    }))),
    removeData: (toRemove) => set((state => {
        const newState = ({
            data: state.data.filter(
                (item) => item.id !== toRemove.id
            ),

        });
        saveData(newState.data);
        return newState;
    })),
    removeAllData: () => set(dataMiddleware(state => ({
        ...state,
        data: []
    }))),
    removeAllCompleted: () => set(dataMiddleware(state => ({
        ...state,
        data: state.data.filter(element => !element.completed)
    })))
}));
export default useStore
