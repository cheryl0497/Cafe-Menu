const menu = [
    {
      id: 1,
      title: "Chocolate Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `Fluffy and rich pancakes infused with decadent chocolate, topped with a drizzle of chocolate syrup and a sprinkle of powdered sugar. A perfect indulgence for chocolate lovers! `,
    },
    {
      id: 2,
      title: "Chicken Biryani",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `Aromatic basmati rice layered with tender marinated chicken, spices, and herbs, served with raita. A delightful burst of flavors in every bite! `,
    },
    {
      id: 3,
      title: "Classic Blueberry",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `A refreshing blend of fresh blueberries, creamy milk, and a touch of sweetness, topped with whipped cream for a perfect fruity delight.`,
    },
    {
      id: 4,
      title: "Egg Sandwich",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Soft bread filled with fluffy scrambled eggs, crisp lettuce, and a hint of mayo. A classic choice for a quick and tasty bite. `,
    },
    {
      id: 5,
      title: "Thai Curry",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `A creamy and flavorful curry infused with Thai herbs and spices, served with steamed jasmine rice. Available in red, green, or yellow varieties. `,
    },
    {
      id: 6,
      title: "Strawberry Milkshake",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `A creamy and sweet shake made with fresh strawberries, milk, and ice cream, topped with whipped cream and strawberry syrup.`,
    },
    {
      id: 7,
      title: "Bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `A hearty dish overflowing with crispy bacon, melted cheese, and savory seasonings, served with a side of toast or fries. `,
    },
    {
      id: 8,
      title: "Butter Chicken",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `Succulent pieces of chicken cooked in a creamy tomato-based gravy, flavored with butter, aromatic spices, and a touch of cream. `,
    },
    {
      id: 9,
      title: "Oreo Nutella",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `A rich and indulgent shake combining Oreos and Nutella, blended to perfection with creamy milk and topped with whipped cream.`,
    },
    {
      id: 10,
      title: "Spaghetti",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `Classic spaghetti tossed in a rich marinara sauce with herbs and spices, topped with grated Parmesan cheese. Available with your choice of meat or vegetables.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }