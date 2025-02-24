document.getElementById('myButton').addEventListener('click', function(){
    alert('Botão clicado!');
});

document.getElementById('contactForm').addEventListener('submit' , function(event) {
    event.preventDefault();
    alert('formulario enviado com sucesso!');

    //Obter os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //Criar o conteúdo do arquivo
    const content = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`;

    //criar um blob com o conteudo
    const blob = new Blob([content], {type: 'text/plain'});

    //Criar um link para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'formulario.txt';

    //Adicionar o link ao documento e clicar nele para iniciar o download
    document.body.appendChild(link);
    link.click();

    //Remover o link do documento
    document.body.removeChild(link);

    alert('Formulario enviado com sucesso!')
});