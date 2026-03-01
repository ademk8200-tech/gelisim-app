
window.MeditationTool = function (id) {
    return `
        <div class="glass-panel p-6 mb-8 border-l-4 border-indigo-500">
            <h3 class="text-xl mb-4 flex items-center gap-2">
                <i data-lucide="timer"></i> Meditasyon Zamanlayıcısı
            </h3>
            <div id="meditation-setup" class="flex flex-col gap-4">
                <div>
                    <label class="block text-sm text-muted mb-2">Süre (Dakika)</label>
                    <div class="flex gap-2">
                        <button class="btn btn-outline btn-sm duration-btn" data-time="5">5dk</button>
                        <button class="btn btn-outline btn-sm duration-btn" data-time="10">10dk</button>
                        <button class="btn btn-outline btn-sm duration-btn" data-time="20">20dk</button>
                        <input type="number" id="meditation-minutes" value="5" min="1" max="60" class="glass p-2 rounded w-20 text-center">
                    </div>
                </div>
                <button id="start-meditation" class="btn btn-primary w-full justify-center">Başla</button>
            </div>
            
            <div id="meditation-active" class="hidden text-center py-8">
                <div class="text-6xl font-mono mb-8" id="meditation-display">05:00</div>
                <p id="meditation-status" class="text-muted mb-8 animate-pulse">Nefesine odaklan...</p>
                <button id="stop-meditation" class="btn btn-outline w-full justify-center">Bitir</button>
            </div>
        </div>
    `;
};

window.initMeditationTool = function (id) {
    const setup = document.getElementById('meditation-setup');
    const active = document.getElementById('meditation-active');
    const display = document.getElementById('meditation-display');
    const startBtn = document.getElementById('start-meditation');
    const stopBtn = document.getElementById('stop-meditation');
    const input = document.getElementById('meditation-minutes');
    const durationBtns = document.querySelectorAll('.duration-btn');

    let timer = null;
    let timeLeft = 0;

    if (durationBtns) {
        durationBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.dataset.time;
                durationBtns.forEach(b => b.classList.remove('bg-white/10'));
                btn.classList.add('bg-white/10');
            });
        });
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const minutes = parseInt(input.value);
            if (minutes > 0) {
                timeLeft = minutes * 60;
                updateDisplay();
                setup.classList.add('hidden');
                active.classList.remove('hidden');

                timer = setInterval(() => {
                    timeLeft--;
                    updateDisplay();

                    if (timeLeft <= 0) {
                        clearInterval(timer);
                        finishMeditation();
                    }
                }, 1000);
            }
        });
    }

    if (stopBtn) {
        stopBtn.addEventListener('click', () => {
            clearInterval(timer);
            setup.classList.remove('hidden');
            active.classList.add('hidden');
        });
    }

    function updateDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function finishMeditation() {
        display.textContent = "00:00";
        document.getElementById('meditation-status').textContent = "Namaste. 🙏";
        if (navigator.vibrate) navigator.vibrate([500, 200, 500]);

        setTimeout(() => {
            alert("Meditasyon tamamlandı.");
            setup.classList.remove('hidden');
            active.classList.add('hidden');
            document.getElementById('meditation-status').textContent = "Nefesine odaklan...";
        }, 1000);
    }

    return () => {
        if (timer) clearInterval(timer);
    };
};

window.PomodoroTool = function (id) {
    return `
        <div class="glass-panel p-6 mb-8 border-l-4 border-red-500">
            <h3 class="text-xl mb-4 flex items-center gap-2">
                <i data-lucide="clock"></i> Pomodoro Sayacı
            </h3>
            
            <div class="text-center py-4">
                <div class="flex justify-center gap-4 mb-8">
                    <button id="pomo-work" class="btn btn-primary btn-sm">Çalış (25dk)</button>
                    <button id="pomo-break" class="btn btn-outline btn-sm">Mola (5dk)</button>
                </div>
                
                <div class="text-6xl font-mono mb-4" id="pomo-display">25:00</div>
                <p id="pomo-status" class="text-muted mb-8">Hazır mısın?</p>
                
                <div class="flex gap-2 justify-center">
                    <button id="pomo-start" class="btn btn-primary w-32 justify-center">Başlat</button>
                    <button id="pomo-reset" class="btn btn-outline w-32 justify-center">Sıfırla</button>
                </div>
            </div>
        </div>
    `;
};

