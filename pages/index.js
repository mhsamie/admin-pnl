import { useEffect } from "react";
import {FiSettings}from 'react-icons/fi'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
export default function Home() {

  return (
    <div className="flex" >
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{zIndex:'10000'}}>
        <TooltipComponent content="Settings"  position="Top">
          <button className="text-xl hover:drop-shadow-xl  hover:text-gray-400 ">
            <FiSettings/>
          </button>
        </TooltipComponent>
      </div>
      </div>
      <Sidebar/>
      <Navbar/>

    

    </div>
  )
}
 