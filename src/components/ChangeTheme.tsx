"use client";
import { useTheme } from 'next-themes'
import { Switch } from './ui/Switch';

const ChangeTheme = () => {
    const { theme, setTheme } = useTheme();
  return (
    <div className='pt-1'>
      <Switch className='' onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}}/>
    </div>
  )
}

export default ChangeTheme
