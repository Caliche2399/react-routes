import { useContext } from "react"
import { userContext } from "./context/ContextApp"

export const LoginPage =() => {

  const {user, setUser} = useContext(userContext)

    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre>
            {JSON.stringify(user, null, 3)}
          </pre>

          <button onClick={() => setUser({id:123, user:'carlos', email:'carlos@MediaList.com'})} className="btn-primary">
            Cargar
          </button>
      </>
    )
  }
  