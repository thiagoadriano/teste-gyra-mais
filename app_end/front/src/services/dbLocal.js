export default class DbStorage {
  static get nickname() {
    return window.localStorage.getItem('nickname') || null;
  }

  static set nickname(value) {
    if (value) {
      window.localStorage.setItem('nickname', value);
    }
  }

  static get userId() {
    return window.localStorage.getItem('userId') || null;
  }

  static set userId(value) {
    if (value) {
      window.localStorage.setItem('userId', value);
    }
  }

  static hasNickname() {
    return Boolean(this.nickname);
  }

  static deleteNickname() {
    window.localStorage.removeItem('nickname');
  }

  static deleteUserId() {
    window.localStorage.removeItem('userId');
  }
}
