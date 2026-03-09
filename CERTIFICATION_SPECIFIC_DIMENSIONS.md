# Ukuran Spesifik untuk Setiap Sertifikasi
# Specific Dimensions for Each Certification

## 📐 Dimensi Final untuk Certifications 1-4

Berikut adalah ukuran **width** dan **height** yang spesifik untuk setiap sertifikasi di halaman works, bagian certifications:

---

## Certification-1: FreeCodeCamp Responsive Web Design

**Original Size:** 1200 × 900 pixels (Landscape, 4:3 ratio)

### Calculated Dimensions / Dimensi Terhitung:

```
Orientation: Landscape (width > height)
Aspect Ratio: 1200 / 900 = 1.333 (4:3)

Calculation:
  Target max width = 1200 px
  new_height = 1200 / 1.333 = 900 px
```

### ✅ Final Size / Ukuran Final:

```
Width:  1200 px
Height: 900 px
```

### WebP Conversion:
- **Quality Factor:** 85 (text-heavy certificate)
- **Original PNG:** ~350 KB
- **WebP Result:** ~120 KB (65% reduction)

---

## Certification-2: Google Cloud Professional Certificate

**Original Size:** 1920 × 1080 pixels (Landscape, 16:9 ratio)

### Calculated Dimensions / Dimensi Terhitung:

```
Orientation: Landscape (width > height)
Aspect Ratio: 1920 / 1080 = 1.778 (16:9)

Calculation:
  Target max width = 1200 px
  new_height = 1200 / 1.778 = 675 px
```

### ✅ Final Size / Ukuran Final:

```
Width:  1200 px
Height: 675 px
```

### WebP Conversion:
- **Quality Factor:** 82 (graphics + logo)
- **Original PNG:** ~400 KB
- **WebP Result:** ~110 KB (72% reduction)

---

## Certification-3: AWS Solutions Architect Badge

**Original Size:** 1000 × 1000 pixels (Square, 1:1 ratio)

### Calculated Dimensions / Dimensi Terhitung:

```
Orientation: Square (width ≈ height)
Aspect Ratio: 1000 / 1000 = 1.000 (1:1)

Calculation:
  Target size = 1200 × 1200 px (standard for square)
```

### ✅ Final Size / Ukuran Final:

```
Width:  1200 px
Height: 1200 px
```

### WebP Conversion:
- **Quality Factor:** 85 (logo badge)
- **Original PNG:** ~250 KB
- **WebP Result:** ~85 KB (66% reduction)

---

## Certification-4: Coursera Machine Learning Certificate

**Original Size:** 2000 × 1414 pixels (Landscape, √2:1 ratio / A4 landscape)

### Calculated Dimensions / Dimensi Terhitung:

```
Orientation: Landscape (width > height)
Aspect Ratio: 2000 / 1414 = 1.414 (√2:1)

Calculation:
  Target max width = 1200 px
  new_height = 1200 / 1.414 = 849 px
```

### ✅ Final Size / Ukuran Final:

```
Width:  1200 px
Height: 849 px
```

### WebP Conversion:
- **Quality Factor:** 88 (text-heavy with graphics)
- **Original PNG:** ~480 KB
- **WebP Result:** ~165 KB (66% reduction)

---

## 📊 Summary Table / Tabel Ringkasan

| Certification | Original Size | Final Width | Final Height | Aspect Ratio | WebP Quality |
|---------------|---------------|-------------|--------------|--------------|--------------|
| **Cert-1:** FreeCodeCamp | 1200 × 900 | **1200 px** | **900 px** | 4:3 (1.333) | 85 |
| **Cert-2:** Google Cloud | 1920 × 1080 | **1200 px** | **675 px** | 16:9 (1.778) | 82 |
| **Cert-3:** AWS Badge | 1000 × 1000 | **1200 px** | **1200 px** | 1:1 (1.000) | 85 |
| **Cert-4:** Coursera ML | 2000 × 1414 | **1200 px** | **849 px** | √2:1 (1.414) | 88 |

---

