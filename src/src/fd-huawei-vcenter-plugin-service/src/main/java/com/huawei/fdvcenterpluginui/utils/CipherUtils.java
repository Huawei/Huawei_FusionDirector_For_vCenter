package com.huawei.fdvcenterpluginui.utils;

import com.huawei.fdvcenterpluginui.exception.VcenterException;
import com.sun.jna.Function;
import com.sun.jna.Library;
import com.sun.jna.Memory;
import com.sun.jna.Native;
import com.sun.jna.Platform;
import com.sun.jna.Pointer;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

/**
 * Utils to encrypt/decrypt password string
 * Created by hyuan on 2018/10/31.
 */
public class CipherUtils {

  private static final Log LOGGER = LogFactory.getLog(CipherUtils.class);

  private static final String KEY = "668DAFB758034A97";

  public static final String PBKDF2_ALGORITHM = "PBKDF2WithHmacSHA256";

  private static final int IV_SIZE = 16;

  public static final int KEY_SIZE = 8;

  public static final int BIT_SIZE = 32;

  public static final int PBKDF2_ITERATIONS = 10000;

  public static String aesEncode(String sSrc) {
//    if (1 == 1) {
//      return sSrc;
//    }
    String key = null;
    try {
      key = getWorkKey();
    } catch (NoSuchAlgorithmException e) {
      LOGGER.error(e.getMessage());
    } catch (InvalidKeySpecException e) {
      LOGGER.error(e.getMessage());
    } catch (UnsupportedEncodingException e) {
      LOGGER.error(e.getMessage());
    }
    if (key == null) {
      return null;
    }
    return aesEncode(sSrc, key);
  }

  /**
   * key can be 26 alphabet or numbers, length is 16
   * using AES-128-CBC algorithm
   * @param sSrc
   * @param key
   * @return
   */
  public static String aesEncode(String sSrc, String key) {
    try {
      Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
      byte[] raw;
      raw = key.getBytes("utf-8");
      SecretKeySpec skeySpec = new SecretKeySpec(raw, "AES");
      byte[] ivBytes = getSafeRandom(IV_SIZE);
      // CBC mode, Iv is used for enhancement of algorithm
      IvParameterSpec iv = new IvParameterSpec(ivBytes);
      cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
      byte[] encrypted = cipher.doFinal(sSrc.getBytes("utf-8"));
      // using BASE64 encode bytes
      return new BASE64Encoder().encode(unitByteArray(ivBytes, encrypted));
    } catch (NoSuchAlgorithmException e) {
      LOGGER.error(e.getMessage());
    } catch (NoSuchPaddingException e) {
      LOGGER.error(e.getMessage());
    } catch (InvalidKeyException e) {
      LOGGER.error(e.getMessage());
    } catch (InvalidAlgorithmParameterException e) {
      LOGGER.error(e.getMessage());
    } catch (IllegalBlockSizeException e) {
      LOGGER.error(e.getMessage());
    } catch (BadPaddingException e) {
      LOGGER.error(e.getMessage());
    } catch (UnsupportedEncodingException e) {
      LOGGER.error(e.getMessage());
    }
    return null;
  }

  public static String aesDncode(String sSrc) {
//    if (1 == 1) {
//      return sSrc;
//    }
    String key = null;
    try {
      key = getWorkKey();
    } catch (NoSuchAlgorithmException e) {
      LOGGER.error(e.getMessage());
    } catch (InvalidKeySpecException e) {
      LOGGER.error(e.getMessage());
    } catch (UnsupportedEncodingException e) {
      LOGGER.error(e.getMessage());
    }
    if (key == null) {
      return null;
    }
    return aesDncode(sSrc, key);
  }

