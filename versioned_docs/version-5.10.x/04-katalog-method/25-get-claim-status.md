# 25. Cek Status Klaim

Method ini digunakan untuk mengecek status terakhir klaim, apakah sudah terkirim ke pusat data kementerian kesehatan atau belum.

**Request Body:**

```json
{
  "metadata": {
    "method": "get_claim_status"
  },
  "data": {
    "nomor_sep": "0001R0016120666662"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "status_kirim": "1",
    "tgl_kirim": "2016-11-16 19:20:00"
  }
}
```

Jika `status_kirim` = `1`, artinya klaim sudah terkirim. Jika `0` atau response gagal / error, maka klaim belum terkirim.
