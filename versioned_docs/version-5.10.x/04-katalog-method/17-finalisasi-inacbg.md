# 17. Finalisasi INACBG

**Request Body:**

```json
{
  "metadata": {
    "method": "inacbg_grouper_final"
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

Finalisasi INACBG hanya dapat dilakukan ketika berhasil melakukan grouping INACBG.
