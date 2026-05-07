# Panduan Ukuran Gambar untuk Product Catalogue

## 📊 Analisis Ukuran Gambar yang Dibutuhkan

Dokumen ini memberikan penghitungan yang **akurat dan presisi** untuk ukuran gambar yang digunakan dalam halaman **Home** (Product Catalogue) pada bagian tabel produk.

---

## 🎯 Ringkasan Eksekutif

### Ukuran yang Direkomendasikan:

| Penggunaan | Dimensi Optimal | Format | Ukuran File | Rasio Aspek |
|-----------|-----------------|--------|-------------|-------------|
| **Thumbnail** (Tabel) | **150 × 150 px** | JPEG/PNG | 20-50 KB | 1:1 (Square) |
| **Full-size** (PhotoSwipe) | **1400 × 1400 px** | JPEG/WebP | 300-500 KB | 1:1 (Square) |
| **Maximum Limit** | - | JPG/PNG | **< 1 MB** | Bebas |

---

## 📐 Penghitungan Detail

### 1. Analisis Tampilan Thumbnail di Tabel

**Lokasi:** `views/home.ejs` baris 31

```html
<img src="<%= row.image %>" width="50" class="img-thumbnail" alt="image_product">
```

#### Perhitungan Ukuran Thumbnail:

1. **Width HTML Attribute:** `50px`
2. **Bootstrap Class `img-thumbnail` menambahkan:**
   - Border: `1px` (kiri + kanan) = `2px`
   - Padding: `4px` (kiri + kanan) = `8px`
3. **Total Container Width:** `50px + 2px + 8px = 60px`

#### Rekomendasi untuk Retina/High-DPI Display:

Untuk tampilan tajam di layar modern (Retina, 4K), gunakan **2x - 3x** ukuran display:

- **Minimum:** `50px × 2 = 100 × 100 px`
- **Optimal:** `50px × 3 = 150 × 150 px` ✅ **DIREKOMENDASIKAN**
- **Maximum:** `50px × 4 = 200 × 200 px`

**Kesimpulan:** Upload gambar **150 × 150 px** untuk thumbnail berkualitas tinggi.

---

### 2. Analisis Tampilan Full-size di PhotoSwipe

**Lokasi:** `views/layout/footer.ejs` baris 5-18

```javascript
$("a.img-gallery > img").each((n, el) => {
  imgLink[n].setAttribute("data-pswp-height", el.naturalHeight);
  imgLink[n].setAttribute("data-pswp-width", el.naturalWidth);
})
```

PhotoSwipe menggunakan **dimensi natural** gambar untuk tampilan lightbox.

#### Perhitungan Ukuran Full-size:

1. **Viewport Maximum (Desktop):**
   - Lebar layar umum: 1920px (Full HD), 2560px (2K), 3840px (4K)
   - PhotoSwipe default max width: `~90vw` (90% dari viewport)
   - Tinggi maksimum: `~90vh`

2. **Ukuran Optimal untuk Desktop:**
   - `1920px × 90% = 1728px` → **Rekomendasi: 1400-1600px**
   - Untuk layar 2K: `2560px × 90% = 2304px` → **Rekomendasi: 1920px**

3. **Mobile Viewport:**
   - Lebar layar umum: 375px - 428px (iPhone), 360px - 414px (Android)
   - Image akan di-scale down otomatis oleh PhotoSwipe

#### Rekomendasi Ukuran Full-size:

- **Standard Quality:** `1200 × 1200 px` (cocok untuk layar Full HD)
- **High Quality:** `1400 × 1400 px` ✅ **DIREKOMENDASIKAN**
- **Premium Quality:** `1920 × 1920 px` (untuk layar 2K/4K)

**Kesimpulan:** Upload gambar **1400 × 1400 px** untuk kualitas optimal di semua perangkat.

---

### 3. Batasan File Size

**Lokasi:** `script/script.js` baris 55-59

```javascript
if (file.size > 1000000) {
  alert("File size exceeds 1MB limit.");
  fileInput.value = "";
  event.preventDefault();
}
```

#### Perhitungan Kompresi:

**Batas maksimum:** `1,000,000 bytes = 1 MB`

Untuk menghasilkan file di bawah 1MB dengan kualitas baik:

