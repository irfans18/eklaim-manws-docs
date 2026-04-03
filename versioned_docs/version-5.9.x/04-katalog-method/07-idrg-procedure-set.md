# 7. Set Prosedur iDRG

**Request Body:**

```json
{
  "metadata": {
    "method": "idrg_procedure_set",
    "nomor_sep": "000R000TEST"
  },
  "data": {
    "procedure": "81.51#86.28+2#91.799"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok",
    "method": "idrg_procedure_set"
  },
  "data": {
    "string": "81.51#86.28+2#91.799",
    "expanded": [
      {
        "code": "81.51",
        "display": "Total hip replacement",
        "multiplicity": 1,
        "no": "1",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "86.28",
        "display": "Nonexcisional debridement of wound, infection or burn",
        "multiplicity": 2,
        "no": "2",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "91.799",
        "display": "Other Microscopic examination of specimen from operative wound (IM)",
        "multiplicity": 1,
        "no": "3",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      }
    ]
  }
}
```

**Contoh hapus semua data prosedur**

Request Body:

```json
{
  "metadata": {
    "method": "idrg_procedure_set",
    "nomor_sep": "000R222TEST"
  },
  "data": {
    "procedure": "#"
  }
}
```

**Contoh cara hapus semua data prosedur yang salah** (karena yang seperti berikut ini berarti tidak ada perubahan):

Request Body:

```json
{
  "metadata": {
    "method": "idrg_procedure_set",
    "nomor_sep": "000R000TEST"
  },
  "data": {
    "procedure": ""
  }
}
```

**`procedure`**: Kode procedure akan dicheck terhadap versi ICD-9-IM (Indonesian Modification) yang berlaku. Jika ada kode yang tidak terdaftar atau berlaku, maka kode tersebut tidak akan tersimpan.

Untuk kode diagnosa dan procedure, disediakan method tersendiri untuk pencarian pada method [27](./27-search-diagnosa-idrg.md) dan [28](./28-search-prosedur-idrg.md).

Prosedur pada iDRG dapat dicatat berulang dengan menambahkan kode ekstensi dan/atau ditulis beberapa kali (**multiplicity** dan **setting**).

1.  **Setting**: untuk menandakan tindakan tersebut dilakukan pada operasi yang berbeda dalam satu episode. Setting ditulis dengan mencantumkan kode tindakan beberapa kali, misal: `"86.22#86.22"`.
2.  **Multiplicity**: digunakan untuk mencatat tindakan tersebut dilakukan beberapa kali di dalam satu kali operasi. Multiplicity dituliskan dengan notasi "+" diikuti jumlahnya, misal: `"86.22+2"`.

Demikian pula dimungkinkan untuk mencatat jika tindakan tersebut dilakukan dalam beberapa kali operasi dalam satu episode dan dilakukan lebih dari satu kali dalam salah satu operasinya dengan contoh notasi sebagai berikut: `"86.22+2#86.22"`.

_Contoh: tndakan debridement yang dilakukan dalam dua operasi dalam satu episode, yang pada operasi pertama dilakukan tiga kali (tiga lokasi) dan yang pada operasi kedua dilakukan dua kali (dua lokasi)._

![Contoh Multiplicity 1](/img/manual-webservice/image11.png)

_Contoh: tindakan debridement yang dilakukan dalam dua operasi dalam satu episode, yang pada operasi pertama dilakukan tiga kali (tiga lokasi) dan yang pada operasi kedua dilakukan satu kali (satu lokasi)._

![Contoh Multiplicity 2](/img/manual-webservice/image12.png)

Khusus untuk parameter diagnosa dan prosedur disediakan fasilitas untuk menghapus, yaitu dengan tanda `#` (hash), dikarenakan mengirimkan parameter dengan tanpa isi seperti ini `""` berarti tidak ada perubahan.
