import {db} from "../firebase-config"

import { collection, getDocs, addDoc, updateDoc,doc} from "firebase/firestore"


const postCollectiopnRef=collection(db,"posts")
class postDataService{
  addPost = (newPost) => {
  console.log("newPost:", newPost);
  return addDoc(postCollectionRef, newPost);
};

    updatePost=(id,updatedPost)=>{
        const postDoc=doc(db,"posts",id)
        return updateDoc(postDoc,updatedPost)
    }

    getAllPosts=()=>{
        return getDocs(postCollectiopnRef)
    }
}

export default new postDataService();
