import { behaviors } from '../data.js';

export function Dashboard() {
    const myRoutineIds = JSON.parse(localStorage.getItem('myRoutine')) || [];
    const myBehaviors = behaviors.filter(b => myRoutineIds.includes(b.id));

    setTimeout(() => {
        // Handle Remove
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const currentRoutine = JSON.parse(localStorage.getItem('myRoutine')) || [];
                const newRoutine = currentRoutine.filter(item => item !== id);
                localStorage.setItem('myRoutine', JSON.stringify(newRoutine));

                // Reload dashboard (simple way)
                window.location.reload();
            });
        });
    }, 0);

    if (myBehaviors.length === 0) {
        return `
            <div class="container py-12 text-center">
                <h1 class="font-serif mb-4">Henüz Bir Rutin Oluşturmadın</h1>
                <p class="text-muted mb-8">Gelişim yolculuğuna başlamak için kataloğu incele.</p>
                <a href="#" class="btn btn-primary">Davranışları Keşfet</a>
            </div>
        `;
    }

    return `
        <div class="container py-12">
            <h1 class="font-serif mb-2">Gelişim Panelin</h1>
            <p class="text-muted mb-8">Takip ettiğin ${myBehaviors.length} alışkanlık var.</p>

            <div class="grid grid-cols-3">
                ${myBehaviors.map(b => `
                    <div class="card glass-panel relative">
                        <img src="${b.image}" alt="${b.title}" class="card-image">
                        <div class="card-content">
                            <h3 class="mb-2">${b.title}</h3>
                            <div class="flex justify-between items-center mt-4">
                                <a href="#behavior/${b.id}" class="btn btn-outline btn-sm" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Detay</a>
                                <button class="remove-btn" data-id="${b.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; font-weight: 600;">
                                    Kaldır
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
