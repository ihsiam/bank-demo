//login button

const submit = document.getElementById("sbmt");
const hme = document.getElementById("home");
const trans = document.getElementById("tran");
trans.style.display = "none";

submit.addEventListener('click', function(){
    hme.style.display = "none";
    trans.style.display = "block";
});



//deposit

const depbtn = document.getElementById("add");


depbtn.addEventListener('click',function(){
    const amntDep = parseFloat(document.getElementById("dep").value);
    const totalDep = parseFloat(document.getElementById("tdep").innerText);
    const tBalance = parseFloat(document.getElementById("tblnc").innerText);

    const totalDeposit = amntDep + totalDep;
    const totalBalance = tBalance + amntDep;
    document.getElementById("tdep").innerText = totalDeposit;
    document.getElementById("tblnc").innerText = totalBalance;
});



//withdraw 

const wthbtn = document.getElementById("remove");


wthbtn.addEventListener('click',function(){
    const amntWith = parseFloat(document.getElementById("with").value);
    const totalwth = parseFloat(document.getElementById("twith").innerText);
    const tBalance = parseFloat(document.getElementById("tblnc").innerText);

    const totatWithdraw = amntWith + totalwth;
    const totalBalance = tBalance - amntWith;
    document.getElementById("twith").innerText = totatWithdraw;
    document.getElementById("tblnc").innerText = totalBalance;
});