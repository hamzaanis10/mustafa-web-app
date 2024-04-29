// components/TieredMenuStyled.tsx

import styled from "styled-components";
import { TieredMenu } from "primereact/tieredmenu";

const MenuCategoryStyle = styled(TieredMenu)`
  .p-submenu-list{
    padding-top:0;
  }
  .p-menuitem {
    border-bottom: 1px solid #c4c4c4;
  }
  
`;

export default MenuCategoryStyle;
