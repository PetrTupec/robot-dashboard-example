
const fetchData = (url) => {
   return fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`)
            return response.json()
        })
        .catch((error) => console.error())
}

export const apiGet = (url) => {
    return fetchData(url)
}