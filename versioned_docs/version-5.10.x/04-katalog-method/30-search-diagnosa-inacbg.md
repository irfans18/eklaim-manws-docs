# 30. Pencarian diagnosa INACBG

**Request Body:**

```json
{
  "metadata": {
    "method": "search_diagnosis"
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
      ["Anaemia in other chronic diseases classified elsewhere", "D63.8"],
      ["Anaemia in neoplastic disease", "D63.0"]
    ]
  }
}
```
