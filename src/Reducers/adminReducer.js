

var admins=[
    // {  adminname:'salwa',
    //  lastname:'essid ',email:'salwa.essid@gmail.com',
    // phone:'27699896',numero:'1', address:'khzema est', password:'salwa123'},
    // {FullName:'mayssa',email:'mayssa.essid@gmail.com',phone:'28965471',numero:'2'}
];
const adminReducer=(state=admins,action)=>
{
  switch(action.type)
  {
    case 'ADD_ADMIN' :
        return (
           state.concat({newadmin:action.newadmin.newadmin})
         
        )

      case 'EDIT_ADMIN':
      return (
          state.map(el=>el._id===action.editadmin._id? el=action.editadmin:el)
      )
      case 'REMOVE_ADMIN':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_ADMIN':
      return(
          state=action.admins
      )
      default :
      return state
  }
}
export default adminReducer