## 🎨 Visual Representation / Representasi Visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  CERTIFICATION-1: FreeCodeCamp                              │
│  ┌──────────────────────────────────────────────────┐      │
│  │                                                   │      │
│  │           1200 px × 900 px                       │      │
│  │           (Landscape 4:3)                        │      │
│  │                                                   │      │
│  └──────────────────────────────────────────────────┘      │
│                                                             │
│                                                             │
│  CERTIFICATION-2: Google Cloud                              │
│  ┌──────────────────────────────────────────────────┐      │
│  │                                                   │      │
│  │           1200 px × 675 px                       │      │
│  │           (Landscape 16:9)                       │      │
│  │                                                   │      │
│  └──────────────────────────────────────────────────┘      │
│                                                             │
│                                                             │
│  CERTIFICATION-3: AWS Badge                                 │
│  ┌─────────────────────────────┐                           │
│  │                             │                           │
│  │                             │                           │
│  │     1200 px × 1200 px      │                           │
│  │     (Square 1:1)            │                           │
│  │                             │                           │
│  │                             │                           │
│  └─────────────────────────────┘                           │
│                                                             │
│                                                             │
│  CERTIFICATION-4: Coursera                                  │
│  ┌──────────────────────────────────────────────────┐      │
│  │                                                   │      │
│  │           1200 px × 849 px                       │      │
│  │           (Landscape √2:1)                       │      │
│  │                                                   │      │
│  └──────────────────────────────────────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Implementation / Implementasi

### HTML Example:

```html
<div class="certifications-section">
  <h2>Certifications</h2>
  
  <div class="certifications-grid">
    
    <!-- Certification-1: FreeCodeCamp -->
    <div class="certification-card">
      <img 
        src="cert-freecodecamp.webp" 
        alt="FreeCodeCamp Responsive Web Design"
        width="1200"
        height="900"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Responsive Web Design</h3>
        <p>FreeCodeCamp</p>
      </div>
    </div>
    
    <!-- Certification-2: Google Cloud -->
    <div class="certification-card">
      <img 
        src="cert-google-cloud.webp" 
        alt="Google Cloud Professional Certificate"
        width="1200"
        height="675"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Cloud Professional</h3>
        <p>Google Cloud Platform</p>
      </div>
    </div>
    
    <!-- Certification-3: AWS Badge -->
    <div class="certification-card">
      <img 
        src="cert-aws-badge.webp" 
        alt="AWS Solutions Architect Badge"
        width="1200"
        height="1200"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Solutions Architect</h3>
        <p>Amazon Web Services</p>
      </div>
    </div>
    
    <!-- Certification-4: Coursera -->
    <div class="certification-card">
      <img 
        src="cert-coursera-ml.webp" 
        alt="Coursera Machine Learning Certificate"
        width="1200"
        height="849"
        loading="lazy"
      >
      <div class="cert-info">
        <h3>Machine Learning</h3>
        <p>Coursera - Stanford University</p>
      </div>
    </div>
    
  </div>
</div>
```

### CSS Example:

```css
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.certification-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-5px);
}

.certification-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.cert-info {
  padding: 1rem;
}
```

---

## 📋 Processing Instructions / Instruksi Pemrosesan

### For Each Certification:

#### **Certification-1 (FreeCodeCamp):**

```bash
# 1. Resize to 1200 × 900
magick cert-freecodecamp-original.png -resize 1200x900 cert-freecodecamp-resized.png

# 2. Convert to WebP with quality 85
cwebp -q 85 cert-freecodecamp-resized.png -o cert-freecodecamp.webp

# Or use ezgif.com:
# - Upload cert-freecodecamp-original.png
# - Resize to 1200 × 900
# - Convert to WebP with quality 85
# - Download result
```

#### **Certification-2 (Google Cloud):**

```bash
# 1. Resize to 1200 × 675
magick cert-google-cloud-original.png -resize 1200x675 cert-google-cloud-resized.png

# 2. Convert to WebP with quality 82
cwebp -q 82 cert-google-cloud-resized.png -o cert-google-cloud.webp
```

