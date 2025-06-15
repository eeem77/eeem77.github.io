// Animaciones con GSAP
document.addEventListener("DOMContentLoaded", function () {
  // Animación de elementos
  gsap.utils.toArray(".animated-element").forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.15,
        ease: "power2.out",
      }
    );
  });

  // Animación del encabezado
  gsap.from(".profile-img", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
  });

  gsap.from("h1", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    delay: 0.3,
  });

  gsap.from(".title", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    delay: 0.5,
  });

  // Animación de habilidades
  gsap.utils.toArray(".skill-item").forEach((item, index) => {
    gsap.from(item, {
      duration: 0.4,
      opacity: 0,
      x: -20,
      delay: 0.1 + index * 0.05,
    });
  });

  // Animaciones de secciones al hacer scroll
  gsap.utils.toArray(".content-container").forEach((section, index) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        toggleActions: "play pause resume reset",
      },
      opacity: 1,
      y: -50,
      duration: 1.5,
    });
  });
});
