import { Hero } from '../components/Hero.js';
import { BehaviorCard } from '../components/BehaviorCard.js';
import { behaviors } from '../data.js';

export function Home() {
    const catalogHtml = behaviors.map(b => BehaviorCard(b)).join('');

    return `
        ${Hero()}
        
        <section id="catalog" class="container py-12">
            <div class="flex justify-between items-end mb-8">
                <div>
                    <h2 class="font-serif" style="font-size: 2.5rem; margin-bottom: 0.5rem;">Keşfet</h2>
                    <p style="color: var(--text-muted);">Senin için seçtiğimiz gelişim araçları</p>
                </div>
            </div>
            
            <div class="grid grid-cols-3">
                ${catalogHtml}
            </div>
        </section>
    `;
}
