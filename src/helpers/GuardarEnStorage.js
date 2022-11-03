export const guardarStorage = (clave, elemento) =>{
    // 
    // conseguir los elementos del localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    
    // comporbar si hay un array
    if(Array.isArray(elementos)){
        // añadir un elemento
        elementos.push(elemento);
    }else{
        // crear un array de nuevo
        elementos = [elemento];
    }

    // guardar los elementos en el LocalStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // devolver los objetos guardados
    return elemento;
}