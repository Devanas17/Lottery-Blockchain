import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
}

const NavButton = ({title, isActive}: Props) => {
    const style = {
        button: ' text-white py-2 px-4 rounded hover:bg-[#036756] font-semibold ',
    }
  return (
    <button className={`${isActive && "bg-[#036756]" } ${style.button}`}>{title}</button>
  )
}

export default NavButton