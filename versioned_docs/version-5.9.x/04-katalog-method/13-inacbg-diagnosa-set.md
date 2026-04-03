# 13. Set Diagnosa INACBG

**Request Body:**

```json
{
  "metadata": {
    "method": "inacbg_diagnosa_set",
    "nomor_sep": "000R222TEST"
  },
  "data": {
    "diagnosa": "S71.0#S87.0#E11.9"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok",
    "method": "inacbg_diagnosa_set"
  },
  "data": {
    "string": "S71.0#S87.0#E11.9",
    "expanded": [
      {
        "code": "S71.0",
        "display": "Open wound of hip",
        "no": "1",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "S87.0",
        "display": "Crushing injury of knee",
        "no": "2",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "E11.9",
        "display": "Non-insulin-dependent diabetes mellitus without complications",
        "no": "3",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      }
    ]
  }
}
```

**`diagnosa`**: Kode diagnosa akan dicheck terhadap versi ICD-10 yang berlaku. Jika ada kode yang tidak terdaftar atau berlaku, maka kode tersebut tidak akan tersimpan.
