// code your solution here

const record = [
    // { year: "2018", result: "N/A" },
    // { year: "2017", result: "N/A" },
    // { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
]


function superbowlWin(record) {
    const findMe = record.find((item) => {

        return (item['result'] === 'W')


    })


    return findMe ? findMe.year : undefined


}

superbowlWin(record)