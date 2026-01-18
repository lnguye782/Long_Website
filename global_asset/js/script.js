async function loadPartial(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    
    const res = await fetch(url);
    if (!res.ok) {
        console.error(`Failed to load ${url}:`, res.status);
        return;
    }
    el.innerHTML = await res.text();
}

function initHeaderUI() {
    const hamburger = document.querySelector('.hamburger-menu');
    const headerLinks = document.getElementById('header-links');

    if (hamburger && headerLinks) {
        hamburger.addEventListener('click', () => {
            headerLinks.classList.toggle('active');
        });
    }

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            searchResults.innerHTML = '';

            if (query.length === 0) {
                searchResults.classList.remove('show');
                return;
            }

            const results = searchIndex.filter(item => 
                item.title.toLowerCase().includes(query) || (item.keywords && item.keywords.toLowerCase().includes(query))
            );

            if (results.length > 0) {
                results.forEach(result => {
                    const link = document.createElement('a');
                    link.href = result.url;
                    link.classList.add('search-item');
                    link.innerHTML = `
                        ${result.title}
                        <small>${result.url}</small> 
                    `;
                    searchResults.appendChild(link);
                });
            } else {
                searchResults.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
            }

            searchResults.classList.add('show');
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('show');
            }
        });
    }
}

const searchIndex = [
    {
        title: "Long", 
        url: "/about_page/index.html", 
        keywords: "long about" 
    },

    { 
        title: "Experience", 
        url: "/experience_page/index.html", 
        keywords: "resume work job career" 
    },

    { 
        title: "Inventory", 
        url: "/inventory_page/index.html", 
        keywords: "arsenal tech sport" 
    },

    { 
        title: "PC Build", 
        url: "/computer_page/index.html", 
        keywords: "computer build pc" 
    },
];

document.addEventListener("DOMContentLoaded", async () => {
    await loadPartial("header", "/global_asset/includes/header.html");
    await loadPartial("footer", "/global_asset/includes/footer.html");

    initHeaderUI();
});