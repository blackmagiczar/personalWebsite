let text = `Hello there, My name is Siboniso Innocent Malapane.\n I am an aspiring web developer with a strong desire to succeed in the industry. Although I may not have much experience yet, I am committed to working hard, and I am confident that my passion and drive will help me excel in this field. With every project I work on, I strive to learn something new and improve my abilities.`;
function animateAbout() {
  let about = document.getElementById("aboutMe");

  if (about.textContent.length >= text.length - 5) {
    about.innerText = "";
    let i = 0;
    setInterval(() => {
      if (i < text.length) {
        about.textContent += text[i];
        i++;
      }
    }, 50);
  }
}
function resetAbout() {
  setTimeout(() => {
    about.innerHTML = text;
  }, 20000);
}
