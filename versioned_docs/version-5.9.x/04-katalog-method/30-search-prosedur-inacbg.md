# 30. Pencarian prosedur INACBG

**Request Body:**

```json
{
  "metadata": {
    "method": "search_procedures"
  },
  "data": {
    "keyword": "990"
  }
}
```

**Keterangan parameter:**

- **`keyword`**: diisi dengan kode, sebagian dari kode, atau sebagian dari nama prosedur

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "count": 10,
    "data": [
      ["Transfusion of coagulation factors", "99.06"],
      ["Transfusion of other serum", "99.07"],
      ["Transfusion of blood expander", "99.08"],
      ["Transfusion of other substance", "99.09"],
      ["Transfusion of platelets", "99.05"],
      ["Transfusion of packed cells", "99.04"],
      ["Exchange transfusion", "99.01"],
      ["Transfusion of previously collected autologous blood", "99.02"],
      ["Other transfusion of whole blood", "99.03"],
      [
        "Perioperative autologous transfusion of whole blood or blood components",
        "99.00"
      ]
    ]
  }
}
```