#### **Certification-3 (AWS Badge):**

```bash
# 1. Resize to 1200 × 1200
magick cert-aws-badge-original.png -resize 1200x1200 cert-aws-badge-resized.png

# 2. Convert to WebP with quality 85
cwebp -q 85 cert-aws-badge-resized.png -o cert-aws-badge.webp
```

#### **Certification-4 (Coursera):**

```bash
# 1. Resize to 1200 × 849
magick cert-coursera-ml-original.png -resize 1200x849 cert-coursera-ml-resized.png

# 2. Convert to WebP with quality 88
cwebp -q 88 cert-coursera-ml-resized.png -o cert-coursera-ml.webp
```

---

## ✅ Verification Checklist / Daftar Periksa

Setelah memproses semua sertifikasi, pastikan:

- [ ] **Cert-1:** 1200 × 900 px, WebP quality 85
- [ ] **Cert-2:** 1200 × 675 px, WebP quality 82
- [ ] **Cert-3:** 1200 × 1200 px, WebP quality 85
- [ ] **Cert-4:** 1200 × 849 px, WebP quality 88
- [ ] All files in WebP format
- [ ] File sizes under 200 KB each
- [ ] Visual quality checked in browser
- [ ] Responsive display tested on mobile

---

## 📊 File Size Summary / Ringkasan Ukuran File

| Certification | Original PNG | Final WebP | Reduction |
|---------------|--------------|------------|-----------|
| Cert-1: FreeCodeCamp | ~350 KB | ~120 KB | 65% |
| Cert-2: Google Cloud | ~400 KB | ~110 KB | 72% |
| Cert-3: AWS Badge | ~250 KB | ~85 KB | 66% |
| Cert-4: Coursera | ~480 KB | ~165 KB | 66% |
| **TOTAL** | **~1480 KB** | **~480 KB** | **68% avg** |

---

## 🎯 Quick Reference / Referensi Cepat

```
┌───────────────────────────────────────────────────────────┐
│  CERTIFICATION DIMENSIONS QUICK REFERENCE                 │
│  ───────────────────────────────────────────────────────  │
│                                                           │
│  Cert-1 (FreeCodeCamp):       1200 × 900  px  (4:3)     │
│  Cert-2 (Google Cloud):       1200 × 675  px  (16:9)    │
│  Cert-3 (AWS Badge):          1200 × 1200 px  (1:1)     │
│  Cert-4 (Coursera):           1200 × 849  px  (√2:1)    │
│                                                           │
│  All use max width 1200px for consistency                │
│  All heights calculated to preserve aspect ratio         │
│  All converted to WebP with quality 80-88                │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

## 📝 Notes / Catatan

### Why These Specific Dimensions?

1. **Consistency:** All certifications use 1200px max width for uniform display
2. **Aspect Ratio Preserved:** Heights calculated to maintain original proportions
3. **Web Optimized:** Sizes optimized for fast loading and good quality
4. **Responsive:** Works well on desktop, tablet, and mobile devices

### Alternative Dimensions

If you need different certifications, use these formulas:

- **Landscape:** width = 1200, height = 1200 / aspect_ratio
- **Portrait:** height = 1400, width = 1400 × aspect_ratio
- **Square:** 1200 × 1200

### WebP Quality Guidelines

- **80-82:** For certificates with graphics/logos
- **85:** For standard certificates with text
- **88-90:** For certificates with fine text details

---

## 📚 Related Documentation

- **[Full Certification Guide](CERTIFICATION_IMAGE_SIZING_GUIDE.md)** - Complete methodology
- **[Quick Reference](CERTIFICATION_SIZING_QUICK_REF.md)** - Formulas and commands
- **[Calculator Worksheet](CERTIFICATION_CALCULATOR_WORKSHEET.txt)** - Calculation template

---

**Created:** 2026-02-01  
**Version:** 1.0  
**Author:** Product Catalogue Team  
**Repository:** [Zevhys/product-catalogue](https://github.com/Zevhys/product-catalogue)
