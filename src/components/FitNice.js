import React from 'react'
import {FitNiceBody} from './Styled/Styled'

export default function FitNice({fitnice}) {
    return (
        <>
            <FitNiceBody>
                {fitnice.body.toUpperCase()}
            </FitNiceBody>   
        </>
    )
}