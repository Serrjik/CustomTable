import React from "react";
import HeaderCell from "./HeaderCell";
import Cell from "./Cell";

function CustomTable({ data, fields }) {
  const headerCells = fields.map((field, index) => (
    <HeaderCell 
      text={typeof field === "string" ? field : field.label} 
      key={index}
    />
  ));

  const tableBody = [];

  for (const dataItem of data) {
    const tableRow = fields.map((field, index) => {
      let text = null

      if (typeof(field) === 'string') {
        text = dataItem[field]
      }

      else if (typeof(field) === 'object') {
        if (typeof(field.value) === 'function') {
          text = field.value(dataItem)
        }

        else if (typeof(field.value) === 'string') {
          text = dataItem[field.value]
        }

        else {
          text = ''
        }
      }

      return <Cell text={text} key={index} />;
    });

    tableRow.key = dataItem.id
    tableBody.push(<tr>{tableRow}</tr>);
  }
  
  return (
    <table>
      <thead>
        <tr>{headerCells}</tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
}

export default CustomTable;
