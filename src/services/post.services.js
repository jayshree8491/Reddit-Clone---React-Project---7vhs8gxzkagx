import {db} from "../firebase-config"

import { collection, getDocs, addDoc, updateDoc,doc} from "firebase/firestore"


const postCollectiopnRef=collection(db,"posts")
class postDataService{
    addPost=(newPost)=>{
        return addDoc(postCollectiopnRef,newPost)
    }

    updatePost=(id,updatedPost)=>{
        const postDoc=doc(db,"posts",id)
        return updateDoc(postDoc,updatedPost)
    }

    getAllPosts=()=>{
        return getDocs(postCollectiopnRef)
    }
}

export default new postDataService()