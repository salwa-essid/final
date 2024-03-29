var users = [
  // {  username:'salwa',
  //  lastname:'essid ',email:'salwa.essid@gmail.com',
  // phone:'27699896',numero:'1', address:'khzema est', password:'salwa123'},
  // {FullName:'mayssa',email:'mayssa.essid@gmail.com',phone:'28965471',numero:'2'}
];
var user = {};
const userReducer = (state = users, action) => {
  switch (action.type) {

    case 'ADD_USER':
      return (
        state.concat({ newuser: action.newuser.newuser })
      )

    case 'EDIT_USER':
      return (
        state.map(el => el.id === action.edituser.id ? el = action.edituser : el)
      )

    case 'REMOVE_USER':
      return (
        state.filter(el => el.id !== action.id)
      )
    case 'USER_INFO':
      return (
        state = action.user
      )
    case 'UPDATE_USER':
      return (
        state = action.users
      )
    default:
      return state
  }
}
export default userReducer