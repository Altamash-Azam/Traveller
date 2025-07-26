"use client";
import { useTheme } from 'next-themes'

const ChangeTheme = () => {
    const { theme, setTheme } = useTheme();
  return (
    <div>
      <button className='my-50 border-2 p-10 mx-auto border-white' onClick={()=>{setTheme(theme === "light"? "dark": "light")}}>change theme</button>
    </div>
  )
}

export default ChangeTheme
