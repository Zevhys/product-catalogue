# Quick Reference: Certification Image Sizing
# Referensi Cepat: Ukuran Gambar Sertifikasi

---

## 📏 SIZING FORMULAS / FORMULA UKURAN

### Landscape (Width > Height)
```
Target: MAX WIDTH = 1200px
Formula: new_height = round(1200 / aspect_ratio)

Example: 1920 × 1080
aspect_ratio = 1920 / 1080 = 1.778
new_height = 1200 / 1.778 = 675
Result: 1200 × 675
```

### Portrait (Height > Width)
```
Target: MAX HEIGHT = 1400px
Formula: new_width = round(1400 × aspect_ratio)

Example: 1080 × 1920
aspect_ratio = 1080 / 1920 = 0.563
new_width = 1400 × 0.563 = 788
Result: 788 × 1400
```

### Square (Width ≈ Height)
```
Target: 1200 × 1200px
Formula: Both dimensions = 1200

Example: 1000 × 1000
Result: 1200 × 1200
```

---

## 🎨 WEBP QUALITY FACTORS

| Content Type | Quality | File Size | Use For |
|--------------|---------|-----------|---------|
| **Text-heavy** | **85-90** | 30-40% of PNG | Course certificates (Coursera, Udemy) |
| **Graphics/Logos** | **80-85** | 25-35% of PNG | Professional certs (AWS, Google) |
| **Photo backgrounds** | **75-80** | 20-30% of PNG | Artistic certificates |
| **Simple designs** | **80** | ~25% of PNG | Minimalist badges |
| **Complex details** | **85** | ~35% of PNG | Detailed certificates |

**Default Recommendation: 80-85**

---

## 📊 COMMON ASPECT RATIOS

| Ratio | Decimal | Landscape Example | Portrait Example |
|-------|---------|-------------------|------------------|
| 16:9 | 1.778 | 1920×1080 → 1200×675 | 1080×1920 → 788×1400 |
| 3:2 | 1.500 | 1800×1200 → 1200×800 | 1200×1800 → 933×1400 |
| 4:3 | 1.333 | 1600×1200 → 1200×900 | 1200×1600 → 1050×1400 |
| √2:1 | 1.414 | 2000×1414 → 1200×849 | 1414×2000 → 990×1400 |
| A4 | 1.414 | 3508×2480 → 1200×849 | 2480×3508 → 990×1400 |
| 1:1 | 1.000 | 1200×1200 → 1200×1200 | 1200×1200 → 1200×1200 |

---

## ⚡ QUICK COMMANDS

### Measure Image (ImageMagick)
```bash
identify image.png
# Output: image.png PNG 1920x1080 ...
```

### Resize Image (ImageMagick)
```bash
# Landscape (max width 1200)
magick input.png -resize 1200x output.png

# Portrait (max height 1400)
magick input.png -resize x1400 output.png

# Square (1200x1200)
magick input.png -resize 1200x1200 output.png
```

### Convert to WebP (cwebp)
```bash
# Quality 85 (text-heavy)
cwebp -q 85 input.png -o output.webp

# Quality 80 (default)
cwebp -q 80 input.png -o output.webp
```

### Convert to WebP (ezgif.com)
```
1. Visit: https://ezgif.com/png-to-webp
2. Upload PNG
3. Set Quality: 80-85
4. Convert
5. Download
```

---

## 📝 CALCULATION TEMPLATE

Use this template for each certificate:

```
╔════════════════════════════════════════════════════════╗
║  CERTIFICATION IMAGE ANALYSIS TEMPLATE                 ║
╚════════════════════════════════════════════════════════╝

Certificate Name: _________________________________

📐 ORIGINAL DIMENSIONS:
   Width:  _______ px
   Height: _______ px
   
📊 CALCULATIONS:
   Aspect Ratio = Width / Height
                = _______ / _______
                = _______
   
   Orientation: ☐ Landscape  ☐ Portrait  ☐ Square
   
📏 NEW DIMENSIONS:
   
   If Landscape:
     new_width  = 1200 px
     new_height = 1200 / _______ = _______ px
     
   If Portrait:
     new_height = 1400 px
     new_width  = 1400 × _______ = _______ px
     
   If Square:
     new_width  = 1200 px
     new_height = 1200 px
   
✅ FINAL SIZE: _______ × _______ px

🎨 WEBP QUALITY:
   Content Type: ☐ Text-heavy  ☐ Graphics  ☐ Photos
   Quality Factor: _______ (80-90)
   
📁 FILE SIZES:
   Original PNG:  _______ KB
   WebP @ 85:     _______ KB (estimated)
   Reduction:     _______ %

═══════════════════════════════════════════════════════
```

---

## 🔢 CALCULATION EXAMPLES

### Example 1: Coursera Certificate
```
Original: 2000 × 1414 px
Aspect: 2000 / 1414 = 1.414
Type: Landscape

Calculation:
  new_width = 1200
  new_height = 1200 / 1.414 = 849
  
Result: 1200 × 849 px
WebP Quality: 85 (text-heavy)
```

### Example 2: Google Cloud Badge
```
Original: 1920 × 1080 px
Aspect: 1920 / 1080 = 1.778
Type: Landscape

Calculation:
  new_width = 1200
  new_height = 1200 / 1.778 = 675
  
Result: 1200 × 675 px
WebP Quality: 82 (graphics)
```

