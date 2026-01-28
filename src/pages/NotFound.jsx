import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
        <div className="not-found">
            <h1>Ошибка 404 страница не найдена</h1>
            <Link to="/">перейти на главную</Link>
        </div>
    </>
  )
}

export default NotFound