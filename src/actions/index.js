export function addbook() {
    return (dispatch, State) => {
     // const form =State.form.book;
      console.log(State.form);
      const newbook = {
          id:5,
        name: "km",
        author: "ckdkn",
        publisher: "dnjd",
        price: 4
      };
      dispatch({
        type: 'ADD_BOOK',
        newbook,
      });
    }
  }

//   export function addEmployee() {
//     return (dispatch, getState) => {
//       const form = getState().form;
//       const employee = {
//         name: form.employee.name.value,
//         surname: form.employee.surname.value,
//       };
//       dispatch({
//         type: ADD_EMPLOYEE,
//         employee,
//       });
//     }
//   }

// export const addbook = (text) => ({
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   })

export const editbook = (id) => ({
    type: 'EDIT_BOOK',
    id
  })

export const deletebook = (id) => ({
  type: 'DELETE_BOOK',
  id
})
