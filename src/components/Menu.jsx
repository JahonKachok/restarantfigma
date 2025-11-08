import React from 'react'
import "../styles/menu.scss"
import Menu1 from "..//images/menu1.svg"
import menuItem from "..//images/menuItem.svg"
export default function Menu() {
  return (
    <section id="menu" className="menu">
        <h2>Menu</h2>   
    <div className="menu-container  d-flex justify-content-center align-items-center">
      <div className="menu-left text-center">    
        <h3>Try Our Special dishes</h3>
        <p>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
        <img src={Menu1} alt="" />
        <button className='menu-btn'>See all dishes</button>
      </div>
        <div className="menu-right">
            <div className="menu-item">   
                <h4>Starters</h4>
                <div className="item-info d-flex">
                    <img src={menuItem} alt="" />
                    <div className="item-text ">
                    <h4>Tomato Bruschetta</h4>
                    <p>Bread, olive oil, garlic, black pepper ____________________________$25</p>
                    </div>
                     <div className="item-price">    
                    <p></p>
                </div>
              </div> 
                 <div className="item-info d-flex">
                    <img src={menuItem} alt="" />
                    <div className="item-text ">
                    <h4>Tomato Bruschetta</h4>
                    <p>Bread, olive oil, garlic, black pepper ____________________________$25</p>
                    </div>
                     <div className="item-price">    
                    <p></p>
                </div>
              </div> 
                 <div className="item-info d-flex">
                    <img src={menuItem} alt="" />
                    <div className="item-text ">
                    <h4>Tomato Bruschetta</h4>
                    <p>Bread, olive oil, garlic, black pepper ____________________________$25</p>
                    </div>
                     <div className="item-price">    
                    <p></p>
                </div>
              </div> 
                 <div className="item-info d-flex">
                    <img src={menuItem} alt="" />
                    <div className="item-text ">
                    <h4>Tomato Bruschetta</h4>
                    <p>Bread, olive oil, garlic, black pepper ____________________________$25</p>
                    </div>
                     <div className="item-price">    
                    <p></p>
                </div>
              </div> 
            
            </div>
          </div>
    </div>

    </section>
    
)
}
