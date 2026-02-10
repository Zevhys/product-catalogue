# Panduan Ukuran Gambar Sertifikasi untuk Halaman Works

## 📊 Analisis Ukuran Gambar Sertifikasi (Certifications)

Dokumen ini memberikan penghitungan yang **akurat dan presisi** untuk berbagai ukuran gambar sertifikasi dengan dimensi asli yang berbeda-beda, beserta rekomendasi WebP quality factor untuk konversi PNG ke WebP menggunakan ezgif.com.

---

## 🎯 Ringkasan Eksekutif

### Prinsip Utama:

Setiap sertifikasi memiliki **aspect ratio (rasio aspek) yang unik**. Untuk menjaga kualitas dan konsistensi, kita perlu:

1. **Mempertahankan aspect ratio asli** (tidak distorsi)
2. **Standarisasi tinggi atau lebar maksimum** (konsistensi visual)
3. **Optimasi ukuran file** dengan WebP (kualitas vs ukuran)

---

## 📐 Metodologi Analisis

### Langkah-langkah Analisis:

```
┌─────────────────────────────────────────────────────────────┐
│  1. Ukur dimensi asli gambar (width × height)              │
│  2. Hitung aspect ratio = width / height                    │
│  3. Tentukan target display size (max-width atau max-height)│
│  4. Kalkulasi dimensi baru (pertahankan aspect ratio)       │
│  5. Resize dengan metode yang tepat (Lanczos/Bicubic)       │
│  6. Convert ke WebP dengan quality factor optimal           │
└─────────────────────────────────────────────────────────────┘
```

---

## 📏 Standarisasi Ukuran Berdasarkan Orientasi

### A. Sertifikasi Landscape (Horizontal)

**Karakteristik:** Width > Height (contoh: 1920×1080, 1600×900, 1200×800)

**Standarisasi:** Tetapkan **MAX WIDTH** untuk konsistensi

| Original Size | Aspect Ratio | Target Max Width | Calculated Height | Final Size |
|---------------|--------------|------------------|-------------------|------------|
| 1920 × 1080 | 16:9 (1.778) | 1200px | 1200 ÷ 1.778 = 675px | **1200 × 675** |
| 1600 × 900 | 16:9 (1.778) | 1200px | 1200 ÷ 1.778 = 675px | **1200 × 675** |
| 1200 × 800 | 3:2 (1.500) | 1200px | 1200 ÷ 1.500 = 800px | **1200 × 800** |
| 2000 × 1414 | √2:1 (1.414) | 1200px | 1200 ÷ 1.414 = 849px | **1200 × 849** |
| 1800 × 1200 | 3:2 (1.500) | 1200px | 1200 ÷ 1.500 = 800px | **1200 × 800** |
| 1024 × 768 | 4:3 (1.333) | 1200px | 1200 ÷ 1.333 = 900px | **1200 × 900** |

**Formula:**
```
Jika original_width > original_height:
  new_width = 1200 (standar max width)
  aspect_ratio = original_width / original_height
  new_height = round(new_width / aspect_ratio)
```

### B. Sertifikasi Portrait (Vertical)

**Karakteristik:** Height > Width (contoh: 1080×1920, 900×1600)

**Standarisasi:** Tetapkan **MAX HEIGHT** untuk konsistensi

| Original Size | Aspect Ratio | Target Max Height | Calculated Width | Final Size |
|---------------|--------------|-------------------|------------------|------------|
| 1080 × 1920 | 9:16 (0.563) | 1400px | 1400 × 0.563 = 788px | **788 × 1400** |
| 900 × 1600 | 9:16 (0.563) | 1400px | 1400 × 0.563 = 788px | **788 × 1400** |
| 800 × 1200 | 2:3 (0.667) | 1400px | 1400 × 0.667 = 933px | **933 × 1400** |
| 768 × 1024 | 3:4 (0.750) | 1400px | 1400 × 0.750 = 1050px | **1050 × 1400** |

**Formula:**
```
Jika original_height > original_width:
  new_height = 1400 (standar max height)
  aspect_ratio = original_width / original_height
  new_width = round(new_height × aspect_ratio)
```

### C. Sertifikasi Square (Persegi)

**Karakteristik:** Width ≈ Height (contoh: 1200×1200, 1000×1000)

**Standarisasi:** Tetapkan **SIZE** yang sama

