import { MD5, AES, SHA1, DES, enc, SHA256 } from 'crypto-js'

/**
 * 哈希散列
 * MD5 SHA1 SHA256
 * MD5 相对较容易碰撞
 * SHA1 性能最好
 * SHA256 安全性最高、耗时较上二种多（推荐）
 */
export const md5 = (message: string) => MD5(message)

export const sha1 = (message: string) => SHA1(message)

export const sha256 = (message: string) => SHA256(message)

/**
 * AES 与 DES 加解密
 * AES（推荐）
 */
export const encryptAES = (message: any, secret: string) => {
  return typeof message === 'string'
    ? AES.encrypt(message, secret).toString()
    : AES.encrypt(JSON.stringify(message), secret).toString()
}

export const decryptAES = (message: any, secret: string) => {
  const data = AES.decrypt(message, secret).toString(enc.Utf8)
  return typeof message === 'string' ? data : JSON.parse(data)
}

export const encryptDES = (message: any, secret: string) => {
  return typeof message === 'string'
    ? DES.encrypt(message, secret).toString()
    : DES.encrypt(JSON.stringify(message), secret).toString()
}

export const decryptDES = (message: any, secret: string) => {
  const data = DES.decrypt(message, secret).toString(enc.Utf8)
  return typeof message === 'string' ? data : JSON.parse(data)
}