### Example 3: AWS Badge
```
Original: 1000 × 1000 px
Aspect: 1000 / 1000 = 1.000
Type: Square

Calculation:
  new_width = 1200
  new_height = 1200
  
Result: 1200 × 1200 px
WebP Quality: 85 (logo)
```

### Example 4: A4 Portrait
```
Original: 2480 × 3508 px
Aspect: 2480 / 3508 = 0.707
Type: Portrait

Calculation:
  new_height = 1400
  new_width = 1400 × 0.707 = 990
  
Result: 990 × 1400 px
WebP Quality: 88 (text-heavy)
```

---

## ✅ CHECKLIST

Before processing each certificate:

- [ ] Measure original dimensions
- [ ] Calculate aspect ratio
- [ ] Identify orientation
- [ ] Calculate new dimensions
- [ ] Resize image (maintain aspect ratio)
- [ ] Choose WebP quality factor
- [ ] Convert to WebP
- [ ] Verify quality
- [ ] Check file size
- [ ] Test in browser

---

## 📐 ASPECT RATIO CALCULATOR

Use this formula in any calculator:

```python
# Python one-liner
aspect_ratio = width / height

# For landscape (width > height):
new_height = round(1200 / aspect_ratio)
print(f"1200 × {new_height}")

# For portrait (height > width):
new_width = round(1400 * aspect_ratio)
print(f"{new_width} × 1400")
```

---

## 🎯 DECISION TREE

```
Start with original image
        |
        v
Is width > height?
    YES → Landscape
        |
        v
    new_width = 1200
    new_height = 1200 / aspect_ratio
    
    NO → Is height > width?
        YES → Portrait
            |
            v
        new_height = 1400
        new_width = 1400 × aspect_ratio
        
        NO → Square
            |
            v
        new_width = 1200
        new_height = 1200
```

---

## 📊 FILE SIZE ESTIMATES

| Original PNG | WebP @ 80 | WebP @ 85 | WebP @ 90 |
|--------------|-----------|-----------|-----------|
| 200 KB | 50 KB | 70 KB | 80 KB |
| 400 KB | 100 KB | 140 KB | 160 KB |
| 600 KB | 150 KB | 210 KB | 240 KB |
| 800 KB | 200 KB | 280 KB | 320 KB |
| 1000 KB | 250 KB | 350 KB | 400 KB |

Formula: `WebP size = PNG size × (Quality / 250)`

---

## 🔗 USEFUL LINKS

- **ezgif PNG to WebP:** https://ezgif.com/png-to-webp
- **Squoosh Image Optimizer:** https://squoosh.app/
- **Image Info Checker:** https://www.img2go.com/image-info
- **TinyPNG Compressor:** https://tinypng.com/

---

## 💡 PRO TIPS

1. **Always preserve aspect ratio** - never stretch or distort
2. **Use WebP quality 80-85** for best balance
3. **Resize first, then convert** to WebP
4. **Test on multiple devices** before finalizing
5. **Keep originals** in case you need to re-process
6. **Use lazy loading** in HTML: `loading="lazy"`
7. **Add width/height attributes** for better performance

---

## 🚀 BATCH PROCESSING

### Bash Script for Multiple Files
```bash
#!/bin/bash
# Resize and convert all PNGs in current directory

for file in *.png; do
  # Get dimensions
  width=$(identify -format "%w" "$file")
  height=$(identify -format "%h" "$file")
  
  # Determine orientation and resize
  if [ $width -gt $height ]; then
    # Landscape
    magick "$file" -resize 1200x "${file%.png}_resized.png"
  elif [ $height -gt $width ]; then
    # Portrait
    magick "$file" -resize x1400 "${file%.png}_resized.png"
  else
    # Square
    magick "$file" -resize 1200x1200 "${file%.png}_resized.png"
  fi
  
  # Convert to WebP
  cwebp -q 85 "${file%.png}_resized.png" -o "${file%.png}.webp"
  
  # Remove temp file
  rm "${file%.png}_resized.png"
  
  echo "Processed: $file → ${file%.png}.webp"
done

echo "Batch processing complete!"
```

### Python Script
```python
from PIL import Image
import os

def process_certificate(input_path):
    img = Image.open(input_path)
    w, h = img.size
    
    # Calculate new dimensions
    if abs(w - h) < 50:  # Square
        new_size = (1200, 1200)
    elif w > h:  # Landscape
        new_size = (1200, round(1200 / (w/h)))
    else:  # Portrait
        new_size = (round(1400 * (w/h)), 1400)
    
    # Resize
    img_resized = img.resize(new_size, Image.LANCZOS)
    
    # Save as WebP
    output_path = input_path.rsplit('.', 1)[0] + '.webp'
    img_resized.save(output_path, 'WEBP', quality=85)
    
    print(f"✅ {input_path} → {output_path}")
    print(f"   {w}×{h} → {new_size[0]}×{new_size[1]}")

# Process all PNGs in current directory
for file in os.listdir('.'):
    if file.lower().endswith('.png'):
        process_certificate(file)
```

---

**Last Updated:** 2026-02-01  
**Version:** 1.0
