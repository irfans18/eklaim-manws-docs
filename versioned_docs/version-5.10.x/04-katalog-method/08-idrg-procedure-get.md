# 8. Get Prosedur iDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "inacbg_procedure_get"
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
    "message": "Ok",
    "method": "inacbg_procedure_get"
  },
  "data": {
    "string": "81.51#86.28#91.79",
    "expanded": [
      {
        "code": "81.51",
        "display": "Total hip replacement",
        "no": "1",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "86.28",
        "display": "Nonexcisional debridement of wound, infection, or burn",
        "no": "2",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "91.79",
        "display": "Microscopic examination of specimen from operative wound, Other microscopic examination",
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
