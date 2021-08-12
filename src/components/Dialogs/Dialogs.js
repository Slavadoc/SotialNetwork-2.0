import React from 'react'
import stylles from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer'
import DialogsItemContainer from './DialogsItem/DialogsItemContainer'

const Dialogs =  (props) => {
  return <div className={stylles.item}>
            <div className={stylles.user}>
               <DialogsItemContainer />
             </div>
            <div className={stylles.message}>
                <MessagesContainer />
             </div>
         </div>
}

export default Dialogs;
