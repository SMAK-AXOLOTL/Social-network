import React from "react";
import s from './AllPosts.module.css'
import Post from "./Post/Post";
import {TextInput} from "../../../utils/FormComponents";
import {Form, Formik} from "formik";

const AllPosts = (props) => {
    const postsMapped = props.postsData.map(x => <Post message={x.message} rating={x.rating}/>)

    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <Formik
                    initialValues={{
                        newPostText: props.newPostText
                    }}
                    onSubmit={(values, actions) => {
                        if (values.newPostText != ''){
                            props.updateNewPostText(values.newPostText)
                            props.addPost()
                            actions.setFieldValue('newPostText', '')
                        }
                    }}
                >
                    <Form>
                        <TextInput
                            label={''}
                            name={'newPostText'}
                            type={'textarea'}
                            placeholder={'Enter new post here!'}
                            onBlur={e => {
                                props.updateNewPostText(e.target.value)
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
        </div>)
}

export default AllPosts