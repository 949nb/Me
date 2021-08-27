import React from 'react'
import { ContextCardWrapper } from './StyleComponent'

export const ContextCard: React.FC = (props) => {
    const {children, ...rest} = props
    return (
        <ContextCardWrapper {...rest}>
            {children}
        </ContextCardWrapper>
    )
}