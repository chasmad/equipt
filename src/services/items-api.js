const BASE_URL = '/api/items';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(item) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(item)
    }).then(res => res.json());
}

export function update(item) {
    return fetch(`${BASE_URL}/${item._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(item)
    }).then(res => res.json());
  }