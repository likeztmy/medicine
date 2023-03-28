export async function getJson(page:number,type:string) {
    const res = await fetch(`http://139.196.30.123:80/api/v1/info?page=${page}&medicine_type=${type}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        redirect: 'follow'
    });

    return res.json();
}

export async function getSearch(keyWord:string,page:number) {
    const formdata = new FormData()
    formdata.append('text',keyWord)
    formdata.append('page',`${page}`)
    const res = await fetch('http://139.196.30.123:80/api/v1/info/search',{
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data;charset=utf-8' 
        },
        body:formdata
    })
    return res.json()
}

export async function getData(type:string) {
    const res = await fetch(`http://139.196.30.123:80/api/v1/info/${type}`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        redirect:'follow'
    })

    return res.json()
}