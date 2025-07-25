function submit(){
    const workInput=document.getElementById('work');
    const dateInput=document.getElementById('date');
    const workValue=workInput.value.trim();
    const dateValue=dateInput.value;
    if(!workValue){
        alert("Please enter your work discription");
        return;
    }
    if(!dateValue){
        alert("please enter due date of the task");
    }
    //get the table body
    const tbody=document.getElementById('worklist');
    //create new table row
    const newRow=document.createElement('tr');
    //create checkbox cell
    const checkboxCell=document.createElement('td');
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    //create delete button
    const deleteButton=document.createElement('button');
    deleteButton.textContent='Delete';
    //Add event listener
    checkbox.addEventListener('change',function(){
        if(this.checked){
            workCell.style.textDecoration='line-through';
            dateCell.style.textDecoration='line-through';

        }
        else{
            workCell.style.textDecoration='none';
            dateCell.style.textDecoration='none';
        }
    });
    deleteButton.addEventListener('click',function(){
        tbody.removeChild(newRow);
    });
    //Append element to checkbox cell
    checkboxCell.appendChild(checkbox);
    checkboxCell.appendChild(deleteButton);
    //create workcel
    const workCell=document.createElement('td');
    workCell.textContent=workValue;
    const dateCell=document.createElement('td');
    dateCell.textContent=dateValue;
    //Append cells to row
    newRow.appendChild(checkboxCell);
    newRow.appendChild(workCell);
    newRow.appendChild(dateCell);
    //add row to table
    tbody.appendChild(newRow);
    workInput.value='';
    dateInput.value='';

}
