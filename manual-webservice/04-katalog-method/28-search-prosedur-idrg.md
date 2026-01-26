# 28. Pencarian prosedur IDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "search_procedures_inagrouper"
  },
  "data": {
    "keyword": "99.0"
  }
}
```

**Keterangan parameter:**

- **`keyword`**: diisi dengan kode, sebagian dari kode, atau sebagian dari nama prosedur

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "count": 16,
    "data": [
      {
        "description": "Perioperative autologous transfusion of whole blood or blood components",
        "code": "99.00",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of blood and blood components",
        "code": "99.0",
        "validcode": "0",
        "im": "0"
      },
      {
        "description": "Exchange transfusion",
        "code": "99.01",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of previously collected autologous blood",
        "code": "99.02",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Other transfusion of whole blood",
        "code": "99.03",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of packed cells",
        "code": "99.04",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of platelets",
        "code": "99.05",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of coagulation factors",
        "code": "99.06",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of other serum",
        "code": "99.07",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of blood expander",
        "code": "99.08",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Transfusion of other substance",
        "code": "99.09",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Insertion of non-drug-eluting peripheral (non-coronary) vessel stent(s)",
        "code": "39.90",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Uterine compression suture (B-Lynch) (IM)",
        "code": "69.90",
        "validcode": "1",
        "im": "1"
      },
      {
        "description": "Unspecified operation on bone injury, unspecified site",
        "code": "79.90",
        "validcode": "1",
        "im": "0"
      },
      {
        "description": "Microscopic examination of specimen from lower gastrointestinal tract and of stool, Microscopic ISH examination (IM)",
        "code": "90.990",
        "validcode": "1",
        "im": "1"
      },
      {
        "description": "Microscopic examination of specimen from unspecified site, Microscopic ISH examination (IM)",
        "code": "91.990",
        "validcode": "1",
        "im": "1"
      }
    ]
  }
}
```
