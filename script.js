// Lista de imágenes por proyecto
const projectImages = [
    [ // Obra puco
      "img/obras/Obra_pucon/pucon1.JPG",
      "img/obras/Obra_pucon/pucon2.JPG",
      "img/obras/Obra_pucon/pucon3.JPG",
      "img/obras/Obra_pucon/pucon4.JPG",
    ],
    [ // Obra LONQUEN-PANGUILES
      "img/obras/Obra_lonques-panguiles/l-p1.jpeg",
      "img/obras/Obra_lonques-panguiles/l-p2.jpeg",
      "img/obras/Obra_lonques-panguiles/l-p3.jpeg",
      "img/obras/Obra_lonques-panguiles/l-p4.jpeg",
    ],
    [ // Obra Lonco
      "img/obras/Obra_colector_all_lonco/lonco1.JPG",
      "img/obras/Obra_colector_all_lonco/lonco2.JPG",
      "img/obras/Obra_colector_all_lonco/lonco3.JPG",
      "img/obras/Obra_colector_all_lonco/lonco4.JPG",
    ]
  ];
  
  let currentProject = 0;
  let currentImageIndex = 0;
  
  function openLightbox(projectIndex) {
    currentProject = projectIndex;
    currentImageIndex = 0;
    updateLightboxImage();
    document.getElementById("lightbox").classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
    document.body.style.overflow = "auto";
  }
  
  function changeImage(direction) {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateLightboxImage();
  }
  
  function updateLightboxImage() {
    const img = document.getElementById("lightbox-img");
    img.src = projectImages[currentProject][currentImageIndex];
  }
  