# 15. Set Prosedur INACBG

**Request Body:**

```json
{
  "metadata": {
    "method": "inacbg_procedure_set",
    "nomor_sep": "000R000TEST"
  },
  "data": {
    "procedure": "81.53#86.28#91.79"
  }
}
```

**Response:**

```json
{
  "metadata": {
    "code": 200,
    "message": "Ok",
    "method": "inacbg_procedure_set"
  },
  "data": {
    "string": "81.53#86.28#91.79",
    "expanded": [
      {
        "code": "81.53",
        "display": "Revision of hip replacement, NEC",
        "no": "1",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "86.28",
        "display": "Nonexcisional debridement of wound, infection, or burn",
        "no": "2",
        "validcode": "1",
        "metadata": {
          "code": "200",
          "message": "Ok"
        }
      },
      {
        "code": "91.79",
        "display": "Microscopic examination of specimen from operative wound, Other microscopic examination",
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
    "method": "inacbg_procedure_set",
    "nomor_sep": "000R000TEST"
  },
  "data": {
    "procedure": "#"
  }
}
```

Mengirim string kosong (`""`) pada `procedure` **bukan** cara menghapus; nilai tersebut diperlakukan sebagai tidak ada perubahan. Untuk menghapus seluruh prosedur, gunakan `"#"` seperti contoh di atas.

**`procedure`**: Kode procedure akan dicheck terhadap versi ICD-9-CM yang berlaku. Jika ada kode yang tidak terdaftar atau berlaku, maka kode tersebut tidak akan tersimpan.
