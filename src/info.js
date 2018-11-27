import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
// import './assets/style/main.css';
import './assets/style/s.less'
// import style from './assets/style/main.css';
// console.log(style)
let state = 0;
let fn = ()=>{
    
}
let timeOne = null;

function get_canvas(ev,obj){
    m_clientX = ev.clientX-obj.offsetLeft;
    m_clientY = ev.clientY-obj.offsetTop;
}

function timeOpen() {
    timeOne = new Date().getTime();
}
function timeClose() {
    return new Date().getTime() - timeOne;
}
let str = '11233';
for (const e of str) {
    console.log(e)
}
ReactDOM.render(
    <div>
        infos
        <ul>
            {
                [{id:1},{id:2},{id:3}].map(e=>(
                    <li
                        onMouseDown={(ev)=>{
                            timeOpen();
                            ev.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)';
                        }}
                        onMouseUp={(ev)=>{
                            let e = ev.currentTarget
                            var t = 500 - timeClose();
                            if( t <= 0 ){
                                t = 0
                            }
                            setTimeout(() => {
                                e.style.backgroundColor = '';
                            }, t);
                        }}
                        key={e.id}
                    ></li>
                ))
            }
        </ul>
        𠮷
    </div>,
    document.getElementById('root')
)