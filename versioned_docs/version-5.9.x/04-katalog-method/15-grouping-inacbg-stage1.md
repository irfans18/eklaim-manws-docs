# 15. Grouping INACBG Stage 1

**Request Body:**

```json
{
  "metadata": {
    "method": "grouper",
    "stage": 1,
    "grouper": "inacbg"
  },
  "data": {
    "nomor_sep": "000R000TEST"
  }
}
```

**Keterangan parameter:**

- **`stage`**: diisi "1" (satu)
- **`grouper`**: diisi “inacbg”

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
    "tariff": "31713400",
    "kelas": "kelas_3",
    "inacbg_version": "5.10.5.202509291030",
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

**Jika hasil grouping adalah error:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response_inacbg": {
    "cbg": {
      "code": "X-0-13-X",
      "description": "ERROR: MALE WITH GROUPING CRITERIA NOT MET"
    },
    "kelas": "kelas_3",
    "inacbg_version": "5.10.5.202510071053",
    "status_cd": "normal"
  }
}
```

**Semua hasil grouping yang error pada inacbg diawali dengan kode X.** Ketika hasil groupingnya error maka tombol grouping untuk stage 2 tidak boleh muncul sehingga tidak dapat melanjutkan grouping inacbg stage 2.