| Dimensi | Format | Kualitas | Ukuran Estimasi |
|---------|--------|----------|----------------|
| 150 × 150 px | JPEG | 80% | 20-40 KB ✅ |
| 150 × 150 px | PNG | - | 30-60 KB ✅ |
| 1400 × 1400 px | JPEG | 75% | 300-450 KB ✅ |
| 1400 × 1400 px | JPEG | 85% | 500-700 KB ✅ |
| 1920 × 1920 px | JPEG | 75% | 600-900 KB ✅ |
| 1920 × 1920 px | JPEG | 85% | 900-1200 KB ⚠️ (Bisa melebihi 1MB) |

**Kesimpulan:** Gunakan JPEG dengan kualitas **75-85%** untuk balance antara ukuran dan kualitas.

---

## 🎨 Responsive Behavior

### Bootstrap Responsive Breakpoints:

**Lokasi:** `views/home.ejs` baris 14

```html
<div class="table-responsive">
```

#### Behavior pada berbagai device:

| Device | Screen Width | Behavior | Image Display |
|--------|--------------|----------|---------------|
| Mobile | < 576px | Table scrolls horizontally | 50px width (fixed) |
| Tablet | ≥ 768px | Full table visible | 50px width (fixed) |
| Desktop | ≥ 992px | Full table visible | 50px width (fixed) |
| Large Desktop | ≥ 1200px | Full table visible | 50px width (fixed) |

**Penting:** Width thumbnail **tetap 50px** di semua breakpoint, tetapi image source harus **150px** untuk ketajaman di high-DPI screens.

---

## ✨ Rekomendasi Implementasi

### Workflow untuk Resize Gambar:

#### 1. **Menggunakan ImageMagick (Command Line):**

```bash
# Resize ke 150x150px (thumbnail)
magick input.jpg -resize 150x150^ -gravity center -extent 150x150 thumbnail.jpg

# Resize ke 1400x1400px (full-size)
magick input.jpg -resize 1400x1400^ -gravity center -extent 1400x1400 -quality 80 fullsize.jpg
```

#### 2. **Menggunakan Online Tools:**

- **TinyPNG:** https://tinypng.com/ (Kompresi tanpa resize)
- **Squoosh:** https://squoosh.app/ (Resize + kompresi)
- **ImageOptim:** https://imageoptim.com/ (Mac app)

#### 3. **Menggunakan Photoshop:**

1. Buka gambar di Photoshop
2. `Image` → `Image Size`
3. Set width & height: **1400 × 1400 px**
4. Resolution: **72 pixels/inch**
5. Resample: **Bicubic Sharper**
6. `File` → `Export` → `Save for Web (Legacy)`
7. Format: **JPEG**
8. Quality: **75-80%**
9. Cek ukuran file < 1MB

#### 4. **Batch Processing dengan Python:**

```python
from PIL import Image
import os

def resize_image(input_path, output_path, size):
    with Image.open(input_path) as img:
        # Convert to RGB if needed (untuk PNG dengan transparency)
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        
        # Resize dengan crop ke center (untuk aspect ratio square)
        width, height = img.size
        if width != height:
            min_dim = min(width, height)
            left = (width - min_dim) / 2
            top = (height - min_dim) / 2
            right = (width + min_dim) / 2
            bottom = (height + min_dim) / 2
            img = img.crop((left, top, right, bottom))
        
        # Resize
        img = img.resize((size, size), Image.Resampling.LANCZOS)
        
        # Save dengan kompresi
        img.save(output_path, 'JPEG', quality=80, optimize=True)

# Contoh penggunaan
resize_image('input.jpg', 'thumbnail.jpg', 150)
resize_image('input.jpg', 'fullsize.jpg', 1400)
```

---

## 📋 Checklist Resize Gambar

Gunakan checklist ini untuk memastikan gambar sudah sesuai standar:

- [ ] **Dimensi:** 1400 × 1400 px (atau 150 × 150 px untuk thumbnail saja)
- [ ] **Rasio Aspek:** 1:1 (Square/Persegi)
- [ ] **Format:** JPEG atau PNG (PNG jika butuh transparency)
- [ ] **Ukuran File:** < 1 MB (maksimal 1,000,000 bytes)
- [ ] **Kualitas JPEG:** 75-85%
- [ ] **Color Space:** RGB (bukan CMYK)
- [ ] **Resolution:** 72 PPI (untuk web)
- [ ] **Orientation:** Upright (tidak rotated)

---

## 🔍 Testing & Validation