| Original Size | Aspect Ratio | Target Size | Final Size |
|---------------|--------------|-------------|------------|
| 1200 × 1200 | 1:1 (1.000) | 1200 × 1200 | **1200 × 1200** |
| 1000 × 1000 | 1:1 (1.000) | 1200 × 1200 | **1200 × 1200** |
| 2000 × 2000 | 1:1 (1.000) | 1200 × 1200 | **1200 × 1200** |

**Formula:**
```
Jika abs(original_width - original_height) < 50:
  new_width = 1200
  new_height = 1200
```

---

## 🎨 WebP Quality Factor untuk Konversi PNG ke WebP

### Rekomendasi Berdasarkan Tipe Konten:

#### 1. **Sertifikasi dengan Teks Banyak**
- **Quality Factor: 85-90**
- **Alasan:** Teks harus tetap sharp dan readable
- **Ukuran File:** ~30-40% dari PNG original
- **Contoh:** Sertifikasi course online, credential digital

```
PNG Original:  500 KB
WebP @ 85:     ~175 KB (35% dari original)
WebP @ 90:     ~200 KB (40% dari original)
```

#### 2. **Sertifikasi dengan Grafis/Logo**
- **Quality Factor: 80-85**
- **Alasan:** Balance antara kualitas visual dan ukuran file
- **Ukuran File:** ~25-35% dari PNG original
- **Contoh:** Sertifikasi dengan badge, logo institusi

```
PNG Original:  400 KB
WebP @ 80:     ~100 KB (25% dari original)
WebP @ 85:     ~140 KB (35% dari original)
```

#### 3. **Sertifikasi dengan Background Photo**
- **Quality Factor: 75-80**
- **Alasan:** Photo dapat tolerate lebih banyak compression
- **Ukuran File:** ~20-30% dari PNG original
- **Contoh:** Sertifikasi dengan background tekstur atau foto

```
PNG Original:  600 KB
WebP @ 75:     ~120 KB (20% dari original)
WebP @ 80:     ~180 KB (30% dari original)
```

### Tabel Referensi Quality Factor:

| Content Type | Quality Factor | Compression Ratio | File Size Reduction | Use Case |
|--------------|----------------|-------------------|---------------------|----------|
| Text-heavy (banyak teks) | **85-90** | 30-40% | 60-70% lebih kecil | Credential, course certificates |
| Graphics/Logos | **80-85** | 25-35% | 65-75% lebih kecil | Award certificates, badges |
| Photo background | **75-80** | 20-30% | 70-80% lebih kecil | Artistic certificates |
| Simple design | **80** | ~25% | ~75% lebih kecil | Minimalist certificates |
| Complex design | **85** | ~35% | ~65% lebih kecil | Detailed certificates |

**Rekomendasi Umum:** **Quality Factor 80-85** untuk balance optimal

---

## 📋 Contoh Perhitungan Detail

### Contoh 1: Sertifikasi Coursera (Landscape)

**Dimensi Asli:** 2000 × 1414 pixels (√2:1 ratio)

**Langkah Perhitungan:**

```
1. Identifikasi orientasi:
   2000 > 1414 → Landscape

2. Hitung aspect ratio:
   aspect_ratio = 2000 / 1414 = 1.414

3. Tentukan target max width:
   target_max_width = 1200 (standar)

4. Hitung height baru:
   new_height = 1200 / 1.414 = 848.73
   new_height = round(848.73) = 849

5. Dimensi final:
   1200 × 849 pixels

6. WebP quality (banyak teks):
   Quality factor = 85
```

**Result:**
- Original: 2000 × 1414 (PNG ~450 KB)
- Resized: **1200 × 849** (WebP @ 85 = ~140 KB)
- Reduction: **~69% smaller**

### Contoh 2: Sertifikasi Google Cloud (Landscape)

**Dimensi Asli:** 1920 × 1080 pixels (16:9 ratio)

**Langkah Perhitungan:**

```
1. Identifikasi orientasi:
   1920 > 1080 → Landscape

2. Hitung aspect ratio:
   aspect_ratio = 1920 / 1080 = 1.778

3. Tentukan target max width:
   target_max_width = 1200

4. Hitung height baru:
   new_height = 1200 / 1.778 = 675.08
   new_height = round(675.08) = 675

5. Dimensi final:
   1200 × 675 pixels

6. WebP quality (grafis + logo):
   Quality factor = 82
```

