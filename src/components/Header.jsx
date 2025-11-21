import React from 'react'
import CardNav from './CardNav'
import logo from '/hyred.png';
import { href } from 'react-router-dom';
function Header() {
    const items = [
    {
      label: "About",
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Skill", 
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Skill Genarator", ariaLabel: "skill genarator page",href:"/skillgenerator" },
        { label: "Skill view", ariaLabel: "skill view page",href:"/viewskilll" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#000000ff", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us",href: "mailto:amgithshaji410@gmail.com" },
        { label: "GitHub", ariaLabel: "GitHub",href:"https://github.com/amgithshaji" },
        { label: "LinkedIn", ariaLabel: "LinkedIn",href:"https://www.linkedin.com/in/amgith-shaji-a47849323/" }
      ]
    }
  ];

  return (
    <div>
         <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor=" #000000d4"
      buttonTextColor="#fff"
      ease="power3.out"
    />
    </div>
  )
}

export default Header