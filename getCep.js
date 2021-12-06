window.onload=function(){

    const addData = (res) =>{
        for(const obj in res){
            if (document.querySelector("#"+obj)){
                document.querySelector("#"+obj).value = res[obj]
            }
        }
    }
    const cep = document.querySelector("#cep")
    const btn = document.querySelector("#btn-ps")
    btn.addEventListener("click", (e) =>{
        const load = {
            method : 'GET',
            mode : 'cors',
            cache : 'default'
        }
        let procurar = cep.value.replace("-","")
        fetch(`https://viacep.com.br/ws/${procurar}/json/`, load)
        .then(res=>{res.json()
            .then(data => addData(data))
        })
    })
}