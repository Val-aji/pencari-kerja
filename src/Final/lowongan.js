import Nav from "./nav";
import axios from "axios";
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import Detail from "./detail";
import {Link} from "react-router-dom"


function Lowongan(props) {
    const [data, setData] = useState([])
    
    // get Api
    async function getApiAxios() {
        await axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then(response => {
            props.getApi(response.data.data)
            setData(response.data.data)
            }
        )
    }

    useEffect(() => {
        getApiAxios()
    }, []) 
    // end getApi

    // fitur detail
    const [current, setCurrent] = useState(false)
    const [detail, setDetail] = useState("")
    
    function handleDetail(e) {
        setCurrent(true)
        
        const {value} = e.target
        const [dataDetail] = props.dataApi.filter(i => i.title === value)
    
        setDetail(dataDetail)
    }
    // end fitur detail
    
    // fitur search
    
    const getSearchUser = e => {    
        props.getSearch(e.target.value, setData)
        
    }
    
    
    // end fitur search
    
    
    return (
        <>
        <Nav />
        
        <div className="my-20 flex justify-center" id="detail">
            <input type="text" placeholder="Cari lowongan disini" className="md:w-1/2 outline-green-400 px-4 py-2 rounded border border-2 border-slate-600" onChange={getSearchUser} />
        </div>
        
        
        { current && <Detail data={detail} />}
        
        <div className="bg-white">    
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Lowongan Kerja</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {data.map((value, index) => {
                                return (
                                    
                                    <div key={index} className="group relative">
                                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                                        <img src={value.company_image_url} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                        <div className="w-3/5">
                                            
                    <a href="#detail" >  <button className="text-sm text-start text-gray-700 hover:underline" value={value.title} onClick={handleDetail}>
                                          {value.title}
                                            </button>
                                            </a>
                                            
                                            <p className="mt-1 text-sm text-gray-500">{value.company_name}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">Rp{value.salary_max}</p>
                                        </div>
                                    </div>

                                                
                                    )
                                })}
                                
            	</div>
            </div>
        </div>
        </>
    )
}



const stateData = state => {
    return {
        dataApi: state.dataApi,
        dataSearch: state.dataSearch
    }
}

const actionData = action => {
    return {
        getApi: dataAxios => action({type: "getApi",
         data: dataAxios }),
        
        getSearch: (dataSearch, callBackData) => action({type: "getSearch", data: dataSearch, callBack: callBackData})

    }
}

export default connect(stateData, actionData)(Lowongan);