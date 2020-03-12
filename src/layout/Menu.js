import React, { useState } from 'react';
import LabelIcon from '@material-ui/icons/Label';
import { MenuItemLink } from 'react-admin';
import SubMenu from './SubMenu';

const Menu = ({ onMenuClick, dense }) => {
    const [state, setState] = useState({
        menuCatalog: false,
        menuSales: false,
        menuCustomers: false,
    });
    const open = true;
    const handleToggle = (menu) => {
        setState(state => (Object.assign(Object.assign({}, state), { [menu]: !state[menu] })));
    };
    return (
        <div>
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                sidebarIsOpen={open}
                name="List"
                icon={<LabelIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/posts`}
                    primaryText="Users"
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/users`}
                    primaryText="Posts"
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                    to={`/todos`}
                    primaryText="Todos"
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
        </div>
    );
};

export default Menu;