**Result:**
- Original: 1920 × 1080 (PNG ~380 KB)
- Resized: **1200 × 675** (WebP @ 82 = ~110 KB)
- Reduction: **~71% smaller**

### Contoh 3: Badge/Credential (Square)

**Dimensi Asli:** 1000 × 1000 pixels (1:1 ratio)

**Langkah Perhitungan:**

```
1. Identifikasi orientasi:
   1000 ≈ 1000 → Square

2. Aspect ratio:
   aspect_ratio = 1.000

3. Target size:
   target_size = 1200 × 1200

4. Dimensi final:
   1200 × 1200 pixels

5. WebP quality (grafis/logo):
   Quality factor = 85
```

**Result:**
- Original: 1000 × 1000 (PNG ~250 KB)
- Resized: **1200 × 1200** (WebP @ 85 = ~85 KB)
- Reduction: **~66% smaller**

### Contoh 4: Sertifikasi A4 Portrait

**Dimensi Asli:** 2480 × 3508 pixels (A4 300 DPI)

**Langkah Perhitungan:**

```
1. Identifikasi orientasi:
   3508 > 2480 → Portrait

2. Hitung aspect ratio:
   aspect_ratio = 2480 / 3508 = 0.707

3. Tentukan target max height:
   target_max_height = 1400

4. Hitung width baru:
   new_width = 1400 × 0.707 = 989.8
   new_width = round(989.8) = 990

5. Dimensi final:
   990 × 1400 pixels

6. WebP quality (banyak teks):
   Quality factor = 88
```

**Result:**
- Original: 2480 × 3508 (PNG ~800 KB)
- Resized: **990 × 1400** (WebP @ 88 = ~280 KB)
- Reduction: **~65% smaller**

---

## 🛠️ Tool & Workflow

### A. Mengukur Dimensi Original

#### Command Line (Linux/Mac):
```bash
# Menggunakan ImageMagick
identify image.png

# Output: image.png PNG 1920x1080 ...

# Atau lebih detail
identify -verbose image.png | grep -E 'Geometry|Filesize'
```

#### Windows (PowerShell):
```powershell
# Menggunakan PowerShell
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\path\to\image.png")
Write-Host "Width: $($img.Width) px"
Write-Host "Height: $($img.Height) px"
$img.Dispose()
```

#### Online:
- Upload ke https://www.img2go.com/image-info
- Atau buka di browser → Inspect → Console → `document.querySelector('img').naturalWidth`

### B. Calculator Script (Python)

```python
from PIL import Image
import math

def calculate_certification_size(image_path, orientation_hint=None):
    """
    Analisis ukuran sertifikasi dan berikan rekomendasi resize
    """
    # Buka dan ukur gambar
    img = Image.open(image_path)
    orig_width, orig_height = img.size
    
    # Hitung aspect ratio
    aspect_ratio = orig_width / orig_height
    
    # Deteksi orientasi
    if orientation_hint:
        orientation = orientation_hint
    elif abs(orig_width - orig_height) < 50:
        orientation = 'square'
    elif orig_width > orig_height:
        orientation = 'landscape'
    else:
        orientation = 'portrait'
    
    # Hitung dimensi baru
    if orientation == 'landscape':
        new_width = 1200
        new_height = round(new_width / aspect_ratio)
    elif orientation == 'portrait':
        new_height = 1400
        new_width = round(new_height * aspect_ratio)
    else:  # square
        new_width = 1200
        new_height = 1200
    
    # Estimasi ukuran file
    orig_size_kb = len(img.tobytes()) / 1024
    webp_85_size = orig_size_kb * 0.35  # ~35% dari original
    webp_80_size = orig_size_kb * 0.25  # ~25% dari original
    
    # Print hasil
    print(f"╔════════════════════════════════════════════════════════╗")
    print(f"║  ANALISIS UKURAN SERTIFIKASI                           ║")
    print(f"╚════════════════════════════════════════════════════════╝")
    print(f"")
    print(f"📂 File: {image_path}")
    print(f"")
    print(f"📐 DIMENSI ORIGINAL:")
    print(f"   Width:  {orig_width} px")
    print(f"   Height: {orig_height} px")
    print(f"   Aspect Ratio: {aspect_ratio:.3f} ({orig_width}:{orig_height})")
    print(f"   Orientation: {orientation.upper()}")
    print(f"")
    print(f"✨ REKOMENDASI RESIZE:")
    print(f"   New Width:  {new_width} px")
    print(f"   New Height: {new_height} px")
    print(f"   Final Size: {new_width} × {new_height} px")
    print(f"")
    print(f"🎨 WEBP QUALITY FACTOR:")
    print(f"   Recommended: 80-85")
    print(f"   For text-heavy: 85-90")
    print(f"   For photos: 75-80")
    print(f"")
    print(f"📊 ESTIMASI UKURAN FILE:")
    print(f"   Original PNG: ~{orig_size_kb:.0f} KB")
    print(f"   WebP @ 85:    ~{webp_85_size:.0f} KB (35% reduction)")
    print(f"   WebP @ 80:    ~{webp_80_size:.0f} KB (25% reduction)")
    print(f"")
    
    return {
        'original': (orig_width, orig_height),
        'new': (new_width, new_height),
        'aspect_ratio': aspect_ratio,
        'orientation': orientation
    }

# Contoh penggunaan:
# calculate_certification_size('coursera_cert.png')
```

