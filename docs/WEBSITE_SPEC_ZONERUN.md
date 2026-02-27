# ZoneRun Web Sitesi – Gereksinim Raporu (Cursor için brief)

Bu belge, ZoneRun mobil uygulaması için oluşturulacak web sitesinin yapısını ve içeriğini tanımlar.

## 1. Amaç
- **Play Store zorunluluğu:** Gizlilik politikası için sabit URL (örn. /gizlilik veya /privacy).
- **İsteğe bağlı:** Uygulamayı tanıtan ana sayfa; Play Store linki, kısa açıklama, uygulama adı.

## 2. Sayfa Yapısı
| Sayfa | Zorunluluk | Açıklama |
|-------|------------|----------|
| Ana sayfa | İsteğe bağlı | ZoneRun tanıtımı, "Play Store'dan indir" butonu, kısa özellik listesi. |
| Gizlilik politikası | Zorunlu | Veri toplama, kullanım, saklama; Play Console'da bu sayfanın URL'i girilecek. |

**URL:** Ana sayfa: / ; Gizlilik: /gizlilik (TR), /privacy (EN)

## 3. Dil Desteği
Türkçe (TR) ve İngilizce (EN).

## 4. Gizlilik Politikası – İçerik
Uygulama: Konum, Firebase Auth (e-posta/isim), Analytics (varsa), bildirim tercihleri.
Başlıklar: Toplanan veriler, Kullanım amacı, Saklama ve paylaşım, Güvenlik, Kullanıcı hakları, Çocuklar, Değişiklikler, İletişim.

## 5. Teknik
Statik HTML/CSS/JS, responsive, SEO (title, meta description).

## 6. Tasarım
Sade, okunabilir; ZoneRun markası; koşu/harita teması.