window.initPomodoroTool = function (id) {
    const display = document.getElementById('pomo-display');
    const status = document.getElementById('pomo-status');
    const startBtn = document.getElementById('pomo-start');
    const resetBtn = document.getElementById('pomo-reset');
    const workBtn = document.getElementById('pomo-work');
    const breakBtn = document.getElementById('pomo-break');

    let timer = null;
    let timeLeft = 25 * 60;
    let isRunning = false;
    let mode = 'work'; // work | break

    function setMode(newMode) {
        mode = newMode;
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Başlat';

        if (mode === 'work') {
            timeLeft = 25 * 60;
            status.textContent = "Odaklanma zamanı!";
            workBtn.classList.replace('btn-outline', 'btn-primary');
            breakBtn.classList.replace('btn-primary', 'btn-outline');
        } else {
            timeLeft = 5 * 60;
            status.textContent = "Dinlenme zamanı.";
            breakBtn.classList.replace('btn-outline', 'btn-primary');
            workBtn.classList.replace('btn-primary', 'btn-outline');
        }
        updateDisplay();
    }

    if (workBtn) workBtn.addEventListener('click', () => setMode('work'));
    if (breakBtn) breakBtn.addEventListener('click', () => setMode('break'));

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (isRunning) {
                clearInterval(timer);
                isRunning = false;
                startBtn.textContent = 'Devam Et';
            } else {
                isRunning = true;
                startBtn.textContent = 'Duraklat';
                timer = setInterval(() => {
                    timeLeft--;
                    updateDisplay();
                    if (timeLeft <= 0) {
                        clearInterval(timer);
                        finishPomodoro();
                    }
                }, 1000);
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            setMode(mode);
        });
    }

    function updateDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function finishPomodoro() {
        isRunning = false;
        startBtn.textContent = 'Başlat';
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        alert(mode === 'work' ? "Çalışma bitti! Mola ver." : "Mola bitti! Çalışmaya dön.");
    }

    return () => {
        if (timer) clearInterval(timer);
    };
};

window.DeadlineTool = function (id) {
    return `
        <div class="glass-panel p-6 mb-8 border-l-4 border-yellow-500">
            <h3 class="text-xl mb-4 flex items-center gap-2">
                <i data-lucide="calendar"></i> Deadline Takipçisi
            </h3>
            
            <form id="deadline-form" class="mb-6 flex gap-2 flex-wrap">
                <input type="text" id="deadline-title" placeholder="Proje/Görev Adı" class="glass p-2 rounded flex-grow" required>
                <input type="datetime-local" id="deadline-date" class="glass p-2 rounded" required>
                <button type="submit" class="btn btn-primary">Ekle</button>
            </form>
            
            <div id="deadline-list" class="flex flex-col gap-3">
                <!-- Items will be injected here -->
            </div>
        </div>
    `;
};

window.initDeadlineTool = function (id) {
    const form = document.getElementById('deadline-form');
    const list = document.getElementById('deadline-list');
    const titleInput = document.getElementById('deadline-title');
    const dateInput = document.getElementById('deadline-date');

    // Load deadlines
    let deadlines = [];
    try {
        deadlines = JSON.parse(localStorage.getItem('myDeadlines')) || [];
    } catch (e) { console.error(e); }

    function render() {
        if (!list) return;
        list.innerHTML = deadlines.map((d, index) => {
            const now = new Date().getTime();
            const target = new Date(d.date).getTime();
            const diff = target - now;

            let timeString = "";
            let colorClass = "text-green-400";

            if (diff < 0) {
                timeString = "Süre doldu!";
                colorClass = "text-red-500";
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                timeString = `${days}g ${hours}s ${minutes}dk kaldı`;

                if (days < 1) colorClass = "text-red-400";
                else if (days < 3) colorClass = "text-yellow-400";
            }

            return `
                <div class="glass p-3 rounded flex justify-between items-center">
                    <div>
                        <div class="font-bold">${d.title}</div>
                        <div class="text-sm ${colorClass}">${timeString}</div>
                        <div class="text-xs text-muted">${new Date(d.date).toLocaleString('tr-TR')}</div>
                    </div>
                    <button class="btn btn-sm btn-outline text-red-400 border-red-400 hover:bg-red-400 hover:text-white remove-deadline" data-index="${index}">
                        <i data-lucide="trash-2" style="width:16px;"></i>
                    </button>
                </div>
            `;
        }).join('');

        // Re-attach listeners
        document.querySelectorAll('.remove-deadline').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(btn.closest('button').dataset.index);
                deadlines.splice(idx, 1);
                save();
                render();
            });
        });

        if (window.lucide) window.lucide.createIcons();
    }

    function save() {
        localStorage.setItem('myDeadlines', JSON.stringify(deadlines));
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            deadlines.push({
                title: titleInput.value,
                date: dateInput.value,
                createdAt: new Date().toISOString()
            });
            save();
            render();
            form.reset();
        });
    }

    render();

    // Update every minute
    const intervalId = setInterval(render, 60000);
    return () => clearInterval(intervalId);
};
