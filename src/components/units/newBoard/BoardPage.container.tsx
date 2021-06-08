import BoardPageUI from './BoardPage.presenter';
import {useState} from 'react';
import {CREATE__BOARD, FETCH_BOARD, UPDATE__BOARD} from './BoardPage.queries';
import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router'
import { asyncMap } from '@apollo/client/utilities';
import { route } from 'next/dist/next-server/server/router';

export default function BoardPage() {

    const router = useRouter();

    const [input, setInput] = useState({
        writer: '',
        password: '',
        title: '',
        content: '',
        youtubeUrl: ''
    });

    const [createBoard] = useMutation(CREATE__BOARD);
    const [updateBoard] = useMutation(UPDATE__BOARD);

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id},
    })

    // console.log(data)


    const handleChangeInput = (event) => {
            setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
            }));
            // console.log(print);
    };

    const handleClickCreateBoard = async() => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                    writer: input.writer,
                    password: input.password,
                    title: input.title,
                    contents: input.content,
                },
            },
        });
            // console.log(result);
            alert('게시글 등록');
            router.push(`/board/${result.data.createBoard._id}`);
        } catch (error) {
            alert(error.message);
        }
    }

    const hadleUpdateBoard = async() => {
        try {
            const result = await updateBoard({
                variables: {
                updateBoardInput: {
                    title: input.title,
                    contents: input.content,
                    youtubeUrl: input.youtubeUrl
                },
                password: input.password,
                boardId : router.query.id
            },
        });
        // console.log(result);
            alert('게시글 수정');
            router.push(`/board/${result.data.updateBoard._id}`);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleListPage = () => {
        router.push(`/listPage`);
    }

    return (
        <BoardPageUI
            handleChangeInput={handleChangeInput}
            handleClickCreateBoard={handleClickCreateBoard}
            handleListPage={handleListPage}
            data={data}
            hadleUpdateBoard={hadleUpdateBoard}
        ></BoardPageUI>
    );
}