### C. Resize dengan ImageMagick

```bash
# Landscape certificate (1200px max width)
magick input.png -resize 1200x -quality 100 output.png

# Portrait certificate (1400px max height)
magick input.png -resize x1400 -quality 100 output.png

# Square certificate (1200x1200)
magick input.png -resize 1200x1200 -quality 100 output.png

# Dengan aspect ratio tetap terjaga
magick input.png -resize 1200x1400 -quality 100 output.png
```

### D. Konversi PNG ke WebP (ezgif.com)

**Langkah-langkah di ezgif.com:**

1. **Kunjungi:** https://ezgif.com/png-to-webp
2. **Upload:** Click "Choose File" → Pilih PNG yang sudah diresize
3. **Settings:**
   - Quality: `80-85` (default 80)
   - Untuk text-heavy: gunakan `85-90`
   - Untuk photo: gunakan `75-80`
4. **Convert:** Click "Convert to WebP!"
5. **Download:** Click "Save" untuk download hasil

**Alternative Command Line (cwebp):**

```bash
# Install cwebp (part of libwebp)
# Ubuntu: sudo apt install webp
# Mac: brew install webp

# Konversi dengan quality 85
cwebp -q 85 input.png -o output.webp

# Konversi dengan quality 80 (default)
cwebp -q 80 input.png -o output.webp

# Dengan metadata preservation
cwebp -q 85 -metadata all input.png -o output.webp
```

---

## 📊 Tabel Standarisasi Lengkap

### Standarisasi untuk Display di Web

| Orientation | Original Aspect Ratio | Max Width | Max Height | Calculation Method |
|-------------|----------------------|-----------|------------|-------------------|
| Landscape | 16:9 (1.778) | **1200px** | auto | height = 1200 / 1.778 = 675 |
| Landscape | 3:2 (1.500) | **1200px** | auto | height = 1200 / 1.500 = 800 |
| Landscape | 4:3 (1.333) | **1200px** | auto | height = 1200 / 1.333 = 900 |
| Landscape | √2:1 (1.414) | **1200px** | auto | height = 1200 / 1.414 = 849 |
| Portrait | 9:16 (0.563) | auto | **1400px** | width = 1400 × 0.563 = 788 |
| Portrait | 2:3 (0.667) | auto | **1400px** | width = 1400 × 0.667 = 933 |
| Portrait | 3:4 (0.750) | auto | **1400px** | width = 1400 × 0.750 = 1050 |
| Square | 1:1 (1.000) | **1200px** | **1200px** | Both = 1200 |

### WebP Quality Settings

| Content Type | Quality | Compression | File Size | Visual Quality | Recommended For |
|--------------|---------|-------------|-----------|----------------|-----------------|
| Text-heavy certificates | **85-90** | Medium | 30-40% of PNG | Excellent | Coursera, Udemy, edX |
| Graphic certificates | **80-85** | Good | 25-35% of PNG | Very Good | AWS, Google, Microsoft |
| Photo-based certificates | **75-80** | High | 20-30% of PNG | Good | Artistic certificates |
| Simple badges | **80** | Good | ~25% of PNG | Very Good | Digital badges |
| Complex designs | **85** | Medium | ~35% of PNG | Excellent | Detailed certificates |

---

## ✅ Workflow Complete

### Checklist untuk Setiap Sertifikasi:

