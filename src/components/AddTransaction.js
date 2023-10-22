import React from 'react'

const AddTransaction = () => {
  return (
    <div>
        <h3>Add new transaction</h3>
        <form action="">
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id='text' placeholder='Enter text....' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount<br/>
                    (negative - expense, positive -income)
                </label>
                <input type="number" id='amount' placeholder='Enter amount....' />
            </div>

            <button className="btn">Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction