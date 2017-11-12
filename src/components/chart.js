import _ from 'lodash';
import React from 'react';
import { Sparklines } from 'react-sparklines';
import { SparklinesLine } from 'react-sparklines';
import { SparklinesReferenceLine } from 'react-sparklines';
//we don't need to make any use of state, so we can use a functional component

//npm install --save lodash
function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}