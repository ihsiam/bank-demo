//login button

const submit = document.getElementById("sbmt");
const hme = document.getElementById("home");
const Transaction = document.getElementById("transaction");
Transaction.style.display = "none";

submit.addEventListener('click', function(){
    hme.style.display = "none";
    Transaction.style.display = "block";
});

//deposit

const depbtn = document.getElementById("add");

depbtn.addEventListener('click',function(){

    const amntDep = parseFloat(document.getElementById("dep-Amount").value);

    updateBalance("crnt-dep",amntDep);
    updateBalance("crnt-blnc",amntDep);
    document.getElementById("dep-Amount").value = "";
});

//withdraw 

const wthbtn = document.getElementById("remove");

wthbtn.addEventListener('click',function(){

    const amntWith = parseFloat(document.getElementById("with-Amount").value);
   
    updateBalance("crnt-with",amntWith);
    updateBalance("crnt-blnc",-1*amntWith);
    document.getElementById("with-Amount").value = "";
});

//function 

function updateBalance(id, amnt){
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    const totalBalance = currentBalance + amnt;
    document.getElementById(id).innerText = totalBalance;
}
