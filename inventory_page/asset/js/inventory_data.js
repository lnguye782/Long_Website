const inventoryData = [
    {
        id: "sony-a7iii",
        name: "Sony A7III",
        category: "tech",
        price: "$1,475.00", /* Tax was $106.94, so total was $1,581.94 */
        desc: "24.2MP with FE 28-70mm 3.5-5.6 OSS",
        image: "asset/images/inventory/sony_a7iii.png",
    },

    {
        id: "bambu-a1-combo",
        name: "Bambu Lab A1 Combo",
        caregory: "tech",
        price: "$489.99", /* Tax was $35.53, so total was $525.52 */
        desc: "",
        image: "",
    },

    {
        id: "",
        name: "",
        caregory: "",
        price: "",
        desc: "",
        image: "",
    },

    {
        id: "",
        name: "",
        caregory: "",
        price: "",
        desc: "",
        image: "",
    },

    {
        id: "",
        name: "",
        caregory: "",
        price: "",
        desc: "",
        image: "",
    },
]

const inventoryGrid = document.getElementById('inventory-grid');

function renderInventory(filter) {
    inventoryGrid.innerHTML = '';

    inventoryData.forEach(item => {
        if (filter === 'all' || item.category === filter) {
            const card = document.createElement('div');
            card.classList.add('inventory-card', 'fade-in');

            card.onclick = () => openModal(item);

            card.innerHTML = `
                <div class="card-image-box">
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                    >
                </div>
                <div class="card-details">
                    <h3>${item.name}</h3>
                    <span class="category-tag">${item.category.toUpperCase()}</span>
                </div>
            `;
            inventoryGrid.appendChild(card);
        }
    });
}

function filterSelection(category) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderInventory(category);
}

const modal = document.getElementById('item-modal');
const modalInner = document.querySelector('.modal-card-inner');
const closeBtn = document.querySelector('.close-modal');

const mTitle = document.getElementById('modal-title');
const mBackTitle = document.getElementById('modal-back-title');
const mImg = document.getElementById('modal-img');
const mPrice = document.getElementById('modal-price');
const mDesc = document.getElementById('modal-desc');





document.addEventListener('DOMContentLoaded', () => {
    renderInventory('all');
});