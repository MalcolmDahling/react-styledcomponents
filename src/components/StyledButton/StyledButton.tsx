import styled from "styled-components";

interface IStyledButtonProps{
    color?:string;
}

export const StyledButton = styled.input.attrs({type:'button'})`
    background-color:red;
    
    color: ${(props:IStyledButtonProps) => props.color || 'black'};
`;