```
☐ 1. Ukur dimensi original (width × height)
☐ 2. Hitung aspect ratio (width / height)
☐ 3. Tentukan orientasi (landscape/portrait/square)
☐ 4. Kalkulasi dimensi baru:
     - Landscape: max width 1200px
     - Portrait: max height 1400px
     - Square: 1200 × 1200px
☐ 5. Resize gambar (gunakan ImageMagick atau online tool)
☐ 6. Tentukan WebP quality factor:
     - Text-heavy: 85-90
     - Graphics: 80-85
     - Photos: 75-80
☐ 7. Convert ke WebP (ezgif.com atau cwebp)
☐ 8. Verify hasil:
     - Check visual quality
     - Confirm file size reduction
     - Test di berbagai browser
```

---

## 🎯 Contoh Implementasi HTML

### CSS untuk Responsive Display

```css
/* Container untuk certifications grid */
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Individual certification card */
.certification-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

/* Image responsive */
.certification-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: #f5f5f5;
}

/* Untuk landscape images */
.certification-image.landscape {
  max-width: 1200px;
  max-height: 900px;
}

/* Untuk portrait images */
.certification-image.portrait {
  max-width: 1050px;
  max-height: 1400px;
}

/* Untuk square images */
.certification-image.square {
  max-width: 1200px;
  max-height: 1200px;
}
```

### HTML Structure

```html
<section class="certifications-section">
  <h2>Certifications</h2>
  
  <div class="certifications-grid">
    
    <!-- Landscape Certificate -->
    <div class="certification-card">
      <img 
        src="coursera-cert.webp" 
        alt="Coursera Machine Learning Certificate"
        class="certification-image landscape"
        width="1200"
        height="849"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Machine Learning</h3>
        <p>Coursera - Stanford University</p>
      </div>
    </div>
    
    <!-- Portrait Certificate -->
    <div class="certification-card">
      <img 
        src="google-cert.webp" 
        alt="Google Cloud Professional Certificate"
        class="certification-image portrait"
        width="990"
        height="1400"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Cloud Professional</h3>
        <p>Google Cloud Platform</p>
      </div>
    </div>
    
    <!-- Square Badge -->
    <div class="certification-card">
      <img 
        src="aws-badge.webp" 
        alt="AWS Solutions Architect Badge"
        class="certification-image square"
        width="1200"
        height="1200"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Solutions Architect</h3>
        <p>Amazon Web Services</p>
      </div>
    </div>
    
  </div>
</section>
```

---

## 📝 FAQ

### Q: Bagaimana jika aspect ratio tidak standar?
**A:** Gunakan formula perhitungan:
- Landscape: `new_height = round(1200 / aspect_ratio)`
- Portrait: `new_width = round(1400 × aspect_ratio)`

### Q: WebP quality 80 atau 85?
**A:** 
- **80** = Default, cocok untuk mayoritas kasus
- **85** = Jika banyak teks kecil atau detail penting
- **90** = Untuk certificate yang harus sangat sharp

### Q: Apakah perlu crop?
**A:** **TIDAK**. Pertahankan aspect ratio original. Hanya resize (scale), jangan crop.

### Q: Bagaimana dengan format JPEG?
**A:** WebP lebih baik dari JPEG (25-35% lebih kecil dengan kualitas sama). Jika harus JPEG, gunakan quality 85-90.

### Q: Apakah semua browser support WebP?
**A:** Ya, sejak 2020 semua browser modern support WebP (Chrome, Firefox, Safari, Edge).

### Q: File size masih terlalu besar?
**A:** 
1. Turunkan quality factor (75-78)
2. Resize lebih kecil (max width 1000px)
3. Gunakan compression tools tambahan

---

## 📚 Resources

### Tools:
- **ezgif.com** - https://ezgif.com/png-to-webp (WebP converter online)
- **Squoosh** - https://squoosh.app/ (Image optimizer Google)
- **TinyPNG** - https://tinypng.com/ (Compression tool)
- **ImageMagick** - https://imagemagick.org/ (CLI tool)

### Documentation:
- WebP Format: https://developers.google.com/speed/webp
- Responsive Images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

---

**Dibuat:** 2026-02-01  
**Versi:** 1.0  
**Author:** Product Catalogue Team  
**Repository:** [Zevhys/product-catalogue](https://github.com/Zevhys/product-catalogue)
