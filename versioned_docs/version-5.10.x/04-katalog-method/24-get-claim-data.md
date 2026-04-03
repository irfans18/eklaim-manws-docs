# 24. Perolehan Data Klaim

**Request Body:**

```json
{
  "metadata": {
    "method": "get_claim_data"
  },
  "data": {
    "nomor_sep": "000R000TEST"
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
    "nomor_sep": "000R000TEST",
    "nomor_kartu": "0000000000",
    "tgl_masuk": "2016-10-26 12:55:00",
    "tgl_pulang": "2016-10-26 17:50:00",
    "jenis_rawat": "1",
    "kelas_rawat": "1",
    "adl_sub_acute": "",
    "adl_chronic": "",
    "icu_indikator": "",
    "icu_los": "",
    "ventilator_hour": "",
    "upgrade_class_ind": null,
    "upgrade_class_class": null,
    "upgrade_class_los": null,
    "add_payment_pct": null,
    "birth_weight": "0",
    "discharge_status": "1",
    "diagnosa": "A00.0",
    "procedure": "99.18",
    "tarif_rs": {
      "prosedur_non_bedah": "300000",
      "prosedur_bedah": "0",
      "konsultasi": "30000",
      "tenaga_ahli": "30000",
      "keperawatan": "30000",
      "penunjang": "30000",
      "radiologi": "30000",
      "laboratorium": "30000",
      "pelayanan_darah": "30000",
      "rehabilitasi": "30000",
      "kamar": "30000",
      "rawat_intensif": "30000",
      "obat": "30000",
      "obat_kronis": "30000",
      "obat_kemoterapi": "30000",
      "alkes": "30000",
      "bmhp": "30000",
      "sewa_alat": "30000"
    },
    "tarif_poli_eks": "0",
    "nama_dokter": "RUDY, DR",
    "kode_tarif": "AP",
    "payor_id": "3",
    "payor_cd": "JKN",
    "cob_cd": null,
    "coder_nik": "123123123123",
    "status_klaim": "1",
    "add_payment_amt": 0,
    "cbg_code": "A-4-10-I",
    "cbg_tariff": "3196900",
    "tgl_lahir": "1940-01-01 02:00:00",
    "umur_tahun": 76,
    "umur_hari": 28058,
    "gender": "2",
    "kelas_rawat_rs": "1",
    "tarif_cbg_kelas_1": "3196900",
    "tarif_cbg_kelas_2": "2731500",
    "tarif_cbg_kelas_3": "2266100",
    "patient_id": 453,
    "admission_id": 1,
    "hospital_admission_id": 678,
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
    "file_teks": "c479405527027b59e37fb3250a2dd2fa397... (base64 string)",
    "kantong_darah": 0,
    "alteplase": 0,
    "apgar": [],
    "persalinan": []
  }
}
```

Format `file_teks` adalah sama dengan format txt file yang di-generate oleh aplikasi e-klaim ketika akan melakukan pengiriman klaim (kirim online / kirim file). Tujuannya adalah untuk mempermudah SIMRS untuk melakukan pengecekan data klaim.
