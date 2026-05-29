window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("main-content");

  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");
  }, 2000);
});
