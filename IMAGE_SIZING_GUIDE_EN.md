# Image Sizing Guide for Product Catalogue

## 📊 Image Size Requirements Analysis

This document provides **accurate and precise** calculations for image sizes used in the **Home** page (Product Catalogue) within the product table section.

---

## 🎯 Executive Summary

### Recommended Sizes:

| Usage | Optimal Dimensions | Format | File Size | Aspect Ratio |
|-------|-------------------|--------|-----------|--------------|
| **Thumbnail** (Table) | **150 × 150 px** | JPEG/PNG | 20-50 KB | 1:1 (Square) |
| **Full-size** (PhotoSwipe) | **1400 × 1400 px** | JPEG/WebP | 300-500 KB | 1:1 (Square) |
| **Maximum Limit** | - | JPG/PNG | **< 1 MB** | Any |

---

## 📐 Detailed Calculations

### 1. Thumbnail Display Analysis in Table

**Location:** `views/home.ejs` line 31

```html
<img src="<%= row.image %>" width="50" class="img-thumbnail" alt="image_product">
```

#### Thumbnail Size Calculation:

1. **HTML Width Attribute:** `50px`
2. **Bootstrap Class `img-thumbnail` adds:**
   - Border: `1px` (left + right) = `2px`
   - Padding: `4px` (left + right) = `8px`
3. **Total Container Width:** `50px + 2px + 8px = 60px`

#### Recommendation for Retina/High-DPI Displays:

For sharp display on modern screens (Retina, 4K), use **2x - 3x** display size:

- **Minimum:** `50px × 2 = 100 × 100 px`
- **Optimal:** `50px × 3 = 150 × 150 px` ✅ **RECOMMENDED**
- **Maximum:** `50px × 4 = 200 × 200 px`

**Conclusion:** Upload **150 × 150 px** images for high-quality thumbnails.

---

### 2. Full-size Display Analysis in PhotoSwipe

**Location:** `views/layout/footer.ejs` lines 5-18

```javascript
$("a.img-gallery > img").each((n, el) => {
  imgLink[n].setAttribute("data-pswp-height", el.naturalHeight);
  imgLink[n].setAttribute("data-pswp-width", el.naturalWidth);
})
```

PhotoSwipe uses **natural dimensions** of images for lightbox display.

#### Full-size Size Calculation:

1. **Maximum Viewport (Desktop):**
   - Common screen widths: 1920px (Full HD), 2560px (2K), 3840px (4K)
   - PhotoSwipe default max width: `~90vw` (90% of viewport)
   - Maximum height: `~90vh`

2. **Optimal Size for Desktop:**
   - `1920px × 90% = 1728px` → **Recommendation: 1400-1600px**
   - For 2K displays: `2560px × 90% = 2304px` → **Recommendation: 1920px**

3. **Mobile Viewport:**
   - Common screen widths: 375px - 428px (iPhone), 360px - 414px (Android)
   - Images automatically scale down by PhotoSwipe

#### Full-size Recommendations:

- **Standard Quality:** `1200 × 1200 px` (suitable for Full HD screens)
- **High Quality:** `1400 × 1400 px` ✅ **RECOMMENDED**
- **Premium Quality:** `1920 × 1920 px` (for 2K/4K displays)

**Conclusion:** Upload **1400 × 1400 px** images for optimal quality on all devices.

---

### 3. File Size Limit

**Location:** `script/script.js` lines 55-59

```javascript
if (file.size > 1000000) {
  alert("File size exceeds 1MB limit.");
  fileInput.value = "";
  event.preventDefault();
}
```

#### Compression Calculation:

**Maximum limit:** `1,000,000 bytes = 1 MB`

To produce files under 1MB with good quality:

| Dimensions | Format | Quality | Estimated Size |
|-----------|--------|---------|----------------|
| 150 × 150 px | JPEG | 80% | 20-40 KB ✅ |
| 150 × 150 px | PNG | - | 30-60 KB ✅ |
| 1400 × 1400 px | JPEG | 75% | 300-450 KB ✅ |
| 1400 × 1400 px | JPEG | 85% | 500-700 KB ✅ |
| 1920 × 1920 px | JPEG | 75% | 600-900 KB ✅ |
| 1920 × 1920 px | JPEG | 85% | 900-1200 KB ⚠️ (May exceed 1MB) |

**Conclusion:** Use JPEG with **75-85%** quality for balance between size and quality.

---

## 🎨 Responsive Behavior

### Bootstrap Responsive Breakpoints:

**Location:** `views/home.ejs` line 14

```html
<div class="table-responsive">
```

#### Behavior across devices:

| Device | Screen Width | Behavior | Image Display |
|--------|--------------|----------|---------------|
| Mobile | < 576px | Table scrolls horizontally | 50px width (fixed) |
| Tablet | ≥ 768px | Full table visible | 50px width (fixed) |
| Desktop | ≥ 992px | Full table visible | 50px width (fixed) |
| Large Desktop | ≥ 1200px | Full table visible | 50px width (fixed) |

**Important:** Thumbnail width stays **50px** at all breakpoints, but image source should be **150px** for sharpness on high-DPI screens.

---

## ✨ Implementation Recommendations

### Workflow for Image Resizing:

#### 1. **Using ImageMagick (Command Line):**

```bash
# Resize to 150x150px (thumbnail)
magick input.jpg -resize 150x150^ -gravity center -extent 150x150 thumbnail.jpg

# Resize to 1400x1400px (full-size)
magick input.jpg -resize 1400x1400^ -gravity center -extent 1400x1400 -quality 80 fullsize.jpg
```

#### 2. **Using Online Tools:**

