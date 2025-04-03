import { Header } from "./Header"

function Profile() {

    return (
      <>
      <Header />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className='text-center'> Profile! </p>
          </div>
      </>
    )
  }
  
  export default Profile