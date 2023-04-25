const $addActive = (id) => {
  $(id).classList.add("active");
};

const $removeActive = (id) => {
  $(id).classList.remove("active");
};

$("name").addEventListener("click", (e) => {
  e.stopPropagation(); //esta funcion es una interfas. si quieres saber mas de ella solo avisame al privado
  $removeActive("containerEmail");
  $removeActive("comment");
  $addActive("containerName");
});

$("email").addEventListener("click", (e) => {
  e.stopPropagation(); //esta funcion es una interfas. si quieres saber mas de ella solo avisame al privado
  $removeActive("containerName");
  $removeActive("comment");
  $addActive("containerEmail");
});

$("comment").addEventListener("click", (e) => {
  //esta funcion es una interfas. si quieres saber mas de ella solo avisame al privado
  $removeActive("containerEmail");
  $removeActive("containerName");
  $addActive("comment");
});

/* reset */
document.body.addEventListener("click", () => {
  $removeActive("containerEmail");
  $removeActive("comment");
  $removeActive("containerName");
});
