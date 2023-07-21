import React from 'react';

const styles = {
    wrapper: {
        margin: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        width: 150,
        height: 100,
        borderRadius: 16,
    },
    contentContainer: {
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
    },
    nameText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    commentText: {
        color: 'black',
        fontSize: 16,
    },

}

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://img.kr.news.samsung.com/kr/wp-content/uploads/2021/05/%EC%82%BC%EC%84%B1-%EC%B2%AD%EB%85%84-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8-1-210512.jpg" 
                    style={styles.image}/>
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
};

export default Comment;