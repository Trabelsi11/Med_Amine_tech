document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Fade-in animation for projects and lessons
  const fadeElems = document.querySelectorAll(".fade-in")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp")
        }
      })
    },
    { threshold: 0.1 },
  )

  fadeElems.forEach((elem) => observer.observe(elem))

  // Scroll-to-top button
  const scrollTopBtn = document.createElement("button")
  scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>'
  scrollTopBtn.setAttribute("aria-label", "Scroll to top")
  scrollTopBtn.id = "scroll-top-btn"
  scrollTopBtn.classList.add("animate__animated", "animate__fadeIn")
  document.body.appendChild(scrollTopBtn)

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollTopBtn.style.display = "block"
    } else {
      scrollTopBtn.style.display = "none"
    }
  })

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  // Animate tech icons
  const techIcons = document.querySelectorAll(".tech-icons i")
  techIcons.forEach((icon) => {
    icon.classList.add("float")
  })

  // Add hover effect to buttons
  const buttons = document.querySelectorAll(".button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.classList.add("animate__animated", "animate__pulse")
    })
    button.addEventListener("mouseleave", () => {
      button.classList.remove("animate__animated", "animate__pulse")
    })
  })
})

