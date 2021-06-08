import CommentUI from './Comment.presenter';
import {FETCH_BOARD,CREATE_BOARDCOMMENT, FETCH_BOARDCOMMENTS, UPDATE_COMMENTBOARD} from './Comment.queries';
import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router'
import {useState} from 'react';


export default function BoardPage() {

    const router = useRouter();

    const [createBoardComment] = useMutation(CREATE_BOARDCOMMENT); 
    const [updateCommentBoard] = useMutation(UPDATE_COMMENTBOARD);  
   
    const {data:comment, refetch} = useQuery(FETCH_BOARDCOMMENTS, {
        variables: {boardId: router.query.id
        }
    })
    
    const [input, setInput] = useState({
        writer: '',
        password: '',
        contents: '',
        rating: ''
    });

    const [rating, setRating] = useState(0)

    const handleClickRating = (event) => {
            setRating(Number(event.target.id))
        }
    
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id},
    })
    
    const handleChangeInput = (event) => {
        setInput((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
        }));
        // console.log(print);
    };

    const handleClickCreateBoardComment = async() => {
       try {
           const result = await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: input.writer,
                        password: input.password,
                        rating: rating,
                        contents: input.contents,
                },
            boardId: router.query.id
        },
    });
        setInput({
            writer: '',
            password: '',
            contents: '',
            rating: ''
        })
            refetch()
        } catch (error) {
           alert(error.message);
        }
    }

    return (
    <><CommentUI data={data} handleChangeInput={handleChangeInput} handleClickCreateBoardComment={handleClickCreateBoardComment} 
                 refetch={refetch} comment={comment} input={input} rating={rating} handleClickRating={handleClickRating}></CommentUI>
    </>
    )
}