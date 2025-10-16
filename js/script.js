const bnt = document.querySelector("#send");

bnt.addEventListener("click", function(e){
 e.preventDefault()

    const nome = document.querySelector("#nome")
    const value = nome.value
    console.log(value);
    
    const telefone = document.querySelector("#telefone")
    const valueTelefone = telefone.value
    console.log(valueTelefone);

    const tamanho = document.querySelector("#pequena, #media, #grande, #familia")
    const valueTamanho = tamanho.value
    console.log(valueTamanho);

    const sabor = document.querySelector("#mussarela, #calabresa, #frango, #cartola")
    const valueSabor = sabor.value
    console.log(valueSabor);    

    const borda = document.querySelector("#catupiry, #cheddar, #chocolate")
    const valueBorda = borda.value
    console.log(valueBorda);    

    const pagamento = document.querySelector("#dinheiro, #cartao, #pix")
    const valuePagamento = pagamento.value
    console.log(valuePagamento);


});