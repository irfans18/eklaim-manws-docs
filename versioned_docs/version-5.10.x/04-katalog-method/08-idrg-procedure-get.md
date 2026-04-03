# 8. Get Prosedur iDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "inacbg_procedure_get"
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
    "method": "idrg_procedure_get"
  },
  "data": {
    "string": "81.53#86.28+2#91.799",
    "expanded": [
      {
        "code": "81.53",
        "display": "Revision of hip replacement, not otherwise specified",
        "multiplicity": 1,
        "no": "1",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "86.28",
        "display": "Nonexcisional debridement of wound, infection or burn",
        "multiplicity": 2,
        "no": "2",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "91.799",
        "display": "Other Microscopic examination of specimen from operative wound (IM)",
        "multiplicity": 1,
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
