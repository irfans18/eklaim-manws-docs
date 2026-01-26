---
title: "C#"
sidebar_label: "C#"
---

# C#

```csharp
// ENCRYPT
public string inacbg_encrypt(string text, string key) {
    var keys = Encoding.Default.GetBytes(hex2bin(key));
    AesCryptoServiceProvider aes = new AesCryptoServiceProvider();
    aes.BlockSize = 128;
    aes.KeySize = 256;
    aes.GenerateIV();
    var iv = aes.IV;
    aes.Key = keys;
    aes.Mode = CipherMode.CBC;
    aes.Padding = PaddingMode.PKCS7;
    byte[] src = Encoding.Default.GetBytes(text);
    using(ICryptoTransform encrypt = aes.CreateEncryptor()) {
        byte[] data = encrypt.TransformFinalBlock(src, 0, src.Length);
        HMACSHA256 hashObject = new HMACSHA256(keys);
        var hash_sign = hashObject.ComputeHash(data);
        byte[] signature = new byte[10];
        Array.Copy(hash_sign, 0, signature, 0, 10);
        byte[] ret = new byte[signature.Length + iv.Length + data.Length];
        Array.Copy(signature, 0, ret, 0, signature.Length);
        Array.Copy(iv, 0, ret, signature.Length, iv.Length);
        Array.Copy(data, 0, ret, signature.Length + iv.Length, data.Length);
        return Convert.ToBase64String(ret);
    }
}

// DECRYPT
public string inacbg_decrypt(string strencrypt, string key) {
    string encoded_str = strencrypt;
    byte[] chiper = Convert.FromBase64String(encoded_str);
    var length = chiper.Length;
    byte[] new_byte_iv = new byte[16];
    byte[] new_byte_msg = new byte[length - 26];
    Array.Copy(chiper, 10, new_byte_iv, 0, 16);
    Array.Copy(chiper, 26, new_byte_msg, 0, length - 26);
    byte[] byte_key = Encoding.Default.GetBytes(hex2bin(key));
    RijndaelManaged aes = new RijndaelManaged();
    aes.KeySize = 256;
    aes.BlockSize = 128;
    aes.Padding = PaddingMode.PKCS7;
    aes.Mode = CipherMode.CBC;
    aes.Key = byte_key;
    aes.IV = new_byte_iv;
    ICryptoTransform AESDecrypt = aes.CreateDecryptor(aes.Key, aes.IV);
    return Encoding.Default.GetString(AESDecrypt.TransformFinalBlock(new_byte_msg, 0, new_byte_msg.Length));
}

private static string hex2bin(string input) {
    input = input.Replace("-", "");
    byte[] raw = new byte[input.Length / 2];
    for (int i = 0; i < raw.Length; i++) {
        raw[i] = Convert.ToByte(input.Substring(i * 2, 2), 16);
    }
    return Encoding.Default.GetString(raw);
}
```
