var cancelarPromesa = false;

// const myPromise = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             if (cancelarPromesa) {
//                 reject('La promesa fue cancelada');
//             } 
//             resolve('Pasaron 5 segundos!');
//         }, 5000);
//     }
// );

function cancelPromise() {
    cancelarPromesa = true;
}



function setTimer(ms) {
    const myPromise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (cancelarPromesa) {
                    reject('La promesa fue cancelada');
                } 
                resolve('Pasaron 5 segundos!');
            }, ms);
        }
    );
    return myPromise;
}

// const nuevoArray = [1, 2, 3].map(m => <li>{m}</li>);
// console.log(nuevoArray);






































function callMeLaterHandler() {
    setTimer(5000)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            alert('Ocurrio un error');
        })
        .finally(() => {
            console.log('Se resolvio la promesa');
        })
}

