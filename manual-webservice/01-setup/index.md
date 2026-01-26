# I. SETUP

Integrasi dengan SIMRS dipersyaratkan menggunakan data yang terenkripsi dengan symmetric encryption algorithm. Untuk itu Encryption Key harus di generate terlebih dahulu, melalui menu Setup - Integrasi - SIMRS:

![Menu Setup Integrasi](/img/manual-webservice/image1.png)

Klik tombol Generate Key untuk membuat Encryption Key.

![Tombol Generate Key](/img/manual-webservice/image2.png)

Selanjutnya silakan klik tombol Ya (Generate).

> **Catatan**: adanya konfirmasi untuk generate tujuannya adalah untuk menjaga supaya Encryption Key tidak sembarangan diubah tanpa sengaja.

![Konfirmasi Generate](/img/manual-webservice/image3.png)

Setelah itu muncul re-konfirmasi dengan memasukkan kode yang tertera pada gambar dan memasukkan password Anda, kemudian klik tombol Ya (Generate). Hasilnya:

![Hasil Generate Key](/img/manual-webservice/image4.png)

**_Encryption Key_** akan di-generate oleh Aplikasi E-Klaim dan tersimpan didalam database untuk digunakan dalam proses enkripsi/dekripsi pada setiap pemanggilan dan response dari Web Service. Dimohon untuk sangat menjaga Encryption Key tersebut dengan hati-hati dan rahasia.

Berikut ini skema alur pertukaran data dalam Integrasi SIMRS dengan Aplikasi E Klaim melalui Web Service, dimulai dari SIMRS men-generate request:

![Skema Alur Data](/img/manual-webservice/image5.png)

Dengan alur tersebut diatas, diharapkan data tidak dipertukarkan dalam kondisi terbuka.

Untuk operasional selanjutnya, disarankan untuk men-generate ulang Encryption Key secara periodik sebulan sekali demi keamanan dan menyesuaikannya kembali dalam SIMRS.
