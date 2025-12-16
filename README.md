# Simple Todo Manager

Modern ve kullanıcı dostu bir Todo List uygulaması. React ile geliştirilmiş, tarayıcı localStorage kullanarak veri kalıcılığı sağlayan tam işlevsel bir görev yönetim uygulaması.

## 🎯 Ana Özellikler

- ✅ **Görev Ekleme**: Basit bir input alanı ile yeni görevler ekleyin
- ✏️ **Görev Düzenleme**: Mevcut görevleri çift tıklayarak veya düzenle butonu ile düzenleyin
- 🗑️ **Görev Silme**: Artık ihtiyaç duymadığınız görevleri kolayca silin
- 💾 **Kalıcılık**: Tüm görevleriniz tarayıcı localStorage'da saklanır, sayfa yenilense bile kaybolmaz
- ☑️ **Tamamlandı İşaretleme**: Görevleri tamamlandı olarak işaretleyin ve görsel olarak farklılaştırın

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın veya indirin**
   ```bash
   git clone <repository-url>
   cd simple-todo-manager
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```
   veya
   ```bash
   yarn install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm start
   ```
   veya
   ```bash
   yarn start
   ```

4. **Tarayıcıda açın**
   - Uygulama otomatik olarak `http://localhost:3000` adresinde açılacaktır
   - Eğer otomatik açılmazsa, tarayıcınızda bu adresi manuel olarak ziyaret edin

## 📦 Proje Yapısı

```
simple-todo-manager/
├── public/
│   └── index.html          # HTML şablonu
├── src/
│   ├── App.js              # Ana uygulama bileşeni
│   ├── App.css             # Ana uygulama stilleri
│   ├── TaskList.js         # Görev listesi bileşeni
│   ├── TaskList.css        # Görev listesi stilleri
│   ├── TaskItem.js         # Tekil görev bileşeni
│   ├── TaskItem.css        # Tekil görev stilleri
│   ├── index.js            # React DOM render noktası
│   └── index.css           # Global stiller
├── package.json            # Proje bağımlılıkları ve scriptler
├── .gitignore              # Git ignore dosyası
└── README.md               # Bu dosya
```

## 🛠️ Teknolojiler

- **React 18.2.0**: Modern UI kütüphanesi
- **React DOM**: DOM render işlemleri
- **React Scripts**: Geliştirme ve build araçları
- **localStorage API**: Tarayıcı tabanlı veri kalıcılığı

## 💡 Kullanım

### Görev Ekleme
1. Üst kısımdaki input alanına görev metnini yazın
2. "Ekle" butonuna tıklayın veya Enter tuşuna basın

### Görev Düzenleme
1. Düzenlemek istediğiniz görevin üzerine çift tıklayın
2. Veya görevin yanındaki ✏️ (düzenle) butonuna tıklayın
3. Metni düzenleyin ve Enter tuşuna basın veya dışarı tıklayın
4. İptal etmek için Escape tuşuna basın

### Görev Silme
1. Silmek istediğiniz görevin yanındaki 🗑️ (sil) butonuna tıklayın

### Görev Tamamlama
1. Görevin yanındaki checkbox'ı işaretleyin veya kaldırın
2. Tamamlanan görevler yeşil arka plan ile vurgulanır ve üzeri çizilir

## 📝 Notlar

- Tüm veriler tarayıcınızın localStorage'ında saklanır
- Farklı tarayıcılarda veya gizli modda farklı veri setleri görünebilir
- Verileri temizlemek için tarayıcı geliştirici araçlarını kullanabilirsiniz

## 🏗️ Build (Üretim)

Üretim için optimize edilmiş bir build oluşturmak için:

```bash
npm run build
```

veya

```bash
yarn build
```

Build dosyaları `build/` klasörüne oluşturulacaktır.

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👨‍💻 Geliştirici

Kıdemli Yazılım Geliştirici tarafından geliştirilmiştir.

---

**Not**: Bu uygulama tamamen frontend tabanlıdır ve herhangi bir backend sunucusu gerektirmez. Tüm veriler tarayıcı localStorage'ında saklanır.

