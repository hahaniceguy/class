import BoardListUI from "./BoardList.presenter";
import {useQuery} from '@apollo/client'
import {FETCH_BOARDS, FETCH_BOARDSCOUNT} from "./BoardList.queries"
import {useRouter} from 'next/router';
import BestList from '../BestList/BestList.container'
import { useState } from "react";

export default function BoardList() {

    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1)
    const {data} = useQuery(FETCH_BOARDS, {variables: {
        page: currentPage
    }})
    const {data : count} = useQuery(FETCH_BOARDSCOUNT)

    let list = [data?.fetchBoards]
    let numbers = [count?.fetchBoardsCount]
    let aaa = numbers.map((numbers) => Math.ceil(numbers / 10))
    let bbb = numbers.map((numbers) => Math.ceil((numbers / 10) / 10))
    const [pageArr, setPageArr] = useState([1,2,3,4,5,6,7,8,9,10])

    console.log(aaa[0], bbb, "123")

    const handleClickPage = (e) => {

        setCurrentPage(Number(e.target.id))
        
    }
    
    const handleRightPage = () => {

        // if(pageArr[9] >= aaa[0]){
        //     // for(let i = Number(pageArr); pageArr.length > Number(aaa); i++)
        //     let newArr = pageArr.map((data) => data + 10)
        //      newArr = newArr.filter(data => data <= aaa[0])
        //     setCurrentPage(newArr[0])
        //       setPageArr(newArr)
        //     return;
        // }

        let newArr = pageArr.map((data) => data + 10)
        newArr = newArr.filter(data => data <= aaa[0])
        setCurrentPage(newArr[0])
        setPageArr(newArr)

    }

    const handleLeftPage = () => {
        let newArr = pageArr.map((data) => data-10)
        if(pageArr[0] === 1){
            return;
        }
     
        if(newArr.length !== 10){
            let count = newArr[0]
          for(let i = 0; i < 10; i++){
            newArr[i] = count ++ 
          }
        }
        
        setCurrentPage(newArr[0])
        setPageArr(newArr)
    }

    const handleCreatePage = () => {
        router.push(`/newBoard`);
    }

    const handleListClick = (e) =>{
        router.push(`/board/${e.target.id}`)
    }
 
	return <><BestList></BestList>
             <BoardListUI 
             data={data} handleCreatePage={handleCreatePage} handleListClick={handleListClick} count={count}
             handleRightPage={handleRightPage} pageArr={pageArr} handleClickPage={handleClickPage} handleLeftPage={handleLeftPage}
             currentPage={currentPage} ></BoardListUI></>;
}