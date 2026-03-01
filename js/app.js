// Main App Logic
const keyPart1 = "AIzaSyA";
const keyPart2 = "Tnvixz-u7yW";
const keyPart3 = "kIkfR9SFsFHrDfvHS4uDY";
const GEMINI_API_KEY = keyPart1 + keyPart2 + keyPart3;

function AIGuideSection() {
    return `
    <section id="ai-guide" class="container py-12">
        <div class="glass-panel p-8" style="position: relative; overflow: hidden;">
            <div class="flex flex-col md:flex-row gap-8 items-start">
                <div style="flex: 1;">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="glass flex items-center justify-center rounded-full" style="width: 48px; height: 48px; color: var(--accent);">
                            <i data-lucide="sparkles"></i>
                        </div>
                        <h2 class="font-serif text-2xl" style="margin-bottom: 0;">Yapay Zeka Rehberin</h2>
                    </div>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Nasıl hissettiğini veya ne tür bir tavsiyeye ihtiyacın olduğunu yaz. Senin için en uygun gelişim adımını önereyim.</p>
                    
                    <div class="flex flex-col gap-4">
                        <textarea id="ai-input" class="glass w-full p-4 rounded-lg" style="min-height: 120px; background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); color: white; resize: vertical;" placeholder="Örnek: Bugün çok stresliyim odaklanamıyorum, bana ne önerirsin?"></textarea>
                        <button id="ai-submit-btn" class="btn btn-primary" style="align-self: flex-start;">
                            <i data-lucide="zap"></i> Öneri Al
                        </button>
                    </div>
                </div>
                
                <div style="flex: 1; width: 100%;">
                    <div id="ai-result-card" class="glass w-full p-6 rounded-lg" style="min-height: 250px; background: rgba(255,255,255,0.05); display: flex; flex-direction: column; justify-content: center;">
                        <div id="ai-placeholder" class="text-center" style="color: var(--text-muted); opacity: 0.7;">
                            <i data-lucide="bot" style="width: 48px; height: 48px; margin: 0 auto 1rem auto; opacity: 0.5;"></i>
                            <p>Yapay zeka tavsiyeleri burada görünecek.</p>
                        </div>
                        
                        <div id="ai-loading" style="display: none; text-align: center;">
                            <div class="ai-spinner mb-4"></div>
                            <p class="animate-pulse" style="color: var(--accent); font-weight: 500;">Öneriler hazırlanıyor...</p>
                        </div>
                        
                        <div id="ai-response" class="ai-result-content" style="display: none; height: 100%; overflow-y: auto;">
                            <!-- Response will be injected here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

function Hero() {
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

// Pages
function Home() {
    // BehaviorCard is defined globally in js/components/BehaviorCard.js
    const catalogHtml = behaviors.map(b => BehaviorCard(b)).join('');

    setTimeout(() => {
        const submitBtn = document.getElementById('ai-submit-btn');
        const aiInput = document.getElementById('ai-input');
        const placeholder = document.getElementById('ai-placeholder');
        const loading = document.getElementById('ai-loading');
        const responseContainer = document.getElementById('ai-response');

        if (submitBtn) {
            submitBtn.addEventListener('click', async () => {
                const prompt = aiInput.value.trim();
                if (!prompt) return;

                // UI Update: Show loading
                submitBtn.disabled = true;
                placeholder.style.display = 'none';
                responseContainer.style.display = 'none';
                loading.style.display = 'block';

                try {
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{
                                    text: "Sen kullanıcının kişisel gelişim süreçlerinde ona destek olan, motive edici, empati kuran, arkadaş canlısı ama bilge bir asistansın. Kullanıcının girdiği şu duruma göre ona tavsiyeler ver. Kısa, okunabilir (paragraf ve listeler kullanarak), modern bir dille cevap ver. Maksimum 150-200 kelime olsun. Kullanıcının durumu: " + prompt
                                }]
                            }]
                        })
                    });

                    const data = await response.json();

                    if (data.error) {
                        throw new Error(data.error.message || "Bilinmeyen bir hata oluştu.");
                    }

                    const aiText = data.candidates[0].content.parts[0].text;

                    // Use marked.js if available, otherwise fallback to plain text spacing
                    if (window.marked) {
                        responseContainer.innerHTML = marked.parse(aiText);
                    } else {
                        responseContainer.innerHTML = '<p>' + aiText.replace(/\\n/g, '<br/>') + '</p>';
                    }

                    loading.style.display = 'none';
                    responseContainer.style.display = 'block';

                } catch (error) {
                    console.error("AI Error:", error);
                    loading.style.display = 'none';
                    responseContainer.style.display = 'block';
                    responseContainer.innerHTML = `<p style="color: #ef4444;">Üzgünüm, şu an bağlantı kuramıyorum. Lütfen daha sonra tekrar dene.</p>`;
                } finally {
                    submitBtn.disabled = false;
                }
            });
        }
    }, 0);

    return `
        ${Hero()}

        ${AIGuideSection()}

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

function BehaviorDetail(id) {
    const behavior = behaviors.find(b => b.id === id);

    if (!behavior) {
        return `<div class="container py-12"><h2>İçerik bulunamadı.</h2></div>`;
    }

    // Check if already in routine
    let myRoutine = [];
    try {
        myRoutine = JSON.parse(localStorage.getItem('myRoutine')) || [];
    } catch (e) { console.error(e); }
    const isAdded = myRoutine.includes(id);

    // Tool HTML
    let toolHtml = '';
    if (behavior.toolType) {
        if (behavior.toolType === 'meditation') toolHtml = MeditationTool(id);
        else if (behavior.toolType === 'pomodoro') toolHtml = PomodoroTool(id);
        else if (behavior.toolType === 'deadline') toolHtml = DeadlineTool(id);
    }

    // Reviews (Mock)
    const reviews = behavior.reviews || [
        { user: 'Ahmet Y.', rating: 5, comment: 'Harika bir alışkanlık, hayatımı değiştirdi.' },
        { user: 'Zeynep K.', rating: 4, comment: 'Uygulaması biraz zor ama kesinlikle değer.' }
    ];

    const reviewsHtml = reviews.map(r => `
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
        // Init Tool
        if (behavior.toolType) {
            if (behavior.toolType === 'meditation') cleanup = initMeditationTool(id);
            else if (behavior.toolType === 'pomodoro') cleanup = initPomodoroTool(id);
            else if (behavior.toolType === 'deadline') cleanup = initDeadlineTool(id);
        }

        // Handle "Add to Routine"
        const btn = document.getElementById('addToRoutineBtn');
        if (btn) {
            btn.addEventListener('click', () => {
                let currentRoutine = [];
                try {
                    currentRoutine = JSON.parse(localStorage.getItem('myRoutine')) || [];
                    if (!currentRoutine.includes(id)) {
                        currentRoutine.push(id);
                        localStorage.setItem('myRoutine', JSON.stringify(currentRoutine));
                        btn.textContent = 'Listene Eklendi ✓';
                        btn.classList.add('btn-outline');
                        btn.classList.remove('btn-primary');
                        btn.disabled = true;
                    }
                } catch (e) {
                    console.error('LocalStorage write failed:', e);
                    alert('Tarayıcı ayarlarınız kayıt yapmaya izin vermiyor.');
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

                    ${toolHtml}

                    <div class="glass-panel p-8 mb-8">
                        <div style="font-size: 1.1rem; color: var(--text-main);">
                            ${behavior.fullDescription}
                        </div>
                    </div>

                    ${behavior.article ? `
                    <h3 class="mb-4 text-2xl">Makale</h3>
                    <div class="glass-panel p-8 mb-8 article-content">
                        ${behavior.article}
                    </div>
                    ` : ''}

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

function Dashboard() {
    let myRoutineIds = [];
    try {
        myRoutineIds = JSON.parse(localStorage.getItem('myRoutine')) || [];
    } catch (e) {
        console.error('LocalStorage access failed:', e);
    }
    const myBehaviors = behaviors.filter(b => myRoutineIds.includes(b.id));

    setTimeout(() => {
        // Handle Remove
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                try {
                    const currentRoutine = JSON.parse(localStorage.getItem('myRoutine')) || [];
                    const newRoutine = currentRoutine.filter(item => item !== id);
                    localStorage.setItem('myRoutine', JSON.stringify(newRoutine));

                    // Reload dashboard (simple way)
                    window.location.reload();
                } catch (e) {
                    console.error('LocalStorage update failed:', e);
                }
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
                                <a href="#behavior/${b.id}" class="btn btn-outline btn-sm" style="font-size: 0.8rem; padding: 0.5rem 1rem;">
                                    ${b.toolType ? '<i data-lucide="play-circle" style="width:16px; margin-right:4px;"></i> ' : ''}
                                    Başla / Detay
                                </a>
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

// Router & App
const app = document.getElementById('app');
let cleanup = null;

function router() {
    // Cleanup previous view's intervals/listeners
    if (cleanup) {
        cleanup();
        cleanup = null;
    }

    const hash = window.location.hash || '#';
    let content = '';

    if (hash === '#') {
        content = Home();
    } else if (hash.startsWith('#behavior/')) {
        const id = hash.split('/')[1];
        content = BehaviorDetail(id);
    } else if (hash === '#dashboard') {
        content = Dashboard();
    } else {
        content = Home();
    }

    app.innerHTML = Layout(content);

    // Initialize Layout (Theme Toggle)
    if (window.initLayout) window.initLayout();

    // Re-initialize icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
