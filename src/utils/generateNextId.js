export default function generateNextId  (list)  {
    // const nextId = list.reduce((nextId ,listItem) => Math.max(nextId , listItem.id) , 0)   ;
 
     //return nextId + 1 ;
     const nextId = list.length === 0 ? 1 : list.length + 1 ;
 
     return nextId ;
 }