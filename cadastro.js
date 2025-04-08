const form = document.getElementById("form-produto");
    const tabela = document.getElementById("tabela-produtos");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Pega os valores
      const codigo = document.getElementById("codigo").value;
      const marca = document.getElementById("marca").value;
      const tipo = document.getElementById("tipo").value;
      const categoria = document.getElementById("categoria").value;
      const preco = document.getElementById("preco").value;
      const custo = document.getElementById("custo").value;
      const obs = document.getElementById("obs").value;

      // Cria a linha
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${codigo}</td>
        <td>${marca}</td>
        <td>${tipo}</td>
        <td>${categoria}</td>
        <td>R$ ${parseFloat(preco).toFixed(2)}</td>
        <td>R$ ${parseFloat(custo).toFixed(2)}</td>
        <td>${obs}</td>
      `;

      // Adiciona na tabela
      tabela.appendChild(linha);

      // Limpa o formulário
      form.reset();
    });