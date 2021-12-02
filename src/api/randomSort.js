export default function randomSort(arr){
     let length = arr.length
     for(let i=0;i<length;i++){
         let iRand = Math.floor(Math.random()*length)
         let temp = arr[i];
         arr[i] = arr[iRand];
         arr[iRand] =temp
     }
     return arr
}
//数组随机打乱


