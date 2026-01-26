# Python

**Contoh 1:**

```python
import base64
import hmac, hashlib
from Crypto import Random
from Crypto.Cipher import AES

BS = 16
pad = lambda s: s + (BS - len(s) % BS) * chr(BS - len(s) % BS)
unpad = lambda s: s[0:-ord(s[-1])]

def inacbg_encrypt(data, key):
    key = hex2bin(key)
    data = pad(data)
    iv = Random.new().read(AES.block_size)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    encrypted = cipher.encrypt(data)
    signature = inacbg_signature(encrypted, key)
    return base64.b64encode(signature + iv + encrypted)

def inacbg_decrypt(enc, key):
    key = hex2bin(key)
    enc = base64.b64decode(enc)
    signature = enc[:10]
    iv = enc[10:26]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    own_signature = inacbg_signature(enc[26:], key)
    if (list(signature) == list(own_signature)):
        return unpad(cipher.decrypt(enc[26:]))
    else:
        return "SIGNATURE_NOT_MATCH"

def inacbg_signature(data, key):
    res = hmac.new(key, data, hashlib.sha256).digest()
    return res[:10]

def hex2bin(hexStr):
    bytes = []
    hexStr = ''.join(hexStr.split(" "))
    for i in range(0, len(hexStr), 2):
        bytes.append(chr(int(hexStr[i:i + 2], 16)))
    return ''.join(bytes)
```

**Contoh 2:**

```python
import hmac
import OpenSSL
import hashlib
import binascii
from base64 import b64decode
from base64 import b64encode
from Crypto import Random
from Crypto.Cipher import AES

BLOCK_SIZE = 16  # Bytes

def mb_substr(s, start, length=None, encoding="utf8"):
    u_s = bytes(s)
    return (u_s[start:(start + length)] if length else u_s[start:])

def utf8_encode(t):
    return unicode(t).encode()

def hash_hmac(algo, data, key):
    digest = hmac.new(key, data, algo).digest()
    return digest

def chunk_split(data):
    LINELEN = 64
    chunk = lambda s: b'\n'.join(s[i:min(i + LINELEN, len(s))]
                                 for i in range(0, len(s), LINELEN))
    return chunk(data)

def preventOracleAttack(a, b):
    if len(a) != len(b):
        return False
    result = 0
    for i in range(len(a)):
        if a[i] is not b[i]:
            result += 1
    return result == 0

class EKLAIM:
    """
    Penggunaan:
    c = EKLAIM('key').encrypt('data')
    m = EKLAIM('key').decrypt(encrypted_data)
    """

    def __init__(self, key):
        self.key = binascii.unhexlify(key)

    def encrypt(self, raw):
        padding_len = BLOCK_SIZE - (len(raw) % BLOCK_SIZE)
        if isinstance(raw, str):
            padded_plaintext = raw + (chr(padding_len) * padding_len)
        else:
            padded_plaintext = raw + (bytearray([padding_len] * padding_len))
        iv = Random.new().read(BLOCK_SIZE)
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        encrypted = cipher.encrypt(padded_plaintext)
        digest = hash_hmac(hashlib.sha256, encrypted, self.key)
        signature = mb_substr(digest, 0, 10)
        encoded = chunk_split(b64encode(signature + iv + encrypted))
        return encoded

    def decrypt(self, enc):
        enc = enc.replace('----BEGIN ENCRYPTED DATA----\r\n', '')
        .replace('----END ENCRYPTED DATA----\r\n', '')
        decoded = b64decode(enc)
        signature = mb_substr(decoded, 0, 10)
        iv = mb_substr(decoded, 10, BLOCK_SIZE)
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        encrypted = mb_substr(decoded, BLOCK_SIZE + 10)
        digest = hash_hmac(hashlib.sha256, encrypted, self.key)
        calc_signature = mb_substr(digest, 0, 10)
        if not preventOracleAttack(signature, calc_signature):
            return '{"error": "SIGNATURE_NOT_MATCH"}'
        padded_plaintext = cipher.decrypt(encrypted)
        if isinstance(padded_plaintext, str):
            padding_len = ord(padded_plaintext[-1])
        else:
            padding_len = padded_plaintext[-1]
        plaintext = padded_plaintext[:-padding_len]
        return plaintext
```
