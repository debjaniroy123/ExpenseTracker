
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (name && email) {
      const tableBody = document.getElementById('tableBody');
      const newRow = document.createElement('tr');
  
      
      newRow.innerHTML = `
        <td class="border px-4 py-2">${name}</td>
        <td class="border px-4 py-2">${email}</td>
      `;
  
      
      tableBody.appendChild(newRow);
  
      
      document.getElementById('userForm').reset();
    }
  });
  