const tobooks = (state = [{
    id:1,
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


      default:
        return state
    }
  }
  
  export default tobooks
  