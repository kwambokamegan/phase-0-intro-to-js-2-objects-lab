let employee ={
    name :"Sam",
     streetAdress :"11 Broadway",

}



//updateEmployeeWithKeyAndValue

function updateEmployeeWithKeyAndValue(employee , key , value)

{ return {...employee, [key]: value } }


 
//destructivelyUpdateEmployeeWthKeyAndValue

function destructivelyUpdateEmployeeWithKeyAndValue(employee , key , value){
     employee[key] = value;
    return employee ; 
}

  

//deleteFromEmployeeByKey


function deleteFromEmployeeByKey (employee , key)

{
   let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee ; 

}


//destructivelyDeleteFromEmployeeByKey 

function destructivelyDeleteFromEmployeeByKey ( employee , key )
{
    delete employee[key];
    return employee;
}

   