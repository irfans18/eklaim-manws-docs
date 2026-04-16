# 6. Get Diagnosa iDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "idrg_diagnosa_get"
  },
  "data": {
    "nomor_sep": "000R222TEST"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok",
    "method": "idrg_diagnosa_get"
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
