var plugs = [
    
  ];
  var plug = {};
  const plugReducer = (state = plugs, action) => {
    switch (action.type) {
  
      case 'ADD_PLUG':
        return (
          state.concat({ newplug: action.newplug.newplug })
        )
  
      case 'EDIT_PLUG':
        return (
          state.map(el => el.id === action.editplug.id ? el = action.editplug : el)
        )
  
      case 'REMOVE_PLUG':
        return (
          state.filter(el => el.id !== action.id)
        )
      case 'PLUG_INFO':
        return (
          state = action.plug
        )
      case 'UPDATE_PLUG':
        return (
          state = action.plugs
        )
      default:
        return state
    }
  }
  export default plugReducer