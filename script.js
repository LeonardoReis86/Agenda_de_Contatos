const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
      e.preventDefault();
      addContact();
});

function addContact() {
   const nameInput = document.getElementById('name-contact');
   const phoneInput = document.getElementById('phone-contact');

   const name = nameInput.value.trim();
   const phone = phoneInput.value.trim();

   if (name !== '' && phone !== '' && !contactExists(name, phone)) {
      addContactToTable(name, phone);
      clearForm();
   } else {
      if (name === '' || phone === '') {
         alert('Por favor, preencha tanto o nome quanto o telefone.');
      } else {
         alert('O contato já possui cadastro.');
      }
   }
}

function contactExists(name, phone) {
   const tbody = document.getElementById('contact-list');

   for (let i = 0; i < tbody.rows.length; i++) {
      const existingName = tbody.rows[i].cells[0].textContent;
      const existingPhone = tbody.rows[i].cells[1].textContent;

      if(existingName === name|| existingPhone === phone){
         return true;
      }
   }
   return false;
}

function addContactToTable(name, phone) {
   const tbody = document.getElementById('contact-list');

   const row = tbody.insertRow();
   // Insere duas células (colunas) na nova linha e obtém referências a essas células
   const cellName = row.insertCell(0);
   const cellPhone = row.insertCell(1);

   // Define o conteúdo de texto das células com os valores do nome e telefone
   cellName.textContent = name;
   cellPhone.textContent = phone;
}

function clearForm() {
   document.getElementById('name-contact').value = '';
   document.getElementById('phone-contact').value = '';
}