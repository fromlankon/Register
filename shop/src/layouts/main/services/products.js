export const getData = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = res.json()
    return data
}

export const detailsData = async (id) => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = res.json()
    return data
}