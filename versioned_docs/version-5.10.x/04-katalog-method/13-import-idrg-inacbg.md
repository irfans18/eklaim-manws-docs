# 13. Import Coding iDRG ke INACBG

**Request Body:**

```json
{
  "metadata": {
    "method": "idrg_to_inacbg_import"
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
    "method": "idrg_to_inacbg_import"
  },
  "data": {
    "diagnosa": {
      "string": "S73.02#S87.9#E11.9",
      "expanded": [
        {
          "code": "S73.02",
          "display": "Dislocation of hip, posterior type with large single fracture (IM)",
          "no": "1",
          "validcode": "0",
          "metadata": {
            "code": "400",
            "error_no": "E2101",
            "message": "IM tidak berlaku"
          }
        },
        {
          "code": "S87.9",
          "display": "Crushing injury of unspecified parts of knee and leg (IM)",
          "no": "2",
          "validcode": "0",
          "metadata": {
            "code": "400",
            "error_no": "E2101",
            "message": "IM tidak berlaku"
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
    },
    "procedure": {
      "string": "81.53#86.28#91.799",
      "expanded": [
        {
          "code": "81.53",
          "display": "Revision of hip replacement, NEC",
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
          "code": "91.799",
          "display": "Other Microscopic examination of specimen from operative wound (IM)",
          "no": "3",
          "validcode": "0",
          "metadata": {
            "code": "400",
            "error_no": "E2101",
            "message": "IM tidak berlaku"
          }
        }
      ]
    }
  }
}
```
