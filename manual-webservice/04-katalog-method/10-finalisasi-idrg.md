# 10. Finalisasi iDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "idrg_grouper_final"
  },
  "data": {
    "nomor_sep": "000R000TEST"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  }
}
```

Finalisasi iDRG hanya dapat dilakukan ketika berhasil melakukan grouping iDRG.
