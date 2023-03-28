import React, { useEffect, useState } from 'react'
import { article } from '../../interface/interface'
import './index.less'

export default function Cards(props: any) {

    const [content,setContent] = useState([])
    useEffect(() => {
        setContent(props.articles)
    },)

    const getColor = () => {
        const colorNum = Math.round(Math.random() * 3)
        switch (colorNum) {
            case 4:
                return 'color4';
                break;
            case 3:
                return 'color3';
                break;
            case 2:
                return 'color2';
                break;
            case 1:
                return 'color1';
                break;
            default:
                return 'color0'
                break;
        }
    }

    const handleClick = (article:article) => {
        props.choose(article)
    }

    return (
        <div className='cardsWrapper'>
            {
                content.map((article:article) => {
                    return <div key={article.id} className={`card ${getColor()}`} onClick={()=>{handleClick(article)}}>
                        <div className='title'>
                            {article.title}
                        </div>
                        <div className='abstract'>
                            {article.content}
                        </div>
                    </div>
                })
            }
        </div>
    )
}
