const url = `https://viacep.com.br/ws/16370-000/json/`;

fetch(url).then(response =>{
    return response.json();
      })
      .then(data => {
        console.log(data.cep);
  })