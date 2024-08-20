// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { toggleFormVisibility } from "../store/formSlice";
// import './styles/AddItemForm.css';

// const AddItemForm = ({ containerId, itemId }) => {
//     const dispatch = useDispatch();

//     // Retrieve item from state or use default empty values
//     const item = useSelector(state => state.list.items.find(item => item.id === itemId)) || {};
    
//     // State management for form fields
//     const [itemName, setItemName] = useState(item.itemName || "");
//     const [quantity, setQuantity] = useState(item.quantity || 1);
//     const [notes, setNotes] = useState(item.notes || "");

//     // Update form fields if itemId or item changes
//     useEffect(() => {
//         if (itemId) {
//             setItemName(item.itemName || "");
//             setQuantity(item.quantity || 1);
//             setNotes(item.notes || "");
//         } else {
//             setItemName("");
//             setQuantity(1);
//             setNotes("");
//         }
//     }, [itemId, item.itemName, item.quantity, item.notes]); // Ensure useEffect correctly updates

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Dispatch action based on whether it's an edit or add operation
//         if (itemId) {
//             dispatch(updateItemAsync({ id: itemId, changes: { itemName, quantity, notes, containerId } }));
//         } else {
//             dispatch(addItemAsync({ id: Date.now(), itemName, quantity, notes, containerId }));
//         }

//         dispatch(toggleFormVisibility());
//     };

//     const handleCancel = () => {
//         dispatch(toggleFormVisibility());
//     };

//     return (
//         <div className="add-item-form-overlay">
//             <div className="add-item-form-card">
//                 <h2>{itemId ? "Edit Item" : "Add New Item"}</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="itemName">Item Name</label>
//                         <input
//                             type="text"
//                             id="itemName"
//                             value={itemName}
//                             onChange={(e) => setItemName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="quantity">Quantity</label>
//                         <select
//                             id="quantity"
//                             value={quantity}
//                             onChange={(e) => setQuantity(Number(e.target.value))}
//                             required
//                         >
//                             {[...Array(100).keys()].map(n => (
//                                 <option key={n + 1} value={n + 1}>{n + 1}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="notes">Notes</label>
//                         <textarea
//                             id="notes"
//                             value={notes}
//                             onChange={(e) => setNotes(e.target.value)}
//                         ></textarea>
//                     </div>
//                     <div className="form-buttons">
//                         <button type="submit" className="submit-btn">{itemId ? "Update Item" : "Add Item"}</button>
//                         <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddItemForm;

