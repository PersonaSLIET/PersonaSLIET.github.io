import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import { SiAboutdotme, SiClubhouse } from 'react-icons/si'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import { FaBars,FaFacebookMessenger, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import {GoOrganization} from 'react-icons/go'
import { IoGlassesOutline } from 'react-icons/io5'
 
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/team",
    name: "Team",
    icon: <FaUser />,
  },
  {
    path: "/activities",
    name: "Upcoming Activities",
    icon: <MdMessage />,
  },
  {
    path: "/faculties",
    name: "Faculties",
    icon: <IoGlassesOutline />,
  },
  {
    path: "/about",
    name: "About",
    icon: <SiAboutdotme />,
    exact: true,
    subRoutes: [
      {
        path: "/about/club",
        name: "Club ",
        icon: <SiClubhouse />,
      },
      {
        path: "/about/alumni",
        name: "Alumni",
        icon: <BsFillPersonBadgeFill />,
      },
      {
        path: "/about/mentor",
        name: "Mentors",
        icon: <GoOrganization />,
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: <FaFacebookMessenger />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  PersonaSLIET
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;