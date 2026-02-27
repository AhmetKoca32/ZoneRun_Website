# ZoneRun Web Sitesi

ZoneRun koşu ve alan takibi uygulamasının resmi web sitesi.

## İçerik

- **Ana sayfa** – Uygulama tanıtımı, özellikler, Play Store indirme butonu (TR/EN)
- **Gizlilik politikası** – [gizlilik.html](gizlilik.html) (TR) / [privacy.html](privacy.html) (EN)

## Teknolojiler

Statik HTML, CSS ve JavaScript. Backend yok.

## Yerel çalıştırma

Proje klasöründe bir HTTP sunucusu başlatın:

```bash
# npx ile (Node.js gerekir)
npx serve .

# veya Python ile
python -m http.server 8000
```

Tarayıcıda `http://localhost:3000` (serve) veya `http://localhost:8000` (Python) açın.

## GitHub Pages ile yayınlama

1. Repo ayarlarında **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` (veya `master`), folder: `/ (root)`
4. Kaydedin. Site `https://<kullanici>.github.io/<repo-adı>/` adresinde yayınlanır.

**Not:** GitHub Pages kök dizin kullandığında `index.html` ana sayfa olur. Alt sayfalar: `gizlilik.html`, `privacy.html`.

## İletişim

Gizlilik ve veri talepleri: [zoneruun@gmail.com](mailto:zoneruun@gmail.com)
