# Gelişim App - Mobil Uygulama Rehberi

Bu projeyi mobil cihazlarda kullanmanın iki temel yolu vardır. Mevcut yapınız **PWA (Progressive Web App)** uyumludur, yani hemen şimdi telefona kurulabilir.

## Yöntem 1: PWA (En Kolay ve Hızlı)
Herhangi bir kod yazmadan veya program kurmadan uygulamanızı telefona indirebilirsiniz.

### Nasıl Yapılır?
1. **Uygulamayı Yayına Alın**:
   - Bu klasörü (`gelisim-app`) bir sunucuya yüklemeniz gerekir.
   - En basit yöntem: [Netlify Drop](https://app.netlify.com/drop) sitesine gidin ve `gelisim-app` klasörünü sürükleyip bırakın. Size bir link verecektir.

2. **Telefona Yükleyin**:
   - **iPhone (iOS)**: Safari'den linki açın -> "Paylaş" butonu -> "Ana Ekrana Ekle" diyin.
   - **Android**: Chrome'dan linki açın -> Seçenekler (3 nokta) -> "Uygulamayı Yükle" veya "Ana Ekrana Ekle" diyin.

**Avantajları:**
- Market onayı beklemezsiniz.
- Güncellemeler anında yansır.
- Çevrimdışı çalışır (Service Worker sayesinde).

---

## Yöntem 2: Gerçek Mobil Uygulama (APK / App Store)
Eğer uygulamanızı Google Play Store veya Apple App Store'a yüklemek istiyorsanız, web sitenizi "paketlemeniz" gerekir. Bunun için **Capacitor** teknolojisini öneririm.

**Gereksinimler:**
- Bilgisayarınızda **Node.js** kurulu olmalıdır. (Şu an kurulu görünmüyor, [nodejs.org](https://nodejs.org) adresinden indirebilirsiniz).
- Android için: **Android Studio** kurulu olmalıdır.

### Adım Adım Kurulum (Node.js kurduktan sonra)

1. **Projeyi Hazırlayın**:
   Terminali (CMD/Powershell) `gelisim-app` klasöründe açın ve şu komutları sırasıyla yazın:

   ```bash
   # 1. Projeyi Node.js projesine çevirin
   npm init -y

   # 2. Capacitor'ü yükleyin
   npm install @capacitor/core @capacitor/cli @capacitor/android

   # 3. Capacitor'ü başlatın
   npx cap init "Gelisim App" com.gelisim.app --web-dir="."

   # 4. Android platformunu ekleyin
   npx cap add android
   ```

2. **Uygulamayı Derleyin**:
   ```bash
   # Dosyaları Android projesine kopyalayın
   npx cap sync
   ```

3. **Android Studio'da Açın ve APK Alın**:
   ```bash
   npx cap open android
   ```
   - Android Studio açılacaktır.
   - Telefonunuzu USB ile bağlayıp "Run" (Yeşil üçgen) tuşuna basarak yükleyebilirsiniz.
   - Veya `Build > Build Bundle(s) / APK(s) > Build APK` menüsünden APK dosyası oluşturabilirsiniz.

## Önemli Notlar
- **İkonlar**: Şu an `manifest.json` dosyasında internet üzerindeki ikonlar kullanılıyor. PWA'nın çevrimdışı tam düzgün görünmesi için `images/icon-192.png` ve `images/icon-512.png` gibi yerel dosyalar eklemeniz daha iyi olur.
- **iOS**: iOS uygulaması çıktı almak için bir Mac bilgisayara (Macbook/iMac) ihtiyacınız vardır. Windows'ta sadece Android çıktısı alabilirsiniz.
