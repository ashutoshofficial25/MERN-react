function fact(n)
{
    f=1;
    for(let i=1; i<=n;i++)
    {
        f *=i
    }
    return f;
}

answer = fact(7)
console.log( answer)

const factv2 = (n) =>
{
    f=1;
    for(let i=1; i<=n;i++)
    {
        f *=i
    }
    return f;

    var x= "inside function var" // err because it var is function scoped

}
ans = fact(22)
console.log(  ans )