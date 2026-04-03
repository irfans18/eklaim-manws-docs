# 27. Cetak Klaim

Method ini digunakan untuk mengambil file pdf Lembar Berkas Klaim (LBK).

**Request Body:**

```json
{
  "metadata": {
    "method": "claim_print"
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
  "data": "JVBERi0xLjQKJ...(dst dalam format base64)"
}
```

Response data merupakan file pdf yang di-encode dengan base64.
