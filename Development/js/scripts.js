let menu = ["chickens", "fish", "sushi"];

let number = prompt("أدخل رقمك 0,1,2");

switch (number) {
  case "0":
    console.log(menu[0]);
    break;

  case "1":
    console.log(menu[1]);
    break;

  case "2":
    console.log(menu[2]);
    break;
}

// التمرين الثاني
alert("ادخل الرقم بالعربي ");

let num1 = prompt("ادخل الرقم الأول");
let num2 = prompt("ادخل الرقم الثاني");
let exp = prompt("ادخل العملية الحسابية");

if (exp == "*") {
  alert(parseInt(num1) * parseInt(num2));
} else if (exp == "+") {
  alert(parseInt(num1) + parseInt(num2));
} else if (exp == "-") {
  alert(parseInt(num1) - parseInt(num2));
} else {
  alert("رسالتك خاطئة");
}
