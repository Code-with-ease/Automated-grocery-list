import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       customers: []
//     };
//   }

//   componentDidMount() {
//     fetch('/api/customers')
//       .then(res => res.json())
//       .then(
//         (customers) => {
//           this.setState({
//             isLoaded: true,
//             customers: customers
//           });
//         })
//   }
// render(){
//   if(error){
//     return <div>Error in loading</div>
//   }else if (!isLoaded) {
//     return <div>Loading ...</div>
//   }else{
//   return (
//       <div>
//         <h2>Customers</h2>
//         <ul>
//         {customers.map(customer => 
//           <li>{customer.fname} {customer.lname}</li>
//         )}
//         </ul>
//       </div>
//     );
//   }
// }
constructor(){
  super();
  this.state = {
      error : null,
      isLoaded : false,
      customers : []   
  };
}


componentDidMount(){
  // I will use fake api from jsonplaceholder website
  // this return 100 posts 
  fetch('/api/customers')
  .then( response => response.json())
  .then(
      // handle the result
      (customers) => {
          console.log(customers)
          var customer;
          if(!customers){
            customer=[]
          }
          else{
            customer=customers.data
          }
          this.setState({
              isLoaded : true,
              // if(!customers.data){
              customers:customer
              // }
          }
          , () => console.log('Customers fetched...', customers)
          );
      },
      // Handle error 
      (error) => {
          this.setState({
              isLoaded: true,
              error
          })
      },
  )
}
render() {
  // const {error, isLoaded, customers} = this.state;
  if(this.state.error){
      return <div>Error in loading</div>
  }else if (!this.state.isLoaded) {
      return <div>Loading ...</div>
  }else{
      return(
          <div>
            <h2>Customers</h2>
            <ul>
            {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
            </ul>
          </div>
      );
  }

}
}

export default Customers;
