import New from '../FirstInfo';
import Head from '../Head';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { newLocation } from "../../redux/location";

function Home() {
    // const length = useSelector((state) => state.length.value);
    // const dispatch = useDispatch();

     // getting user ip locations vv

     // use If Else statements to show the Cost Comparison and other prices, Check if the location is "CANADA" and add else if.

//   const getUserLocationFromAPI = async () => {
//     try {
//       const response = await axios.get(
//         "https://ipgeolocation.abstractapi.com/v1/?api_key=1f32079736c143ef946d98a4dd005733"
//       );
//       dispatch(newLocation(response.data.country));
//       console.log(response.data.country);
//     } catch (error) {
//       console.log("Something went wrong getting Geolocation from API!");
//     }
//   };

//   useEffect(() => {
//     getUserLocationFromAPI();
//   }, []);


    return (
        <>
            <div className="calculator container bg-light-subtle">
                {/* <Head /> */}
                <div className="row align-items-center">
                    <div className="col">
                        <Head />
                    </div>
                    <div className="col text-center">
                        <span className="text-danger fs-2 fw-bold ">New Pontoon <br /> Step by Step Calculator</span>
                    </div>
                </div>
                {/* <FirstInfo />
                <StepOne /> */}
                <New />
            </div>

        </>
    );
}

export default Home;