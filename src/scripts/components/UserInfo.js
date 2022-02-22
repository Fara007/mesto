export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._name = profileName;
    this._job = profileJob;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent
    };

    return userData;
  }

  setUserInfo(newProfileName, newProfileJob) {
    this._name.textContent = newProfileName;
    this._job.textContent = newProfileJob;
  }
}
