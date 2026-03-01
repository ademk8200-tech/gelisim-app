window.BehaviorCard = function (behavior) {
    return `
        <div class="card glass-panel">
            <img src="${behavior.image}" alt="${behavior.title}" class="card-image">
            <div class="card-content">
                <div class="flex justify-between items-center mb-4">
                    <span style="font-size: 0.875rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${behavior.category}
                    </span>
                    <div class="flex items-center gap-1" style="color: #fbbf24;">
                        <i data-lucide="star" style="width: 16px; height: 16px; fill: currentColor;"></i>
                        <span style="font-weight: 600; font-size: 0.9rem;">${behavior.rating}</span>
                    </div>
                </div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${behavior.title}</h3>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${behavior.shortDescription}
                </p>
                <a href="#behavior/${behavior.id}" class="btn btn-outline" style="width: 100%; justify-content: center;">
                    İncele
                </a>
            </div>
        </div>
    `;
}
