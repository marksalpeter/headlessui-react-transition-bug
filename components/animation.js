import { useEffect, useLayoutEffect, useState } from "react"
import { Transition } from "@headlessui/react"

export default function Animation({ show }) {
  const [message, setMessage] = useState("")
  useEffect(()=>setMessage("this causes appear={false} to fail due to the re-render!"),[]);
  return <Transition 
      show={show} 
      appear={false} 
      className="absolute inset-0 bg-red-500 transition-opacity duration-1000 flex flex-cols justify-center p-5 text-center items-center text-red-50 capitalize font-semibold" 
      enterFrom="opacity-0" 
      leaveTo="opacity-0"
  >
    {message}
  </Transition>
}