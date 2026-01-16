const inventoryData = [
    {
        id: "sony-alpha-7-iii",
        name: "Sony Alpha 7 III",
        note: "Digital Camera",
        categories: ["tech"],
        price: "$1,475.00",
        date: "July 27, 2023",
        desc: "Full-frame Mirrorless 24.2MP Camera with FE 28-70mm 3.5-5.6 OSS",
        image: "asset/images/inventory/sony_alpha_7_iii.png",
    },

    {
        id: "insta360-x4-ski-bundle",
        name: "Insta360 X4 - Ski Bundle",
        note: "Action Camera",
        categories: ["tech"],
        price: "$501.00",
        date: "Jan 03, 2025",
        desc: "8K 360° with FlowState Stabilization, Waterproof Body, Ski Pole Mount",
        image: "asset/images/inventory/insta360_x4_ski_bundle.png",
    },

    {
        id: "meta-wayfarer-gen-2",
        name: "Meta Wayfarer (Gen 2)",
        categories: ["tech"],
        note: "Smartglasses",
        price: "$320.00",
        date: "Jan 01, 2026",
        desc: "Meta AI with Ultra-wide 12 MP Camera and 3K Video, Open-ear Audio, 8-hour Battery Life, and Classic Ray-Ban Wayfarer Design",
        image: "asset/images/inventory/meta_wayfarer_gen_2.png",
    },

    {
        id: "fujifilm-instax-mini-41",
        name: "Fujifilm Instax Mini 41",
        note: "Instant Camera",
        categories: ["tech"],
        price: "$107.99",
        date: "Aug 06, 2025",
        desc: "Instant Mini Film with Automatic Exposure, Built-in Flash, Selfie Mode",
        image: "asset/images/inventory/fujifilm_instax_mini_41.png",
    },

    {
        id: "bambu-a1-combo",
        name: "Bambu Lab A1 Combo",
        note: "3D Printer",
        categories: ["tech"],
        price: "$489.99",
        date: "July 02, 2024",
        desc: "Multi-color 3D Printer with 256*256*256 mm³ Build Volume",
        image: "asset/images/inventory/bambu_a1_combo.png",
    },

    {
        id: "macbook-air-m2",
        name: "MacBook Air (M2)",
        note: "Laptop",
        categories: ["tech"],
        price: "$1,099.00",
        date: "Aug 20, 2022",
        desc: "13.6-inch Liquid Retina Display with Apple M2 Chip, 8GB Unified Memory, 256GB - Midnight",
        image: "asset/images/inventory/macbook_air_m2.png",
    },

    {
        id: "ipad-pro-13-inch-m4",
        name: "iPad Pro 13-inch (M4)",
        note: "Tablet",
        categories: ["tech"],
        price: "$1,199.00",
        date: "Dec 01, 2024",
        desc: "13-inch Ultra Retina XDR OLED with Apple M4 Chip, Wi-Fi, 256GB - Silver",
        image: "asset/images/inventory/ipad-pro-13-inch-m4.png",
    },

    {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        note: "Smartphone",
        categories: ["tech", "edc"],
        price: "$1,199.00",
        date: "Sept 16, 2022",
        desc: "6.7-inch Super Retina XDR OLED with A16 Bionic Chip, 256GB - Deep Purple",
        image: "asset/images/inventory/iphone_14_pro_max.png",
    },

    {
        id: "watch_ultra_2",
        name: "Apple Watch Ultra 2",
        note: "Smartwatch",
        categories: ["tech", "edc"],
        price: "$799.00",
        date: "Sept 22, 2023",
        desc: "GPS + Cellular 49mm Titanium Case with Indigo Alpine Loop Band",
        image: "asset/images/inventory/watch_ultra_2.png",
    },

    {
        id: "watch_nike_series_7",
        name: "Apple Watch Nike Series 7",
        note: "Smartwatch",
        categories: ["tech", "edc"],
        price: "$429.00",
        date: "Oct 13, 2021",
        desc: "GPS 45mm Midnight Aluminium Case with Anthracite/Black Nike Sport Band",
        image: "asset/images/inventory/watch_nike_series_7.png",
    },

    {
        id: "airpods-max-lightning",
        name: "AirPods Max (Lightning)",
        note: "Headphones",
        categories: ["tech", "edc"],
        price: "$499.99",
        date: "Mar 20, 2023",
        desc: "Over-ear Headphones with Active Noise Cancellation, Lightning Charging - Space Gray",
        image: "asset/images/inventory/airpods_max_lightning.png",
    },

    {
        id: "raspberry_pi_5",
        name: "Raspberry Pi 5",
        note: "Single-Board Computer",
        categories: ["tech"],
        price: "$99.99",
        date: "Apr 30, 2025",
        desc: "Quad-core 2.4 GHz ARM Cortex-A76 Processor with 16GB LPDDR4X RAM",
        image: "asset/images/inventory/raspberry_pi_5.png",
    },

    {
        id: "raspberry_pi_4_model_b",
        name: "Raspberry Pi 4 Model B",
        note: "Single-Board Computer",
        categories: ["tech"],
        price: "$69.99",
        date: "Oct 23, 2024",
        desc: "Quad-core 1.5 GHz ARM Cortex-A72 Processor with 8GB DDR4 RAM",
        image: "asset/images/inventory/raspberry_pi_4.png",
    },

    {
        id: "lining-halbertec-8000",
        name: "Li-Ning Halbertec 8000",
        note: "Badminton",
        categories: ["sport"],
        price: "3,700,000 VND ($154.00)",
        date: "December 2023",
        desc: "Even-balance, Medium-stiff, Control Racket in 4U, 26lbs String Tensions",
        image: "asset/images/inventory/lining_halbertec_8000.png",
    },

    {
        id: "yonex-astrox-88d-pro-2024",
        name: "Yonex Astrox 88D Pro 2024",
        note: "Badminton",
        categories: ["sport"],
        price: "$238.50",
        date: "Apr 13, 2024",
        desc: "Head-heavy, Stiff, Offensive Racket in 4U, 26lbs String Tensions",
        image: "asset/images/inventory/yonex_astrox_88d_pro_2024.png",
    },

    {
        id: "vs-youlong-red-limited",
        name: "VS YouLong Red Limited",
        note: "Badminton | Year of the Loong",
        categories: ["sport"],
        price: "2,000,000 VND ($83.00)",
        date: "December 2023",
        desc: "Head-heavy, Medium-stiff, Offensive Racket in 4U, 24lbs String Tensions",
        image: "asset/images/inventory/vs_youlong_red_limited.png",
    },

    {
        id: "warby-parker-blount",
        name: "Warby Parker Blount",
        note: "Eyeglasses",
        categories: ["edc"],
        price: "$255.00",
        date: "Jun 27, 2025",
        desc: "Polished Gold Metal Frame (Wide) with Single-vision ($145), Blue-light-filtering Lenses ($50), 1.67 High-index Material ($60), Classic Coating (Free)",
        image: "asset/images/inventory/warby_parker_blount.png",
    },

    {
        id: "on-mens-cloud-x-4",
        name: "On Men's Cloud X 4",
        note: "Shoes",
        categories: ["gear"],
        price: "$159.99",
        date: "Aug 28, 2025",
        desc: "Men's Training Shoes, Size 10.5 (Medium/D), Ivory/Black Colorway",
        image: "asset/images/inventory/on_mens_cloud_x_4.png",
    },

    {
        id: "sig-sauer-p365-xl",
        name: "Sig Sauer P365 XL",
        note: "Pistol",
        categories: ["gear"],
        price: "$600 + $259.99",
        date: "May 10, 2025",
        desc: "9mm Micro-Compact Pistol with Extended Grip, 12-round Capacity, Equipped with Holosun HE507K-GR X2",
        image: "asset/images/inventory/sig_sauer_p365_xl.png",
    },

    {
        id: "rock-island-armory-m1911-a1",
        name: "Rock Island M1911 A1",
        note: "Pistol",
        categories: ["gear"],
        price: "$300",
        date: "Jun 30, 2025",
        desc: ".45 ACP Full-size 1911 with Steel Frame, 8-round Capacity, 5-inch Barrel, Classic GI-style Controls",
        image: "asset/images/inventory/rock_island_armory_m1911_a1.png",
    },

    {
        id: "radical-firearms-ar-15",
        name: "Radical Firearms AR-15",
        note: "Rifle",
        categories: ["gear"],
        price: "$520",
        date: "Jan 11, 2025",
        desc: "5.56 NATO Semi-automatic AR-15 with Free-float M-LOK Handguard",
        image: "asset/images/inventory/radical_firearms_ar_15.png",
    },
];

