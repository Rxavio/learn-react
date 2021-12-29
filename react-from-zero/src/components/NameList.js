import React from 'react'

// function NameList() {
//   const names = ['Bruce', 'Clark', 'Diana', 'Rico']
//  return(
//      <div>
//       {
//        names.map(name => <h2>{name}</h2>)   
//       }
//     </div>
//  )
// }

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Rico']
    const nameList=  names.map(name => <h2>{name}</h2>)
   return(
       <div>
        {
        nameList  
        }
      </div>
   )
  }

export default NameList