- **TinyPNG:** https://tinypng.com/ (Compression without resize)
- **Squoosh:** https://squoosh.app/ (Resize + compression)
- **ImageOptim:** https://imageoptim.com/ (Mac app)

#### 3. **Using Photoshop:**

1. Open image in Photoshop
2. `Image` → `Image Size`
3. Set width & height: **1400 × 1400 px**
4. Resolution: **72 pixels/inch**
5. Resample: **Bicubic Sharper**
6. `File` → `Export` → `Save for Web (Legacy)`
7. Format: **JPEG**
8. Quality: **75-80%**
9. Check file size < 1MB

#### 4. **Batch Processing with Python:**

```python
from PIL import Image
import os

def resize_image(input_path, output_path, size):
    with Image.open(input_path) as img:
        # Convert to RGB if needed (for PNG with transparency)
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        
        # Resize with center crop (for square aspect ratio)
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
        
        # Save with compression
        img.save(output_path, 'JPEG', quality=80, optimize=True)

# Usage example
resize_image('input.jpg', 'thumbnail.jpg', 150)
resize_image('input.jpg', 'fullsize.jpg', 1400)
```

---

## 📋 Image Resize Checklist

Use this checklist to ensure images meet the standards:

- [ ] **Dimensions:** 1400 × 1400 px (or 150 × 150 px for thumbnail only)
- [ ] **Aspect Ratio:** 1:1 (Square)
- [ ] **Format:** JPEG or PNG (PNG if transparency needed)
- [ ] **File Size:** < 1 MB (maximum 1,000,000 bytes)
- [ ] **JPEG Quality:** 75-85%
- [ ] **Color Space:** RGB (not CMYK)
- [ ] **Resolution:** 72 PPI (for web)
- [ ] **Orientation:** Upright (not rotated)

---

## 🔍 Testing & Validation

### How to Check Image Size:

#### On Command Line (Linux/Mac):
```bash
# Check dimensions
identify image.jpg

# Check file size
ls -lh image.jpg

# Check dimensions and file size together
magick identify -verbose image.jpg | grep -E 'Geometry|Filesize'
```

#### On Windows (PowerShell):
```powershell
# Check file size
(Get-Item image.jpg).Length / 1MB
```

#### In Browser (Developer Tools):
1. Open `/home` page
2. Right-click on image → `Inspect`
3. In `Network` tab, reload page
4. Find image file, check `Size` and `Type` columns

---

## 📝 Additional Notes

### Why 1:1 (Square) Ratio?

- Consistent with compact table layout
- No weird distortion or cropping
- Easy for thumbnails and previews
- PhotoSwipe scales proportions well

### Further Optimization:

1. **Use WebP:** Modern format with better compression
   - File size 25-35% smaller than JPEG
   - Supported in all modern browsers
   - Fallback to JPEG for compatibility

2. **Lazy Loading:** Add `loading="lazy"` to `<img>` tag
   ```html
   <img src="..." width="50" class="img-thumbnail" loading="lazy">
   ```

3. **Progressive JPEG:** Images load gradually (blur → sharp)
   - Better for UX
   - Enable in Photoshop: "Progressive" checkbox

### Supported File Formats:

**Location:** `script/script.js` lines 48-53

```javascript
const allowedExtensions = /(\.jpg|\.png)$/i;
```

**Accepted formats:**
- `.jpg` / `.jpeg` ✅
- `.png` ✅
- `.webp` ❌ (not supported, needs validation update)

---

## 📊 Final Summary

### Quick Reference:

```
┌─────────────────────────────────────────────────────┐
│  OPTIMAL IMAGE SIZES FOR PRODUCT CATALOGUE          │
├─────────────────────────────────────────────────────┤
│                                                       │
│  📦 Thumbnail (in table):                            │
│      Dimensions: 150 × 150 px                        │
│      Format:     JPEG (quality 80%)                  │
│      Size:       20-50 KB                            │
│                                                       │
│  🖼️  Full-size (PhotoSwipe):                         │
│      Dimensions: 1400 × 1400 px                      │
│      Format:     JPEG (quality 75-80%)               │
│      Size:       300-500 KB                          │
│                                                       │
│  ⚠️  Maximum Limit:                                   │
│      File Size:  < 1 MB (1,000,000 bytes)           │
│      Formats:    .jpg, .png only                     │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### Action Items:

1. ✅ **Use this template** to resize all product images
2. ✅ **Batch resize** all existing images with Python/ImageMagick script
3. ✅ **Test upload** on `/add` page to ensure file size < 1MB
4. ✅ **Verify display** on `/home` page (thumbnail) and PhotoSwipe (full-size)
5. ✅ **Check responsiveness** on various devices (mobile, tablet, desktop)

---

## 🙋 FAQ

### Q: Can I upload images with aspect ratios other than 1:1?
**A:** Yes, you can. But there will be whitespace or cropping in the 50×50px thumbnail. For best results, use 1:1.

### Q: What if the image is already too large (>1MB)?
**A:** Resize to 1400×1400px with 75% quality, or use TinyPNG for lossy compression.

### Q: Do I need 2 files (thumbnail + full-size)?
**A:** No. Upload **1 file at 1400×1400px**, browser will scale down for thumbnail. More efficient for storage.

### Q: Image is blurry in PhotoSwipe, why?
**A:** Uploaded image is too small. Minimum 1200×1200px for full-size viewing.

---

**Created:** 2026-01-31  
**Version:** 1.0  
**Author:** Product Catalogue Team  
**Repository:** [Zevhys/product-catalogue](https://github.com/Zevhys/product-catalogue)
