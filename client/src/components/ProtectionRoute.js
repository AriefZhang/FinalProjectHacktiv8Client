import Swal from 'sweetalert2';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children })=> {
  if (!localStorage.access_token) {
    Swal.fire({
      title: 'Oops!',
      text: 'You must login first',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return <Navigate to={'/'} />
  } else {
    return children
  }
}

export default ProtectedRoute