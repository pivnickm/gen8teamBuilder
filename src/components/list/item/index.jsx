import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import * as colors from "../../../data/colors"
import "./_index.css"

const ListItem = ({ className, item, ...listItemProps }) => {
  const outputClassName = cn(
    className,
    "ListItem",
    item.types.map((item, index) => `${item}${index}`).join(" ")
  )
  return (
    <li className={outputClassName} {...listItemProps}>
      {item.name}
      {item.id}
    </li>
  )
}

ListItem.displayName = "ListItem"

ListItem.propTypes = {}

ListItem.defaultProps = {}

export default ListItem
