//responsável pelo upload de imagens no servidor
function upload(){

}

//responsável pelo registro dos dados do produto/imagem
function registrar() {  
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