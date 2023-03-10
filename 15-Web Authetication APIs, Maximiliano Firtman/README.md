# Coffee Masters Authentication Demo

This is the initial project for the FullStack Authentication workshop at Frontend Masters

### Notes

---

# Web Authentication APIs - 10.03.2023

---

# Web Authentication APIs - Maximiliano Firtman

### Kurs içeriği

- Authentication
- State of Techniques
- Login Forms
- New Flows
- Data Structure
- Web Services
- Web Authentication
- Passlinks

## Intro

### Authentication Concepts

**Authentication vs Authorization**

İlk olarak Authentication ve Authorization kavramlarını birbirinden ayırmak gerekiyor.

- **Authentication** : Kimlik doğrulama, kullanıcının veya sistemlerin kimliğini doğrulamakla ilgilidir.
- **Authorization** : Yetkilendirme ise, kimlik doğrulandıktan sonra sahip olduğunuz izin ve ayrıcalıklarla ilgilidir.

❗ **Note :** Authentication ( Kimlik doğrulama ) : Bir kullanıcının veya hizmetin ( server ) kimliğini doğrular.

#### Kavramlar

- **Credentials ( Kimlik Bilgileri )** : Sunucu tarafında o kullanıcıyı tanımlamak için gereken her şeydir. Normal bir kimlik bilgisi kullanıcı adı ve şifre çiftidir.
- **Single Sign On ( SSO ) ( Tek oturum açma ) :** Farklı web sitelerinde veya farklı web uygulamalarında aynı kimlik bilgileriyle kullanıcının kimlik doğrulamasını gerçekleştirmenin bir yolu. Eğer kullanıcı A web'inde oturum açtıysa, B, C ve D'de de otomatik olarak oturum açabilir.
- **2FA ( Two-factor authentication) :** Bir login formunda kullanıcı adı ve şifre varsa, bu tek faktörlü bir kimlik doğrulamasıdır. Bunun yanı sıra bir uygulamaya giriş yaparken SMS - e-mail kodu gönderilmesi ve bu kodlar aracılığıyla uygulamaya girişin sağlanması iki faktörlü kimlik doğrulamadır.
  Kısaca
  username + password = one-factor
  username + password + code = two-factor
- **MFA ( Multi-factor authentication ) :** İki faktör yerine daha fazla faktörün yer aldığı giriş.
- **OAuth 2.0 :** Daha çok authorization ile ilgili olan kavram. Üçüncü taraf sunucusuna giriş yapabileceğiniz bir (login flow) giriş akışıdır. Bir websitesine girildiğinde Google / Github / Facebook ile giriş yap ( bağlan ) seçenekleri yer alır. Bunlardan birine tıklandığında örneğin Github sayfasına yönlendirir Github.com'da giriş yapılır ve ardından asıl websitesine geri dönülür. Github'ın olmadığı websitesinde oturum açılır. Bu genellikle **OAuth 2.0** kullanılarak yapılır.
- **JWT ( JSON Web Token ) :** Daha çok authorization ile ilgilidir. Buradaki fikir, bir web sitesinin bana geçerli kullanıcı hakkında kimlik bilgilerini veya meta verileri nasıl vereceğidir.
- **OTP ( One Time Password) :** Tek kullanımlık şifre. Bir SMS veya e-posta yoluyla bir kod aldığınızda, bu kodu web sitesinde kopyalayıp yapıştırarak telefonunuzun veya e-posta adresinizin size ait olduğunu doğrulamak için kullanılır. Bugünlerde kullanılan Magic Link olarak benzerlik gösterebilir. Şifre olmadan web sitesine giriş yapmanın bir yolu. Bu, bugünlerde kullanılan şifresiz mekanizmalardan biridir. Ve bu fikir, Tek Kullanımlık Şifre olarak bilinen bir fikri kullanıyor.
- **Public Key Cryptography :**

### Implementing Authentication

Kimlik doğrulaması uygulamak için günümüzde genellikle üç seçeneğiniz bulunuyor.

- Custom Auth
- Identity Providers
- Identity As a Service IDaaS

#### Custom Auth

- User/pass
- WebAuthn ( Biyolojik özellikler, Face ID vs )

#### Identity Providers

- OpenID
- SAML 2.0
  **Sign in with...**
  "Google ile giriş yapın" - "Apple hesabıyla giriş yapın" - "Github ile giriş yapın" bunların her biri bir **Identity Providers**

#### Identity As a Service IDaaS

- Web sitelerinde kimlik doğrulama için çözüm sunan 3. taraf servisler ( Auth0 - Firsebase - Azure vs.)

### Web Authentication Strategies

#### Security Risk Kavramları

- Man in the Middle Attacks
- Keyloggers
- Easy to guess passwords
- Web Servers and DBs Attacks
- Phishing and Social Engineering Attacks

**Not : ❗** HTTP 'de her şey düz metin olarak geçer. Örnek olarak bir Linux bilgisiyle bir halka açık bir Wi-Fi'ye girildiğinde, halka açık olan Wi-Fi yönlendiricisine girebilirsiniz. Halka açık Wi-Fi'de yapılan tüm HTTP isteklerini, kullanıcıların HTTP sitelerine yazdığı tüm kimlik bilgileri dahil olmak üzere gözükmektedir. - man in the middle attacks - örneği.
Bugünlerde HTTP siteleri bu yüzden yerine HTTPS kullanılmalıdır. HTTPS ile tarayıcı ve web sunucusu arasında şifreleme olduğundan HTTP'de yer alan sorunu çözmektedir.

#### Auth Strategies Usage

Güvenlik sıralamasına göre
Form-based Auth < Multi-factor Auth < WebAuthn < Passwordless Auth
