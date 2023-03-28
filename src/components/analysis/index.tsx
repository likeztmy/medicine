import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';
import './index.less'
import { getData } from '../../interface/fetch';

export default function Analysis() {
    const [data,setData] = useState([
        
    ])
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)

    const myRef4 = useRef(null)
    const myRef5 = useRef(null)
    const myRef6 = useRef(null)

    const myRef7 = useRef(null)
    const myRef8 = useRef(null)
    const myRef9 = useRef(null)
    useEffect(() => {
        const myChart1 = echarts.init(myRef1.current as unknown as HTMLElement)
        const myChart2 = echarts.init(myRef2.current as unknown as HTMLElement)
        const myChart3 = echarts.init(myRef3.current as unknown as HTMLElement)
        const myChart4 = echarts.init(myRef4.current as unknown as HTMLElement)
        const myChart5 = echarts.init(myRef5.current as unknown as HTMLElement) 
        const myChart6 = echarts.init(myRef6.current as unknown as HTMLElement)
        const myChart7 = echarts.init(myRef7.current as unknown as HTMLElement)
        const myChart8 = echarts.init(myRef8.current as unknown as HTMLElement)
        const myChart9 = echarts.init(myRef9.current as unknown as HTMLElement) 
        getData('author').then(
          data => {
            const source = []
            const source1 = []
            for (let key in data.data) {
              source.push({product:key,count:data.data[key]})
              source1.push({value:data.data[key],name:key})
            }
            console.log(source)
            myChart1.setOption({
                legend: {},
                tooltip: {},
                dataset: {
                  source: source
                },
                xAxis: {type: 'category'},
                yAxis: {},
                grid: [{ bottom: '55%' }, { top: '55%' }],
                series: [{ type: 'bar' }]
            })
            myChart2.setOption({
              legend: {},
              tooltip: {},
              dataset: {
                source: source
              },
              xAxis: {type: 'category'},
              yAxis: {},
              grid: [{ bottom: '55%' }, { top: '55%' }],
              series: [{ type: 'line' }]
            })
            myChart3.setOption({
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
                  data: source1,
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            })
          }
        )
        getData('time').then(
          data => {
            const source = []
            const source1 = []
            for (let key in data.data) {
              source.push({product:key,cout:data.data[key]})
              source1.push({value:data.data[key],name:key})
            }
            console.log(source)
            myChart4.setOption({
                legend: {},
                tooltip: {},
                dataset: {
                  source: source
                },
                xAxis: {type: 'category'},
                yAxis: {},
                grid: [{ bottom: '55%' }, { top: '55%' }],
                series: [{ type: 'bar' }]
            })
            myChart5.setOption({
              legend: {},
              tooltip: {},
              dataset: {
                source: source
              },
              xAxis: {type: 'category'},
              yAxis: {},
              grid: [{ bottom: '55%' }, { top: '55%' }],
              series: [{ type: 'line' }]
            })
            myChart6.setOption({
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
                  data: source1,
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            })
          }
        )
        getData('location').then(
          data => {
            const source = []
            const source1 = []
            for (let key in data.data) {
              source.push({product:key,cout:data.data[key]})
              source1.push({value:data.data[key],name:key})
            }
            console.log(source)
            myChart7.setOption({
                legend: {},
                tooltip: {},
                dataset: {
                  source: source
                },
                xAxis: {type: 'category'},
                yAxis: {},
                grid: [{ bottom: '55%' }, { top: '55%' }],
                series: [{ type: 'bar' }]
            })
            myChart8.setOption({
              legend: {},
              tooltip: {},
              dataset: {
                source: source
              },
              xAxis: {type: 'category'},
              yAxis: {},
              grid: [{ bottom: '55%' }, { top: '55%' }],
              series: [{ type: 'line' }]
            })
            myChart9.setOption({
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
                  data: source1,
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            })
          }
        )
    },[])

    return (
        <div className='analysisWrapper'>
          <div className="author">作者</div>
          <div className="wrapper1">
            <div ref={myRef1} className='box'></div>
            <div ref={myRef2} className='box'></div>
          </div>
          <div className='wrapper1-3' ref={myRef3}></div>
          <div className="author">时间</div>
          <div className="wrapper2">
            <div ref={myRef4} className='box'></div>
            <div ref={myRef5} className='box'></div>
          </div>
          <div className='wrapper2-3' ref={myRef6}></div>
          <div className="author">地点</div>
          <div className="wrapper3">
            <div ref={myRef7} className='box'></div>
            <div ref={myRef8} className='box'></div>
          </div>
          <div className='wrapper3-3' ref={myRef9}></div>
            {/* <div ref={myRef3} className='box'></div> */}
        </div>
    )
}
