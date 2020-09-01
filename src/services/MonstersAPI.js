const baseUrl = 'https://parseapi.back4app.com/classes/Monster';
const collectionUrl = baseUrl;
const memberUrl = id => `${baseUrl}/${id}`;

const authHeaders = {
  'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
  'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
}

const handleAPIErrors = response => {
  if (!response.ok) {
    return response.json().then(data =>{
      return {errors: data.error}
    })
  }
  
  return response.json().then(data => ({data}));
}

const reformatResponseData = response => {
  if (!response.data) return response;

  const reformatMonster = monster => {
    const {objectId, name, home, creepiness, bio} = monster;
    return {id: objectId, name, home, creepiness, bio};
  }

  let data = response.data;
  if (data.results && Array.isArray(data.results))
    data = data.results.map(m => reformatMonster(m));
  else
    data = reformatMonster(data);

  return {data};
}

const index = () => {
  return fetch(collectionUrl, {
      headers: authHeaders
    })
    .then(handleAPIErrors)
    .then(reformatResponseData);
}

const show = id => {
  return fetch(memberUrl(id), {
      headers: authHeaders
    })
    .then(handleAPIErrors)
    .then(reformatResponseData);
}

const create = monster => {
  return fetch(collectionUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', ...authHeaders},
    body: JSON.stringify(monster),
  })
  .then(handleAPIErrors)
  .then(reformatResponseData);
}

const update = monster => {
  return fetch(memberUrl(monster.id), {
    method: 'PUT',
    headers: {'Content-Type': 'application/json', ...authHeaders},
    body: JSON.stringify(monster),
  })
  .then(handleAPIErrors);
}

const destroy = id => {
  return fetch(memberUrl(id), {
    method: 'DELETE',
    headers: authHeaders,
  })
  .then(handleAPIErrors);
}

const MonstersAPI = {
  index,
  show,
  create,
  update,
  destroy
}

export default MonstersAPI;
