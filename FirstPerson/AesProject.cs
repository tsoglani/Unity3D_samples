using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;
using System.Security;
using System.IO;
using System.Linq;

//Question 1

//    CBC key: 140b41b22a29beb4061bda66b6747e14
//    CBC Ciphertext 1:
//    4ca00ff4c898d61e1edbf1800618fb2828a226d160dad07883d04e008a7897ee\
//    2e4b7465d5290d0c0e6c6822236e1daafb94ffe0c5da05d9476be028ad7c1d81

//Answer for Question 1
//Question 2

//    CBC key: 140b41b22a29beb4061bda66b6747e14
//    CBC Ciphertext 2:
//    5b68629feb8606f9a6667670b75b38a5b4832d0f26e1ab7da33249de7d4afc48\
//    e713ac646ace36e872ad5fb8a512428a6e21364b0c374df45503473c5242a253

//Answer for Question 2
//Question 3

//    CTR key: 36f18357be4dbd77f050515c73fcf9f2
//    CTR Ciphertext 1:
//    69dda8455c7dd4254bf353b773304eec0ec7702330098ce7f7520d1cbbb20fc3\
//    88d1b0adb5054dbd7370849dbf0b88d393f252e764f1f5f7ad97ef79d59ce29f5f51eeca32eabedd9afa9329

//Answer for Question 3
//Question 4

//    CTR key: 36f18357be4dbd77f050515c73fcf9f2
//    CTR Ciphertext 2:
//    770b80259ec33beb2561358a9f2dc617e46218c0a53cbeca695ae45faa8952aa\
//    0e311bde9d4e01726d3184c34451
namespace crypto2
{
    class AesProject
    {
        static String[] Keys = new String[4] { "140b41b22a29beb4061bda66b6747e14", 
            "140b41b22a29beb4061bda66b6747e14", "36f18357be4dbd77f050515c73fcf9f2",
            "36f18357be4dbd77f050515c73fcf9f2"
        };

        static String[] Ciphertexts = new String[4] {
            "28a226d160dad07883d04e008a7897ee2e4b7465d5290d0c0e6c6822236e1daafb94ffe0c5da05d9476be028ad7c1d81",
            "b4832d0f26e1ab7da33249de7d4afc48e713ac646ace36e872ad5fb8a512428a6e21364b0c374df45503473c5242a253",
            "69dda8455c7dd4254bf353b773304eec0ec7702330098ce7f7520d1cbbb20fc388d1b0adb5054dbd7370849dbf0b88d393f252e764f1f5f7ad97ef79d59ce29f5f51eeca32eabedd9afa9329",
            "770b80259ec33beb2561358a9f2dc617e46218c0a53cbeca695ae45faa8952aa0e311bde9d4e01726d3184c34451"
        };

        static String[] IVs = new String[2] {
            "4ca00ff4c898d61e1edbf1800618fb28",
            "5b68629feb8606f9a6667670b75b38a5"
        };

        static public string ConvertStringToHex(string asciiString)
        {
            string hex = "";
            foreach (char c in asciiString)
            {
                int tmp = c;
                hex += String.Format("{0:x2}", (uint)System.Convert.ToUInt32(tmp.ToString()));
            }
            return hex;
        }

        static public byte[] ConvertStringToHexA(string asciiString)
        {
            var res = new List<byte>();
            for (int i = 0; i < asciiString.Length / 2; i++)
            {
                string s = asciiString[2 * i].ToString() + asciiString[2 * i + 1].ToString();
                res.Add(Convert.ToByte(s, 16));
            }
            return res.ToArray();
        }

        static public string ConvertHexToString(string HexValue)
        {
            string StrValue = "";
            while (HexValue.Length > 0)
            {
                StrValue += System.Convert.ToChar(System.Convert.ToUInt32(HexValue.Substring(0, 2), 16)).ToString();
                HexValue = HexValue.Substring(2, HexValue.Length - 2);
            }
            return StrValue;
        }

        public static Byte[] XorArrays(Byte[] a, Byte[] b)
        {
            var res = new List<Byte>();
            int bor = Math.Min(a.Length, b.Length);
            for (int i = 0; i < bor; i++)
                res.Add((byte)(a[i]^b[i]));
            return res.ToArray();
        }

        static void Main(string[] args)
        {
            for (int i = 0; i < 2; i++)
            {
                using (var aes = new AesCryptoServiceProvider())
                {
                    aes.KeySize = 128;
                    aes.Mode = (i < 2) ? CipherMode.CBC : CipherMode.CTS;
                    aes.Padding = PaddingMode.PKCS7;
                    aes.Key = ConvertStringToHexA(Keys[i]);
                    aes.IV = ConvertStringToHexA(IVs[i]);


                    ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                    // Create the streams used for decryption. 
                    using (MemoryStream msDecrypt = new MemoryStream(ConvertStringToHexA(Ciphertexts[i])))
                    {
                        using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                        {
                            using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                            {

                                // Read the decrypted bytes from the decrypting stream 
                                // and place them in a string.
                                Console.WriteLine(srDecrypt.ReadToEnd());
                                Console.WriteLine(ConvertStringToHex(srDecrypt.ReadToEnd()));
                            }
                        }
                    }
                }
            }

            for (int i = 2; i < 4; i++)
            {
                using (var aes = new AesCryptoServiceProvider())
                {
                    aes.KeySize = 128;
                    aes.Padding = PaddingMode.None;
                    var t = aes.LegalBlockSizes;
                    aes.BlockSize = 128;
                    aes.Mode = CipherMode.ECB;
                    aes.Padding = PaddingMode.None;
                    aes.Key = ConvertStringToHexA(Keys[i]);
                    //aes.IV = ConvertStringToHexA(IVs[i]);
                    int len = Ciphertexts[i].Length;
                    int j = 0;
                    var list = new List<char>();
                    while (len > 0)
                    {
                        for (int k = 0; k < 15; k++) list.Add((char)0);
                        list.Add((char)j++);
                        len -= 32;
                    }

                    ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                    // Create the streams used for encryption. 
                    using (MemoryStream msEncrypt = new MemoryStream())
                    {
                        using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        {
                            using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                            {

                                //Write all data to the stream.
                                swEncrypt.Write(list.ToArray());
                            }
                            byte[] de = msEncrypt.ToArray();
                            byte[] ct = ConvertStringToHexA(Ciphertexts[i]);
                            byte[] ctxorde = XorArrays(ct, de);
                            Console.WriteLine(System.Text.Encoding.ASCII.GetString(ctxorde));
                        }
                    }

                }

            }
        }
    }
}


