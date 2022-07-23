import React from 'react'
import {Line, COLOUR1, COLOUR2} from './Styled'

export default function FitNice({fitnice,index}) {
    if (!FitNice) return null 
    function isOdd(num) {
        return num % 2 === 1
    }
    return (
        <Line colour={isOdd(index) ? COLOUR1 : COLOUR2}>
            {fitnice.body}
        </Line>
    )
}