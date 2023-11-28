import { LoadMore } from "@quansitech/pallas-h5";
import React from "react";
import Util from "../../utils";

import "./index.less";

const genList = (index: number): Array<number> => {
    const list = [];
    for(let i = index * 10 + 1; list.length <= 5; i++){
        list.push(i);
    }
    return list;
}

let index = 0;

export default () => {
    const [ end, setEnd ] = React.useState(false);
    const [ list, setList ] = React.useState(genList(index++));

    const loadMore = async () => {
        if(index > 5){
            setEnd(true);
            index = 0;
        }
        else{
            Util.delayRun(async () => {
                setList([...list, ...genList(index++)]);
            }, 1000);
        }
    }

    return (
        <div className="sample-loadmore">
            { 
                list.map((item, index) => <div className="item-number" key={index}>{item}</div>) 
            }
            <div className="load-more-wrap">
                <LoadMore onLoadMore={loadMore} end={end} />
            </div>
                
        </div>
    )
}