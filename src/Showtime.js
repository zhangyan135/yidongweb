import React,{Component,Fragment} from 'react';
//函数定义组件 （无生命周期函数）
//当只是渲染结构时候，没有逻辑
// function Hello( props ) {  
//      return <h1>Hello { props.name }</h1> 
//     } 
//       ReactDOM.render(  <Hello name="React"/>, document.getElementById('root') );  
function Todo(props){
    return (
        <div>
           {/* 条件渲染 */}
               {/* 1、三步运算符 */}
            {props.list.length>=5?<h1>你好</h1>:''}    
               {/* 2、 短路   */}
            {/* {props.list.length>=5&&<h1>你好</h1>} */}
          
            <ul>
                {/* 循环渲染 */}              
                {/* {
                    props.list.map(function(str,index){
                        if(index%2===0){
                            return <li key={str}>{str}</li>
                        }
                    
                    })
                } */}
                { props.list.map(
                        (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

//类定义组件
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleString()
        }
        //绑定this
        this.handleClick=this.handleClick.bind(this);
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot');
    }
    componentDidUpdate(){
        console.log('didUpdate');
    }
    handleClick=(i,e)=>{
        console.log(this);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        return (
            //Fragment 是一个容器，不会出现在DOM树中
            <Fragment>
                {/* <div onClick={()=>{
                    console.log(1);
                }}>{this.state.time}</div> */}
                <div onClick={(e)=>this.handleClick(1,e)}>{this.state.time}</div>
                {/* <div onClick={this.handleClick}>{this.state.time}</div> */}
                <div>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,2333)}>hello{this.props.word}</div>
            </Fragment>
        )
    }
}
//默认导出，只能导出一个，导入和导出可以名字不一样
export default ShowTime;
//命名导出,可以导出多个，导出和导入名字必须相同
//export {ShowTime}
//export {ABC}

