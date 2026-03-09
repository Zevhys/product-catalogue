# Certification Image Sizing Guide for Works Page

## 📊 Certification Image Size Analysis

This document provides **accurate and precise** calculations for various certification image sizes with different original dimensions, along with WebP quality factor recommendations for PNG to WebP conversion using ezgif.com.

---

## 🎯 Executive Summary

### Core Principles:

Each certification has a **unique aspect ratio**. To maintain quality and consistency, we need to:

1. **Preserve original aspect ratio** (no distortion)
2. **Standardize maximum width or height** (visual consistency)
3. **Optimize file size** with WebP (quality vs size)

---

## 📐 Analysis Methodology

### Analysis Steps:

```
┌─────────────────────────────────────────────────────────────┐
│  1. Measure original image dimensions (width × height)     │
│  2. Calculate aspect ratio = width / height                 │
│  3. Determine target display size (max-width or max-height) │
│  4. Calculate new dimensions (preserve aspect ratio)        │
│  5. Resize with proper method (Lanczos/Bicubic)            │
│  6. Convert to WebP with optimal quality factor            │
└─────────────────────────────────────────────────────────────┘
```

---

## 📏 Size Standardization by Orientation

### A. Landscape Certificates (Horizontal)

**Characteristics:** Width > Height (e.g., 1920×1080, 1600×900, 1200×800)

**Standardization:** Set **MAX WIDTH** for consistency

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
If original_width > original_height:
  new_width = 1200 (standard max width)
  aspect_ratio = original_width / original_height
  new_height = round(new_width / aspect_ratio)
```

### B. Portrait Certificates (Vertical)

**Characteristics:** Height > Width (e.g., 1080×1920, 900×1600)

**Standardization:** Set **MAX HEIGHT** for consistency

| Original Size | Aspect Ratio | Target Max Height | Calculated Width | Final Size |
|---------------|--------------|-------------------|------------------|------------|
| 1080 × 1920 | 9:16 (0.563) | 1400px | 1400 × 0.563 = 788px | **788 × 1400** |
| 900 × 1600 | 9:16 (0.563) | 1400px | 1400 × 0.563 = 788px | **788 × 1400** |
| 800 × 1200 | 2:3 (0.667) | 1400px | 1400 × 0.667 = 933px | **933 × 1400** |
| 768 × 1024 | 3:4 (0.750) | 1400px | 1400 × 0.750 = 1050px | **1050 × 1400** |

**Formula:**
```
If original_height > original_width:
  new_height = 1400 (standard max height)
  aspect_ratio = original_width / original_height
  new_width = round(new_height × aspect_ratio)
```

### C. Square Certificates

**Characteristics:** Width ≈ Height (e.g., 1200×1200, 1000×1000)

**Standardization:** Set **SAME SIZE**

| Original Size | Aspect Ratio | Target Size | Final Size |
|---------------|--------------|-------------|------------|
| 1200 × 1200 | 1:1 (1.000) | 1200 × 1200 | **1200 × 1200** |
| 1000 × 1000 | 1:1 (1.000) | 1200 × 1200 | **1200 × 1200** |
| 2000 × 2000 | 1:1 (1.000) | 1200 × 1200 | **1200 × 1200** |

**Formula:**
```
If abs(original_width - original_height) < 50:
  new_width = 1200
  new_height = 1200
```

---

## 🎨 WebP Quality Factor for PNG to WebP Conversion

### Recommendations by Content Type:

#### 1. **Text-Heavy Certificates**
- **Quality Factor: 85-90**
- **Reason:** Text must remain sharp and readable
- **File Size:** ~30-40% of original PNG
- **Examples:** Online course certificates, digital credentials

```
Original PNG:  500 KB
WebP @ 85:     ~175 KB (35% of original)
WebP @ 90:     ~200 KB (40% of original)
```

#### 2. **Certificates with Graphics/Logos**
- **Quality Factor: 80-85**
- **Reason:** Balance between visual quality and file size
- **File Size:** ~25-35% of original PNG
- **Examples:** Certificates with badges, institutional logos

```
Original PNG:  400 KB
WebP @ 80:     ~100 KB (25% of original)
WebP @ 85:     ~140 KB (35% of original)
```

#### 3. **Certificates with Photo Backgrounds**
- **Quality Factor: 75-80**
- **Reason:** Photos tolerate more compression
- **File Size:** ~20-30% of original PNG
- **Examples:** Certificates with texture or photo backgrounds

```
Original PNG:  600 KB
WebP @ 75:     ~120 KB (20% of original)
WebP @ 80:     ~180 KB (30% of original)
```

### Quality Factor Reference Table:

| Content Type | Quality Factor | Compression Ratio | File Size Reduction | Use Case |
|--------------|----------------|-------------------|---------------------|----------|
| Text-heavy | **85-90** | 30-40% | 60-70% smaller | Credential, course certificates |
| Graphics/Logos | **80-85** | 25-35% | 65-75% smaller | Award certificates, badges |
| Photo background | **75-80** | 20-30% | 70-80% smaller | Artistic certificates |
| Simple design | **80** | ~25% | ~75% smaller | Minimalist certificates |
| Complex design | **85** | ~35% | ~65% smaller | Detailed certificates |

**General Recommendation:** **Quality Factor 80-85** for optimal balance

---

## 📋 Detailed Calculation Examples

### Example 1: Coursera Certificate (Landscape)

**Original Dimensions:** 2000 × 1414 pixels (√2:1 ratio)

**Calculation Steps:**

```
1. Identify orientation:
   2000 > 1414 → Landscape

