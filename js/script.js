function CalculateSalary(){
  let Wage = document.getElementById("Wage").value;
  let Hours = document.getElementById("Hours").value;
  let TaxPercent = 15
  let Salary = (Wage * Hours)-((Wage * Hours)*TaxPercent/100);
  //Make sure that information is valid before Calculating
  if (Salary>0){
    document.getElementById("Result").innerHTML = "Your salary is: " + Salary + "$";
  }
}
