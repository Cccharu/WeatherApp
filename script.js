//const mainParent=document.querySelector("#mainParent");
axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fd081069f3ef9967f9937a00cf3a906e')
.then(request=>{
    console.log(request)
    console.log(request.data)
})
.catch(error=>{
    console.log(error)
})