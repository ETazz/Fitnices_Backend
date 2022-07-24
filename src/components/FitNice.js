import React from 'react'
import {FitNiceBody} from './Styled/Styled'

export default function FitNice({fitnice,index}) {
    return (
        <FitNiceBody>
            {fitnice.body}
        </FitNiceBody>
    )
}