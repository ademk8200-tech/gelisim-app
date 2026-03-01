import { behaviors } from '../data.js';

export function BehaviorDetail(id) {
    const behavior = behaviors.find(b => b.id === id);

    if (!behavior) {
        return `<div class="container py-12"><h2>İçerik bulunamadı.</h2></div>`;
    }

    // Check if already in routine
    const myRoutine = JSON.parse(localStorage.getItem('myRoutine')) || [];
    const isAdded = myRoutine.includes(id);

    // Render Reviews
    const reviewsHtml = behavior.reviews.map(r => `
        <div class="glass-panel p-4 mb-4">
            <div class="flex justify-between items-center mb-2">
                <span style="font-weight: 600;">${r.user}</span>
                <div class="flex items-center gap-1" style="color: #fbbf24;">
                    <i data-lucide="star" style="width: 14px;"></i>
                    <span>${r.rating}</span>
                </div>
            </div>
            <p style="color: var(--text-muted);">${r.comment}</p>
        </div>
    `).join('');

    setTimeout(() => {
        // Handle "Add to Routine"
        const btn = document.getElementById('addToRoutineBtn');
        if (btn) {
            btn.addEventListener('click', () => {
                const currentRoutine = JSON.parse(localStorage.getItem('myRoutine')) || [];
                if (!currentRoutine.includes(id)) {
                    currentRoutine.push(id);
                    localStorage.setItem('myRoutine', JSON.stringify(currentRoutine));
                    btn.textContent = 'Listene Eklendi ✓';
                    btn.classList.add('btn-outline');
                    btn.classList.remove('btn-primary');
                    btn.disabled = true;
                }
            });
        }

        // Handle Review Submission (Mock)
        const reviewForm = document.getElementById('reviewForm');
        if (reviewForm) {
            reviewForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const comment = document.getElementById('reviewComment').value;
                const newReviewHtml = `
                    <div class="glass-panel p-4 mb-4 animate-fade-in">
                        <div class="flex justify-between items-center mb-2">
                            <span style="font-weight: 600;">Sen</span>
                            <div class="flex items-center gap-1" style="color: #fbbf24;">
                                <i data-lucide="star" style="width: 14px;"></i>
                                <span>5</span>
                            </div>
                        </div>
                        <p style="color: var(--text-muted);">${comment}</p>
                    </div>
                `;
                document.getElementById('reviewsList').insertAdjacentHTML('afterbegin', newReviewHtml);
                reviewForm.reset();
            });
        }
    }, 0);

    return `
        <div class="container py-12">
            <a href="#" class="btn btn-outline mb-8" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i data-lucide="arrow-left"></i> Geri Dön
            </a>

            <div class="grid grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="col-span-2" style="grid-column: span 2;">
                    <h1 class="font-serif mb-4" style="font-size: 3rem;">${behavior.title}</h1>
                    <div class="flex items-center gap-4 mb-8">
                        <span class="glass px-3 py-1 rounded-full text-sm">${behavior.category}</span>
                        <div class="flex items-center gap-1" style="color: #fbbf24;">
                            <i data-lucide="star"></i>
                            <span>${behavior.rating}</span>
                        </div>
                    </div>

                    <div class="glass-panel p-8 mb-8">
                        <div style="font-size: 1.1rem; color: var(--text-main);">
                            ${behavior.fullDescription}
                        </div>
                    </div>

                    <h3 class="mb-4 text-2xl">Video Rehber</h3>
                    <div class="glass-panel p-2 mb-8" style="aspect-ratio: 16/9;">
                        <iframe width="100%" height="100%" src="${behavior.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 0.5rem;"></iframe>
                    </div>

                    <h3 class="mb-4 text-2xl">Kullanıcı Yorumları</h3>
                    <div class="glass-panel p-8">
                        <form id="reviewForm" class="mb-8">
                            <textarea id="reviewComment" class="glass w-full p-4 rounded-lg mb-4" style="width: 100%; background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); color: white;" placeholder="Deneyimlerini paylaş..." required></textarea>
                            <button type="submit" class="btn btn-primary">Yorum Yap</button>
                        </form>
                        <div id="reviewsList">
                            ${reviewsHtml}
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div>
                    <div class="glass-panel p-6 sticky" style="position: sticky; top: 100px;">
                        <img src="${behavior.image}" alt="${behavior.title}" class="rounded-lg mb-6 w-full object-cover" style="height: 200px;">
                        <h3 class="mb-2">Harekete Geç</h3>
                        <p class="text-muted mb-6 text-sm">Bu davranışı günlük rutinine ekleyerek gelişimini takip et.</p>
                        <button id="addToRoutineBtn" class="btn ${isAdded ? 'btn-outline' : 'btn-primary'} w-full justify-center" ${isAdded ? 'disabled' : ''}>
                            ${isAdded ? 'Listene Eklendi ✓' : 'Rutinime Ekle'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
