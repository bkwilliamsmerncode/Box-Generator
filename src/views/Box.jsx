export default function Box({ data }) {

    console.log('data', data)

    return (
        <>
            {data.map((item) => ({ ...item, height: item.height + "px", width: item.width + "px" })).map((obj, i) => {
                return <div key={i} style={{ backgroundColor: obj.color, height: obj.height, width: obj.width }}></div>
            })}
        </>
    );
}