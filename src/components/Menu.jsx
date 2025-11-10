import React, { useEffect, useState } from "react";
import "../styles/menu.scss";
import Menu1 from "../images/menu1.svg";
import menuItem from "../images/menuItem.svg";

export default function Menu() {
  const [menuData, setMenuData] = useState({
    starters: [],
    main: [],
    dessert: [],
  });

  // Backenddan ma'lumot olayotgandek simulate qilamiz (API imitatsiya)
  useEffect(() => {
    const fetchMenu = async () => {
      // bu joyda real API bo'lishi mumkin, hozircha local data ishlatyapmiz
      const fakeApiData = {
        starters: [
          {
            name: "Tomato Bruschetta",
            description: "Bread, olive oil, garlic, black pepper",
            price: 25,
          },
          {
            name: "Garlic Bread",
            description: "Fresh garlic, butter, and herbs on crispy bread",
            price: 22,
          },
          {
            name: "Caprese Salad",
            description: "Mozzarella, tomatoes, fresh basil leaves",
            price: 28,
          },
        ],
        main: [
          {
            name: "Grilled Salmon",
            description: "Served with lemon butter sauce and asparagus",
            price: 45,
          },
          {
            name: "Beef Steak",
            description: "Juicy ribeye steak with peppercorn sauce",
            price: 55,
          },
          {
            name: "Pasta Carbonara",
            description: "Creamy sauce with bacon, egg, and cheese",
            price: 35,
          },
        ],
        dessert: [
          {
            name: "Chocolate Mousse",
            description: "Rich chocolate dessert with whipped cream",
            price: 18,
          },
          {
            name: "Cheesecake",
            description: "Classic New York style with strawberry sauce",
            price: 20,
          },
        ],
      };

      // Sun’iy kechikish (xuddi API ishlayotgandek)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMenuData(fakeApiData);
    };

    fetchMenu();
  }, []);

  return (
    <section id="menu" className="menu py-5">
      <div className="container text-center">
       

        <div className="menu-container d-flex flex-wrap justify-content-center align-items-start gap-5">
          {/* LEFT SECTION */}
          
          <div className="menu-left col-12 col-md-4 d-flex flex-column justify-content-start align-items-start text-start">
             <h2 className="fw-bold mb-4">Menu</h2>
            <h3 className="fw-semibold mb-3">Try Our Special Dishes</h3>
            <p className="text-muted mb-4">
              Every time you dine with us, it should be a joyful experience with
              inspired food in a place designed uniquely for you.
            </p>
            <img src={Menu1} alt="Special Dish" className="img-fluid mb-4" />
            <button className="menu-btn  px-6">
              See all dishes
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="menu-right col-12 col-md-7 text-start">
            {/* LOADING */}
            {menuData.starters.length === 0 ? (
              <p className="text-center text-muted">Loading menu...</p>
            ) : (
              <>
                {/* Starters */}
                <h4 className="fw-bold mb-3">Starters</h4>
                {menuData.starters.map((dish, i) => (
                  <div
                    key={i}
                    className="item-info d-flex align-items-center mb-3"
                  >
                    <img src={menuItem} alt={dish.name} className="me-3 menu-img" />
                    <div className="w-100">
                      <h5 className="fw-semibold">{dish.name}</h5>
                      <p className="text-muted d-flex justify-content-between">
                        <span>{dish.description}</span>
                        <span className="fw-bold">${dish.price}</span>
                      </p>
                    </div>
                  </div>
                ))}

                {/* Main Dish */}
                <h4 className="fw-bold mt-5 mb-3">Main Dish</h4>
                {menuData.main.map((dish, i) => (
                  <div
                    key={i}
                    className="item-info d-flex align-items-center mb-3"
                  >
                    <img src={menuItem} alt={dish.name} className="me-3 menu-img" />
                    <div className="w-100">
                      <h5 className="fw-semibold">{dish.name}</h5>
                      <p className="text-muted d-flex justify-content-between">
                        <span>{dish.description}</span>
                        <span className="fw-bold">${dish.price}</span>
                      </p>
                    </div>
                  </div>
                ))}

                {/* Dessert */}
                <h4 className="fw-bold mt-5 mb-3">Dessert</h4>
                {menuData.dessert.map((dish, i) => (
                  <div
                    key={i}
                    className="item-info d-flex align-items-center mb-3"
                  >
                    <img src={menuItem} alt={dish.name} className="me-3 menu-img" />
                    <div className="w-100">
                      <h5 className="fw-semibold">{dish.name}</h5>
                      <p className="text-muted d-flex justify-content-between">
                        <span>{dish.description}</span>
                        <span className="fw-bold">${dish.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
