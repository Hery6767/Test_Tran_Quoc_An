function numberOneTriangle(){
	let n = prompt('Nhập giá trị')
	
	n = parseInt(n)
	
	for(i=0;i<n;i++) {
	
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}

		
		document.writeln("<br/>")
	}
}
    numberOneTriangle()