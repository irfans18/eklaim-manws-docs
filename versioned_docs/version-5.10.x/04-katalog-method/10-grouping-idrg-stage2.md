# 10. Grouping iDRG Stage 2

**Request Body:**

```json
{
  "metadata": {
    "method": "grouper",
    "stage": "2",
    "grouper": "idrg"
  },
  "data": {
    "nomor_sep": "000R222TEST",
    "topup_codes": "13031"
  }
}
```

**Keterangan parameter:**

- **`stage`**: diisi “2” (dua)
- **`grouper`**: diisi “idrg”

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response_idrg": {
    "mdc_number": "18",
    "mdc_description": "Diseases and Disorders of the Musculoskeletal System and Connective Tissue",
    "drg_code": "1807119",
    "drg_description": "Hip Revision Proc.",
    "script_version": "1.0.32",
    "logic_version": "0.2.1806.202603311851",
    "cost_weight": "5.14",
    "sub_acute_weight": "0.00",
    "chronic_weight": "0.00",
    "total_cost_weight": "5.14",
    "nbr": "8037060",
    "status_cd": "normal",
    "topup": [
      {
        "code": "13031",
        "description": "Hip Implant",
        "type": "prosthesis",
        "cost_weight": "1.97019644"
      }
    ],
    "topup_options": [
      {
        "code": "13031",
        "description": "Hip Implant",
        "type": "prosthesis",
        "cost_weight": "1.97019644"
      }
    ]
  }
}
```

**Jika hasil grouping adalah error:**

```json
{
  "metadata": {
    "code": 400,
    "message": "iDRG coding sudah final",
    "error_no": "E2102"
  }
}
```

**Semua hasil grouping yang error pada idrg diawali dengan kode 36.** Ketika hasil groupingnya error maka tombol final tidak boleh muncul sehingga tidak bisa lanjut koding inacbg.

Referensi kode error idrg dapat dilihat pada [daftar kode ungroupable and unrelated](../06-daftar-ungroupable/index.md).
