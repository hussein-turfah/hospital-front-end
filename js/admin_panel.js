window.onload = () => {
  const base_url = "http://localhost/Hospital/hospital-back-end/"
  
  const con = (entryy) => {
    console.log(entryy)
  }
  displayData('users');
  // displayData('departments')

  function displayData(entry){
   axios
    .get(base_url + 'list_anything_api.php', {params:{table_name:entry}})
    .then((response) => {
      const table1 = document.getElementById('table1')
      response.data.forEach(element => {
        const table_row = document.createElement('tr')
        for (let i=0; i<element.length;i++){
          const table_data = document.createElement('td')
          table_data.textContent = element[i]
          table_row.appendChild(table_data)
        }
        table1.appendChild(table_row)
      });


    })

  }
}   