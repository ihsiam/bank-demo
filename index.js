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

    updateBalance("crnt-dep",amntDep,'dcount','dep-Amount');
    updateBalance("crnt-blnc",amntDep);
});

//withdraw 

const wthbtn = document.getElementById("remove");

wthbtn.addEventListener('click',function(){

    const amntWith = parseFloat(document.getElementById("with-Amount").value);
   
    updateBalance("crnt-with",amntWith,'wcount','with-Amount');
    updateBalance("crnt-blnc",-1*amntWith);
});

//function 

function updateBalance(id, amnt,cnt,clr){
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    const totalBalance = currentBalance + amnt;
    document.getElementById(id).innerText = totalBalance;

    var count = parseInt(document.getElementById(cnt).innerText);
    count++;
    document.getElementById(cnt).innerText = count;

    document.getElementById(clr).value = "";
}
