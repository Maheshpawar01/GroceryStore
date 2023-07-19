import React from 'react'
import './YourOrders.css'

const YourOrders = () => {

    const data = [
        {
            id: 12345,
            date:'15/07/2023',
            status:'Delivered',
            total:1000
        },
        {
            id: 123456,
            date:'5/07/2023',
            status:'On the way',
            total:11000
        },
        {
            id: 1234567,
            date:'1/07/2023',
            status:'Delivered',
            total:3000
        },
        {
            id: 12345678,
            date:'2/08/2023',
            status:'cancelled',
            total:100
        },
        {
            id: 12345,
            date:'15/07/2023',
            status:'Delivered',
            total:1000
        },
        {
            id: 123456,
            date:'5/07/2023',
            status:'On the way',
            total:11000
        },
        {
            id: 1234567,
            date:'1/07/2023',
            status:'Delivered',
            total:3000
        },
        {
            id: 12345678,
            date:'2/08/2023',
            status:'cancelled',
            total:100
        },
    ]
  return (
    <div className='yourorders'> 
      <h1 className="mainhead1">Your Orders</h1>

      <table>
        <thead>
            <tr>
                <th>Order Id</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        
        <tbody>
            {data.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>
                           <p>
                            {item.status == 'Delivered' && <span className='greendot'></span>}
                            {item.status == 'On the way' && <span className='yellowdot'></span>}
                            {item.status == 'cancelled' && <span className='reddot'></span>}
                            {item.status}</p>
                        </td>
                        <td>₹ {item.total}</td>
                        <td><button className="mainbutton1">view</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
       
    </div>
  )
}

export default YourOrders