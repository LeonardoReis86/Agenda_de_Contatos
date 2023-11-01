// função para adicionar um contato a tabela
function addContact() {

// pegar os valores dos campos nome e telefone
   const nameContact = document.getElementById("name-contact").value;
   const phoneContact = document.getElementById("phone-contact").value;

// verificação se os campos estão preenchidos
   if (nameContact && phoneContact) {
   
// Selecionar o corpo da tabela (tbody)
   const tbody = document.querySelector("#contact-table tbody");
      
// Criar uma nova linha
   const newRow = tbody.insertRow();

// Adicionar celula a tabela
   const cellName = newRow.insertCell(0);
   cellName.textContent = nameContact;

   const cellPhone = newRow.insertCell(1);
   cellPhone.textContent = phoneContact;

// limpar campos do input
   document.getElementById("name-contact").value = "";
   document.getElementById("phone-contact").value = "";
   } else {
      alert ("Por favor, preencha os campos NOME e TELEFONE antes de cadastrar.");
   }
}

document.querySelector("btn-add").addEventListener("click", addContact);