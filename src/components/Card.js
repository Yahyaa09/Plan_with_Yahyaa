import { useState } from "react";


function Card(props)
{
    const [Readmore,setReadmore] = useState(false);
    let desc = Readmore? props.info : `${props.info.substring(0,196)}....`;

    let toggleText;
    if (Readmore) {
        toggleText = " Show Less";
    } else {
        toggleText = " Read More";
    }

    function readmoreHandler()
    {
        setReadmore(!Readmore);
    }

    function handleRedirect(id) {
        const urlMap = {
            1: "https://www.tripadvisor.in/Attractions-g297683-Activities-c42-Agra_Agra_District_Uttar_Pradesh.html",
            2: "https://www.tripadvisor.in/Tourism-g304555-Jaipur_Jaipur_District_Rajasthan-Vacations.html",
            3: "https://www.tripadvisor.in/SmartDeals-g297604-Goa-Hotel-Deals.html",
            4: "https://www.tripadvisor.in/Tourism-g297685-Varanasi_Varanasi_District_Uttar_Pradesh-Vacations.html",
            5: "https://www.tripadvisor.in/Tourism-g304557-Darjeeling_Darjeeling_District_West_Bengal-Vacations.html",
            6: "https://www.tripadvisor.in/Tourism-g297667-Jaisalmer_Jaisalmer_District_Rajasthan-Vacations.html",
            7: "https://www.tripadvisor.in/Tourism-g297633-Kochi_Cochin_Ernakulam_District_Kerala-Vacations.html",
            8: "https://www.tripadvisor.in/Tourism-g297618-Manali_Manali_Tehsil_Kullu_District_Himachal_Pradesh-Vacations.html",
            9: "https://www.tripadvisor.in/Tourism-g304552-Shimla_Shimla_District_Himachal_Pradesh-Vacations.html",
            10: "https://www.tripadvisor.in/Tourism-g297679-Ooty_Udhagamandalam_The_Nilgiris_District_Tamil_Nadu-Vacations.html",
            11: "https://www.tripadvisor.in/Tourism-g580106-Rishikesh_Dehradun_District_Uttarakhand-Vacations.html",
            12: "https://www.tripadvisor.in/Tourism-g304553-Mysuru_Mysore_Mysore_District_Karnataka-Vacations.html",
            13: "https://www.tripadvisor.in/Tourism-g297672-Udaipur_Udaipur_District_Rajasthan-Vacations.html",
            14: "https://www.tripadvisor.in/Tourism-g297625-Leh_Leh_District_Ladakh-Vacations.html",
            15: "https://www.tripadvisor.in/Tourism-g297583-Andaman_and_Nicobar_Islands-Vacations.html",
            16: "https://www.tripadvisor.in/Tourism-g303890-Kodaikanal_Dindigul_District_Tamil_Nadu-Vacations.html",
            17: "https://www.tripadvisor.in/Tourism-g297666-Ranthambore_Rajasthan-Vacations.html",
        };        

        window.open(urlMap[id], "_blank");
    }

    return(
    <div className=" w-[400px] h-auto m-[1rem] p-4 flex flex-col rounded-[10px] items-center shadow-custom1 hover:scale-105 transition-all duration-300 hover:shadow-custom2 bg-white">
        <img src={props.image}  className="w-[380px] h-[380px] object-cover"/>
        <div className="tour-info"> 

            <div className="tour-details">
            <h4 className="text-[#1faa59] text-[1.3rem] font-bold">₹ {props.price}</h4>
            <h4 className="text-[1.5rem] font-bold">{props.name}</h4>
            </div>

            <div className="description">
                {desc}
                <span onClick={readmoreHandler} className="text-[#12b0e8] cursor-pointer">
                    {toggleText}
                </span>
            </div>

        </div>
        <button className="w-full mt-[18px] pt-2 pb-2 px-8 border-[1px] cursor-pointer rounded-lg text-[18px] font-bold bg-[#d4f5c1] hover:bg-[green] hover:text-[white] transition-all duration-300" onClick={()=>handleRedirect(props.id)}>Interested</button>
        <button className="w-full mt-[18px] pt-2 pb-2 px-4 border-[1px] cursor-pointer rounded-lg text-[18px] font-bold bg-[#b4161b21] hover:bg-[red] hover:text-[white] transition-all duration-300" onClick={() => props.removeTour(props.id)}>Not Interested</button>
    </div>
        
    );
    

}
export default Card; 