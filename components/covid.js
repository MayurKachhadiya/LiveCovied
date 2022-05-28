import React,{useEffect} from 'react'
import './covid.css';
const Covid = () => {

    const [data, setData] = useState([]);

    const getCoviedData = async () => {
        try{
        const res = await ('https://data.covid19india.org/v4/min/timeseries.min.json');
        console.log(res);
        setData(res);
        }catch (err) {
            console.log(err);
        }
    } 
    useEffect(() => {
       getCoviedData();
    }, []);
    return (
        <>
         <h2>Three Equal Columns</h2>

        <div className="row">
        <div className="column">
            <h2>TOTAL DEATHS</h2>
            <p>{data.deaths}</p>
        </div>
        <div className="column">
            <h2>TOTAL ACTIVE</h2>
            <p>{data.active}</p>
        </div>
        <div className="column">
            <h2>LAST UPDATED</h2>
            <p>{data.lastupdatedtime}</p>
        </div>
        </div>

         </>
    );
}

export default Covid;