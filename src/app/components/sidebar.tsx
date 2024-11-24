import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div>
        <aside className="left-sidebar">
        {/* Sidebar scroll */}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link href="/" className="text-nowrap logo-img">
              <Image src="/assets/images/logos/logo-light.svg" alt="" width={50} height={50} />
            </Link>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          {/* Sidebar navigation */}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">Home</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/" aria-expanded="false">
                  <span>
                  <img src="/House-1--Streamline-Ultimate.png"width={20} alt="" />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">Category</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/category/create" aria-expanded="false">
                  <span>
                   
                  </span>
                  <span className="hide-menu">Add</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/category/list" aria-expanded="false">
                  <span>
                  
                  </span>
                  <span className="hide-menu">List</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">Product</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/product/create" aria-expanded="false">
                  <span>
                  </span>
                  <span className="hide-menu">addProd</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/product/list" aria-expanded="false">
                  <span>
                  </span>
                  <span className="hide-menu">List</span>
                </Link>
              </li>
             
              <li className="nav-small-cap">
                <span className="hide-menu">AUTH</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/" aria-expanded="false">
                  <span>                  </span>
                  <span className="hide-menu">Login</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/" aria-expanded="false">
                  <span>
                  </span>
                  <span className="hide-menu">Register</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <span className="hide-menu">EXTRA</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/" aria-expanded="false">
                  <span>                  </span>
                  <span className="hide-menu">Icons</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="/" aria-expanded="false">
                  <span>
                  </span>
                  <span className="hide-menu">Sample Page</span>
                </Link>
              </li>
            </ul>
                  <div className="unlimited-access hide-menu  position-relative mb-7 mt-7 rounded-3">
                 
                </div>
            
           
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll */}
      </aside>
    </div>
  )
}

export default Sidebar
