import React,{ Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.deleteObj = this.deleteObj.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return false
        }else{
            return true
        }
    }
    render() { 
        return (
            <li onClick={this.deleteObj}>{this.props.avname}为你服务：{this.props.content}</li>
        );
    }
    // 删除
    deleteObj(){
        this.props.deleteList(this.props.index)
    }
}
 XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteList: PropTypes.func
 }
 XiaojiejieItem.defaultProps ={
    avname:"苍老师"
 }
export default XiaojiejieItem;