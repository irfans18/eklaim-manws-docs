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

- **`stage`**: diisi "2" (dua)
- **`topup_codes`**: diisi dengan code yang diperoleh dari grouping stage 1 pada segment `topup_options`. Untuk mengisi lebih dari satu pilihan top up, code-nya dijoin dengan tanda `#`. Jika batal top up maka diisi dengan # saja

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
      "topup": [
          {
              "code": "13031",
              "description": "Hip Implant",
              "type": "prosthesis",
              "cost_weight": "1.97019644"
          }
      ],
      "total_cost_weight": "7.11019644",
      "total_tarif": "57145075",
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

Jika dari hasil grouper stage 1 tidak muncul parameter `topup_options`, maka tidak perlu melakukan grouper stage 2.

Referensi kode error idrg dapat dilihat pada [daftar kode ungroupable and unrelated](../06-daftar-ungroupable/index.md).
