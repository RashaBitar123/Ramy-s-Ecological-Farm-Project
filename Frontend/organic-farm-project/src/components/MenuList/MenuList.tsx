// import { Box, Drawer } from "@mui/material";
// import React from "react";
// import { HashLink } from "react-router-hash-link";
// import "./MenuList.css";
// type Anchor = 'right';
// function MenuList(){
//     const [state, setState] = React.useState({
//         right: false,
//       });
    
//       const toggleDrawer =
//         (anchor:Anchor,open: boolean) =>
//         (event: React.KeyboardEvent | React.MouseEvent) => {
//           if (
//             event.type === 'keydown' &&
//             ((event as React.KeyboardEvent).key === 'Tab' ||
//             (event as React.KeyboardEvent).key === 'Shift')
//           ) {
//             return;
//           }
    
//           setState({ ...state, [anchor]: open });
//         };
    
//      const list = (anchor: Anchor) => (
//         <Box className="sidebar"
//         role="presentation"
//           onClick={toggleDrawer(anchor,false)}
//           onKeyDown={toggleDrawer(anchor,false)}
//         >       
               
//                 <li className="menu-item">
//                 <HashLink className="menu-item-link" to="/#maintop">Home</HashLink>
//                </li>
              
//                <li className="menu-item">
//                 <HashLink className="menu-item-link" to="/#story">
//                 Story
//                 </HashLink>
//               </li>
//               <li className="menu-item">
//                 <HashLink className="menu-item-link" to="/#mission">
//                   Mission
//                 </HashLink>
//               </li>
//               <li className="menu-item">
//                 <HashLink className="menu-item-link" to="/#activities">
//                  Activities
//                 </HashLink>
//               </li>
//               <li className="menu-item">
//               <HashLink className="menu-item-link" to="/#philosophy">
//                 Philosophy
//                 </HashLink>
//                 </li>
//            <li className="menu-item" >
//                 <HashLink className="menu-item-link" to="/#contactus">
//                   Contact Us
//                 </HashLink>
//            </li> 
//         </Box>
//      );
     
//     return(
//         <div className="toggle">
//         {( ['right'] as const).map((anchor) => (
//             <React.Fragment key={anchor}>
//              <label className="sidebarIconToggle" onClick={toggleDrawer(anchor,true)}>
//               <div className="spinner diagonal part-1"></div>
//               <div className="spinner horizontal"></div>
//               <div className="spinner diagonal part-2"></div>
//             </label>
//               <Drawer
//                 anchor={anchor}
//                 open={state[anchor]}
//                 onClose={toggleDrawer(anchor, false)}
//               >
//                 {list(anchor)}
//               </Drawer>
//             </React.Fragment>
//           ))}
//         </div>
//     );
// }
// export default MenuList;
import React, { useState } from 'react';


const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className="burger-icon" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