### Cara Mengecek Ukuran Gambar:

#### Di Command Line (Linux/Mac):
```bash
# Cek dimensi
identify image.jpg

# Cek ukuran file
ls -lh image.jpg

# Cek dimensi dan ukuran file sekaligus
magick identify -verbose image.jpg | grep -E 'Geometry|Filesize'
```

#### Di Windows (PowerShell):
```powershell
# Cek ukuran file
(Get-Item image.jpg).Length / 1MB
```

#### Di Browser (Developer Tools):
1. Buka halaman `/home`
2. Klik kanan pada gambar → `Inspect`
3. Di tab `Network`, reload page
4. Cari file gambar, lihat kolom `Size` dan `Type`

---

## 📝 Catatan Tambahan

### Mengapa Rasio 1:1 (Square)?

- Konsisten dengan layout tabel yang compact
- Tidak ada distorsi atau cropping yang aneh
- Mudah untuk thumbnail dan preview
- PhotoSwipe akan scale proporsi dengan baik

### Optimasi Lebih Lanjut:

1. **Gunakan WebP:** Format modern dengan kompresi lebih baik
   - Ukuran file 25-35% lebih kecil dari JPEG
   - Support di semua browser modern
   - Fallback ke JPEG untuk compatibility

2. **Lazy Loading:** Tambahkan `loading="lazy"` di tag `<img>`
   ```html
   <img src="..." width="50" class="img-thumbnail" loading="lazy">
   ```

3. **Progressive JPEG:** Gambar load secara bertahap (blur → sharp)
   - Lebih baik untuk UX
   - Enable di Photoshop: "Progressive" checkbox

### Format File yang Didukung:

**Lokasi:** `script/script.js` baris 48-53

```javascript
const allowedExtensions = /(\.jpg|\.png)$/i;
```

**Format yang diterima:**
- `.jpg` / `.jpeg` ✅
- `.png` ✅
- `.webp` ❌ (tidak didukung, perlu update validation)

---

## 📊 Ringkasan Akhir

### Quick Reference:

```
┌─────────────────────────────────────────────────────┐
│  UKURAN GAMBAR OPTIMAL UNTUK PRODUCT CATALOGUE      │
├─────────────────────────────────────────────────────┤
│                                                       │
│  📦 Thumbnail (di tabel):                            │
│      Dimensi: 150 × 150 px                           │
│      Format:  JPEG (quality 80%)                     │
│      Size:    20-50 KB                               │
│                                                       │
│  🖼️  Full-size (PhotoSwipe):                         │
│      Dimensi: 1400 × 1400 px                         │
│      Format:  JPEG (quality 75-80%)                  │
│      Size:    300-500 KB                             │
│                                                       │
│  ⚠️  Maximum Limit:                                   │
│      File Size: < 1 MB (1,000,000 bytes)            │
│      Formats:   .jpg, .png only                      │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### Action Items:

1. ✅ **Gunakan template ini** untuk resize semua gambar produk
2. ✅ **Batch resize** semua gambar existing dengan script Python/ImageMagick
3. ✅ **Test upload** di halaman `/add` untuk memastikan file size < 1MB
4. ✅ **Verify display** di halaman `/home` (thumbnail) dan PhotoSwipe (full-size)
5. ✅ **Check responsiveness** di berbagai device (mobile, tablet, desktop)

---

## 🙋 FAQ

### Q: Apakah bisa upload gambar dengan rasio selain 1:1?
**A:** Ya, bisa. Tapi akan ada whitespace atau cropping di thumbnail 50×50px. Untuk hasil terbaik, gunakan 1:1.

### Q: Bagaimana jika gambar sudah terlalu besar (>1MB)?
**A:** Resize ke 1400×1400px dengan quality 75%, atau gunakan TinyPNG untuk kompresi lossy.

### Q: Apakah perlu 2 file (thumbnail + full-size)?
**A:** Tidak. Upload **1 file 1400×1400px**, browser akan scale down untuk thumbnail. Lebih efisien storage.

### Q: Gambar blur di PhotoSwipe, kenapa?
**A:** Upload image terlalu kecil. Minimal 1200×1200px untuk full-size viewing.

---

**Dibuat:** 2026-01-31  
**Versi:** 1.0  
**Author:** Product Catalogue Team  
**Repository:** [Zevhys/product-catalogue](https://github.com/Zevhys/product-catalogue)
