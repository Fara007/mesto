export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._name = profileName;
    this._job = profileJob;
    this._avatar = profileAvatar;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent
    };

    return userData;
  }

  setUserInfo(newProfileName, newProfileJob, newProfileAvatar) {
    this._name.textContent = newProfileName;
    this._job.textContent = newProfileJob;
    this._avatar.src = newProfileAvatar;
  }
}
