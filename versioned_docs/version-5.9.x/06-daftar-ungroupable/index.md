# VI. DAFTAR KODE UNGROUPABLE AND UNRELATED

`Ungroupable` dan `Unrelated` muncul ketika sistem grouper tidak dapat menemukan kecocokan antara kode diagnosis dan tindakan dalam sistem.

**Penyebab umum:**

- Jenis kelamin tidak sesuai
- Usia tidak sesuai (mis. kasus perinatologi ≤28 hari)
- Tidak sesuai kaidah pengodean (mis. tidak input jumlah pembuluh darah untuk kasus pemasangan stent)
- Tidak sesuai pedoman iDRG (mis. tindakan rehabilitasi medis tanpa kode Z50.-)

| No  |       Kode        | Deskripsi                                                                                                                                      |
| :-: | :---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  |      3611199      | Primary Diagnosis code is not valid for Female or Male — Ketidaksesuaian jenis kelamin dengan diagnosis.                                       |
|  2  |      3611299      | Diagnosis code is not valid for patient's age — Ketidaksesuaian usia pasien dengan diagnosis.                                                  |
|  3  |      36000x9      | Unrelated OR Procedure — Ketidaksesuaian antara diagnosis dan tindakan.                                                                        |
|  4  |      3635929      | Ungroupable: Missing Rehab. Consultation Proc — Tambahkan kode konsultasi rehabilitasi medis: • 89.01–89.09 (variasi konsultasi/rehabilitasi). |
|  5  | 3612011 / 3612031 | Missing code also for lens insertion proc — Tambahkan kode: • 13.70–13.72 (Insertion of pseudophakos).                                         |
|  6  |      3614129      | Respiratory Drug Resistance TB w/o Drug Type — Tambahkan kode resistensi obat: • U82.20–U85.0.                                                 |
|  7  |      3614229      | Respiratory Drug Resistance TB w/o Episode Type — Tambahkan kode episode TB: • U84.31–U84.35.                                                  |
|  8  |      3615029      | Missing Code Also: Angiocardiography Proc — Tambahkan kode angiokardiografi: • 88.51–88.58.                                                    |
|  9  |      3615129      | Missing Code Also: Catheterization Proc — Tambahkan kode kateterisasi: • 37.21–37.23.                                                          |
| 10  |      3615229      | Stent Insertion w/o Number of Stent or Vessels — Tambahkan kode jumlah stent: • 00.45–00.48.                                                   |
| 11  |      3615329      | Number of Stent w/o Insertion Proc — Tambahkan kode: • 00.55, 39.90 (Stent insertion).                                                         |
| 12  |      3615429      | Angioplasty w/o Number of Vessels — Tambahkan kode: • 00.40–00.43.                                                                             |
| 13  |      3615529      | Missing code also (00.56 or 00.57) — Tambahkan kode: • 00.56–00.57 (Defibrillator implantation).                                               |
| 14  |      36001x9      | Ungroupable: Radiotherapy Session w/o Radiotherapy Proc — Tambahkan kode radioterapi: • 92.20–92.27.                                           |
| 15  |      36002x9      | Ungroupable: Radiotherapy w/o Z51.0 — Tambahkan diagnosis Z51.0 (Radiotherapy session).                                                        |
| 16  |      36003x9      | Ungroupable: Chemotherapy Proc w/o Z51.1 — Tambahkan diagnosis Z51.1 (Chemotherapy session).                                                   |
| 17  |      3635129      | Ungroupable: Rehabilitation without Procedures — Tambahkan kode tindakan rehabilitasi medis yang spesifik.                                     |
