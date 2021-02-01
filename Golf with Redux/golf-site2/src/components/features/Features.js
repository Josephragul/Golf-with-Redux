import React, { Component } from 'react'
import "./Features.css"
import Form from "./Form"
 class Features extends Component {
   state = {
      currentIndex: -1,
     list: this.returnList()
   };

   returnList() {
     if (localStorage.getItem('transactions') == null)
       localStorage.setItem('transactions', JSON.stringify([]));
     return JSON.parse(localStorage.getItem('transactions'));
   }

   onAddOrEdit = (data) => {
     var list = this.returnList();
     list.push(data);
     localStorage.setItem('transactions', JSON.stringify(list));
     this.setState({list})
   };


  //  handleEdit = index =>{
  //    this.setState({
  //      currentIndex: index
  //    })
  //  }
   render() {
     return (
       <div>
         <Form onAddOrEdit={this.onAddOrEdit} 
           currentIndex = {this.state.currentIndex}
           List = {this.state.List}
         />
         <div className="features-box">
           {this.state.list.map((item,index) => {
             return <tr key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>;
             
              </tr>
           })}

         
           
         </div>
       </div>
     );
   }
 }

export default Features;