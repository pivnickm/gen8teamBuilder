import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import ListItem from "./item"

import "./_index.scss"

const List = ({ className, data, ...listProps }) => {
  const outputClassName = cn(className, "list")
  return (
    <ul className={outputClassName} {...listProps}>
      {data.map((item, index) => (
        <ListItem item={item} />
      ))}
    </ul>
  )
}

List.displayName = "List"

List.propTypes = {}

List.defaultProps = {}

export default List