2. Calculate aspect ratio:
   aspect_ratio = 2000 / 1414 = 1.414

3. Determine target max width:
   target_max_width = 1200 (standard)

4. Calculate new height:
   new_height = 1200 / 1.414 = 848.73
   new_height = round(848.73) = 849

5. Final dimensions:
   1200 × 849 pixels

6. WebP quality (text-heavy):
   Quality factor = 85
```

**Result:**
- Original: 2000 × 1414 (PNG ~450 KB)
- Resized: **1200 × 849** (WebP @ 85 = ~140 KB)
- Reduction: **~69% smaller**

### Example 2: Google Cloud Certificate (Landscape)

**Original Dimensions:** 1920 × 1080 pixels (16:9 ratio)

**Calculation Steps:**

```
1. Identify orientation:
   1920 > 1080 → Landscape

2. Calculate aspect ratio:
   aspect_ratio = 1920 / 1080 = 1.778

3. Determine target max width:
   target_max_width = 1200

4. Calculate new height:
   new_height = 1200 / 1.778 = 675.08
   new_height = round(675.08) = 675

5. Final dimensions:
   1200 × 675 pixels

6. WebP quality (graphics + logo):
   Quality factor = 82
```

**Result:**
- Original: 1920 × 1080 (PNG ~380 KB)
- Resized: **1200 × 675** (WebP @ 82 = ~110 KB)
- Reduction: **~71% smaller**

### Example 3: Badge/Credential (Square)

**Original Dimensions:** 1000 × 1000 pixels (1:1 ratio)

**Calculation Steps:**

```
1. Identify orientation:
   1000 ≈ 1000 → Square

2. Aspect ratio:
   aspect_ratio = 1.000

3. Target size:
   target_size = 1200 × 1200

4. Final dimensions:
   1200 × 1200 pixels

5. WebP quality (graphics/logo):
   Quality factor = 85
```

**Result:**
- Original: 1000 × 1000 (PNG ~250 KB)
- Resized: **1200 × 1200** (WebP @ 85 = ~85 KB)
- Reduction: **~66% smaller**

### Example 4: A4 Portrait Certificate

**Original Dimensions:** 2480 × 3508 pixels (A4 300 DPI)

**Calculation Steps:**

```
1. Identify orientation:
   3508 > 2480 → Portrait

2. Calculate aspect ratio:
   aspect_ratio = 2480 / 3508 = 0.707

3. Determine target max height:
   target_max_height = 1400

4. Calculate new width:
   new_width = 1400 × 0.707 = 989.8
   new_width = round(989.8) = 990

5. Final dimensions:
   990 × 1400 pixels

6. WebP quality (text-heavy):
   Quality factor = 88
```

**Result:**
- Original: 2480 × 3508 (PNG ~800 KB)
- Resized: **990 × 1400** (WebP @ 88 = ~280 KB)
- Reduction: **~65% smaller**

---

## 🛠️ Tools & Workflow

### A. Measuring Original Dimensions

#### Command Line (Linux/Mac):
```bash
# Using ImageMagick
identify image.png

# Output: image.png PNG 1920x1080 ...

# More detailed
identify -verbose image.png | grep -E 'Geometry|Filesize'
```

#### Windows (PowerShell):
```powershell
# Using PowerShell
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\path\to\image.png")
Write-Host "Width: $($img.Width) px"
Write-Host "Height: $($img.Height) px"
$img.Dispose()
```

#### Online:
- Upload to https://www.img2go.com/image-info
- Or open in browser → Inspect → Console → `document.querySelector('img').naturalWidth`

### B. Calculator Script (Python)

```python
from PIL import Image
import math

