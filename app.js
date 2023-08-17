/* 
*Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y 
apellido como una sola cadena de caracteres **
*Crea una función para añadir un nuevo contacto a una lista **
*Crea una función para borrar un contacto existente de la lista **
*Crea una función para imprimir en consola los contactos presentes en la lista**
*Publica tu código en Github, en tu repositorio contact-list crea un branch llamado 
project-1 y compártelo con nosotros.  */

//                              0                   1              2                3
const listaContactos = ["Alejandro Castaño", "Alicia Aranda", "Wilmer Chacon", "Rafael Paz"]

const addContact = (contacto) =>{
    listaContactos.splice(2,0,contacto)
    listaContactos.sort()
}

const deleteContact = (contacto) =>{
    let  indice = listaContactos.findIndex(iterador => iterador == contacto)
    listaContactos.splice(indice,1)
}

const imprimir = () =>{
    console.log("Esta es tu lista de contactos: ");
    for (const iterator of listaContactos) {
        console.log("-----------------");
        console.log(iterator);
    }
    console.log("");
}

imprimir()
addContact("Alejandro Calderon")
imprimir()
deleteContact("Alejandro Calderon")
deleteContact("Alicia Aranda")
imprimir()