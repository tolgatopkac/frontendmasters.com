# Web Authentication APIs - Maximiliano Firtman

[Course Website](https://firtman.github.io/authentication)

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

Web sitelerinde kimlik doğrulama için çözüm sunan 3. taraf servisler ( Auth0 - Firsebase - Azure vs.)

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

## Classic Login Flow

#### Enhancing Login Forms

İlk olarak, akış genellikle en az üç adımı içerir,
kullanıcıyı kaydetmek için bir

- kayıt formu (Register),
- giriş formu (Login)
- Parola Sıfırlama ( Reset Password )

Bu Formlar oluştururken daha iyi bir UX deneyimi için yapılması gerekenler

- Connected Labels for each element
- Don't use placehoder as labels
- Using HTML semantics
- On SPAs, form names different for registration and login forms
- Let the user make the password visible
- Help Password Managers with autocomplete HTML attributes
- Help Accessibility with aria-describedby attribute for instructions
- On SPAs, use submit form event and submission will be triggered by a pushState

```javascript
	<input type="password" autocomplete="new-password">

	<input type="password" autocomplete="current-password">

	<input type="text" autocomplete="name">

	<input type="email" autocomplete="username">
```

###

#### Form Accessibility & UX

Oluşturulan formlarda parola yöneticisi ( password managers ) kullanabilmek için input tag'leri içinde `autocomplete` kullanmalısın.

Yeni oluşturulan bir üyelik formunda

```javascript

	#type text
	<label for="register_name">Your Name</label>
	<input id="register_name" type="text" required autocomplete="name">

	#type email
	# formda username için input yer almazsa autocompete="username" kullan

	<label for="register_email">
	<input id="register_email" type="email" required autocomplete="username">

	#type password
	<label for="register_password">Your Password</label>
	<input type="password" id="register_password" required autocomplete="new-password">
```

❗ **Not :** Oluşturduğun formlarda formun sonunda yer alan `<button>` `onclick="Auth.login()` eklemek yerine `<form>` tag'ine `onsubmit` ekle.

### Credential Management

#### Credential Management API

- **It let us save and retrieve in the browser's password manager** : Tarayıcının parola yöneticisinde veri kaydetmemize ve geri almamıza olanak tanır. Otomatik olarak görünen parola yöneticisine API üzerinden erişilebilir.
- **Credentials (username / password ) :** Parola yöneticisi ( Password management ) kullanıcı adı ve şifre çiftini kaydetmek için kabul edilir.
- **Federated Credentials** : Google veya Apple ile giriş yaparken gelen meta verileri nasıl kaydedebileceğinizi gösteren bir özelliktir. Sadece kullanıcı adı ve şifre değil, Token, meta verileri, kimlikler vs.
- **Public / Private Keys **

**WebAuthn**'in sahne arkasında kullandığı API budur. Web Kimlik Doğrulaması olarak da bilinir ve tarayıcıda biyometrik kimlik doğrulaması kullanmamızı sağlayan API'dir.

- It let us implement auto login safely.

Credentials, it's Chromium-only ( Chrome - Edge - Opera - Brave - Samsung Internet ) çalışır.
Safari sadece public/private keys destekler.

```javascript
// Credential Management API

const credentials = new PasswordCredential({
  id: "admin",
  password: "123456",
});

await navigator.credentials.store(credentials);
```

```javascript
// şifreyi almak için get yöntemi kullanılır.

const credentials = await navigator.credentials.get({password.true});

```

❗ Note : Geliştirici olarak kimlik bilgilerini kaldıramazsınız, yani API'de bir kaldırma yok.

❗ API'de yer alan autologin kullanıldığında clientside tarafına kullanıcı bilgileri iletilir. Kullanıcının password'u loglanabilir. Safari bu sebepe API'yi kullanmak istemiyor.

### Federated Login

#### Federated Login Providers

**Nedir Federated Login ?**

- Using OAuth you can use many providers
  OAuth kullanarak, Github ile giriş yap, LinkedIn ile giriş yap gibi birçok providers kullanabilirsin. Eğer tek sayfalı SPA uygulamalarla OAuth 2.0 kullanıyorsan bbiraz zor olabilir, çünkü kendi sayfanızın altında olmayan bir URL açmanız gerekiyor, bir pop-up olabilir veya tek sayfalı uygulamanızdan çıkıp geri dönmelisin.
- Sign In with Google
  Google veya Apple gibi birçok provider, kendileri için OAuth uygulamaya gerek kalmadan çok basitleştirilmiş bir sürümü sunuyorlar. Bunlardan biri Google ile giriş (Sign In with Google) yap.
- Sign In with Apple
  Yerel sunucuda çalışmaz, bir alan adına sahip sunucuya ihtiyacın var ve apple geliştirici hesabına sahip olmalısın. Bunun için yılda 99$ ödemen gerekiyor.

Note : ❗ Auth 2.0 : Kullanıcıları kimlik doğrulama yapmak için değil, daha çok kimlik bilgilerini farklı sağlayıcılar arasında taşımak için bir yol olarak tasarlanmıştır.

### Sign In with Google / Registering Project

Registering the Project with Google
Bu tür providers girişlerini kullanıcıların diğer web sitelerinin hesaplarıyla oturum açmalarına izin vermek istediğinizde Google, Twitter, Github herhangi biri olabilir bir web geliştirici olarak hesap oluşturman gerekiyor. Apple'da ayrıca ödeme yapman gerekiyor.

[https://developers.google.com/identity/gsi/web/guides/overview](Google%20i%C3%A7in%20ge%C3%A7erli%20olan%20documentation)

- Setup
- Google API client ID 'e ihtiyacın var.

### WebAuthn

[WebAuthn](https://webauthn.guide/)

- **A multi-vendor effort**
- **FIDO Alliance and W3C**
- **Store safely private keys while sending public keys for the server**
- **It can work with FIDO2 and platform authenticators (Face ID, Biometric Authentication)**
- **It's typically used as a 2FA**
- **PIN-based keys**
- **FIDO2 USB keys (yubico)**
- **Biometric Authenticators (TouchID, FaceID, Windows Hello, Android)**

https://webauthn.io/

#### Library

- [https://simplewebauthn.dev/](https://simplewebauthn.dev/)
- It has a server and a client library

### Identifier-First Flow

- Instead of a login form with username and password:
- We first ask for identity (username)
- We ask the browser about the login options for that user
- We offer the user enter a password or login with other options

### Passkeys

**Passwordless Options**

- Magic Links
- OTP
- Passkeys

#### Passkeys

- It's the new DNA of WebAuthn
- The idea is to use WebAuthn as a First Factor
- Authenticators are saving the keys (known as passkeys) in the cloud, so you can use them on different devices, and even share with other users
- [https://passkeys.io/](https://passkeys.io/)

❗ Note
**Keep user's destination after login**
**Always confirm user emails**
**Ask the user about autologin**
**Check Privacy's legislation**
**Security is too important**
**Test your login UX flows**
