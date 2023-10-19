let totalAllowance = 0;
let totalOvertimePay = 0;

function validateForm() {
  let empName = document.myForm.empName.value;
  var rank = document.myForm.rank.value;
  var email = document.myForm.email.value;
  var phone = document.myForm.phone.value;
  var basic_pay = document.myForm.basic_pay.value;
  var overtime = document.myForm.overtime.value;

  if (empName == "" || phone == "" || rank == "" || email == "" || basic_pay == "" || overtime == "") {
    alert("Fill in all the fields");
    return false;
  } else {
    let totalAmt = totalAllowance + totalOvertimePay;
    calculateTax(totalAmt)
    return false;
  }
}

function calculateTax(amount) {
  console.log(totalAllowance);
  var basic_pay = document.myForm.basic_pay.value;

  let grossPay = amount + parseInt(basic_pay);
  let payee = 0;
  let nssf = (100 - 15) / 100 * grossPay

  if (grossPay <= 200000) {
    payee = 0;
  } else if (grossPay > 200000 && grossPay <= 350000) {
    payee = (100 - 10) / 100 * (grossPay - 350000)
  } else if (grossPay > 350000 && grossPay <= 500000) {
    payee = (100 - 20) / 100 * (grossPay - 500000)+20000
  } else if (grossPay > 500000) {
    let tax = (100 - 30) / 100 * (grossPay - 500000)
    payee = tax + 60500
  }

  let nssfAmt = grossPay - nssf
  let payeeAmt = grossPay - payee

  let netPay = grossPay - payeeAmt + nssfAmt
  let deductions = payeeAmt + nssfAmt

  document.myForm.nssf.value =  nssfAmt
  document.myForm.paye.value = payeeAmt
  document.myForm.total_deductions.value = deductions
  document.myForm.gross_pay.value = grossPay
  document.myForm.net_pay.value = netPay
}

function myOvertime() {
  var overTimePay = 30000;
  var overtime = document.myForm.overtime.value;
  
  let overTimePayTotal = overtime * overTimePay;
  document.myForm.overtime_pay.value = overTimePayTotal;

  totalOvertimePay = overTimePayTotal;
}

function myAllowances() {
  var basic_pay = document.myForm.basic_pay.value;

  var house = 8;
  var tp = 5;
  var med = 6;

  let tpAll = (100 + tp) / 100 * basic_pay;
  let tpAllAmt =tpAll - basic_pay;
  let housingAll = (100 + house) / 100 * basic_pay;
  let housingAllAmt = housingAll - basic_pay;
  let medicalAll = (100 + med) / 100 * basic_pay;
  let medicalAllAmt =medicalAll - basic_pay;

  document.myForm.transport.value = tpAllAmt
  document.myForm.housing.value = housingAllAmt
  document.myForm.medical.value = medicalAllAmt
  document.myForm.allowance_total.value = medicalAllAmt + tpAllAmt + housingAllAmt

  totalAllowance = medicalAllAmt + tpAllAmt + housingAllAmt
}

