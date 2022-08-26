import Link from "next/link";
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {links } from '../data/dummy';
 const Sidebar = () => {
	
  let activMenu =true;
  return (
    <div className={`shadow-xl  sidebar dark:bg-secondry-dark-bg bg-main-bg ${ activMenu?  'w-72 fixed': 'w-0'}   `}>
		<div className="ml-3 pb-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ">
			{ activMenu && (<>
			<div className="flex justify-between items-center">
				<Link href="/" >
					<a onClick={()=>{}} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"><SiShopware/> Admin</a>
				
				</Link>
<TooltipComponent content="Menu" position="BottomCenter">
	<button onClick={()=>{} } className="sticky text-xl mt-5 mr-3 flex items-center justify-center hover:text-red-400 "><MdOutlineCancel/></button>
</TooltipComponent>
				</div>
				<div className="mt-10">
					{links.map((link,index)=>(<div key={index}>
						<p  className="text-gray-500 m-3 mt-4 uppercase">
							{link.title}</p>
							 {link.links.map((eachLink )=>(<Link  key={eachLink.name} href={`/${eachLink.name}`}><a className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray">{eachLink.icon} <span className="capitalize">{eachLink.name}</span></a></Link>))}
							</div>))}
				</div>
				</>)}
		</div>
	</div>
  )
}
export default Sidebar; 