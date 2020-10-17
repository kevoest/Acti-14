
const comprarCasco = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Casco check")  
        },1000)
    })
}

const comprarGuantes = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Guantes check")  
        },2000)
    })
}

const irDePaseo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Paseo check")  
        },8000)
    })
}

const viaje = async () =>{
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await irDePaseo();
    return [casco, guantes, paseo]
}

viaje()
.then(paseitoCheck =>{
    console.log(paseitoCheck)
})