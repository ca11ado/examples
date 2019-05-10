var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./img",            // Output folder
  SVGImages = "./img/*.svg",         // SVG images
  JPEGImages = "./img/*.jpg";        // JPEG images

imagemin([SVGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

