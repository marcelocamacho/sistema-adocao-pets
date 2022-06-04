import {styled} from '@mui/material';

export const CabecalhoContainer = styled('header')`
  display: flex;
  justify-content: center;
  border-botton: 1px solid #f0f0f0;
  padding: ${({theme})=>theme.spacing(6)};//6*8=48
`;

export const Logo = styled('img')`
  width: 230px;
`;