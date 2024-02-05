// import React icons ***************************
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { IoCodeWorking } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";

import { useState } from "react";

export default function Menu() {

const [active, setActive] = useState('#')

  return (
    <div className='menus'>
      <a href="#" onClick={() => setActive('#')} className={active === "#" ? 'active' : ''} title="Home"><HiHome /></a>

      <a href="#About" onClick={() => setActive('#About')} className={active === "#About" ? 'active' : ''} title="About"><FaUser /></a>

      <a href="#Services" onClick={() => setActive('#Services')} className={active === "#Services" ? 'active' : ''} title="Services"><LiaProjectDiagramSolid /></a>

      <a href="#Projects" onClick={() => setActive('#Projects')} className={active === "#Projects" ? 'active' : ''} title="Projects"><IoCodeWorking /></a>

      <a href="#Contact" onClick={() => setActive('#Contact')} className={active === "#Contact" ? 'active' : ''} title="Contact"><MdPermContactCalendar /></a>
    </div>
  )
}
