import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

await pb.collection('users').authWithPassword('angelmaclovio@yahoo.com', 'Lucas200*+');

export default pb;