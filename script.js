function rev() {
    var str= document.getElementById("txt").value;
    var strve ='';
    for(var i = str.length-1; i>=0; i--){
        strve = strve + str.charAt(i);

    }
    document.getElementById("result").innerHTML="The Reversed String is: "+ strve;
}
function vowl(){
    var str=document.getElementById("txt").value;
    var cnt=0;
    var vowel = "aeiouAEIOU";
    for(var i = 0; i<str.length; i++){
        for(var j= 0; j<vowel.length; j++){
            if(str[i]==vowel[j]){
                cnt++;
            }
        }
    }
    document.getElementById("result").innerHTML= "The Number of Vowel :" + cnt;


}
function char(){
    var str=document.getElementById("txt").value;
    document.getElementById("result").innerHTML="3rd Character of the Text is: "+str[2];
}
function replace(){
    var str = document.getElementById("txt").value;
    var car = str.split(" ").join("-");
    document.getElementById("result").innerHTML="Replace Ppace with Hyphens: "+car
}
function acen(){
    var str = document.getElementById("txt").value;
    var arraystr=str.split('');
    var sortStr = arraystr.sort();

    document.getElementById("result").innerHTML = "Sorting the Text: " + sortStr;
}