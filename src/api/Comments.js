import axios from 'axios';

export async function getAllComments(id) {
    const response = await axios.get('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + id + '/comments', {
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response)
    return response;
}

export async function getComment(post_id,comment_id) {
    const response = await axios.get('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + post_id + '/comments/'+comment_id, {
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response)
    return response;
}