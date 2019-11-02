import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { math } from 'polished';

const MenuLink = styled(Link)`
  display: inline;
  font-size: 0.79rem;
  transition: color ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
  &:not(:last-child) {
    margin-right: ${p => p.theme.contentMargin};
  }
  &:hover,
  &.active {
    color: ${p => p.theme.color.accent};
  }
  &.active::after {
    background-color: ${p => p.theme.color.accent};
    border-radius: 50%;
    content: '';
    height: ${p => p.theme.border};
    left: calc(50% - ${p => math(`${p.theme.border} / 2`)});
    position: absolute;
    right: auto;
    top: ${p => p.theme.contentMargin};
    width: ${p => p.theme.border};
  }
`;

const Menu = ({ items, isDark }) => (
  <nav isDark={isDark}>
    {items.map(item => (
      <MenuLink
        className="smallcaps"
        key={item.url}
        to={item.url}
        activeClassName="active"
        partiallyActive={item.hasChildRoutes}
      >
        {item.label}
      </MenuLink>
    ))}
  </nav>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      childRoutes: PropTypes.bool,
    })
  ).isRequired,
  isDark: PropTypes.bool,
};

Menu.defaultProps = {
  isDark: false,
};

export default Menu;
