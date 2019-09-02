var admins = [
  // {  adminname:'salwa',
  //  lastname:'essid ',email:'salwa.essid@gmail.com',
  // phone:'27699896',numero:'1', address:'khzema est', password:'salwa123'},
  // {FullName:'mayssa',email:'mayssa.essid@gmail.com',phone:'28965471',numero:'2'}
];
var admin = {};
const adminReducer = (state = admins, action) => {
  switch (action.type) {

    case 'ADD_ADMIN':
      return (
        state.concat({ newadmin: action.newadmin.newadmin })
      )

    case 'EDIT_ADMIN':
      return (
        state.map(el => el.id === action.editadmin.id ? el = action.editadmin : el)
      )

    case 'REMOVE_ADMIN':
      return (
        state.filter(el => el.id !== action.id)
      )
    case 'ADMIN_INFO':
      return (
        state = action.admin
      )
    case 'UPDATE_ADMIN':
      return (
        state = action.admins
      )
    default:
      return state
  }
}
export default adminReducer