import { useContext } from "react"
import { userContext } from "./context/ContextApp"

export const HomePage =() => {

  const first = useContext(userContext)

    return (
      <>
          <h1>HomePage <small>{first.user?.name}</small></h1>
          <hr />

          <pre>
            {JSON.stringify(first.user, null, 3)}
          </pre>

          <button className="btn-primary">
            Cargar
          </button>
      </>
    )
  }
  