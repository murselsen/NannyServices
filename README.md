# 🧸 NannyServices

Modern bakıcı bulma platformu - Aileler için güvenilir ve kullanıcı dostu çevrimiçi bakıcı arama hizmeti.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646cff?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Yığını](#-teknoloji-yığını)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Roadmap](#-roadmap)
- [Katkıda Bulunma](#-katkıda-bulunma)

## ✨ Özellikler

- 🎨 **Dinamik Tema Sistemi** - 3 farklı renk teması (Kırmızı, Mavi, Yeşil)
- ⚡ **Performans Optimizasyonu** - Lazy loading ve code splitting
- 📱 **Responsive Tasarım** - Her cihazda sorunsuz deneyim
- 🧩 **Modüler Mimari** - Yeniden kullanılabilir komponentler
- 🚀 **Modern React** - En güncel React 19 ve best practices
- 🎯 **SEO Hazır** - React Router ile SPA yapısı

## 🛠️ Teknoloji Yığını

### Frontend

- **React 19.1.1** - UI kütüphanesi
- **React Router DOM 7.9.6** - Client-side routing
- **React Icons 5.5.0** - Icon kütüphanesi
- **CSS Modules** - Component-scoped styling

### Development Tools

- **Vite** - Build tool ve dev server
- **ESLint** - Kod kalitesi ve linting
- **Rolldown** - Hızlı bundling

## 📦 Kurulum

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**

```bash
git clone https://github.com/murselsen/NannyServices.git
cd NannyServices
```

2. **Bağımlılıkları yükleyin**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**

```bash
npm run dev
```

4. **Tarayıcınızda açın**

```
http://localhost:5173
```

## 🚀 Kullanım

### Geliştirme

```bash
npm run dev          # Geliştirme sunucusunu başlat
npm run build        # Production build oluştur
npm run preview      # Production build'i önizle
npm run lint         # Kod kalitesini kontrol et
```

### Tema Değiştirme

Sağ üst köşedeki palet ikonuna tıklayarak 3 farklı tema arasında geçiş yapabilirsiniz:

- 🔴 Kırmızı Tema
- 🔵 Mavi Tema
- 🟢 Yeşil Tema

## 📁 Proje Yapısı

```
NannyServices/
├── public/                 # Statik dosyalar
├── src/
│   ├── assets/            # Görseller ve medya
│   ├── components/        # Yeniden kullanılabilir komponentler
│   │   ├── Navbar/
│   │   ├── NavLogo/
│   │   ├── NavList/
│   │   ├── NavAuth/
│   │   └── ThemeSelector/
│   ├── pages/             # Sayfa komponentleri
│   │   └── Home/
│   ├── App.jsx            # Ana uygulama komponenti
│   ├── App.css            # Global stiller
│   └── main.jsx           # Giriş noktası
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎯 Roadmap

### Yakın Gelecek

- [ ] `/nannies` sayfası ve rota implementasyonu
- [ ] Authentication sistemi (Login/Register)
- [ ] Bakıcı profil kartları
- [ ] Filtreleme ve arama özellikleri
- [ ] Tema tercihini localStorage'a kaydetme

### Orta Vadeli

- [ ] Backend API entegrasyonu
- [ ] State management (Context API veya Zustand)
- [ ] TypeScript migration
- [ ] Unit ve integration testleri
- [ ] Form validasyonları

### Uzun Vadeli

- [ ] Rezervasyon sistemi
- [ ] Mesajlaşma özelliği
- [ ] Ödeme entegrasyonu
- [ ] Admin paneli
- [ ] Mobil uygulama (React Native)

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

### 📝 Commit Mesajı Kuralları

Anlamlı ve tutarlı commit mesajları kullanın. Conventional Commits standardını takip edin:

```
feat: Yeni özellik ekleme
fix: Bug düzeltme
docs: Dokümantasyon değişikliği
style: Kod formatı değişikliği (whitespace, formatting, missing semi colons, etc)
refactor: Kod yeniden yapılandırma
test: Test ekleme veya düzeltme
chore: Build araçları veya yardımcı araç değişiklikleri
```

**Örnekler:**

```bash
git commit -m "feat: Add user authentication"
git commit -m "fix: Resolve theme switching bug"
git commit -m "docs: Update README with installation steps"
```

### ⚡ Kod Standartları

- **Loading Indicators**: Tüm asenkron isteklerde kullanıcıya geri bildirim vermek için loading göstergeleri kullanılmalıdır

  ```jsx
  // Örnek kullanım
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.getData();
      // ...
    } finally {
      setLoading(false);
    }
  };
  ```

- **Error Handling**: Tüm asenkron işlemlerde hata yönetimi yapılmalıdır
- **Code Splitting**: Performans için lazy loading kullanılmalıdır
- **Accessibility**: WCAG standartlarına uygun erişilebilir kod yazılmalıdır

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Mürsel ŞEN**

- GitHub: [@murselsen](https://github.com/murselsen)
- LinkedIn: [Mürsel ŞEN](https://linkedin.com/in/murselsen)

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullanılan harika açık kaynak projelere teşekkürler:

- React Team
- Vite Team
- React Router Team
- React Icons Contributors

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
