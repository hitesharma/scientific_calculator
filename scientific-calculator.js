var st;
function input(val){
    get().value+=val;
    st+=val;
}
function ac(){
    get().value="";
    st="";
}
function calculate(){
    var a=st;
    if(st.includes("!")){
        var size=st.length;
        var n=Number(rm_last());
        var f=1;
        var i;
        for(i=2;i<=n;i++)
            f=f*i;
        st=f;
    }
    else if(st.includes("%")){
        var size=st.length;
        var n=Number(rm_last());
        st=n/100;
    }
    else{
        st=eval(st);
    }	
    get().value=st;
}
function pi_e(x){
    if(x=="pi"){
        get().value+="\u03C0";
        st+= (/[\d)IE]/.test(st.slice(-1))) ? 
        " * Math.PI" : "Math.PI";
    }else{
        get().value+="\u0065";
        st+= (/[\d)IE]/.test(st.slice(-1))) ? 
        " * Math.E" : "Math.E";
    }
}
function tri(x){
    if(x=="sin"){
        get().value+='Math.sin(';
    }
    else if(x=="cos"){
        get().value+='Math.cos(';
    }
    else if(x=="tan"){
        get().value+='Math.tan(';
    }
}
function cos(){
    get().value=Math.cos(get().value);
}
function getp(){
    return document.getElementById("para");
}
function get(){
    return document.getElementById("result");
}
function del(){
   get().value=rm_last();
   st=rm_last();
}
function length(){
    return get().value.length;
}
function rm_last(){
    var size=length();
    st=st.substring(0,st.length);
    return st;
    //get().value.substring(0,size-1);
}