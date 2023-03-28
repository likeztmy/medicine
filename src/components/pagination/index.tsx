import React, { useEffect, useMemo, useState } from 'react'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import './index.less'

export default function Pagination(props:any) {
    const [pageNum,setPageNum] = useState(13)
    const [pageArr,setPageArr] = useState<string[]>([])
    const [current,setCurrent] = useState('1')
    useEffect(() => {
        const newArr = [];
        if(props.currentPage === '1') setCurrent(props.currentPage)
        if(props.pageNum) setPageNum(props.pageNum)
        console.log('assssssasf',parseInt(props.currentPage))
        if(parseInt(props.currentPage) < 6){
            for(let i = 1; i <= 9; i++){
                console.log('aaaaaa',parseInt(props.currentPage))
                if(i === 8){
                    newArr.push('...')
                }else if (i === 9) {
                    newArr.push(`${props.pageNum}`)
                }else {
                    newArr.push(`${i}`)
                }
            }
            console.log(newArr)
        } else if(parseInt(props.currentPage) >= 6 && parseInt(current) < props.pageNum - 4) {
            let cnt = -2
            for(let i = 1; i <= 9; i++){
                console.log('bbbbb',parseInt(props.currentPage))
                if(i === 1) {
                    newArr.push('1')
                }else if(i === 2 || i === 8){
                    newArr.push('...')
                }else if(i === 9){
                    newArr.push(`${props.pageNum}`)
                }else {
                    let temp:number = parseInt(current) + cnt
                    newArr.push(`${temp}`)
                    cnt+=1
                }
            console.log(newArr)
            }
        } else if(parseInt(props.currentPage) <= props.pageNum) {
            console.log('ccccc',parseInt(props.currentPage))
            for(let i = props.pageNum - 8; i <= props.pageNum; i++){
                if(i === props.pageNum - 8) {
                    newArr.push('1')
                }else if(i === props.pageNum - 7){
                    newArr.push('...')
                }else {
                    newArr.push(`${i}`)
                }
            }
            console.log(newArr)
        }
        setPageArr(newArr)
    },[current])



    const changePage = (num: React.SetStateAction<string>) => {
        if(num === '...') return
        setCurrent(num)
        props.changePage(num)
    }

    const back = (num: number) => {
        if(num < 1) return
        else {
            setCurrent(`${num}`)
            props.changePage(`${num}`)
        }
    }

    const next = (num: number) => {
        if(num > pageNum) return
        else {
            setCurrent(`${num}`)
            props.changePage(`${num}`)
        }
    }

    return (
        <div className='paginationWrapper'>
            <div className={`left ${current === '1'?'ban':''}`}  onClick={()=>back(parseInt(current)-1)}>
                <img src={left} alt="" />
            </div>
            <div className='pagination'>
                {
                    pageArr.map((num,index) => {
                        return <div key={`${index}`} className={`item ${current === num?'active':''}`} onClick={()=>{changePage(num)}}>{num}</div>
                    })
                }
            </div>
            <div className={`right ${current === `${pageNum}`?'ban':''}`} onClick={()=>next(parseInt(current)+1)}>
                <img src={right} alt="" />
            </div>
        </div>
    )
}
