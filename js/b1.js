let a =prompt('Nhập số bắt đầu a');
 let b =prompt('Nhập số kết thúc b');
 let chuoi = [];
 if (a < b ){
     for(let i = a; i <= b; i ++ ){
        let n = 0;
        for (let c = 2; c < i; c++){
            if (i % c ==0){
                n = 1;
                break;
            }
        }
        if ( i > 1 && n ==0){
            chuoi.push(i);
            console.log(chuoi);        
        }

        
    }
 }else {
    console.log('Xin hãy nhập lại');
 }
 let arr = chuoi;
 let total = 0;
 for (let y in arr) {
   total += arr[y];
 }
 
console.log(total);
 
 let soA = a.toString();
 let soB = b.toString();
 let soC =chuoi.toString();
 let sum = total.toString();


 document.getElementById("n1").innerHTML = `Số bắt đầu a: ${soA}`;
 document.getElementById("n2").innerHTML = `Số kết thúc b: ${soB}`;
 document.getElementById("dayso").innerHTML = `Số nguyên tố: ${soC}`;
 document.getElementById("tong").innerHTML = `Tổng các số nguyên tố: ${sum}`;



