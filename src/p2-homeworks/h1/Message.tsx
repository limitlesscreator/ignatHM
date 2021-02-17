import React from 'react'
import s from './Message.module.css'

type TypeMessageDate = {
    avatar: string
    name: string
    message: string
    time: string
}


export function Message(props: TypeMessageDate) {
    return (
        <div>
            <div className={s.messageBlock}>
                <div className={s.avatar}><img
                    src={props.avatar} alt=""/>
                </div>
                <div className={s.message}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.messageUser}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                    <div className={s.tail}></div>
                </div>
            </div>
        </div>
    )
}

export default Message
