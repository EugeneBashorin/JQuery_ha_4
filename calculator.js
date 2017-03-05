var displ= $("#resCalcDisplay"); //Important+++
var but= $("button"); 			 //Important

but.val(function(index,curValue){
			but.eq(index).on("click", function(){
							if (Number(curValue)|| curValue == 0){
									EnterNumb(curValue);
								}
							else {
								EnterOperator(curValue);
								}
				})
	})

function EnterNumb(numbValue){
	if(displ.val() == "0"){
		displ.val(function(){
			return numbValue 
			})
	}
	else{
		displ.val(function(index, curValue){
			return curValue = curValue + numbValue;
			})
	}
}

var memberValue1;
var memberValue2;
var singn;
var countOfOperation = 0; // To understand that the command was applied

function EnterOperator(operand){
	switch (operand){
		case "+" : 
			memberValue1 = displ.val();
			singn = "+";
			displ.val(function(){
				return ""; 
			})
			break;

		case "-" : 
			memberValue1 = displ.val();
			singn = "-";
			displ.val(function(){
				return ""; 
			})
			break;	

		case "*" :
			memberValue1 = displ.val();
			singn = "*";
			displ.val(function(){
				return ""; 
			})
			break;	

		case "/" :
			memberValue1 = displ.val();
			singn = "/";
			displ.value = "";
			displ.val(function(){
				return ""; 
			})
			break

		case "=" : 	
			if (countOfOperation == 0){
				memberValue2 = displ.val();
				displ.val(function(){
					return ""; 
				})
				countOfOperation++;
				ResultOfOperation(singn,memberValue1,memberValue2);
			}
			break;

		case "." : 
			if (displ.val().indexOf('.') == (-1)) {  
					displ.val(function(index, curValue){
						return curValue = curValue + ".";
					})
				}
			break;

		case "plusMinus" :
			displ.val(function(index, curValue){
				return curValue = Number(curValue) * (-1);
			})
			break;	

		case "C" :
			ClearDisplayFunc();	 
			break;

		default: 
			ClearDisplayFunc();
			break;
		}
}

function ClearDisplayFunc(){    //Reset
	displ.value = 0;
	displ.val(function(){
		return 0;
	})
	memberValue1 = 0;
	memberValue2 = 0;
	singn = "";
	countOfOperation = 0;
	}

function ResultOfOperation(a,b,c){
	if(Number(b) && Number(c)|| Number(c) == 0){	//protection against keyboard symbols/////////////////////
		switch (a){
			case "+" :  
			displ.val(function(index, curValue){
				return curValue = Number(b) + Number(c);
			})		
				break;

			case "-" :
			displ.val(function(index, curValue){
				return curValue = Number(b) - Number(c);
			})
				break;	

			case "*" : 
			displ.val(function(index, curValue){
				return curValue = Number(b) * Number(c);
			})
					break;	

			case "/" : 
				if(c == 0){	                                         //protection against divide by a zero
						alert("You can't divide on the 'null'");
						return ClearDisplayFunc();
				}
				else{
					displ.val(function(index, curValue){
						return curValue = Number(b) / Number(c);
					})
				}
				break;
				}
		}
		else{
			alert("One of the members contains symbols. Try again.")
			return ClearDisplayFunc();
		}	
}