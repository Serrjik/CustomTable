import React from "react";
import HeaderCell from "./HeaderCell";
import Cell from "./Cell";

function CustomTable({ data, fields }) {
  const headerCells = fields.map((field) => (
    <HeaderCell 
      text={typeof field === "string" ? field : field.label} 
      key={typeof field === "string" ? field : field.label} 
    />
  ));

  const tableBody = [];

  for (const dataItem of data) {
    const tableRow = fields.map(field => {
			const text = typeof(field) === "string"
			? dataItem[field]
      : field.value(dataItem)

      return <Cell text={text} key={text} />;
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
