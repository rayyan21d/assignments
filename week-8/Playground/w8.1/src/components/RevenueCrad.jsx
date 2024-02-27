
export const RevenueCard = ({title, orderCount, amount}) => {

    return <div className="bg-white-500 shadow-lg p-7">
        <div>
            {title}
        </div> ?
        <div className="flex justify-center">
            <div>{orderCount}</div>
            <div>{amount}</div>
        </div>

    </div>;

};
