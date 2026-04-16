# 22. Pengiriman Data Klaim (Kolektif)

Method ini digunakan untuk mengirimkan data-data klaim dari RS ke Center (Data Center Kemenkes). Proses pengiriman ini dilakukan secara asynchronous, artinya ketika method ini dijalankan maka tidak serta merta data terkirim saat itu juga, namun data akan “antri” di server E-Klaim RS untuk kemudian dikirimkan oleh background service secara bertahap.

**Request Body:**

```json
{
  "metadata": {
    "method": "send_claim"
  },
  "data": {
    "start_dt": "2016-12-01",
    "stop_dt": "2016-12-31",
    "jenis_rawat": "1",
    "date_type": "1"
  }
}
```

**Keterangan parameter:**

- **`start_dt`**: tanggal awal (masuk/pulang) pasien, format YYYY-MM-DD
- **`stop_dt`**: tanggal akhir (masuk/pulang) pasien, format YYYY-MM-DD
- **`jenis_rawat`**: `1` = rawat inap, `2` = rawat jalan, `3` = rawat inap dan jalan
- **`date_type`**: `1` = tanggal pulang, `2` = tanggal grouping

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok"
  },
  "response": {
    "data": [
      {
        "nomor_sep": "0001R0010116000001",
        "tgl_pulang": "2016-01-26 12:00:00"
      },
      {
        "nomor_sep": "0001R0010116000002",
        "tgl_pulang": "2016-01-26 14:00:00"
      },
      {
        "nomor_sep": "0001R0010116000003",
        "tgl_pulang": "2016-01-26 16:00:00"
      }
    ],
    "count": 3
  }
}
```
