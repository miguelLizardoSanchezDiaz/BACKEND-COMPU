const baseUrl=process.env.REACT_APP_API_URL;
const fetchSinToken=(endpoint,data,method='GET')=>{//endpoint //auth
    const url=`${baseUrl}/${endpoint}`;//localhost:4000/api/auth
    //console.log('url: ',url);
    if(method==='GET'){
        return fetch(url);
    }else{
        return fetch(url,{
            method,
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
    }
}

const fetchConToken=(endpoint,data,method='GET')=>{//endpoint //auth
    const url=`${baseUrl}/${endpoint}`;//localhost:4000/api/auth
    const token=localStorage.getItem('token') || '';
    
    if(method==='GET'){
        return fetch(url,{
            method,
            headers: {
                'x-token':token
            }
        });
    }else{
        return fetch(url,{
            method,
            headers: {
                'Content-type':'application/json',
                'x-token':token
            },
            body:JSON.stringify(data)
        });
    }
}

export{
    fetchSinToken,
    fetchConToken
}