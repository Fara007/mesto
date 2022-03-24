class Api {
    constructor(options) {
      // тело конструктора
    }

    getProfile() {
      return fetch('https://nomoreparties.co/v1/cohort-37/users/me', {
        headers: {
          authorization: '84711bd2-b8ee-4cdf-8cf8-8f6af911774d'
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err))
    }
  
    getInitialCards() {
      return fetch('https://nomoreparties.co/v1/cohort-37/cards', {
        headers: {
          authorization: '84711bd2-b8ee-4cdf-8cf8-8f6af911774d'
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err))
    }
  
    editProfile(name, about) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-37/users/me', {
        method: 'PATCH',
        headers: {
          authorization: '84711bd2-b8ee-4cdf-8cf8-8f6af911774d',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          about
        })        
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err))
    }

    addCard(name, link) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-37/cards', {
        method: 'POST',
        headers: {
          authorization: '84711bd2-b8ee-4cdf-8cf8-8f6af911774d',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          link
        })        
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err))
    }
  
  deleteCard(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-37/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '84711bd2-b8ee-4cdf-8cf8-8f6af911774d',
      }     
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } 
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => console.log(err))
  }
}
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
    headers: {
      authorization: '84711bd2-b8ee-4cdf-8cf8-8f6af911774d',
      'Content-Type': 'application/json'
    }
  });