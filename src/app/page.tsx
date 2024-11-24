"use client"
import dynamic from "next/dynamic";

import { usePathname } from 'next/navigation'; 
export default function Home() {
  const NoSSRLayout=dynamic(()=> import('./components/layout'),{ssr:false})
  const pathname = usePathname(); // Récupérer le pathname



  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      
  {/* Sidebar Start */}
 
  {/*  Sidebar End */}
  {/*  Main wrapper */}
 
    {/*  Header Start */}
    
    {/*  Header End */}
    
       <NoSSRLayout/>
        
      </div>
    


  );
}
