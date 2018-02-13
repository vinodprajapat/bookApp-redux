
let bookid=0;

export function addbook(newbook) {
  
    newbook.id = ++bookid;
    console.log(newbook);
    return (dispatch) => {
      dispatch({
        type: 'ADD_BOOK',
        newbook,
      });
    }
  }

  
// export const editbook = (id) => ({
//     type: 'EDIT_BOOK',
//     id
//   })

export const deletebook = (id) => ({
  type: 'DELETE_BOOK',
  id
})
