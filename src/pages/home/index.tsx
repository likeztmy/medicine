import { number } from 'echarts'
import React, { useEffect, useState } from 'react'
import { getJson, getSearch } from '../../interface/fetch'
import Cards from '../../components/acticleCard'
import Analysis from '../../components/analysis'
import Header from '../../components/header'
import Pagination from '../../components/pagination'
import Tab from '../../components/tab'
import backImg from '../../assets/back.png'
import './index.less'
import { article } from '../../interface/interface'

export default function Home() {

    const [medicine,setMedicine] = useState(true)
    const [detail,setDetail] = useState(false)
    const [article,setArticle] = useState<article|undefined>(undefined)
    const [currentType,setCurrentType] = useState('中医故事')
    const [articles,setArticles] = useState<article[]>([])
    const [pageNum,setPageNum] = useState(0)
    const [currentPage,setCurrentPage] = useState('1')
    const [isSearch,setIsSearch] = useState(false)
    const [keyWord,setKeyWord] = useState('')

    useEffect(() => {
        if(!isSearch){
            getJson(parseInt(currentPage),currentType).then(
                data => {
                    setArticles(data.data)
                    setPageNum(data.max_page)
                }
            )
        }else {
            getSearch(keyWord,parseInt(currentPage)).then(
                data => {
                    setArticles(data.data)
                }
            )
        }
    },[currentPage,currentType,isSearch])

    const changeMedicine = (key:boolean) => {
        setMedicine(key)
    }

    const changeType = (type:string) => {
        setCurrentType(type)
        setCurrentPage('1')
    }

    const changePage = (currentPage:string) => {
        setCurrentPage(currentPage)
    }

    const search = (keyWord:string,page:number) => {
        setIsSearch(true)
        setKeyWord(keyWord)
        setCurrentPage('1')
        getSearch(keyWord,page).then(
            data => {
                setPageNum(data.max_page)
                setArticles(data.data)
            }
        )
    }

    const choose = (article:any) => {
        console.log(article)
        setDetail(true)
        setArticle(article)
    }

    const toOrigin = () => {
        if(article){
            window.open(article.href)
        }
    }

    const back1 = () => {
        setIsSearch(false)
        setCurrentPage('1')
    }

    const back2 = () => {
        setDetail(false)
    }

    return (
        <div className='homeWrapper'>
            <Header changeMedicine = {changeMedicine} changeType = {changeType} search = {search}/>
            {isSearch?
            <div className='searchResult'>
                <div className='back' onClick={back1}>
                    <img src={backImg} alt=''/>
                    返回
                </div>
                <div className='result'>搜索结果</div>
            </div>
            :medicine?detail?
            <div className='detail'>
                <div className='back' onClick={back2}>
                    <img src={backImg} alt="" />
                    返回
                </div>
                <div className='title'>{article?article.title:""}</div>
            </div>
            :<Tab style={medicine?'tabWrapper':'hidden'} changeType = {changeType}/>:<Tab style={medicine?'tabWrapper':'hidden'} changeType = {changeType}/>}
            {medicine?detail?<div className='content'>{article?article.content:''}</div>
            :<Cards articles = {articles} max_page = {pageNum} choose = {choose}/>
            :<Analysis/>}
            {detail?'':medicine&&articles.length?<Pagination changePage = {changePage} pageNum = {pageNum} currentPage = {currentPage}/>
            :''}
            {
                articles.length?'':<div className='none'>内容为空</div>
            }
            {detail?<div className='origin' onClick={toOrigin}>
                原文
            </div>:''}
            <div className='bottom'></div>
        </div>
    )
}
