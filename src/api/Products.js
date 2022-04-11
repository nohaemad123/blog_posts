import axios from 'axios';

export async function getAllPosts() {
    const response = await axios.get('https://61958b8274c1bd00176c6da8.mockapi.io/posts', {
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response)
    return response;
}

// export async function addPost(values) {

//     const response = await axios.post('https://61958b8274c1bd00176c6da8.mockapi.io/posts',values);
//     return response;
// }

export async function addPost(values) {

    // const response = await axios.post('https://61958b8274c1bd00176c6da8.mockapi.io/posts',JSON.stringify(values));
    const response = fetch("https://61958b8274c1bd00176c6da8.mockapi.io/posts", JSON.stringify(values))
    return response;
}

export async function getPost(id) {
    const response = await axios.get('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + id, {
        headers: {
            'Accept': 'application/json'
        }
    })


    console.log(response);
    return response;

}