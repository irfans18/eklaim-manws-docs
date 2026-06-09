# 25. Cek Status Klaim

## Prasyarat

Method ini mengandalkan koneksi ke layanan VClaim BPJS Kesehatan. Pastikan **Konfigurasi VClaim** di sistem sudah diaktifkan dan diisi dengan benar—termasuk **Consumer ID** dan **Consumer Secret** sesuai kredensial yang diberikan BPJS Kesehatan. Tanpa pengaturan tersebut, pengecekan status pengiriman klaim ke pusat data tidak dapat dilakukan.

![Konfigurasi VClaim: Enable Integration, Host, Port, Consumer ID, Consumer Secret, dan Service Name](/img/manual-webservice/konfigurasi-vclaim-get-claim-status.png)

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
