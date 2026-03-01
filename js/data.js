window.behaviors = [
    {
        id: 'meditation',
        title: 'Meditasyon Yap',
        shortDescription: 'Zihinsel berraklık ve iç huzur için günlük pratik.',
        fullDescription: `
            <p>Meditasyon, zihni odaklama ve yönlendirme pratiğidir. Binlerce yıldır uygulanan bu yöntem, günümüzde stres yönetimi ve zihinsel sağlık için en etkili araçlardan biri olarak kabul edilmektedir. Modern yaşamın kaosu içinde kendinize bir sığınak yaratmanızı sağlar.</p>
        `,
        article: `
            <h3>Meditasyonun Bilimi ve Derinliği</h3>
            <p>Meditasyon, sadece "hiçbir şey düşünmemek" değildir; aksine, zihnin işleyişini gözlemleme sanatıdır. Nörobilim araştırmaları, düzenli meditasyonun beynin prefrontal korteksini (karar verme ve farkındalık merkezi) kalınlaştırdığını ve amigdalayı (korku ve stres merkezi) küçülttüğünü göstermektedir.</p>
            
            <h4>Temel Faydalar</h4>
            <ul>
                <li><strong>Nöroplastisite:</strong> Beynin yapısal olarak değişmesini ve yeni nöral yollar oluşturmasını destekler.</li>
                <li><strong>Duygusal Regülasyon:</strong> Zorlayıcı duygularla başa çıkma kapasitesini artırır, tepkisel değil yanıt verici olmanızı sağlar.</li>
                <li><strong>Bağışıklık Sistemi:</strong> Stres hormonlarını azaltarak bağışıklık sistemini güçlendirir.</li>
            </ul>

            <h4>Derinleşme Teknikleri</h4>
            <p>Başlangıç seviyesinden ileri seviyeye geçmek için:</p>
            <ol>
                <li><strong>Vücut Tarama (Body Scan):</strong> Dikkatinizi ayak parmaklarınızdan başınıza kadar vücudunuzun her bölgesine sırayla odaklayın.</li>
                <li><strong>Metta (Sevgi-Şefkat) Meditasyonu:</strong> Kendinize ve başkalarına iyi dileklerde bulunarak empatiyi geliştirin.</li>
                <li><strong>Yürüyüş Meditasyonu:</strong> Her adımın farkında olarak, hareket halindeyken meditatif bir duruma geçin.</li>
            </ol>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/inpok4MKVLM',
        rating: 4.9,
        reviews: [
            { user: 'Ayşe K.', comment: 'Hayatımı değiştirdi, artık çok daha sakinim.', rating: 5 },
            { user: 'Mehmet Y.', comment: 'Başta zordu ama şimdi vazgeçilmezim.', rating: 4 }
        ],
        toolType: 'meditation'
    },
    {
        id: 'pomodoro',
        title: 'Pomodoro Tekniği Uygula',
        shortDescription: 'Zaman yönetimi ve üretkenlik için 25 dakikalık odaklanma.',
        fullDescription: `
            <p>Pomodoro Tekniği, zamanı düşman değil müttefik olarak kullanmanızı sağlayan bir yöntemdir. 25 dakikalık yoğun odaklanma ve 5 dakikalık dinlenme döngüleri, zihinsel yorgunluğu önleyerek sürdürülebilir bir üretkenlik sağlar.</p>
        `,
        article: `
            <h3>Zamanı Yönetmenin Ustaca Yolu: Pomodoro</h3>
            <p>Francesco Cirillo tarafından geliştirilen bu teknik, ismini mutfaklarda kullanılan domates şeklindeki zamanlayıcıdan alır. Temel prensibi basittir: Büyük görevleri yönetilebilir küçük parçalara bölmek.</p>

            <h4>Neden İşe Yarıyor?</h4>
            <p>Parkinson Yasası'na göre, "Bir iş, tamamlanması için ayrılan süreyi dolduracak kadar genişler." Pomodoro, bu süreyi kısıtlayarak (25 dakika) beyni hiper-odaklanma moduna sokar. Ayrıca sık molalar, beynin ödül mekanizmasını çalıştırarak motivasyonu yüksek tutar.</p>

            <h4>İleri Seviye İpuçları</h4>
            <ul>
                <li><strong>Görevi Parçala:</strong> Eğer bir görev 4 Pomodoro'dan (100 dakika) fazla sürüyorsa, onu daha küçük alt görevlere bölün.</li>
                <li><strong>Bölünmeleri Yönet:</strong> Çalışma sırasında aklınıza gelen diğer işleri bir kağıda not edin ve Pomodoro bitene kadar onlarla ilgilenmeyin.</li>
                <li><strong>Mola Disiplini:</strong> Molalarda kesinlikle işle ilgili bir şey yapmayın. Kalkın, su için, esneyin. Ekran başından uzaklaşın.</li>
            </ul>
        `,
        category: 'Üretkenlik',
        image: './assets/pomodoro.png',
        videoUrl: 'https://www.youtube.com/embed/mNBmG24djoY',
        rating: 4.7,
        reviews: [
            { user: 'Canan T.', comment: 'Ders çalışırken odaklanmamı sağlayan tek yöntem.', rating: 5 }
        ],
        toolType: 'pomodoro'
    },
    {
        id: 'hydration',
        title: 'Su Takibi Yap',
        shortDescription: 'Enerji ve sağlık için günlük su tüketimi.',
        fullDescription: `
            <p>Su, yaşamın kaynağıdır ve vücut fonksiyonlarının düzgün çalışması için elzemdir. Yeterli hidrasyon, fiziksel performanstan bilişsel yeteneklere kadar her şeyi doğrudan etkiler.</p>
        `,
        article: `
            <h3>Hidrasyonun Biyolojik Önemi</h3>
            <p>İnsan beyninin %73'ü sudan oluşur. Hafif bir dehidrasyon (%1-3 sıvı kaybı) bile hafıza, konsantrasyon ve ruh hali üzerinde ölçülebilir olumsuz etkiler yaratır.</p>

            <h4>Vücudunuzdaki Etkileri</h4>
            <ul>
                <li><strong>Enerji Seviyesi:</strong> Su, besinlerin hücrelere taşınmasını sağlar. Yetersiz su, yorgunluk ve halsizlik nedenidir.</li>
                <li><strong>Cilt Sağlığı:</strong> Yeterli su tüketimi, cildin elastikiyetini korur ve erken yaşlanma belirtilerini azaltır.</li>
                <li><strong>Detoks Etkisi:</strong> Böbreklerin toksinleri vücuttan atmasına yardımcı olur.</li>
            </ul>

            <h4>Doğru Su Tüketimi Stratejileri</h4>
            <p>Sadece susadığınızda su içmek yeterli değildir; susama hissi, dehidrasyonun başladığının bir işaretidir. Sabah uyanır uyanmaz bir bardak su içmek, gece boyunca kaybedilen sıvıyı yerine koyar ve metabolizmayı %24-30 oranında hızlandırır.</p>
        `,
        category: 'Sağlık',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1888&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/9iMGFqMmUFs',
        rating: 4.8,
        reviews: []
    },
    {
        id: 'steps',
        title: '10.000 Adım At',
        shortDescription: 'Aktif bir yaşam için günlük hareket hedefi.',
        fullDescription: `
            <p>Yürüyüş, insan doğasına en uygun egzersizdir. 10.000 adım hedefi, aktif bir yaşam tarzını sürdürmek ve kronik hastalık riskini azaltmak için küresel bir standart haline gelmiştir.</p>
        `,
        article: `
            <h3>Hareketin İyileştirici Gücü</h3>
            <p>Modern yaşam bizi oturmaya mahkum ediyor. "Oturmak yeni sigaradır" sözü abartı değildir; hareketsizlik, kalp hastalıkları, diyabet ve obezite ile doğrudan ilişkilidir. Günde 10.000 adım (yaklaşık 7-8 km), bu riskleri önemli ölçüde azaltır.</p>

            <h4>Fiziksel ve Zihinsel Kazanımlar</h4>
            <ul>
                <li><strong>Kalp Sağlığı:</strong> Düzenli yürüyüş, kan basıncını düşürür ve iyi kolesterolü (HDL) artırır.</li>
                <li><strong>Kilo Kontrolü:</strong> Ortalama bir tempoda 10.000 adım, yaklaşık 400-500 kalori yakmanızı sağlar.</li>
                <li><strong>Yaratıcılık:</strong> Stanford Üniversitesi'nde yapılan bir araştırma, yürüyüş yapmanın yaratıcı düşünmeyi %60 oranında artırdığını ortaya koymuştur.</li>
            </ul>

            <h4>Nasıl Ulaşılır?</h4>
            <p>Asansör yerine merdiven kullanmak, arabayı uzağa park etmek veya telefon görüşmelerini yürüyerek yapmak gibi küçük değişiklikler, gün sonunda büyük bir fark yaratır.</p>
        `,
        category: 'Fiziksel',
        image: './assets/steps.png',
        videoUrl: 'https://www.youtube.com/embed/_kGESn8ArrU',
        rating: 4.6,
        reviews: []
    },
    {
        id: 'deadline',
        title: 'Deadline Yönet',
        shortDescription: 'Son teslim tarihlerine sadık kalarak stresi yenin.',
        fullDescription: `
            <p>Deadline yönetimi, sadece işleri zamanında bitirmek değil, aynı zamanda süreç boyunca stresi yönetmek ve iş kalitesini korumaktır. Profesyonel hayatta güvenilirliğin temel taşıdır.</p>
        `,
        article: `
            <h3>Son Teslim Tarihi Psikolojisi</h3>
            <p>Deadline'lar genellikle stres kaynağı olarak görülür, ancak doğru yönetildiğinde güçlü bir motivasyon aracıdırlar. "Planlama Yanılgısı" (Planning Fallacy), insanların bir işin ne kadar süreceğini genellikle olduğundan daha kısa tahmin etme eğilimidir. Bu yanılgıyı aşmak, deadline yönetiminin ilk adımıdır.</p>

            <h4>Etkili Stratejiler</h4>
            <ul>
                <li><strong>Tampon Süre Bırakın:</strong> Beklenmedik aksilikler için her zaman tahmin ettiğiniz sürenin %20'si kadar ek süre koyun.</li>
                <li><strong>Geriye Doğru Planlama:</strong> Teslim tarihinden bugüne doğru gelerek ara hedefler (milestones) belirleyin.</li>
                <li><strong>Önceliklendirme (Eisenhower Matrisi):</strong> Acil ve önemli işleri ayırt edin. Her acil iş önemli değildir.</li>
            </ul>

            <h4>Erteleme ile Mücadele</h4>
            <p>Erteleme, tembellik değil, duygusal bir başa çıkma mekanizmasıdır. İşin zorluğundan veya başarısızlık korkusundan kaçınmak için erteleriz. "Sadece 5 dakika çalışacağım" diyerek başlamak, bu direnci kırmanın en etkili yoludur.</p>
        `,
        category: 'Kariyer',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/QJ2Fp6h9c2c',
        rating: 4.5,
        reviews: [],
        toolType: 'deadline'
    },
    {
        id: 'journaling',
        title: 'Günlük Tut',
        shortDescription: 'Düşünceleri düzenlemek ve farkındalık için yazma pratiği.',
        fullDescription: `
            <p>Günlük tutmak, zihninizi kağıda dökmek ve iç dünyanızı keşfetmek için güçlü bir araçtır. Düşünceleri somutlaştırmak, onları daha iyi analiz etmenizi ve duygusal yüklerden arınmanızı sağlar.</p>
        `,
        article: `
            <h3>Yazmanın Terapötik Etkisi</h3>
            <p>Psikolog James Pennebaker'ın araştırmaları, travmatik veya stresli olaylar hakkında yazmanın bağışıklık sistemini güçlendirdiğini ve duygusal iyileşmeyi hızlandırdığını göstermektedir. Yazmak, beynin sol (mantıksal) ve sağ (yaratıcı) loblarını aynı anda çalıştırır.</p>

            <h4>Farklı Günlük Tutma Yöntemleri</h4>
            <ul>
                <li><strong>Bilinç Akışı (Stream of Consciousness):</strong> Hiç durmadan, dilbilgisi veya mantık kaygısı gütmeden aklınıza gelen her şeyi yazın. Zihinsel detoks için idealdir.</li>
                <li><strong>Minnettarlık Günlüğü:</strong> Her gün şükrettiğiniz 3 şeyi yazmak, beyninizi pozitifi görmeye eğitir.</li>
                <li><strong>Gelecek Senaryosu:</strong> 5 yıl sonraki ideal hayatınızı şimdiki zamanda gerçekleşmiş gibi detaylıca yazın.</li>
            </ul>

            <h4>Nasıl Alışkanlık Haline Gelir?</h4>
            <p>Mükemmel cümleler kurmaya çalışmayın. Kendiniz için yazıyorsunuz, başkası okumayacak. Her sabah veya akşam sadece 5-10 dakika ayırmak yeterlidir.</p>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/V7ogj8Z8G0s',
        rating: 4.8,
        reviews: []
    },
    {
        id: 'reading',
        title: 'Kitap Oku',
        shortDescription: 'Her gün en az 20 sayfa okuyarak zihni besleme.',
        fullDescription: `
            <p>Okumak, başkalarının hayat tecrübelerini ve bilgilerini kısa sürede edinmenin en etkili yoludur. Zihinsel kasları çalıştırır, empatiyi geliştirir ve stresi azaltır.</p>
        `,
        article: `
            <h3>Beyin İçin En İyi Egzersiz: Okumak</h3>
            <p>Okuma sırasında beyin, sanki olayları gerçekten yaşıyormuş gibi aktifleşir. MRI taramaları, kitap okurken beynin karmaşık ağlarının güçlendiğini göstermektedir. Bu, bilişsel gerilemeyi (Alzheimer gibi) önlemede kritik bir rol oynar.</p>

            <h4>Okuma Alışkanlığı Kazanmak İçin</h4>
            <ul>
                <li><strong>Atomik Alışkanlıklar Yaklaşımı:</strong> "Günde 1 kitap" gibi büyük hedefler yerine "Günde 2 sayfa" gibi çok küçük hedeflerle başlayın.</li>
                <li><strong>Ortam Hazırlığı:</strong> Kitabınızı her zaman görebileceğiniz bir yere (yastık üzerine, masa üstüne) koyun.</li>
                <li><strong>Sesli Kitaplar:</strong> Yolda veya ev işi yaparken sesli kitap dinlemek, "zamanım yok" bahanesini ortadan kaldırır.</li>
            </ul>

            <h4>Ne Okumalı?</h4>
            <p>Kurgu (roman, hikaye) empati ve duygusal zekayı geliştirirken, kurgu dışı (biyografi, bilim, tarih) bilgi birikimini ve analitik düşünceyi artırır. Dengeli bir okuma diyeti en iyisidir.</p>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/472MyoY0rQc',
        rating: 4.9,
        reviews: []
    },
    {
        id: 'digital-detox',
        title: 'Dijital Detoks Yap',
        shortDescription: 'Teknolojiden uzaklaşarak ana odaklanma.',
        fullDescription: `
            <p>Dijital dünyada sürekli "bağlı" olmak, gerçek dünyadan kopmamıza ve zihinsel yorgunluğa neden olur. Dijital detoks, teknolojiyi bilinçli kullanarak kontrolü tekrar ele almanızı sağlar.</p>
        `,
        article: `
            <h3>Dikkat Ekonomisi ve Biz</h3>
            <p>Sosyal medya platformları ve uygulamalar, dopamin döngülerini tetikleyerek bizi ekranda tutmak üzere tasarlanmıştır. Sürekli bildirimler, "FOMO" (Gelişmeleri Kaçırma Korkusu) yaratır ve odaklanma süresini kısaltır.</p>

            <h4>Detoks Yöntemleri</h4>
            <ul>
                <li><strong>Telefonsuz Yatak Odası:</strong> Telefonunuzu yatak odasına sokmayın. Alarm için klasik bir çalar saat kullanın. Bu, uyku kalitenizi artırır.</li>
                <li><strong>Gri Tonlama Modu:</strong> Telefon ekranını siyah-beyaz moda almak, renkli ikonların cazibesini azaltır.</li>
                <li><strong>Bildirim Diyeti:</strong> Sadece hayati önem taşıyan (arama, mesaj) bildirimleri açık tutun, diğerlerini kapatın.</li>
            </ul>

            <h4>Kazanımlar</h4>
            <p>Dijital detoks yapanlar, daha az kaygı, daha iyi uyku, artan üretkenlik ve daha derin yüz yüze ilişkiler bildirmektedir. Sıkılmak, yaratıcılığın başlangıcıdır; telefonunuza sarılmadan sıkılmaya izin verin.</p>
        `,
        category: 'Sağlık',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/RPsLpM5h1jE',
        rating: 4.6,
        reviews: []
    },
    {
        id: 'early-rising',
        title: 'Erken Kalk',
        shortDescription: 'Güne erken başlayarak üretkenliği artırma.',
        fullDescription: `
            <p>Sabahın erken saatleri, dünyanın en sessiz ve dikkat dağıtıcı unsurların en az olduğu zaman dilimidir. Birçok başarılı lider ve sanatçı, en önemli işlerini bu "altın saatlerde" yapar.</p>
        `,
        article: `
            <h3>Sabah Rutininin Gücü</h3>
            <p>Erken kalkmak, günü reaktif (olaylara tepki veren) değil, proaktif (olayları yöneten) bir modda başlatmanızı sağlar. Sabah 5-6 arası, irade gücünün en yüksek olduğu zamandır.</p>

            <h4>Nasıl Erken Kalkılır?</h4>
            <ul>
                <li><strong>Akşamdan Başlayın:</strong> Erken kalkmanın sırrı erken yatmaktır. Kafein alımını öğleden sonra kesin ve mavi ışıktan kaçının.</li>
                <li><strong>Alarmı Uzağa Koyun:</strong> Alarmı kapatmak için yataktan çıkmak zorunda kalacağınız bir yere koyun.</li>
                <li><strong>Bir Nedeniniz Olsun:</strong> Sadece erken kalkmak için kalkmayın. O ekstra zamanda yapacağınız, sizi heyecanlandıran bir aktivite (okuma, spor, hobi) belirleyin.</li>
            </ul>

            <h4>21/90 Kuralı</h4>
            <p>Bir alışkanlığı kazanmak 21 gün, onu yaşam tarzı haline getirmek 90 gün sürer. İlk günler zorlu olacaktır, ancak biyolojik saatiniz (sirkadiyen ritim) uyum sağladığında, alarm olmadan uyanmaya başlayacaksınız.</p>
        `,
        category: 'Üretkenlik',
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/qM4j7rF9b0E',
        rating: 4.4,
        reviews: []
    },
    {
        id: 'gratitude',
        title: 'Şükran Günlüğü Tut',
        shortDescription: 'Pozitifliğe odaklanmak için minnettar olunanları yazma.',
        fullDescription: `
            <p>Şükran duymak, beynin "kıtlık" modundan "bolluk" moduna geçmesini sağlar. Sahip olmadıklarınıza değil, sahip olduklarınıza odaklanmak, yaşam doyumunu anında artırır.</p>
        `,
        article: `
            <h3>Mutluluğun Bilimi: Şükran</h3>
            <p>Pozitif psikoloji araştırmaları, şükran duymanın dopamin ve serotonin salgısını artırdığını kanıtlamıştır. Bu, doğal bir antidepresan etkisi yaratır.</p>

            <h4>Uygulama Önerileri</h4>
            <ul>
                <li><strong>Detaylara İnin:</strong> "Ailem için şükrediyorum" yerine "Bugün annemle yaptığım keyifli sohbet için şükrediyorum" gibi spesifik olun.</li>
                <li><strong>Zorluklardaki Fırsatı Görün:</strong> Sadece iyi şeyler için değil, size ders veren zorluklar için de şükredin.</li>
                <li><strong>Şükran Mektubu:</strong> Hayatınıza dokunan birine, ona neden minnettar olduğunuzu anlatan bir mektup yazın (göndermeseniz bile etkisi vardır).</li>
            </ul>

            <h4>Etkileri</h4>
            <p>Düzenli şükran pratiği yapanlar daha az stres hormonu (kortizol) salgılar, daha iyi uyur ve ilişkilerinde daha yapıcı olurlar.</p>
        `,
        category: 'Ruhsal',
        image: 'https://images.unsplash.com/photo-1507643179173-617d6c79a697?q=80&w=2068&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/U5lZBjWDR_c',
        rating: 4.9,
        reviews: []
    },
    {
        id: 'yoga-breathing',
        title: 'Yoga Nefes Egzersizi Yap',
        shortDescription: 'Stresi azaltmak ve odaklanmayı artırmak için Pranayama.',
        fullDescription: `
            <p>Nefes, zihin ve beden arasındaki köprüdür. Nefesinizi kontrol ederek, otonom sinir sisteminizi (stres/gevşeme tepkilerini) doğrudan etkileyebilirsiniz.</p>
        `,
        article: `
            <h3>Pranayama: Yaşam Enerjisini Yönetmek</h3>
            <p>Yoga geleneğinde nefes, sadece oksijen alımı değil, "Prana" (yaşam enerjisi) akışıdır. Modern tıp, derin diyafram nefesinin vagus sinirini uyararak kalp atış hızını düşürdüğünü ve parasempatik sinir sistemini ("dinlen ve sindir" modu) aktive ettiğini doğrular.</p>

            <h4>Temel Teknikler</h4>
            <ul>
                <li><strong>4-7-8 Tekniği:</strong> 4 saniye burundan nefes al, 7 saniye tut, 8 saniye ağızdan yavaşça ver. Anksiyete ve uykusuzluk için çok etkilidir.</li>
                <li><strong>Kutu Nefesi (Box Breathing):</strong> 4 saniye al, 4 saniye tut, 4 saniye ver, 4 saniye tut. ABD Donanma SEAL'leri tarafından stres altında sakin kalmak için kullanılır.</li>
                <li><strong>Nadi Shodhana (Dönüşümlü Burun Nefesi):</strong> Sağ ve sol beyin loblarını dengelemek için burun deliklerini sırayla kapatarak nefes alma.</li>
            </ul>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/inpok4MKVLM',
        rating: 4.8,
        reviews: []
    },
    {
        id: 'budgeting',
        title: 'Bütçeni Planla',
        shortDescription: 'Finansal özgürlük için gelir-gider takibi.',
        fullDescription: `
            <p>Finansal stres, modern yaşamın en büyük kaygı kaynaklarından biridir. Bütçe yapmak, paranızı kısıtlamak değil, ona yön vermektir. Nereye gittiğini bilmediğiniz parayı yönetemezsiniz.</p>
        `,
        article: `
            <h3>Finansal Farkındalık</h3>
            <p>Bütçe yapmak, harcama alışkanlıklarınızla yüzleşmenizi sağlar. Çoğu insan, "latte faktörü" denilen küçük, günlük harcamaların ay sonunda ne kadar büyük bir yekün tuttuğunu fark etmez.</p>

            <h4>50/30/20 Kuralı</h4>
            <p>Gelirinizi yönetmek için basit ve etkili bir yöntem:</p>
            <ul>
                <li><strong>%50 İhtiyaçlar:</strong> Kira, faturalar, gıda gibi zorunlu giderler.</li>
                <li><strong>%30 İstekler:</strong> Dışarıda yemek, eğlence, hobiler.</li>
                <li><strong>%20 Birikim ve Borç Ödeme:</strong> Gelecek güvencesi ve finansal hedefler.</li>
            </ul>

            <h4>Acil Durum Fonu</h4>
            <p>Beklenmedik olaylar (sağlık, tamirat, iş kaybı) için 3-6 aylık giderinizi karşılayacak bir fon oluşturmak, finansal huzurun temelidir.</p>
        `,
        category: 'Finans',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/9iMGFqMmUFs',
        rating: 4.7,
        reviews: []
    },
    {
        id: 'intermittent-fasting',
        title: 'Aralıklı Oruç Tut',
        shortDescription: 'Sağlıklı yaşam ve zihinsel netlik için beslenme düzeni.',
        fullDescription: `
            <p>Aralıklı oruç (IF), ne yediğinizden çok ne zaman yediğinize odaklanan bir beslenme modelidir. Evrimsel olarak insan vücudu, uzun süreli açlık dönemlerine uyumludur ve bu süreçte kendini onarır.</p>
        `,
        article: `
            <h3>Otofaji: Hücresel Temizlik</h3>
            <p>Açlık süresi 12-16 saati aştığında, vücut "otofaji" adı verilen bir süreci başlatır. Bu süreçte hücreler, hasarlı proteinleri ve atıkları temizleyerek enerjiye dönüştürür. Bu, yaşlanmayı geciktirir ve hastalıklara karşı korur.</p>

            <h4>Yaygın Yöntemler</h4>
            <ul>
                <li><strong>16/8 Yöntemi:</strong> Günün 16 saati oruç tutulur, yemek yeme penceresi 8 saattir (Örn: 12:00 - 20:00 arası yemek).</li>
                <li><strong>5:2 Diyeti:</strong> Haftanın 5 günü normal beslenilir, 2 günü çok düşük kalori (500-600 kcal) alınır.</li>
            </ul>

            <h4>Dikkat Edilmesi Gerekenler</h4>
            <p>Oruç süresince su, sade kahve ve çay serbesttir. Yemek yeme penceresinde ise sağlıklı ve dengeli beslenmek esastır; tıka basa yemek, faydaları ortadan kaldırır.</p>
        `,
        category: 'Sağlık',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/9iMGFqMmUFs',
        rating: 4.5,
        reviews: []
    },
    {
        id: 'fitness',
        title: 'Fitness Antrenmanı Yap',
        shortDescription: 'Güçlü bir vücut ve zihin için düzenli egzersiz.',
        fullDescription: `
            <p>Egzersiz, sadece kas yapmak veya kilo vermek için değildir; beyin sağlığı için yapabileceğiniz en iyi şeydir. Hareket etmek, nörotransmitter dengesini sağlar ve bilişsel fonksiyonları korur.</p>
        `,
        article: `
            <h3>Hareketin Biyokimyası</h3>
            <p>Egzersiz sırasında salgılanan endorfin, dopamin ve serotonin, doğal ağrı kesiciler ve ruh hali düzenleyicilerdir. Ayrıca BDNF (Beyin Türevli Nörotrofik Faktör) proteini salgılanarak yeni beyin hücrelerinin oluşumu desteklenir.</p>

            <h4>Denge: Kardiyo ve Direnç</h4>
            <ul>
                <li><strong>Kardiyo (Koşu, Yüzme):</strong> Kalp-damar sağlığını iyileştirir ve dayanıklılığı artırır.</li>
                <li><strong>Direnç Egzersizleri (Ağırlık Kaldırma):</strong> Kas kütlesini artırır, kemik yoğunluğunu korur ve metabolizmayı hızlandırır.</li>
            </ul>

            <h4>Sürdürülebilirlik</h4>
            <p>En iyi egzersiz programı, düzenli olarak yapabildiğinizdir. Sevdiğiniz bir aktiviteyi bulun ve haftada en az 150 dakika orta şiddette egzersiz yapmayı hedefleyin.</p>
        `,
        category: 'Fiziksel',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/_kGESn8ArrU',
        rating: 4.9,
        reviews: []
    },
    {
        id: 'daily-goals',
        title: 'Günlük Hedef Belirle',
        shortDescription: 'Her güne bir amaç belirleyerek başla.',
        fullDescription: `
            <p>Rotası olmayan bir gemiye hiçbir rüzgar yardım edemez. Günlük hedefler belirlemek, zamanınızı ve enerjinizi en önemli önceliklerinize odaklamanızı sağlar.</p>
        `,
        article: `
            <h3>Niyetin Gücü</h3>
            <p>Güne "Bugün neyi başarmak istiyorum?" sorusuyla başlamak, beynin Retiküler Aktivasyon Sistemini (RAS) devreye sokar. Bu sistem, hedeflerinizle ilgili fırsatları ve kaynakları fark etmenizi sağlar.</p>

            <h4>Etkili Hedef Belirleme</h4>
            <ul>
                <li><strong>3'ün Kuralı:</strong> Her gün için en fazla 3 ana hedef belirleyin. Daha fazlası odak dağılmasına ve strese yol açar.</li>
                <li><strong>SMART Hedefler:</strong> Hedefleriniz Spesifik, Ölçülebilir, Ulaşılabilir, İlgili ve Zamanlı olmalıdır.</li>
                <li><strong>Ye O Kurbağayı (Eat That Frog):</strong> En zor ve en önemli işi günün ilk işi olarak yapın.</li>
            </ul>

            <h4>Esneklik</h4>
            <p>Hayat her zaman planlandığı gibi gitmez. Hedeflerinize ulaşamadığınızda kendinizi yargılamak yerine, stratejinizi gözden geçirin ve ertesi gün yeniden deneyin.</p>
        `,
        category: 'Üretkenlik',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/mNBmG24djoY',
        rating: 4.7,
        reviews: []
    },
    {
        id: 'learn-new',
        title: 'Yeni Bir Şey Öğren',
        shortDescription: 'Beynini canlı tutmak için her gün yeni bilgi.',
        fullDescription: `
            <p>Beyin, kas gibidir; kullanıldıkça gelişir. Sürekli öğrenme (Lifelong Learning), zihinsel esnekliği korur ve yaşa bağlı bilişsel gerilemeyi yavaşlatır.</p>
        `,
        article: `
            <h3>Nöroplastisite ve Öğrenme</h3>
            <p>Her yeni bilgi, beyinde yeni sinaptik bağlantılar oluşturur. Zorlayıcı ve yeni aktiviteler (örneğin enstrüman çalmak, satranç oynamak), beynin yapısını en çok değiştiren aktivitelerdir.</p>

            <h4>Mikro-Öğrenme</h4>
            <ul>
                <li><strong>Podcastler:</strong> İşe gidip gelirken veya spor yaparken eğitici içerikler dinleyin.</li>
                <li><strong>Belgeseller:</strong> Eğlence zamanını bilgi edinme zamanına dönüştürün.</li>
                <li><strong>Rastgele Makaleler:</strong> İlgi alanınızın dışındaki konularda okumalar yaparak vizyonunuzu genişletin.</li>
            </ul>

            <h4>Feynman Tekniği</h4>
            <p>Bir şeyi gerçekten öğrenip öğrenmediğinizi test etmek için, o konuyu hiç bilmeyen birine (veya bir çocuğa) basitçe anlatmaya çalışın. Takıldığınız yerler, eksiklerinizi gösterir.</p>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1503428593586-e225b476b849?q=80&w=2073&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/472MyoY0rQc',
        rating: 4.6,
        reviews: []
    },
    {
        id: 'plan-ahead',
        title: 'Gününü Önceden Planla',
        shortDescription: 'Sabah stresini azaltmak için akşamdan hazırlık.',
        fullDescription: `
            <p>Sabahları sınırlı bir irade gücü ve karar verme enerjisiyle uyanırız. "Ne giyeceğim?", "Kahvaltıda ne yiyeceğim?" gibi küçük kararlar bile bu enerjiyi tüketir.</p>
        `,
        article: `
            <h3>Karar Yorgunluğunu Önlemek</h3>
            <p>Barack Obama veya Mark Zuckerberg gibi liderlerin hep aynı kıyafetleri giymesinin bir nedeni vardır: Karar yorgunluğunu minimize etmek. Gününüzü akşamdan planlamak, sabah enerjinizi en önemli işlere saklamanızı sağlar.</p>

            <h4>Akşam Rutini Önerileri</h4>
            <ul>
                <li><strong>Kıyafet Seçimi:</strong> Ertesi gün giyeceklerinizi hazırlayın.</li>
                <li><strong>Çanta Hazırlığı:</strong> İhtiyacınız olan her şeyi kapının yanına koyun.</li>
                <li><strong>To-Do Listesi:</strong> Ertesi günün 3 ana hedefini belirleyin.</li>
            </ul>

            <h4>Görselleştirme</h4>
            <p>Planınızı yaptıktan sonra, günün nasıl akacağını zihninizde kısaca canlandırın. Bu, olası engelleri önceden görmenizi ve zihinsel olarak hazırlanmanızı sağlar.</p>
        `,
        category: 'Üretkenlik',
        image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/mNBmG24djoY',
        rating: 4.5,
        reviews: []
    },
    {
        id: 'sleep-hygiene',
        title: 'Uyku Hijyenine Dikkat Et',
        shortDescription: 'Kaliteli bir uyku için ortamı düzenle.',
        fullDescription: `
            <p>Uyku, pasif bir dinlenme hali değil, aktif bir yenilenme sürecidir. Hafıza konsolidasyonu, hormon düzenlemesi ve toksin temizliği uyku sırasında gerçekleşir.</p>
        `,
        article: `
            <h3>Sirkadiyen Ritim ve Melatonin</h3>
            <p>Vücudumuzun iç saati (sirkadiyen ritim), ışığa duyarlıdır. Akşamları mavi ışığa (telefon, bilgisayar) maruz kalmak, uyku hormonu olan melatoninin salgılanmasını baskılar ve uykuya dalmayı zorlaştırır.</p>

            <h4>İdeal Uyku Ortamı</h4>
            <ul>
                <li><strong>Karanlık:</strong> Odanız zifiri karanlık olmalı veya uyku bandı kullanın.</li>
                <li><strong>Serinlik:</strong> Vücut ısısının düşmesi uykuya geçişi kolaylaştırır. İdeal oda sıcaklığı 18-21°C'dir.</li>
                <li><strong>Sessizlik:</strong> Gürültüyü engellemek için kulak tıkacı veya beyaz gürültü (white noise) kullanabilirsiniz.</li>
            </ul>

            <h4>Kafein Kuralı</h4>
            <p>Kafeinin vücuttan atılması 6-8 saat sürer. Öğleden sonra 14:00'ten sonra kahve içmemek, uyku kalitenizi önemli ölçüde artırır.</p>
        `,
        category: 'Sağlık',
        image: 'https://images.unsplash.com/photo-1541781777621-af13943727dd?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/9iMGFqMmUFs',
        rating: 4.9,
        reviews: []
    },
    {
        id: 'feedback',
        title: 'Geri Bildirim İste',
        shortDescription: 'Gelişim için başkalarının görüşlerini al.',
        fullDescription: `
            <p>Geri bildirim (feedback), şampiyonların kahvaltısıdır. Kendi performansımızı objektif olarak değerlendirmemiz zordur; dışarıdan bir göz, göremediğimiz fırsatları ve hataları bize gösterebilir.</p>
        `,
        article: `
            <h3>Yapıcı Eleştiri Kültürü</h3>
            <p>Geri bildirimi kişisel bir saldırı olarak değil, bir gelişim verisi olarak görmek gerekir. "Growth Mindset" (Gelişim Zihniyeti), eleştiriyi öğrenme sürecinin doğal bir parçası olarak kabul eder.</p>

            <h4>Nasıl İstenir?</h4>
            <ul>
                <li><strong>Spesifik Olun:</strong> "Nasıl buldun?" yerine "Sunumdaki ses tonum nasıldı?" veya "Bu raporda neleri daha iyi yapabilirdim?" diye sorun.</li>
                <li><strong>Doğru Zamanlama:</strong> Karşı tarafın müsait ve odaklanmış olduğu bir zamanı seçin.</li>
                <li><strong>Dinleyin:</strong> Savunmaya geçmeden, sadece anlamak için dinleyin. Teşekkür edin.</li>
            </ul>

            <h4>Kimden İstenir?</h4>
            <p>Sadece sizi övenlerden değil, dürüstlüğüne güvendiğiniz ve uzmanlığına saygı duyduğunuz kişilerden geri bildirim isteyin.</p>
        `,
        category: 'Kariyer',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/QJ2Fp6h9c2c',
        rating: 4.3,
        reviews: []
    },
    {
        id: 'visualization',
        title: 'Görselleştirme Yap',
        shortDescription: 'Hedeflerine ulaşmış gibi hayal et.',
        fullDescription: `
            <p>Elit sporcuların ve başarılı girişimcilerin ortak sırrı görselleştirmedir. Beyin, canlı bir hayal ile gerçek deneyim arasındaki farkı nörolojik düzeyde ayırt edemez.</p>
        `,
        article: `
            <h3>Zihinsel Prova</h3>
            <p>Bir hareketi veya durumu zihinde canlandırmak, o hareketle ilgili nöral yolları aktive eder. Bu, gerçek performansı artırır ve özgüveni yükseltir.</p>

            <h4>Nasıl Yapılır?</h4>
            <ul>
                <li><strong>Tüm Duyuları Kullanın:</strong> Sadece görüntüyü değil, sesleri, kokuları ve duyguları da hayal edin. Başardığınızda nasıl hissedeceksiniz?</li>
                <li><strong>Süreci Görselleştirin:</strong> Sadece sonucu (madalyayı almak) değil, o sonuca giden zorlu süreci ve engelleri nasıl aştığınızı da hayal edin.</li>
                <li><strong>Düzenlilik:</strong> Her sabah veya akşam 5 dakika ayırın.</li>
            </ul>

            <h4>Bilimsel Kanıt</h4>
            <p>Piyano çalanlar üzerinde yapılan bir deneyde, sadece zihinsel olarak pratik yapanların beyinlerinde, fiziksel olarak pratik yapanlara benzer değişimler gözlemlenmiştir.</p>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/inpok4MKVLM',
        rating: 4.7,
        reviews: []
    },
    {
        id: 'affirmations',
        title: 'Olumlama Yap',
        shortDescription: 'Pozitif inançlar için kendine tekrar et.',
        fullDescription: `
            <p>İç sesimiz, gerçekliğimizi şekillendirir. Sürekli negatif konuşmak (Ben yapamam, ben yetersizim) kendi kendini gerçekleştiren bir kehanete dönüşür. Olumlamalar, bu iç diyaloğu yeniden programlar.</p>
        `,
        article: `
            <h3>Bilinçaltı Programlama</h3>
            <p>Olumlamalar, beynin "onaylama önyargısını" (confirmation bias) lehinize kullanır. Kendinize "Ben değerliyim" dediğinizde, beyniniz gün içinde bunu doğrulayan kanıtları aramaya başlar.</p>

            <h4>Etkili Olumlama Kuralları</h4>
            <ul>
                <li><strong>Şimdiki Zaman:</strong> "Mutlu olacağım" değil, "Mutluyum" veya "Mutluluğu seçiyorum" deyin.</li>
                <li><strong>Pozitif Dil:</strong> "Korkmuyorum" yerine "Cesurum" deyin. Beyin "korku" kelimesine odaklanabilir.</li>
                <li><strong>Duygu Katın:</strong> Sadece kelimeleri söylemek yetmez, onları hissetmeye çalışın.</li>
            </ul>

            <h4>Örnekler</h4>
            <p>"Yeterli zamana ve enerjiye sahibim.", "Hatalarımdan ders alıyor ve büyüyorum.", "Hayatımdaki güzellikleri hak ediyorum."</p>
        `,
        category: 'Ruhsal',
        image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2076&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/U5lZBjWDR_c',
        rating: 4.5,
        reviews: []
    },
    {
        id: 'cold-shower',
        title: 'Soğuk Duş Al',
        shortDescription: 'Canlılık ve irade için soğuk su terapisi.',
        fullDescription: `
            <p>Soğuk duş, konfor alanından çıkmanın en hızlı fiziksel yoludur. Vücudu kısa süreli strese maruz bırakmak (hormesis), adaptasyon yeteneğini ve direnci artırır.</p>
        `,
        article: `
            <h3>Wim Hof ve Soğuğun Gücü</h3>
            <p>"Buz Adam" Wim Hof, soğuğa maruz kalmanın bağışıklık sistemini ve otonom sinir sistemini kontrol etmeyi öğrettiğini kanıtlamıştır. Soğuk su, vücutta bir şok etkisi yaratarak derin nefes almayı tetikler.</p>

            <h4>Faydaları</h4>
            <ul>
                <li><strong>Dopamin Artışı:</strong> Soğuk duş, dopamin seviyesini %250'ye kadar artırabilir, bu da uzun süreli bir iyi hissetme hali sağlar.</li>
                <li><strong>Metabolizma:</strong> Vücut ısısını korumak için kahverengi yağ dokusu aktive olur ve kalori yakımı artar.</li>
                <li><strong>İrade Eğitimi:</strong> Her sabah o soğuk suyun altına girmek, zihinsel bir zaferdir ve günün geri kalanı için disiplin sağlar.</li>
            </ul>

            <h4>Nasıl Başlanır?</h4>
            <p>Normal duşunuzun son 30 saniyesini soğuk suyla bitirin. Zamanla bu süreyi 1-2 dakikaya çıkarın.</p>
        `,
        category: 'Sağlık',
        image: 'https://images.unsplash.com/photo-1559599238-308793637427?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/9iMGFqMmUFs',
        rating: 4.2,
        reviews: []
    },
    {
        id: 'language',
        title: 'Dil Öğren',
        shortDescription: 'Yeni bir kültür ve bakış açısı kazan.',
        fullDescription: `
            <p>"Bir dil bir insan, iki dil iki insan." Yeni bir dil öğrenmek, sadece iletişim kurmak değil, dünyaya farklı bir pencereden bakmaktır. Aynı zamanda beyni demansa karşı koruyan en güçlü aktivitelerden biridir.</p>
        `,
        article: `
            <h3>Bilişsel Esneklik</h3>
            <p>İki dilli (bilingual) bireylerin, dikkat kontrolü ve çoklu görev (multitasking) becerileri daha gelişmiştir. Dil öğrenmek, beynin yürütücü işlevlerini (executive functions) güçlendirir.</p>

            <h4>Öğrenme Stratejileri</h4>
            <ul>
                <li><strong>Maruz Kalma (Immersion):</strong> Telefon dilini değiştirin, o dilde müzik dinleyin, film izleyin. Beyninizi o dile maruz bırakın.</li>
                <li><strong>Kelime Kartları (Spaced Repetition):</strong> Anki veya Duolingo gibi uygulamalarla kelimeleri aralıklı tekrar yöntemiyle öğrenin.</li>
                <li><strong>Konuşma Pratiği:</strong> Hata yapmaktan korkmayın. Dil, konuşarak öğrenilir. Kendi kendinize konuşun veya dil değişim partnerleri bulun.</li>
            </ul>

            <h4>Kültürel Derinlik</h4>
            <p>Bir dili öğrenmek, o kültürün mizahını, değerlerini ve düşünce yapısını anlamanızı sağlar. Bu, küresel bir vizyon kazanmanıza yardımcı olur.</p>
        `,
        category: 'Zihinsel',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/472MyoY0rQc',
        rating: 4.8,
        reviews: []
    }
];
