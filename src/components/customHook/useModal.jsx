// import React, {useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setAlert, setOpen, setRest } from '../redux/modal'

// const useModal = () => {
//   const loading = useSelector(state => state.loading.load)
//   const timer = useSelector(state => state.type.timer)
//   const rest = useSelector(state => state.modal.rest)
//   const alert = useSelector(state => state.modal.alert)
//   const dispatch = useDispatch()

  // useEffect(() => {
  //   if(loading === false && rest === true){
  //       dispatch(setAlert())
  //       setTimeout(() => dispatch(setAlert()), 5000)
  //   } else if(loading === false && alert === true){
  //       dispatch(setOpen())
  //       setTimeout(() => dispatch(setOpen()), 5000)
  //   } return
  // },[rest, alert])
// }

// export default useModal