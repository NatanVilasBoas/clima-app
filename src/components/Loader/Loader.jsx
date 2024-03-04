import { Oval } from "react-loader-spinner";

const Loader = () => {
    return(
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Oval
            visible={true}
            height="80"
            width="80"
            color="#5DB678"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
    )
}

export default Loader;