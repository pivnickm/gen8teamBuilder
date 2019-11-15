import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import * as colors from "../../../data/colors"
import "./_index.scss"

const ListItem = ({ className, item, ...listItemProps }) => {
  const outputClassName = cn(
    className,
    "listItem",
    item.types.map((item, index) => `${item}${index}`).join(" ")
  )
  return (
    <li
      className={outputClassName}
      onClick={() => console.log(item)}
      {...listItemProps}
    >
      <span>{item.name}</span>
      <img
        className={"listItem_image"}
        src={`/pokemon/${item.id}.png`}
        alt={item.name}
      />
    </li>
  )
}

ListItem.displayName = "ListItem"

ListItem.propTypes = {}

ListItem.defaultProps = {}

export default ListItem
