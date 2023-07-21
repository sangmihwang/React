import React from 'react';
import Comment from './Comment'

const comments = [
    {
        name: "김에이",
        comment: "댓글입니다.",
    },
    {
        name: "박데이",
        comment: "댁글입니다",
    },
]

function CommentList(props) {
    // return (
    //     <div>
    //         <Comment name={"김싸피"} comment={"안녕싸피"}></Comment>
    //         <Comment name={"김사피"} comment={"안녕싸피"}></Comment>
    //         <Comment name={"김싸괴"} comment={"안녕싸피"}></Comment>
            
    //     </div>
    // );

    return (
        <div>
            {comments.map((comment => {
                return (
                    <Comment name={comment.name} comment={comment.comment}></Comment>
                )
            }))}
        </div>
    )
};

export default CommentList;