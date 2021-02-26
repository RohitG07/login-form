const labels = document.querySelectorAll(".container .form-control label");

labels.forEach(label => {
  label.innerHTML = label.textContent
    .split("")
    .map((letter, index) => `<span style="transition-delay: ${index*55}ms">${letter}</span>`)
    .join("");
});
