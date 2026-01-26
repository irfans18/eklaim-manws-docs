# IV. KATALOG METHOD WEB SERVICE

Khusus untuk semua field dalam metadata adalah **mandatory**.

Kecuali dinyatakan lain didalam penjelasan method dibawah, maka response untuk setiap method adalah sebagai berikut:

```json
{
  "metadata": {
    "code": 200,
    "message": "OK"
  }
}
```

Atau contoh jika terjadi kesalahan:

```json
{
  "metadata": {
    "code": 400,
    "message": "Nomor SEP terduplikasi",
    "error_no": "E2003"
  },
  "duplicate": [
    {
      "nama_pasien": "TEST PASIEN",
      "nomor_rm": "3849988",
      "tgl_masuk": "2016-12-19 21:10:07"
    },
    {
      "nama_pasien": "TEST TEST",
      "nomor_rm": "3887726",
      "tgl_masuk": "2016-12-23 04:48:53"
    }
  ]
}
```

Daftar kode error dapat dilihat di bagian bawah pada bagian [daftar kode error](../05-daftar-error/index.md).

Berikut ini daftar method:
