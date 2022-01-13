export const get= () => {
    return fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        return resp.json();
      }).then((json)=> {
        return json
      }).catch(function(ex) {
        throw ex;
    });
}

export const search = async (search) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${search}.json?print=pretty`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        return resp.json();
      }).then((json)=> {
        return json
      }).catch(function(ex) {
        throw ex;
    });
}