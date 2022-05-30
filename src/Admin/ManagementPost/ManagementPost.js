
function ManagementPost (props) {
   return (
     <>
     <div className="w3-container w3-container city">
       <table className="w3-table-all w3-hoverable">
         <tr className="w3-light-grey">
           <th>STT</th>
           <th>Title</th>
           <th>Content</th>
           <th>Image</th>
           <th>Status</th>
           <th>Action</th>

         </tr>
         {(props.ListProduct).map((product, index) => (
           <tr>
             <td>{index + 1}</td>
             <td>{product.title}</td>
             <td>{product.content}</td>
             <td>
               <img src={product.image} className = "w3-round" width="50%"></img>
             </td>
             <td>{product.status}</td>
             <td>
               <button className="w3-button w3-yellow"
                onClick={() => {
                  props.updateInput(product);
                }}
               >
                 Update
               </button>
               
             </td>
             <td>
             <button className="w3-button w3-red"
                               onClick={() => {
                  props.deleteProduct(product);
                }}
               >
                 Delete
               </button>
             </td>
           </tr>
         ))}
       </table>
       </div>
     </>
   );
}   
export default ManagementPost;