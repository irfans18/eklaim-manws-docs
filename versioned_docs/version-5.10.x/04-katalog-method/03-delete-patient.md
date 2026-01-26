# 3. Hapus data pasien

**Request Body:**

```json
{
  "metadata": {
    "method": "delete_patient"
  },
  "data": {
    "nomor_rm": "123-45-67",
    "coder_nik": "123123123123"
  }
}
```

**Mandatory**: `nomor_rm`, `coder_nik`

**Keterangan parameter:**

- **`coder_nik`** : adalah NIK yang tersimpan pada data Personel Registration pada aplikasi E-Klaim. Coder harus terdaftar pada aplikasi E-Klaim. Jika belum terdaftar maka perlu didaftarkan melalui aplikasi E-Klaim.

![Personnel Registration](/img/manual-webservice/image6.png)
