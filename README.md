# product-catalogue 
[![Author](http://img.shields.io/badge/author-@Zevhys-blue.svg)](https://www.linkedin.com/in/rakha-djauhari/) ![Created](https://img.shields.io/badge/Created-26--Aug--2024-blue.svg) ![GitHub repo size](https://img.shields.io/github/repo-size/Zevhys/product-catalogue) [![GitHub license](https://img.shields.io/github/license/Zevhys/product-catalogue)](https://github.com/Zevhys/product-catalogue/blob/main/LICENSE) [![Issues Welcome](https://img.shields.io/badge/issues-welcome-brightgreen.svg)](https://github.com/Zevhys/product-catalogue/issues) [![Pull Requests Welcome](https://img.shields.io/badge/pull%20requests-welcome-brightgreen.svg)](https://github.com/Zevhys/product-catalogue/pulls) ![CodeQL](https://img.shields.io/github/actions/workflow/status/Zevhys/product-catalogue/codeql.yml?label=CodeQL&logo=github) [![ESLint](https://img.shields.io/github/actions/workflow/status/Zevhys/product-catalogue/eslint.yml?label=ESLint&logo=eslint)](https://github.com/Zevhys/product-catalogue/actions/workflows/eslint.yml) ![Dependabot Status](https://img.shields.io/badge/dependabot-active-brightgreen?logo=dependabot)
 
A simple stock management system built with Node.js, Express.js, and MongoDB. This application allows users to perform CRUD operations for managing product information including name, stock, price, and image. The app also includes a bit input validation.

<div align="center">
  <img src="preview.webp" height="350px">
</div>

# Tech Stack 
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=ffffff)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=ffffff)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-023430?style=flat-square&logo=ejs&logoColor=ffffff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=ffffff)
![FontAwesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=ffffff)

# Requirements
<pre>
# Clone Repository
git clone https://github.com/Zevhys/product-catalogue .

# Install Dependencies
npm install

# Start MongoDB
- mongod
- mongosh

# Environment Variables 
connects to a MongoDB Compass database named `crud` hosted locally.

# Run The Application
- node index.js
- Visit http://localhost:7000 

# Running ESLint
- npx eslint .
</pre>

# Image Sizing Guides

## Product Images
For optimal product image quality and performance in the catalogue:

- **📖 [Complete Guide (Indonesian)](IMAGE_SIZING_GUIDE.md)** - Panduan lengkap dalam Bahasa Indonesia
- **📖 [Complete Guide (English)](IMAGE_SIZING_GUIDE_EN.md)** - Complete guide in English  
- **⚡ [Quick Reference](IMAGE_SIZING_QUICK_REF.md)** - Quick reference card (bilingual)

**TL;DR:** Upload product images at **1400 × 1400 px** (square, JPEG 80% quality, < 1MB) for best results.

## Certification Images (for Works Page)
For certification images with varying dimensions and WebP conversion:

- **📖 [Certification Guide (Indonesian)](CERTIFICATION_IMAGE_SIZING_GUIDE.md)** - Panduan sertifikasi lengkap
- **📖 [Certification Guide (English)](CERTIFICATION_IMAGE_SIZING_GUIDE_EN.md)** - Complete certification guide
- **⚡ [Quick Reference](CERTIFICATION_SIZING_QUICK_REF.md)** - Quick reference with formulas
- **📋 [Calculator Worksheet](CERTIFICATION_CALCULATOR_WORKSHEET.txt)** - Fill-in worksheet template

**TL;DR:** 
- **Landscape:** Max width 1200px (height auto-calculated)
- **Portrait:** Max height 1400px (width auto-calculated)
- **Square:** 1200 × 1200 px
- **WebP Quality:** 80-85 for optimal balance (use ezgif.com)

# Contribution
Contributions are welcome! If you have suggestions for improvements or want to report an issue, feel free to open a pull request or create an issue. Thank you for helping to make this project better!
