import React, { useState } from 'react'
import './index.less'

export default function Tab(props:any) {

    const [types, setTypes] = useState([
        '中医故事','中医漫话','医药之最','医药对联','中医流派','医药诗词','医德仁心','医药典故'
    ])

    const [active,setActive] = useState(0)

    const handleClick = (index: React.SetStateAction<number>,type: string) => {
        setActive(index)
        props.changeType(type)
    }

    return (
        <div className={props.style}>
            {
                types.map((type,index)=>{
                    return <div
                        key = {type}
                        className={`type ${active === index?'active':''}`}
                        onClick={()=>handleClick(index,type)}
                    >
                        {type}
                    </div>
                })
            }
        </div>
    )
}
