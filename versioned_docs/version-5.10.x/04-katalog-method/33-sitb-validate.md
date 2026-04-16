# 33. Validasi Nomor Register SITB

Validasi SITB mesti dilakukan ketika terdapat diagnosa TB pada INACBG, dengan kode antara lain: A15.\*, A16.\*, A17.\*, A18.\* atau A19.\*. Berikut cara pemanggilan method.

**Request Body:**

```json
{
  "metadata": {
    "method": "sitb_validate"
  },
  "data": {
    "nomor_sep": "0001R0016120666662",
    "nomor_register_sitb": "00000001"
  }
}
```

**Keterangan parameter:**

- **`nomor_register_sitb`**: diisi dengan nomor register dari SITB

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "status": "VALID",
    "detail": "Nomor register valid (dan masuk dalam data klaim)"
  },
  "validation": {
    "data": [
      {
        "id": "00000001",
        "nama": "NAMA PASIEN TB",
        "nik": "3579999999990005",
        "jenis_kelamin_id": "2"
      }
    ],
    "success": true
  }
}
```

**Atau jika error:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "status": "INVALID",
    "detail": "Nomor register tidak ditemukan"
  }
}
```
