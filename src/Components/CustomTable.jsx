import React from "react";

function CustomTable ({ data, fields }) {
  // data.forEach(user => console.log(user))
  // console.log(data)
  // console.log(fields)

  let head = ''

  for (const field of fields) {
    if (typeof(field) === 'string') {
      head += `<th>${field}</th>`
    }

    else {
      head += `<th>${field.label}</th>`
    }
  }

  console.log(head)
  
  return (
    <table>
      <tr>
        {/* { 1 === 1 ? <th>Hello</th> : '<th>Good by</th>' } */}
        {head}
      </tr>
    </table>
  )
}

export default CustomTable