# 1. Membuat klaim baru (dan registrasi pasien jika belum ada)

**Request Body:**

```json
{
  "metadata": {
    "method": "new_claim"
  },
  "data": {
    "nomor_kartu": "0000668870001",
    "nomor_sep": "0001R0016120507422",
    "nomor_rm": "123-45-67",
    "nama_pasien": "NAMA TEST PASIEN",
    "tgl_lahir": "1940-01-01 02:00:00",
    "gender": 2
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
    "patient_id": 453,
    "admission_id": 1,
    "hospital_admission_id": 678
  }
}
```

**Response jika ada duplikasi nomor SEP:**

```json
{
  "metadata": {
    "code": 400,
    "message": "Duplikasi nomor SEP",
    "error_no": "E2007"
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

**Mandatory**: `nomor_kartu`, `nomor_sep`, `nomor_rm`, `nama_pasien`, `tgl_lahir`, `gender`

**Keterangan parameter:**

- **`nomor_kartu`**: Nomor Kartu peserta JKN
- **`nomor_sep`**: Nomor SEP. Khusus pasien jenis berikut, Nomor SEP diperoleh dari method [`generate_claim_number`](./31-generate-claim-number.md) (no. 31). Jenisnya yaitu:
  - JAMINAN COVID-19
  - JAMINAN KIPI
  - JAMINAN BAYI BARU LAHIR
  - JAMINAN CO-INSIDENSE
- **`nomor_rm`**: Nomor rekam medis pasien
- **`nama_pasien`**: Nama lengkap pasien
- **`tgl_lahir`**: Tanggal lahir pasien dengan format "YYYY-MM-DD hh:mm:ss"
  - YYYY = tahun 4 digit
  - MM = bulan 2 digit
  - DD = hari 2 digit
  - hh = jam 2 digit
  - mm = menit 2 digit
  - ss = detik 2 digit
- **`gender`**: Jenis kelamin, diisi `1` = Laki-laki, `2` = Perempuan
