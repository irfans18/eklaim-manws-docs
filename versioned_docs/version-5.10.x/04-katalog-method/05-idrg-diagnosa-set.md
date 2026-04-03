# 5. Set Diagnosa iDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "idrg_diagnosa_set",
    "nomor_sep": "000R222TEST"
  },
  "data": {
    "diagnosa": "S73.02#S87.9#E11.9"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok",
    "method": "idrg_diagnosa_set"
  },
  "data": {
    "string": "S73.02#S87.9#E11.9",
    "expanded": [
      {
        "code": "S73.02",
        "display": "Dislocation of hip, posterior type with large single fracture (IM)",
        "no": "1",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "S87.9",
        "display": "Crushing injury of unspecified parts of knee and leg (IM)",
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

**`diagnosa`**: Kode diagnosa akan dicheck terhadap versi ICD-10-IM (Indonesian Modification) yang berlaku. Jika ada kode yang tidak terdaftar atau berlaku, maka kode tersebut tidak akan tersimpan.