def calculate_certification_size(image_path, orientation_hint=None):
    """
    Analyze certification size and provide resize recommendations
    """
    # Open and measure image
    img = Image.open(image_path)
    orig_width, orig_height = img.size
    
    # Calculate aspect ratio
    aspect_ratio = orig_width / orig_height
    
    # Detect orientation
    if orientation_hint:
        orientation = orientation_hint
    elif abs(orig_width - orig_height) < 50:
        orientation = 'square'
    elif orig_width > orig_height:
        orientation = 'landscape'
    else:
        orientation = 'portrait'
    
    # Calculate new dimensions
    if orientation == 'landscape':
        new_width = 1200
        new_height = round(new_width / aspect_ratio)
    elif orientation == 'portrait':
        new_height = 1400
        new_width = round(new_height * aspect_ratio)
    else:  # square
        new_width = 1200
        new_height = 1200
    
    # Estimate file sizes
    orig_size_kb = len(img.tobytes()) / 1024
    webp_85_size = orig_size_kb * 0.35  # ~35% of original
    webp_80_size = orig_size_kb * 0.25  # ~25% of original
    
    # Print results
    print(f"╔════════════════════════════════════════════════════════╗")
    print(f"║  CERTIFICATION SIZE ANALYSIS                           ║")
    print(f"╚════════════════════════════════════════════════════════╝")
    print(f"")
    print(f"📂 File: {image_path}")
    print(f"")
    print(f"📐 ORIGINAL DIMENSIONS:")
    print(f"   Width:  {orig_width} px")
    print(f"   Height: {orig_height} px")
    print(f"   Aspect Ratio: {aspect_ratio:.3f} ({orig_width}:{orig_height})")
    print(f"   Orientation: {orientation.upper()}")
    print(f"")
    print(f"✨ RESIZE RECOMMENDATION:")
    print(f"   New Width:  {new_width} px")
    print(f"   New Height: {new_height} px")
    print(f"   Final Size: {new_width} × {new_height} px")
    print(f"")
    print(f"🎨 WEBP QUALITY FACTOR:")
    print(f"   Recommended: 80-85")
    print(f"   For text-heavy: 85-90")
    print(f"   For photos: 75-80")
    print(f"")
    print(f"📊 ESTIMATED FILE SIZE:")
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

# Usage example:
# calculate_certification_size('coursera_cert.png')
```

### C. Resize with ImageMagick

```bash
# Landscape certificate (1200px max width)
magick input.png -resize 1200x -quality 100 output.png

# Portrait certificate (1400px max height)
magick input.png -resize x1400 -quality 100 output.png

# Square certificate (1200x1200)
magick input.png -resize 1200x1200 -quality 100 output.png

# With aspect ratio preserved
magick input.png -resize 1200x1400 -quality 100 output.png
```

### D. Convert PNG to WebP (ezgif.com)

**Steps on ezgif.com:**

1. **Visit:** https://ezgif.com/png-to-webp
2. **Upload:** Click "Choose File" → Select resized PNG
3. **Settings:**
   - Quality: `80-85` (default 80)
   - For text-heavy: use `85-90`
   - For photos: use `75-80`
4. **Convert:** Click "Convert to WebP!"
5. **Download:** Click "Save" to download result

**Alternative Command Line (cwebp):**

```bash
# Install cwebp (part of libwebp)
# Ubuntu: sudo apt install webp
# Mac: brew install webp

# Convert with quality 85
cwebp -q 85 input.png -o output.webp

# Convert with quality 80 (default)
cwebp -q 80 input.png -o output.webp

# With metadata preservation
cwebp -q 85 -metadata all input.png -o output.webp
```

---

## 📊 Complete Standardization Table

### Web Display Standardization

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

## ✅ Complete Workflow

### Checklist for Each Certification:

```
☐ 1. Measure original dimensions (width × height)
☐ 2. Calculate aspect ratio (width / height)
☐ 3. Determine orientation (landscape/portrait/square)
☐ 4. Calculate new dimensions:
     - Landscape: max width 1200px
     - Portrait: max height 1400px
     - Square: 1200 × 1200px
☐ 5. Resize image (use ImageMagick or online tool)
☐ 6. Determine WebP quality factor:
     - Text-heavy: 85-90
     - Graphics: 80-85
     - Photos: 75-80
☐ 7. Convert to WebP (ezgif.com or cwebp)
☐ 8. Verify results:
     - Check visual quality
     - Confirm file size reduction
     - Test in various browsers
```

---

## 📝 FAQ

### Q: What if aspect ratio is non-standard?
**A:** Use calculation formula:
- Landscape: `new_height = round(1200 / aspect_ratio)`
- Portrait: `new_width = round(1400 × aspect_ratio)`

### Q: WebP quality 80 or 85?
**A:** 
- **80** = Default, suitable for most cases
- **85** = If there's small text or important details
- **90** = For certificates that must be very sharp

### Q: Should I crop?
**A:** **NO**. Preserve original aspect ratio. Only resize (scale), don't crop.

### Q: What about JPEG format?
**A:** WebP is better than JPEG (25-35% smaller with same quality). If you must use JPEG, use quality 85-90.

### Q: Do all browsers support WebP?
**A:** Yes, since 2020 all modern browsers support WebP (Chrome, Firefox, Safari, Edge).

### Q: File size still too large?
**A:** 
1. Lower quality factor (75-78)
2. Resize smaller (max width 1000px)
3. Use additional compression tools

---

## 📚 Resources

### Tools:
- **ezgif.com** - https://ezgif.com/png-to-webp (Online WebP converter)
- **Squoosh** - https://squoosh.app/ (Google image optimizer)
- **TinyPNG** - https://tinypng.com/ (Compression tool)
- **ImageMagick** - https://imagemagick.org/ (CLI tool)

### Documentation:
- WebP Format: https://developers.google.com/speed/webp
- Responsive Images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

---

**Created:** 2026-02-01  
**Version:** 1.0  
**Author:** Product Catalogue Team  
**Repository:** [Zevhys/product-catalogue](https://github.com/Zevhys/product-catalogue)