const inventoryGrid = document.getElementById('inventory-grid');

function renderInventory(filter) {
    inventoryGrid.innerHTML = '';

    inventoryData.forEach(item => {
        const match = filter === 'all' || (Array.isArray(filter) && filter.some(f => item.categories?.includes(f))) || item.categories?.includes(filter);
        
        if (match) {
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
                    <span class="categories-tag">
                        ${item.categories.map(c => c.toUpperCase()).join(' & ')}
                    </span>
                </div>
            `;
            inventoryGrid.appendChild(card);
        }
    });
}

function filterSelection(categories, e) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    renderInventory(categories);
}

const modal = document.getElementById('item-modal');
const modalInner = document.querySelector('.modal-card-inner');
const closeBtn = document.querySelector('.close-modal');

const mTitle = document.getElementById('modal-title');
const mNote = document.getElementById('modal-note');
const mBackTitle = document.getElementById('modal-back-title');
const mPrice = document.getElementById('modal-price');
const mDate = document.getElementById('modal-date');
const mDesc = document.getElementById('modal-desc');
const mImg = document.getElementById('modal-img');

function openModal(item) {
    mTitle.innerText = item.name;
    mNote.innerText = item.note;
    mBackTitle.innerText = item.name;
    mPrice.innerText = item.price;
    mDate.innerText = item.date;
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