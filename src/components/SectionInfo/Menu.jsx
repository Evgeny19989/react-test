import React from 'react'
import img from '../../image/line.png'


function Menu() {

    return (

        <div className="menu_wrapper" >
            <div className="menu">
                <div className="wrapper_line">
                    <img src={img}/>
                </div>
                <div className="wrapper_line">
                    <img src={img}/>
                </div>
            </div>
        </div>

    );
}
  
  export default Menu;
  