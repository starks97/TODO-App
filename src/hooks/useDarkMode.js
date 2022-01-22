import { useEffect, useState } from "react";
export default function useDarkMode(){
  const [theme, setTheme] = useState('dark');

  const colorTheme = theme ==='dark'? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    //removing dark theme
    root.classList.remove(colorTheme);

    //addding dark theme
    root.classList.add(theme)
  },[theme, colorTheme]);
  return [colorTheme, setTheme]
};
