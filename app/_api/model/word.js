import pb from '../pocketbase';

const resultList = await pb.collection('Mundo').getList(1, 50);

console.log(resultList);

export default resultList;