import React from "react";

import CustomTable from "./Components/CustomTable";

function App() {
  const users = [
    {
      id: 1,
      name: "Алексей",
      surname: "Данчин",
      age: 27
    },
    {
      id: 2,
      name: "Серьгей",
      surname: "Акаваркин",
      age: 18
    },
    {
      id: 3,
      name: "Ольга",
      surname: "Маск",
      age: 12
    }
  ];

  const fields = [
    "id",
    {
      label: "Fullname",
      value: (item) => `${item.name} ${item.surname}`
    },
    {
      label: "Is adult",
      value: (item) => (item.age >= 18 ? "Да" : "Нет")
    }
  ];

  return <CustomTable data={users} fields={fields} />;
}

export default App;
