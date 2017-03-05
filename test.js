var testResult= $("#testResult");
var radioBut=$(":radio");
var checkBoxBut1= $(".checkBoxBut1");
var checkBoxBut2= $(".checkBoxBut2");

testResult.on("click",function(){
	getTestResult()
})

var radioButtonSelection = function (elem){
	var p = 0;
	radioBut.val(function(index, curValue){
		if(radioBut.eq(index).prop("checked") && curValue > 0)
		{
			p++;
		}
	})
	return p;
}
	
//For CheckBoxes
var checkBoxiesSelection = function (elem){
	var z=0;
	var j = 0;
	
	elem.val(function(index, curValue){
		if(elem.eq(index).prop("checked") && curValue == 0){
			z++;
			j = 0;
		}
		else if (elem.eq(index).prop("checked") && curValue >0 && z==0){
			j += Number(curValue);
		}
	})
	return j;
}
	
var resultMessage = function(j,f,k){
	var maxMark = 5;
	var Sum = + j + + f + +k;
	var procRes = Sum* 100/maxMark;
	alert("Вы набрали: "+Sum+ " баллов из " + maxMark+" возможных"+
			"\n    Процент правильных ответов: "+ procRes+"%");
}
function getTestResult(){
	var a = radioButtonSelection(radioBut)
	var b = checkBoxiesSelection(checkBoxBut1);	
	var c = checkBoxiesSelection(checkBoxBut2);	
	resultMessage(a,b,c);
}
/*Логика для чeкбоксов. Если отмечены все ответы правильно - 1 балл,
 Если есть хотя бы одна ошибка, даже если есть и верные ответы - 0 баллов,
 Если отмечена только часть ответов, и все верны, при этом нет ошибок - 
 насчитываються балы за верные ответы.*/