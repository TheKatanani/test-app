import styled from 'styled-components'
export const StyleSearchBox=styled.div`
    display: flex;
    align-items:center;
    width:100%;
    height: 40px;
    .input,.iconArea{
      height: 100%;
      margin: 0;
    }
    .input{
      margin: 0;
      flex:1;
      label{
        display: none;
      }
      input{
        border-radius: 8px 0 0 8px;
        height: 100%;
        margin: 0;
      }
    }
    .iconArea{
      border-radius: 0px 8px 8px 0px;
      background-color: ${({theme})=>theme.palette.ColorApp.primary};
      border:1px solid ${({theme})=>theme.palette.ColorApp.border};
      width: 40px;
      svg{
        padding: 12px;
        fill:#fff
      }
    } 
    `
export const SearchForJobStyle=styled.div`
  flex: 1;
  width: 100%;
  .result{
    margin: 12px 0;
    display: flex;
    p{
      color: ${(props)=>props.theme.palette.font};
      font-size: ${(props) => props.theme.fontSizes.body}rem;
      margin-right: 10px;
    }
    span{
      color: ${(props)=>props.theme.palette.ColorApp.primary};
      font-size: ${(props) => props.theme.fontSizes.body}rem;
      margin: 0 12px 0 0;
      position: relative;
      :not(:last-child)::after{
        content:', ';
        position: absolute;
        right: -5px;
        top:50%;
        transform: translateY(-50%);
        color: ${(props)=>props.theme.palette.ColorApp.primary};
        font-size: ${(props) => props.theme.fontSizes.body}rem;
      }
    }
  }
`