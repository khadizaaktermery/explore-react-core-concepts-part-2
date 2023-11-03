export default function Friend({friend}){
    const{name,email} = friend||{};
    return(
        <div className="box" >
            <h4>Name:{name}</h4>
            <p>Email:{email}

            </p>
        </div>
    )
}
/**
 * 1.state to hold data
 * 2.use effect with dependency array
 * use fetch to load data
 * set loaded data to the state
 * display data on the component
 */