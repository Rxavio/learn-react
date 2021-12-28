import React from 'react'

// export default () => {
//   function clickHandler() {
//     console.log('Button clicked')
//   }
//   return (
//     <div>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }
function FunctionClick(){
    function clickHandler(){
        console.log('Button clicked')
    }
    return(
    <div>
      <button onClick={clickHandler}>Click</button>
   </div>
    );

}


export default FunctionClick