const form=document.querySelector('form');
const results=document.getElementById("results");
form.addEventListener('submit',(e)=>{
    e.preventDefault();//it prevent from refresh 
    const height=parseInt(document.getElementById("height").value);
    const weight=parseInt(document.getElementById("weight").value);
    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Please give a valid height:${height}`;
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Please give a valid weight:${weight}`;
    }
    else{
        const bmi=((weight/(height*height))*10000).toFixed(2);
        let message;
        if(bmi<18.6){
            message='under weight';
        }else if(bmi>=18.6&&bmi<=24.9){
            message='normal weight';
        }else{
            message='over weight';
        }
        results.innerHTML=`<span>bmi is:${bmi}:${'you are'+" "+message}</span>`;
        results.style.color='yell~ow';
    }
})