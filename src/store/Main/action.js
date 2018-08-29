import * as pro from './action-type'

export const getProData = (data)=> {
    return (dispatch) => {
        console.log(Math.floor(data.length/10+1))
        return(fetch('https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/'+Math.floor(data.length/10+1)))
        .then(res => res.json())
        .then(json => {
            console.log(data)
            let data_tmp = data.slice()
            data_tmp = data_tmp.concat(json.results)
            console.log(data_tmp)
            return(dispatch({
                type: pro.GETLISTDATA,
                dataList: data_tmp,
            }))
        })
    }
}
