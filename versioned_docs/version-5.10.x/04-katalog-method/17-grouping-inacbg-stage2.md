# 17. Grouping INACBG Stage 2

Untuk Grouping Stage 2 ini, jika dari hasil Grouping Stage 1 terdapat pilihan `special_cmg_option`, maka silakan masukkan didalam field `special_cmg`. Jika pilihan bisa dari satu karena dari type yang berbeda maka silakan ditambahkan tanda `#` diantara kode:

**Request Body:**

```json
{
  "metadata": {
    "method": "grouper",
    "stage": "2",
    "grouper": "inacbg"
  },
  "data": {
    "nomor_sep": "000R222TEST",
    "special_cmg": "RR04#YY01"
  }
}
```

**Keterangan parameter:**

- **`stage`**: diisi "2" (dua)
- **`special_cmg`**: diisi dengan code yang diperoleh dari grouping stage 1 pada segment `special_cmg_option`. Untuk mengisi lebih dari satu pilihan spesial_cmg, code-nya dijoin dengan tanda `#`.

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response_inacbg": {
    "cbg": {
      "code": "M-1-04-I",
      "description": "PROSEDUR PADA SENDI TUNGKAI BAWAH (RINGAN)"
    },
    "base_tariff": "31713400",
    "tariff": "62812400",
    "special_cmg": [
      {
        "code": "YY-01-II",
        "description": "HIP REPLACEMENT / KNEE REPLACEMENT",
        "tariff": 13099000,
        "type": "Special Procedure"
      },
      {
        "code": "RR-04-III-Hip",
        "description": "HIP IMPLANT",
        "tariff": 18000000,
        "type": "Special Prosthesis"
      }
    ],
    "kelas": "kelas_3",
    "inacbg_version": "5.10.7.202603311031.dev",
    "status_cd": "normal"
  },
  "special_cmg_option": [
    {
      "code": "RR04Hip",
      "description": "Hip Implant",
      "type": "Special Prosthesis"
    },
    {
      "code": "RR04Knee",
      "description": "Knee Implant",
      "type": "Special Prosthesis"
    },
    {
      "code": "YY01",
      "description": "Hip Replacement / Knee Replacement",
      "type": "Special Procedure"
    }
  ]
}
```

Jika dari hasil grouper stage 1 tidak muncul parameter `special_cmg_option`, maka tidak perlu melakukan grouper stage 2.
