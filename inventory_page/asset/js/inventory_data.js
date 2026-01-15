const inventoryData = [
    {
        id: "sony-a7-iii",
        name: "Sony A7 III",
        category: "tech",
        note: "Digital Camera",
        price: "$1,475.00",
        date: "",
        desc: "Full-frame Mirrorless 24.2MP Camera with FE 28-70mm 3.5-5.6 OSS",
        image: "asset/images/inventory/sony_a7_iii.png",
    },

    {
        id: "bambu-a1-combo",
        name: "Bambu Lab A1 Combo",
        category: "tech",
        note: "3D Printer",
        price: "$489.99",
        date: "",
        desc: "Multi-color 3D Printer with 256*256*256 mm³ Build Volume",
        image: "asset/images/inventory/bambu_a1_combo.png",
    },

    {
        id: "macbook-air-m2",
        name: "MacBook Air M2",
        note: "Laptop",
        category: "tech",
        price: "$",
        date: "",
        desc: "",
        image: "asset/images/inventory/.png",
    },

    {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        note: "Smartphone",
        category: "tech",
        price: "$1,199.00",
        date: "September 16, 2022",
        desc: "256GB Deep Purple",
        image: "asset/images/inventory/iphone_14_pro_max.png",
    },

    {
        id: "",
        name: "",
        note: "",
        category: "tech",
        price: "$",
        date: "",
        desc: "",
        image: "asset/images/inventory/.png",
    },

    {
        id: "watch_ultra_2",
        name: "Apple Watch Ultra 2",
        note: "Smartwatch",
        category: "tech",
        price: "$799.00",
        date: "September 22, 2023",
        desc: "GPS + Cellular 49mm Titanium Case with Indigo Alpine Loop - Large",
        image: "asset/images/inventory/watch_ultra_2.png",
    },

    {
        id: "watch_nike_series_7",
        name: "Apple Watch Nike Series 7",
        note: "Smartwatch",
        category: "tech",
        price: "$429.00",
        date: "October 13, 2021",
        desc: "GPS 45mm Midnight Aluminium Case with Anthracite/Black Nike Sport Band - Regular",
        image: "asset/images/inventory/watch_nike_series_7.png",
    },

    {
        id: "lining-halbertec-8000",
        name: "Li-Ning Halbertec 8000",
        note: "",
        category: "sport",
        price: "3,700,000 VND ($140.00)",
        date: "December, 2023",
        desc: "",
        image: "asset/images/inventory/lining-halbertec-8000.png",
    }
];

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
const mPrice = document.getElementById('modal-price');
const mDesc = document.getElementById('modal-desc');
const mImg = document.getElementById('modal-img');

function openModal(item) {
    mTitle.innerText = item.name;
    mBackTitle.innerText = item.name;
    mPrice.innerText = item.price;
    mDesc.innerText = item.desc;
    mImg.src = item.image;

    modal.classList.add('active');

    modalInner.classList.remove('is-flipped');
}

modalInner.addEventListener('click', () => {
    modalInner.classList.toggle('is-flipped');
});

closeBtn.onclick = () => {
    modal.classList.remove('active');
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderInventory('all');
});