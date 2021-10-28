const primeNumber = (num) =>
{
    for(let i = 2; i <= num/2; i++)  
    {  
        if(num % i == 0)  
        {  
            console.log("Number is not Prime.");  
            flag=1;  
            break;  
        } 
    }  
    if (flag==0)  
        console.log(i +"Number is Prime.");  
    
}

primeNumber(47);