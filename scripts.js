let totalPrice = 0;
let currentItem = {};
let fullQuantity = 0;
let halfQuantity = 0;
const navbarTotal = document.getElementById('navbar-total');
const footerTotal = document.getElementById('footer-total');
const menuSection = document.getElementById('menu-section');
const juicesSection = document.getElementById('juices-section');
const maggiSection = document.getElementById('maggi-section');
const beveragesSection = document.getElementById('beverages-section');
const eggsSection = document.getElementById('eggs-section');
const orderList = document.getElementById('order-list');
const orderSummary = document.getElementById('order-summary');
const selectionPopup = document.getElementById('selection-popup');
const popupItemName = document.getElementById('popup-item-name');
const fullQuantityDisplay = document.getElementById('full-quantity');
const halfQuantityDisplay = document.getElementById('half-quantity');
const totalPriceElement = document.getElementById('total-price');

const menuData = {
    milkShakes: [
        { name: "Banana Shake", image: "https://images.unsplash.com/photo-1643094263180-9ca517fe03b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYSUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D", fullPrice: 40, halfPrice: 20 },
        { name: "Spl Banana Shake", image: "https://media.istockphoto.com/id/1313090497/photo/vegan-smoothie-with-banana-stock-photo.jpg?s=612x612&w=0&k=20&c=vZUhpSztZBnNefGgbXUJCOC4vR80n5XXCUyIiqlagtE=", fullPrice: 50, halfPrice: null },
        { name: "Choco Banana", image: "https://img.freepik.com/free-photo/chocolata-banana-smoothie_661915-505.jpg?size=626&ext=jpg&ga=GA1.1.217071404.1723290951&semt=ais_hybrid", fullPrice: 50, halfPrice: null },
        { name: "Oreo Shake", image: "https://images.unsplash.com/photo-1590373927063-cb2d69209a8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fHww", fullPrice: 65, halfPrice: 35 },
        { name: "Papaya Shake", image: "https://media.istockphoto.com/id/612715626/photo/papaya-smoothie-selective-focus-detox-diet-food.jpg?s=612x612&w=0&k=20&c=UbbJO1oIHHJM4Etjt1WOs9ktB36TRK68zcDdsI8lJ4w=", fullPrice: 40, halfPrice: 20 },
        { name: "Apple Shake", image: "https://media.istockphoto.com/id/1354239159/photo/healthy-oatmeal-smoothi-e-with-fruits-and-seeds.jpg?s=612x612&w=0&k=20&c=fldCgHCEUylfEXqB9sH2g8JFSr4uTCqZbUnZf0inNys=", fullPrice: 50, halfPrice: 25 },
        { name: "Pineapple Shake", image: "https://img.freepik.com/premium-photo/glass-jar-pineapple-juice-with-glass-liquid-it_931553-286054.jpg?size=626&ext=jpg&ga=GA1.1.217071404.1723290951&semt=ais_hybrid", fullPrice: 50, halfPrice: 25 },
        { name: "Cheku Shake (SEA)", image: "https://media.istockphoto.com/id/1596565947/photo/chiku-with-leaf.jpg?s=612x612&w=0&k=20&c=P1U-B6GvhXFxHbh-Lu49yXpXrC6cWFOgWVyo_15IIiE=", fullPrice: 50, halfPrice: 25 },
        { name: "Mango Shake (SEA)", image: "https://img.freepik.com/premium-photo/fresh-lemons-yellow-mangoes-splashed-with-water_245481-924.jpg?size=626&ext=jpg&ga=GA1.1.217071404.1723290951&semt=ais_hybrid", fullPrice: 50, halfPrice: 25 },
        { name: "Strawberry Shake (SEA)", image: "https://img.freepik.com/free-photo/iced-pink-cocktail-fresh-strawberries_144627-1123.jpg?size=626&ext=jpg&ga=GA1.1.217071404.1723290951&semt=ais_hybrid", fullPrice: 60, halfPrice: null },
        { name: "Lassi", image: "https://t4.ftcdn.net/jpg/02/04/62/15/240_F_204621512_E73amQQrCpi4ZPlFBWqfjv5RQjrMsLqx.jpg", fullPrice: 50, halfPrice: null },
        { name: "Spl Lassi", image: "https://t3.ftcdn.net/jpg/04/34/32/60/240_F_434326071_XUDnPZgiNU8mrT6rmJtZhympudGgXwQv.jpg", fullPrice: 60, halfPrice: null },
        { name: "Cold Coffee", image: "https://images.unsplash.com/photo-1599937577325-e38f27f010db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D", fullPrice: 50, halfPrice: null }
    ],
    juices: [
        { name: "Mosambi", image: "https://t4.ftcdn.net/jpg/07/86/60/19/240_F_786601978_k8zExdawzQleh2DUn7w9VrpdPgrbO6d2.jpg", fullPrice: 60, halfPrice: 40 },
        { name: "Orange", image: "https://images.unsplash.com/photo-1650460069032-3c410224fe55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D", fullPrice: 60, halfPrice: 40 },
        { name: "Pineapple", image: "https://media.istockphoto.com/id/955346532/photo/pineapple-smoothie-with-fresh-pineapple-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lgkhDB7Zm2_4WlVH82EpqBXYEaT0BgmUGtsad9xw5HQ=", fullPrice: 60, halfPrice: 40 },
        { name: "Black Grapes", image: "https://img.freepik.com/free-photo/bunch-grapes-glass-juice-marble_114579-30907.jpg?size=626&ext=jpg&ga=GA1.1.217071404.1723290951&semt=ais_hybrid", fullPrice: 60, halfPrice: 40 },
        { name: "Green Grapes", image: "https://img.freepik.com/free-photo/grapes-cup-high-angle-view-plaster-tray-background_176474-9714.jpg?size=626&ext=jpg&ga=GA1.1.217071404.1723290951&semt=ais_hybrid", fullPrice: 60, halfPrice: 40 },
        { name: "Watermelon", image: "https://images.unsplash.com/photo-1716956755507-b4250f2cc29d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbiUyMGp1aWNlfGVufDB8fDB8fHww", fullPrice: 60, halfPrice: 40 },
        { name: "Annar", image: "https://images.unsplash.com/photo-1663955706695-de874fa93c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9tZWdyYW5hdGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D", fullPrice: 70, halfPrice: 50 },
        { name: "Mix Juice", image: "https://media.istockphoto.com/id/522132186/photo/fruit-drink-mix.webp?b=1&s=612x612&w=0&k=20&c=j1IbhTdKRna01LACTNRMZYRXLXhCQY1BDgGqVglfJyA=", fullPrice: 60, halfPrice: 40 },
        { name: "Lemon Water", image: "https://images.unsplash.com/photo-1507281549113-040fcfef650e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlbW9uJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D", fullPrice: null, halfPrice: 10 },
        { name: "Fruit Salad", image: "https://plus.unsplash.com/premium_photo-1689596510917-d337f077d559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXQlMjBzZGFsYWR8ZW58MHx8MHx8fDA%3D", fullPrice: 40, halfPrice: null },
        { name: "Papaya Salad", image: "https://images.unsplash.com/photo-1563889859436-cfaa6ff9bd24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBhcGF5YSUyMFNhbGFkfGVufDB8fDB8fHww", fullPrice: 40, halfPrice: null },
        { name: "Pineapple Salad", image: "https://images.unsplash.com/photo-1529927127566-06dec6b4ad6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwbGUlMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D", fullPrice: 40, halfPrice: null }
    ],
    maggi: [
        { name: "Plain Maggi", image: "https://t4.ftcdn.net/jpg/06/99/35/17/240_F_699351738_P1m88jTaCeOMbFDdU0Evdj17c5ZfwMSX.jpg", fullPrice: 25, halfPrice: null },
        { name: "Veg Maggi", image: "https://t3.ftcdn.net/jpg/07/69/68/34/240_F_769683419_dRogeGBx5GtzGtNpN9w3PtwJvXFhWzYR.jpg", fullPrice: 30, halfPrice: null },
        { name: "Egg Maggi", image: "https://t4.ftcdn.net/jpg/03/54/78/45/240_F_354784596_SmPaK8Tp0j5kQLfuBSNUrDXp2PZFlXZ4.jpg", fullPrice: 35, halfPrice: null },
        { name: "Double Egg Maggi", image: "https://t4.ftcdn.net/jpg/04/47/20/79/240_F_447207931_UHjYsVFHlriwtzF9oQ3pFN02M1AL4vBU.jpg", fullPrice: 50, halfPrice: null },
        { name: "Cheese Maggi", image: "https://t4.ftcdn.net/jpg/03/98/52/19/240_F_398521925_HnLesWck6nKLMnbD0M1tW42sHCCiHD9O.jpg", fullPrice: 40, halfPrice: null },
        { name: "Pouch Maggi", image: "https://t3.ftcdn.net/jpg/09/05/18/62/240_F_905186221_SBtBnFc91BmxoGdV621MdHmzCblO9JJY.jpg", fullPrice: 40, halfPrice: null },
        { name: "Korean chicken Maggi", image: "KoreanchickenMaggi.jpeg", fullPrice: 70, halfPrice: 60 },
        { name: "Korean kimchi", image: "Koreankimchi.jpeg", fullPrice: 60, halfPrice: null },
        { name: "Korean cheese", image: "Koreacheese.jpeg", fullPrice: 60, halfPrice: null },
        { name: "Korean veg", image: "Koreanveg.jpeg", fullPrice: 60, halfPrice: null }

    ],
    beverages: [
        { name: "Hot Milk", image: "https://t4.ftcdn.net/jpg/00/39/31/23/240_F_39312323_xTdVf6Ay9smjJvzZr0TeY0ymzXh7ZAYM.jpg", fullPrice: 20, halfPrice: null },
        { name: "Horlicks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ea5NQxf3u1wnPCbGwAkEMbDbVCX0HNXvUciqlSQJI32FdELD0x_m8GbX4A&s", fullPrice: 25, halfPrice: null },
        { name: "Bournvita", image: "https://icon2.cleanpng.com/20180802/wse/3750100d51e56be45fae830e374c351b.webp", fullPrice: 20, halfPrice: null },
        { name: "Hot Coffee", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600", fullPrice: 15, halfPrice: null },
        { name: "Cold Coffee (Full)", image: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=600", fullPrice: 50, halfPrice: null }
    ],
    eggs: [
        { name: "Double Egg Omelet", image: "https://media.istockphoto.com/id/691554478/photo/omelet-with-parsley-cherry-tomatoes-and-copyspace.jpg?s=2048x2048&w=is&k=20&c=kdKCVmVXSk1iE235MPfV8_lPFxDSBPEv0ZratPEm5-A=", fullPrice: 30, halfPrice: null },
        { name: "Bread Omelet", image: "https://media.istockphoto.com/id/184387881/photo/india-diu-hotel-breakfast.jpg?s=612x612&w=0&k=20&c=pJdx2s0qjtNQGpyhScpVPZwNZpZXw6lpAaVt59SU_OA=", fullPrice: 40, halfPrice: null },
        { name: "Boiled Egg", image: "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=600", fullPrice: 30, halfPrice: null }
    ]
};

let selectedItems = {};

function loadMenu() {
    loadMenuItems(menuData.milkShakes, menuSection);
    loadMenuItems(menuData.juices, juicesSection);
    loadMenuItems(menuData.maggi, maggiSection);
    loadMenuItems(menuData.eggs, eggsSection);
    loadMenuItems(menuData.beverages, beveragesSection);
}

function loadMenuItems(items, section) {
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-img">
            <div class="menu-details" onclick="handleItemClick('${item.name}', ${item.fullPrice}, ${item.halfPrice})">
                <h3>${item.name}</h3>
                <p class="price">Full: ₹${item.fullPrice} ${item.halfPrice ? `| Half: ₹${item.halfPrice}` : ''}</p>
                <p>${item.description || ''}</p>
            </div>
        `;
        section.appendChild(menuItem);
    });
}

function handleItemClick(itemName, fullPrice, halfPrice) {
    currentItem = { name: itemName, fullPrice: fullPrice, halfPrice: halfPrice };
    popupItemName.textContent = itemName;

    fullQuantity = selectedItems[itemName]?.full || 0;
    halfQuantity = selectedItems[itemName]?.half || 0;

    fullQuantityDisplay.textContent = fullQuantity;
    halfQuantityDisplay.textContent = halfQuantity;

    document.getElementById('popup-full-price').textContent = fullPrice;
    if (halfPrice) {
        document.getElementById('popup-half-price').textContent = halfPrice;
        document.getElementById('half-option').style.display = 'flex';
    } else {
        document.getElementById('half-option').style.display = 'none';
    }

    selectionPopup.style.display = 'flex';
}

function changeQuantity(size, change) {
    if (size === 'full') {
        fullQuantity = Math.max(0, fullQuantity + change);
        fullQuantityDisplay.textContent = fullQuantity;
    } else if (size === 'half') {
        halfQuantity = Math.max(0, halfQuantity + change);
        halfQuantityDisplay.textContent = halfQuantity;
    }

    updateOrder();
}

function updateOrder() {
    selectedItems[currentItem.name] = {
        full: fullQuantity,
        half: halfQuantity
    };

    let listItem = document.getElementById(`${currentItem.name}-list`);
    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `${currentItem.name}-list`;
        orderList.appendChild(listItem);
    }

    let itemText = `${currentItem.name}: `;
    if (fullQuantity > 0) {
        itemText += `Full x${fullQuantity} - ₹${currentItem.fullPrice * fullQuantity}`;
    }
    if (halfQuantity > 0) {
        itemText += ` | Half x${halfQuantity} - ₹${currentItem.halfPrice * halfQuantity}`;
    }

    listItem.textContent = itemText.trim();
    calculateTotal();
}

function calculateTotal() {
    totalPrice = 0;
    orderList.innerHTML = '';  // Clear current list
    for (const item in selectedItems) {
        if (selectedItems[item].full) {
            const fullPrice = selectedItems[item].full * menuData.milkShakes.find(m => m.name === item)?.fullPrice ||
                              selectedItems[item].full * menuData.juices.find(m => m.name === item)?.fullPrice ||
                              selectedItems[item].full * menuData.maggi.find(m => m.name === item)?.fullPrice ||
                              selectedItems[item].full * menuData.beverages.find(m => m.name === item)?.fullPrice;
            totalPrice += fullPrice;
            orderList.innerHTML += `<li>${item} (Full x${selectedItems[item].full}) - ₹${fullPrice}</li>`;
        }
        if (selectedItems[item].half) {
            const halfPrice = selectedItems[item].half * menuData.milkShakes.find(m => m.name === item)?.halfPrice ||
                              selectedItems[item].half * menuData.juices.find(m => m.name === item)?.halfPrice;
            totalPrice += halfPrice;
            orderList.innerHTML += `<li>${item} (Half x${selectedItems[item].half}) - ₹${halfPrice}</li>`;
        }
    }
    totalPriceElement.textContent = `Total: ₹${totalPrice}`;
    navbarTotal.textContent = totalPrice;
    footerTotal.textContent = `₹${totalPrice}`;

    // Show order summary when the first item is added
    if (totalPrice > 0) {
        orderSummary.classList.remove('order-summary-hidden');
    }
}

function closePopup() {
    selectionPopup.style.display = 'none';
}

function closePopupOutside(event) {
    if (event.target === selectionPopup) {
        closePopup();
    }
}

// Scroll to the bottom when the total is clicked
function scrollToSummary() {
    orderSummary.scrollIntoView({ behavior: 'smooth' });
}


// Load the menu on page load
loadMenu();

// Ensure the order summary is visible after first item is added
document.addEventListener('DOMContentLoaded', () => {
    if (totalPrice > 0) {
        orderSummary.classList.remove('order-summary-hidden');
    }
});
