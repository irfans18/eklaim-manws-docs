# II. WEB SERVICE

Web Service Aplikasi E-Klaim ini dapat diakses pada endpoint:

`http://alamat_server_aplikasi/E-Klaim/ws.php`

Silakan disesuaikan `alamat_server_aplikasi` dengan ip address server E-Klaim.

Untuk keperluan pengembangan integrasi, endpoint tersebut dapat ditambahkan parameter debug sebagai berikut:

`http://alamat_server_aplikasi/E-Klaim/ws.php?mode=debug`

Untuk penggunaan mode debug ini, silakan edit `C:\E-Klaim\server.ini` dan ubah parameter `enable_debug` pada segmen `[web_service]` sama dengan `1` sebagai berikut:

> **Peringatan**: Dengan mode debug, maka pemanggilan dan response tidak perlu di-enkripsi. Namun penggunaan mode debug tersebut tidak diperbolehkan untuk operasional karena berpotensi menjadi lubang keamanan.
