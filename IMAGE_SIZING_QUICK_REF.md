# Quick Reference: Image Sizing
# Referensi Cepat: Ukuran Gambar

---

## 📏 OPTIMAL SIZES / UKURAN OPTIMAL

### ✅ RECOMMENDED / DIREKOMENDASIKAN

```
┌──────────────────────────────────────────┐
│           PRODUCT IMAGES                 │
│         GAMBAR PRODUK                    │
├──────────────────────────────────────────┤
│                                          │
│  Dimensions:  1400 × 1400 px            │
│  Dimensi:     1400 × 1400 px            │
│                                          │
│  Format:      JPEG                       │
│  Format:      JPEG                       │
│                                          │
│  Quality:     75-80%                     │
│  Kualitas:    75-80%                     │
│                                          │
│  File Size:   < 1 MB                     │
│  Ukuran File: < 1 MB                     │
│                                          │
│  Aspect:      1:1 (Square / Persegi)    │
│  Rasio:       1:1 (Square / Persegi)    │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🎯 REQUIREMENTS SUMMARY / RINGKASAN KEBUTUHAN

| Component | Size | Format | Limit |
|-----------|------|--------|-------|
| Thumbnail Display | 50px | - | Fixed in code |
| Image Source | **1400×1400px** | JPEG/PNG | < 1MB |
| PhotoSwipe Modal | Natural size | JPEG/PNG | < 1MB |

| Komponen | Ukuran | Format | Batas |
|----------|--------|--------|-------|
| Tampilan Thumbnail | 50px | - | Fixed di kode |
| Sumber Gambar | **1400×1400px** | JPEG/PNG | < 1MB |
| Modal PhotoSwipe | Ukuran natural | JPEG/PNG | < 1MB |

---

## 🔢 CALCULATIONS / PERHITUNGAN

### Thumbnail in Table / Thumbnail di Tabel

```
Display Size:        50px × 50px
Bootstrap padding:   + 4px × 2 = 8px
Bootstrap border:    + 1px × 2 = 2px
                     ───────────────
Total container:     60px × 60px

For Retina (2x):     100px × 100px
For Retina (3x):     150px × 150px ✓
```

### Full-size in PhotoSwipe / Full-size di PhotoSwipe

```
Desktop viewport:    1920px (Full HD)
PhotoSwipe max:      90% of viewport
                     = 1920 × 0.9 = 1728px
                     
Recommended:         1400px × 1400px ✓
Premium option:      1920px × 1920px
```

### File Size Compression / Kompresi Ukuran File

```
1400×1400px @ JPEG 75%  ≈  300-450 KB  ✓
1400×1400px @ JPEG 85%  ≈  500-700 KB  ✓
1920×1920px @ JPEG 75%  ≈  600-900 KB  ✓
1920×1920px @ JPEG 85%  ≈  900-1200 KB ⚠️
```

---

## ⚙️ QUICK COMMANDS / PERINTAH CEPAT

### ImageMagick (Command Line)

```bash
# Resize to 1400x1400px with 80% quality
magick input.jpg -resize 1400x1400^ -gravity center \
  -extent 1400x1400 -quality 80 output.jpg

# Batch resize all JPG files in folder
for img in *.jpg; do
  magick "$img" -resize 1400x1400^ -gravity center \
    -extent 1400x1400 -quality 80 "resized_$img"
done
```

### Python (Pillow)

```python
from PIL import Image

def resize(input_path, output_path):
    img = Image.open(input_path)
    if img.mode in ('RGBA', 'LA', 'P'):
        img = img.convert('RGB')
    
    # Square crop
    w, h = img.size
    if w != h:
        size = min(w, h)
        left = (w - size) / 2
        top = (h - size) / 2
        img = img.crop((left, top, left+size, top+size))
    
    # Resize to 1400x1400
    img = img.resize((1400, 1400), Image.LANCZOS)
    img.save(output_path, 'JPEG', quality=80, optimize=True)

resize('input.jpg', 'output.jpg')
```

---

## ✅ CHECKLIST

Before uploading / Sebelum upload:

- [ ] Dimensions: 1400 × 1400 px
- [ ] Aspect ratio: 1:1 (square)
- [ ] Format: .jpg or .png
- [ ] File size: < 1 MB (< 1,000,000 bytes)
- [ ] JPEG quality: 75-80%
- [ ] Color mode: RGB (not CMYK)
- [ ] Resolution: 72 PPI

---

## 📍 CODE LOCATIONS / LOKASI KODE

| Feature | File | Line |
|---------|------|------|
| Thumbnail display | `views/home.ejs` | 31 |
| PhotoSwipe setup | `views/layout/footer.ejs` | 5-18 |
| File size limit | `script/script.js` | 55-59 |
| Format validation | `script/script.js` | 48-53 |
| Image upload | `routes/routes.js` | 20-39 |

---

## 🚫 CONSTRAINTS / BATASAN

```
Maximum file size:   1,000,000 bytes (1 MB)
Allowed formats:     .jpg, .jpeg, .png
Thumbnail display:   50px (fixed)
Table column:        Auto-width (responsive)
```

---

## 💡 TIPS

1. **Always use square images (1:1 ratio)** for consistency
   **Selalu gunakan gambar persegi (rasio 1:1)** untuk konsistensi

2. **JPEG at 80% quality is the sweet spot** for size vs quality
   **JPEG dengan kualitas 80% adalah titik manis** untuk ukuran vs kualitas

3. **Don't upload images larger than needed** (wastes bandwidth)
   **Jangan upload gambar lebih besar dari kebutuhan** (membuang bandwidth)

4. **Use TinyPNG or Squoosh** for easy compression
   **Gunakan TinyPNG atau Squoosh** untuk kompresi mudah

5. **Test on real device** to see actual quality
   **Test di device nyata** untuk melihat kualitas sebenarnya

---

## 📱 DEVICE PREVIEW / PREVIEW DI DEVICE

| Device | Thumbnail | Full-size |
|--------|-----------|-----------|
| Desktop 1920px | 50px (sharp) | 1400px (full quality) |
| Laptop 1366px | 50px (sharp) | 1366px (full quality) |
| Tablet 768px | 50px (sharp) | 768px (scaled down) |
| Mobile 375px | 50px (sharp) | 375px (scaled down) |

---

## 🔗 USEFUL LINKS / LINK BERGUNA

- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **ImageMagick:** https://imagemagick.org/
- **Pillow (Python):** https://python-pillow.org/

---

## 📞 SUPPORT

For questions / Untuk pertanyaan:
- Open issue: https://github.com/Zevhys/product-catalogue/issues
- Repository: https://github.com/Zevhys/product-catalogue

---

**Last Updated:** 2026-01-31  
**Version:** 1.0
