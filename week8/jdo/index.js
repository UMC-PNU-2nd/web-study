
// URL을 통해서 데이터를 가져오는 방법
//1.fetch

const result = [];

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => data.map(item => result.push(item.name)))
    .catch(error => console.log(error))

console.log(result);

const dataFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return data;
}

//const dataResult = dataFetch();

//2. axios

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data.data))     //json 변환 자동으로 해줌
//   .then(data => console.log(response.data))     // 위와 같음

const dataAxios = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
}
const dataResult = dataAxios();
console.log(dataResult);