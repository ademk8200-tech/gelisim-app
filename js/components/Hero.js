export function Hero() {
    return `
        <section class="container py-12 flex flex-col items-center justify-center" style="min-height: 60vh; text-align: center;">
            <h1 class="animate-fade-in font-serif" style="font-size: 3.5rem; line-height: 1.2; margin-bottom: 1.5rem;">
                En İyi Versiyonuna<br>
                <span class="text-gradient">Adım At</span>
            </h1>
            <p class="animate-fade-in delay-100" style="font-size: 1.25rem; color: var(--text-muted); max-width: 600px; margin-bottom: 2.5rem;">
                Bilimsel temelli alışkanlıklar, meditasyon pratikleri ve üretkenlik teknikleriyle hayatını dönüştür.
            </p>
            <a href="#catalog" class="btn btn-primary animate-fade-in delay-200">
                Hemen Başla <i data-lucide="arrow-right"></i>
            </a>
        </section>
    `;
}
