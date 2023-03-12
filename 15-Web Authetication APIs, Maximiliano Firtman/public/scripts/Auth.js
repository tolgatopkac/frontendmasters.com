import API from "./API.js";
import Router from "./Router.js";

const Auth = {
  isLoggedIn: false,
  account: null,

  postLogin(res, user) {
    if (res.ok) {
      Auth.isLoggedIn = true;
      Auth.account = user;
      Auth.updateStatus();
      Router.go("/account");
    } else {
      alert(res.message);
    }
    // Credential Management API storage
    // Token olmadan otomatik giriş yapmak
    if (window.PasswordCredential && user.password) {
      const credentials = new PasswordCredential({
        id: user.email,
        password: user.password,
        name: user.name,
      });
      try {
        navigator.credentials.store(credentials);
      } catch (e) {
        console.log(e);
      }
    }
  },

  async register(event) {
    event.preventDefault();
    const user = {
      name: document.getElementById("register_name").value,
      email: document.getElementById("register_email").value,
      password: document.getElementById("register_password").value,
    };

    // call API
    const response = await API.register(user);
    // console.log(response);
    Auth.postLogin(response, user);
  },

  async login(event) {
    if (event) event.preventDefault();
    const credentials = {
      email: document.getElementById("login_email").value,
      password: document.getElementById("login_password").value,
    };
    const response = await API.login(credentials);
    console.log(response);
    Auth.postLogin(response, {
      ...credentials,
      name: response.name,
    });
  },
  // Retrieving Credentials
  // Kimlik bilgilerine sahip olduğumda iki seçeneğim olacak.
  // - formu önceden doldurabilir giriş yapmak için kullanabilirim
  // - otomatik oturum açma
  // OTOMATIK giriş kullandığında ve sadece 1 hesap kayıtlıysa site yüklenir yüklenmez giriş yapılır.
  // todo kullanıcının otomatik oturum açmak isteyip istemediğini dair bir onay kutusu ve UI öğesi sormak iyi fikir olabilir.
  async autoLogin() {
    if (window.PasswordCredential) {
      const credentials = await navigator.credentials.get({ password: true });
      // SAFARI'DE ÇALIŞMAZ ONLY CHROMIUM-BASED
      document.getElementById("login_email").value = credentials.id;
      document.getElementById("login_password").value = credentials.password;
      Auth.login();
      // SAFARI'DE ÇALIŞMAZ
      console.log(credentials);
    }
  },

  logout() {
    Auth.isLoggedIn = false;
    Auth.account = null;
    Auth.updateStatus();
    Router.go("/");
    //  Bu yüzden çıkış yaparken, önce parola kimlik bilgisinin varlığını kontrol edebilirim, yani API varsa, navigator.credentials.preventSilentAccess yöntemini çağırmalıyız. Bu şekilde bir sonraki giriş yapışınıza kadar sessiz erişim olarak bilinen otomatik girişi önleyecektir.
    if (window.PasswordCredential) {
      navigator.credentials.preventSilentAccess();
    }
  },

  updateStatus() {
    if (Auth.isLoggedIn && Auth.account) {
      document
        .querySelectorAll(".logged_out")
        .forEach((e) => (e.style.display = "none"));
      document
        .querySelectorAll(".logged_in")
        .forEach((e) => (e.style.display = "block"));
      document
        .querySelectorAll(".account_name")
        .forEach((e) => (e.innerHTML = Auth.account.name));
      document
        .querySelectorAll(".account_username")
        .forEach((e) => (e.innerHTML = Auth.account.email));
    } else {
      document
        .querySelectorAll(".logged_out")
        .forEach((e) => (e.style.display = "block"));
      document
        .querySelectorAll(".logged_in")
        .forEach((e) => (e.style.display = "none"));
    }
  },
  init: () => {},
};
Auth.updateStatus();

// auto login
Auth.autoLogin();

export default Auth;

// make it a global object
window.Auth = Auth;