  public static String aesDncode(String sSrc, String key) {
    try {
      byte[] raw = key.getBytes("utf-8");
      SecretKeySpec skeySpec = new SecretKeySpec(raw, "AES");
      Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
      // base64 decode first
      byte[] sSrcByte = new BASE64Decoder().decodeBuffer(sSrc);
      byte[] ivBytes = splitByteArray(sSrcByte, 0, 16);
      byte[] encrypted = splitByteArray(sSrcByte, 16, sSrcByte.length - 16);
      IvParameterSpec iv = new IvParameterSpec(ivBytes);
      cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);
      byte[] original = cipher.doFinal(encrypted);
      String originalString = new String(original, "utf-8");
      return originalString;
    } catch (NoSuchAlgorithmException e) {
      LOGGER.error(e.getMessage());
    } catch (NoSuchPaddingException e) {
      LOGGER.error(e.getMessage());
    } catch (InvalidKeyException e) {
      LOGGER.error(e.getMessage());
    } catch (IOException e) {
      LOGGER.error(e.getMessage());
    } catch (IllegalBlockSizeException e) {
      LOGGER.error(e.getMessage());
    } catch (BadPaddingException e) {
      LOGGER.error(e.getMessage());
    } catch (InvalidAlgorithmParameterException e) {
      LOGGER.error(e.getMessage());
    }
    // null means error happened
    return null;
  }

  private static byte[] getSafeRandom(int num) throws NoSuchAlgorithmException {
    SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
    byte[] b = new byte[num];
    random.nextBytes(b);
    return b;
  }

  public static String getSafeRandomToString(int num) throws NoSuchAlgorithmException {
    return toHex(getSafeRandom(num));
  }

  /**
   * merge 2 byte arrays
   */
  public static byte[] unitByteArray(byte[] byte1, byte[] byte2) {
    byte[] unitByte = new byte[byte1.length + byte2.length];
    System.arraycopy(byte1, 0, unitByte, 0, byte1.length);
    System.arraycopy(byte2, 0, unitByte, byte1.length, byte2.length);
    return unitByte;
  }

  /**
   * split byte arrays
   */
  public static byte[] splitByteArray(byte[] byte1, int start, int end) {
    byte[] splitByte = new byte[end];
    System.arraycopy(byte1, start, splitByte, 0, end);
    return splitByte;
  }

  /**
   * generate encrypted key
   * @param key
   * @param salt
   * @return
   * @throws NoSuchAlgorithmException
   * @throws InvalidKeySpecException
   */
  public static String getEncryptedKey(String key, String salt)
      throws NoSuchAlgorithmException, InvalidKeySpecException {
    Pointer out = new Memory(256);
    Function function = Function.getFunction(OpenSSLLib.INSTANCE.EVP_sha256());

    int exit = OpenSSLLib.INSTANCE
        .PKCS5_PBKDF2_HMAC(key, key.length(), salt, salt.length(), PBKDF2_ITERATIONS,
            function, BIT_SIZE, out);
    if (exit == 0) {
      throw new VcenterException("PKCS5_PBKDF2_HMAC error!");
    }
    byte[] c = out.getByteArray(0, BIT_SIZE);
    return toHex(c);
  }

  /**
   * byte array represents hex
   * @param array the byte array to convert
   * @return a length*2 character string encoding the byte array
   */
  private static String toHex(byte[] array) {
    BigInteger bi = new BigInteger(1, array);
    String hex = bi.toString(16);
    int paddingLength = (array.length * 2) - hex.length();
    if (paddingLength > 0) {
      return String.format("%0" + paddingLength + "d", 0) + hex;
    } else {
      return hex;
    }
  }

  public static String getBaseKey()
      throws NoSuchAlgorithmException, InvalidKeySpecException, UnsupportedEncodingException {
    String xOrKey = getXOrString();
    return getEncryptedKey(xOrKey, KEY).substring(0, 16);
  }

  private static String getWorkKey()
      throws NoSuchAlgorithmException, InvalidKeySpecException, UnsupportedEncodingException {
    String baseKey = getBaseKey();
    String workKey = FileUtils.getKey(FileUtils.WORK_FILE_NAME);
    if (workKey == null) {
      String key = getSafeRandomToString(KEY_SIZE);
      workKey = CipherUtils.aesEncode(key, baseKey);
      FileUtils.saveKey(workKey, FileUtils.WORK_FILE_NAME);
    }
    return aesDncode(workKey, baseKey);
  }

  private static String getXOrString()
      throws UnsupportedEncodingException, NoSuchAlgorithmException {
    byte[] hardKey = KEY.getBytes("utf-8");
    String fileStringKey = FileUtils.getKey(FileUtils.BASE_FILE_NAME);
    if (fileStringKey == null) {
      fileStringKey = getSafeRandomToString(KEY_SIZE);
      FileUtils.saveKey(fileStringKey, FileUtils.BASE_FILE_NAME);
    }
    byte[] fileKey = fileStringKey.getBytes("utf-8");
    byte[] xOrKey = new byte[hardKey.length];
    for (int i = 0; i < xOrKey.length; i++) {
      xOrKey[i] = (byte) (hardKey[i] ^ fileKey[i]);
    }
    return new String(xOrKey, "utf-8");
  }

  public interface OpenSSLLib extends Library {

    OpenSSLLib INSTANCE = (OpenSSLLib) Native
        .loadLibrary(Platform.isWindows() ? "libeay32" : "crypto", OpenSSLLib.class);


//    int PKCS5_PBKDF2_HMAC_SHA1(String password, int len, String salt, int slatLen, int iter,
//        int keyLen, Pointer out);

    /**
     * int PKCS5_PBKDF2_HMAC(const char *pass, int passlen, const unsigned char *salt, int saltlen,
     * int iter, const EVP_MD *digest, int keylen, unsigned char *out);
     */
    int PKCS5_PBKDF2_HMAC(String password, int len, String salt, int slatLen, int iter,
        Function evp, int keyLen,
        Pointer out);

    Pointer EVP_sha256();

  }
}
