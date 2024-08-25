import Card from "./Card";


function Tours({ tours, removeTour }) {
    return (
        <div className="flex items-center flex-col bg-[#EEE9D1]">
            <h2 className="text-[#598493] m-[6vh] text-[2.7rem] shadow-custom1 rounded-[20px] px-[3vw] font-new-amsterdam text-center lg:text-[3.5rem] bg-[url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm8wMzI4bm95emp1OGR2ZmQxMHRyaTU4ZmY5OGRzN2FpbzV6NWJ2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jCYBYtLNI3Qqbu/giphy.webp')] bg-cover bg-center">
                Plan with Yahyaa
            </h2>
            <div className="flex justify-center items-center flex-wrap max-w-[1300px] ">
                {tours.map((tour) => (
                    <Card key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;

