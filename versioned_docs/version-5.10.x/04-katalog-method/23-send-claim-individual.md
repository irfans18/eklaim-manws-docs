# 23. Pengiriman Data Klaim (Individual)

Method ini digunakan untuk mengirimkan data-data klaim dari RS ke Center (Data Center Kemenkes) secara satuan per nomor SEP. Proses pengiriman ini dilakukan secara synchronous, artinya ketika method ini dijalankan maka akan menunggu sampai proses kirim data klaim selesai.

**Request Body:**

```json
{
  "metadata": {
    "method": "send_claim_individual"
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
  }
}
```

Atau jika terjadi kegagalan (misal: koneksi tidak ada):

```json
{
  "metadata": {
    "code": 2029,
    "message": "Error : Koneksi gagal"
  }
}
```
