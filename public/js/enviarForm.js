/* Enviar el formulario */
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();

  let data = {
    email: $("email").value,
    name: $("name").value,
    comment: $("comment").value,
    ip: localStorage.getItem("ip"),
  };

  console.log(data);

  fetch("/db", {
    method: "POST", // o 'PUT'
    body: JSON.stringify(data), // data debe ser `string` o {object}!
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(async (error) => console.error("Error:", error));
});
