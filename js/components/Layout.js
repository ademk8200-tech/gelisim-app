window.Layout = function (content) {
    // Background Rotation Logic
    const backgroundImages = [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop', // Workspace
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop', // Nature/Forest
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop', // Landscape/Lake
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Modern Office
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop'  // Mountain/Stars
    ];

    let currentImageIndex = 0;

    // Initialize first image
    setTimeout(() => {
        const layer1 = document.getElementById('bg-layer-1');
        if (layer1) layer1.style.backgroundImage = `url('${backgroundImages[0]}')`;
    }, 0);

    // Function to rotate background
    const rotateBackground = () => {
        const layer1 = document.getElementById('bg-layer-1');
        const layer2 = document.getElementById('bg-layer-2');

        if (!layer1 || !layer2) return;

        const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
        const nextImage = `url('${backgroundImages[nextIndex]}')`;

        // Determine active layer
        const isLayer1Active = layer1.classList.contains('active');
        const activeLayer = isLayer1Active ? layer1 : layer2;
        const nextLayer = isLayer1Active ? layer2 : layer1;

        // Set next image and cross-fade
        nextLayer.style.backgroundImage = nextImage;

        // Small delay to ensure image load start (optional but safer)
        requestAnimationFrame(() => {
            activeLayer.classList.remove('active');
            nextLayer.classList.add('active');
        });

        currentImageIndex = nextIndex;
    };

    // Start rotation (every 5 seconds)
    // Clear any existing interval to prevent duplicates on re-renders
    if (window.bgRotationInterval) clearInterval(window.bgRotationInterval);
    window.bgRotationInterval = setInterval(rotateBackground, 5000);

    return `
        <nav class="navbar glass" style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 1rem 0; border-bottom: 1px solid var(--glass-border);">
            <div class="container flex justify-between items-center">
                <a href="#" class="text-gradient" style="font-size: 1.5rem; font-weight: 700; text-decoration: none;">Gelişim</a>
                <div class="flex items-center gap-8">
                    <div class="flex gap-8">
                        <a href="#" class="nav-link">Ana Sayfa</a>
                        <a href="#dashboard" class="nav-link">Panelim</a>
                        <a href="#profile" class="nav-link">Profilim</a>
                    </div>
                    <button id="theme-toggle" class="btn btn-outline" style="padding: 0.5rem; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                        <i data-lucide="sun"></i>
                    </button>
                </div>
            </div>
        </nav>

        <main style="padding-top: 80px; min-height: calc(100vh - 200px);">
            ${content}
        </main>

        <footer class="glass" style="margin-top: 4rem; padding: 2rem 0; border-top: 1px solid var(--glass-border);">
            <div class="container flex justify-between items-center">
                <p style="color: var(--text-muted);">© 2025 Gelişim App. Tüm hakları saklıdır.</p>
                <div class="flex gap-4">
                    <a href="#" style="color: var(--text-muted);"><i data-lucide="instagram"></i></a>
                    <a href="#" style="color: var(--text-muted);"><i data-lucide="twitter"></i></a>
                </div>
            </div>
        </footer>
    `;
}

// Initialize Layout Components (Theme Toggle)
window.initLayout = function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        // Update icon based on current theme
        const updateIcon = (theme) => {
            toggleBtn.innerHTML = theme === 'dark'
                ? '<i data-lucide="sun"></i>'
                : '<i data-lucide="moon"></i>';
            if (window.lucide) window.lucide.createIcons();
        };

        updateIcon(savedTheme);

        // Remove existing listener to avoid duplicates if any (though initLayout called once per render usually)
        // This is a common pattern to safely re-attach event listeners on dynamically rendered content.
        const newBtn = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);

        newBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });
    }
};
