const tobooks = (state = [{
    id:0,
    name:"Java",
    author:"KK ",
    publisher:"Amazon",
    price: 50

    }], action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [
          ...state,
          action.newbook
        ]
      case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.id);

      default:
        return state
    }
  }
  
  export default tobooks
  