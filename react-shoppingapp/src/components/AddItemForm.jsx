import "../components/styles/AddItemForm.css";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/listSlice';
import { toggleFormVisibility } from '../store/formSlice';


const AddItemForm = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addItem action
    dispatch(addItem({ itemName, quantity, notes }));

    // Reset form fields
    setItemName('');
    setQuantity(1);
    setNotes('');

    // Hide the form after submission
    dispatch(toggleFormVisibility());
  };

  return (
    <div className="add-item-form-overlay">
      <div className="add-item-form-card">
        <h2>Create New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input 
              id="itemName"
              type="text" 
              placeholder="Item Name" 
              value={itemName} 
              onChange={(e) => setItemName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <select 
              id="quantity" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
              required
            >
              {[...Array(100).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea 
              id="notes"
              placeholder="Additional Notes" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-btn">Add Item</button>
            <button type="button" className="cancel-btn" onClick={() => dispatch(toggleFormVisibility())}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;


