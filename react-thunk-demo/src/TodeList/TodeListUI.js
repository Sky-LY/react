import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodeListUI = (props) => {
    return(
        <div style={{margin:'10px'}}>
            <div style={{marginBottom:"10px"}}>
                <Input 
                    placeholder="Write Something" 
                    style={{width:'250px',marginRight:'10px'}} 
                    value = {props.inputValue}
                    onChange = {props.inputChange}
                />
                <Button type='primary' onClick={props.addItem}>primary</Button>
            </div>
            <div style={{width:'340px'}}>
                <List 
                    bordered
                    dataSource={props.list}
                    renderItem = {(item, index) => (
                        <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default TodeListUI