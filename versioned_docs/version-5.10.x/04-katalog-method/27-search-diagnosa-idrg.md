# 27. Pencarian diagnosa IDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "search_diagnosis_inagrouper"
  },
  "data": {
    "keyword": "D63"
  }
}
```

**Keterangan parameter:**

- **`keyword`**: diisi dengan kode, sebagian dari kode, atau sebagian dari nama diagnosa

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "count": 2,
    "data": [
      {
        "description": "Anaemia in other chronic diseases classified elsewhere",
        "code": "D63.8",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Anaemia in neoplastic disease",
        "code": "D63.0",
        "validcode": "1",
        "im": "0"
      }
    ]
  }
}
```
