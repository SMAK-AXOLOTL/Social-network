import React, {useState} from "react";
import s from './AllPosts.module.css'
import Post from "./Post/Post";
import {TextInput} from "../../../utils/FormComponents";
import {Form, Formik} from "formik";
import {postType} from "../../../types/types";

const AllPosts: React.FC = () => {
    let [postsData, setPosts] = useState<postType[]>(
        [
            {id: 1, message: 'I\'m scared', rating: 0},
            {id: 2, message: 'Am I alone here?', rating: 0},
            {id: 3, message: 'Hello?', rating: 0},
            {id: 4, message: 'Where is everybody?', rating: 0},
            {id: 5, message: 'Hello, world!', rating: 0}
        ]
    )
    
    let [newPostText, setNewPostText] = useState('')
    const deletePostById = (id: number) => {
        setPosts(postsData.filter(post => post.id !== id))
    }

    const postsMapped = postsData.map(p => <Post key={p.id} id={p.id} message={p.message} rating={p.rating} deletePost={deletePostById}/>)

    return <div className={s.posts_block}>
            My posts
            <div>
                <Formik
                    initialValues={{
                        newPostText: newPostText
                    }}
                    onSubmit={(values, actions) => {
                        if (values.newPostText !== '') {
                            setPosts([...postsData, {id: (postsData.at(-1)?.id??0)+1, message: values.newPostText, rating: 0}])
                            actions.setFieldValue('newPostText', '').then()
                        }
                    }}
                >
                    <Form>
                        <TextInput
                            label={''}
                            name={'newPostText'}
                            type={'textarea'}
                            placeholder={'Enter new post here!'}
                            onBlur={(e: React.FormEvent<HTMLInputElement>) => {
                                setNewPostText(e.currentTarget.value)
                            }}
                        />
                        <div>
                            <button>New post</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className={s.posts}>
                {postsMapped}
            </div>
        </div>
}

export default AllPosts