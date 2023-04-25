   /* Enviar el formulario */
   document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    const url = "/db";
    let data = {
      email: $("email").value,
      name: $("name").value,
      comment: $("comment").value,
    };

    fetch(url, {
      method: "POST", // o 'PUT'
      body: JSON.stringify(data), // data debe ser `string` o {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  });

  console.log('si funciono')