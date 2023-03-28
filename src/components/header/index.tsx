import { use } from 'echarts'
import React, { useRef, useState } from 'react'
import search from '../../assets/search.png'
import backImg from '../../assets/back.png'
import Tab from '../tab'
import './index.less'

export default function Header(props: any) {

    const [medicine,setMedicine] = useState(true)
    const [data,setData] = useState(false)
    const myRef = useRef(null)
    const [isSearch,setIsSearch] = useState(false)

    const handleClick1 = () => {
        setMedicine(true)
        props.changeMedicine(true)
        setData(false)
    }

    const handleClick2 = () => {
        setMedicine(false)
        props.changeMedicine(false)
        setData(true)
    }

    const searchInfo = () => {
        if(myRef.current){
            console.log(myRef.current['value'])
            if(myRef.current['value']){
                setIsSearch(true)
                props.search(myRef.current['value'],1)
            }
        }
    }

    return (
        <div className='header'>
            <div className='main'>
                <div className={`medicine ${medicine?'active':''}`} onClick={handleClick1} >
                    中医栏目
                </div>
                <div className='search-box'>
                    <input className='input-box' ref={myRef} type="text" formAction='' placeholder='搜一搜吧'/>
                    <div className='icon'>
                        <img src={search}  onClick={()=>{searchInfo()}}/>
                    </div>
                </div>
                <div className={`data ${data?'active':''}`} onClick={handleClick2}>
                    数据分析
                </div>
            </div>
        </div>
    )
}
