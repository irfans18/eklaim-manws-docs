# 31. Generate nomor pengajuan klaim

Method ini digunakan sebelum `new_claim`.

**Request body:**

```json
{
  "metadata": {
    "method": "generate_claim_number"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "claim_number": "0000000ICC25100002"
  }
}
```

**Request body yang salah:**

```json
{
  "metadata": {
    "method": "generate_claim_number"
  },
  "data": {
    "payor_id": "71"
  }
}
```

**Keterangan parameter:**

- **`payor_id`**: Parameter ini sudah tidak diperlukan lagi untuk generate. Penentuan `payor_id` sudah digantikan pada method `set_claim_data` menjadi mandatory.

Nomor pengajuan klaim (`claim_number`) yang diperoleh dari method ini digunakan untuk parameter `nomor_sep` di method `new_claim` (no. 1).
