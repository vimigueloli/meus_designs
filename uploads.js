//responsável pelo upload de imagens no servidor
function upload(){

}

//responsável pelo registro dos dados do produto/imagem

//   https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
//   https://www.w3.org/TR/file-writer-api/
// use esses links para mudar a função a baixo que só funciona no Internet Explorer
function registrar(nome, contexto, endereco, preco, descricao) {  
    var fso  = new ActiveXObject("Scripting.FileSystemObject");    
    var arquivo = fso.CreateTextFile(`./dados/${id}.Json`, true); 
    arquivo.WriteLine(`
    {
        "nome":"${nome}",
        "contexto":"${contexto}",
        "endereço":"${endereco}",
        "preço":"${preco}",
        "descrição":"${descricao}"
    }`);
    arquivo.Close(); 
}

registrar('cidade','pintura digital','images\cidade.jpg','0.00', 'uma representação de como a poluição luminosa pode mudar o ceu de lugar')