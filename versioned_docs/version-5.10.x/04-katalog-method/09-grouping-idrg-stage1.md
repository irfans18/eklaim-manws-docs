# 9. Grouping iDRG Stage 1

**Request Body:**

```json
{
  "metadata": {
    "method": "grouper",
    "stage": 1,
    "grouper": "idrg"
  },
  "data": {
    "nomor_sep": "000R222TEST"
  }
}
```

**Keterangan parameter:**

- **`stage`**: diisi “1” (satu)
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
      "logic_version": "0.2.1822.202605131520",
      "cost_weight": "5.14",
      "sub_acute_weight": "0.00",
      "chronic_weight": "0.00",
      "nbr": "8037060",
      "total_cost_weight": "5.14",
      "total_tarif": "41310488",
      "topup_options": [
          {
              "code": "13031",
              "description": "Hip Implant",
              "type": "prosthesis",
              "cost_weight": "1.97019644"
          }
      ],
      "status_cd": "normal"
  }
}
```

**Jika hasil grouping adalah error:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response_idrg": {
    "mdc_number": "36",
    "mdc_description": "Ungroupable or Unrelated",
    "drg_code": "3600019",
    "drg_description": "Unrelated OR Procedures",
    "script_version": "1.0.29",
    "logic_version": "0.2.1747.202510161025",
    "cost_weight": "0.00",
    "sub_acute_weight": "0.00",
    "chronic_weight": "0.00",
    "total_cost_weight": "0",
    "nbr": "8037060",
    "status_cd": "normal"
  }
}
```

**Semua hasil grouping yang error pada idrg diawali dengan kode 36.** Ketika hasil groupingnya error maka tombol final tidak boleh muncul sehingga tidak bisa lanjut koding inacbg.

Referensi kode error idrg dapat dilihat pada [daftar kode ungroupable and unrelated](../06-daftar-ungroupable/index.md).
