import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { supabase } from "../../helpers/supabaseClient"
import "./Admin.scss"

const Admin = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const [isAuth, setIsAuth] = useState(false)
  const [password, setPassword] = useState("")

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

  // 📥 загрузка отзывов
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("id", { ascending: false })

    if (!error) {
      setReviews(data)
    } else {
      toast.error("Ошибка загрузки")
    }

    setLoading(false)
  }

  useEffect(() => {
    if (isAuth) fetchReviews()
  }, [isAuth])

  // ✅ одобрение
  const approveReview = async (id) => {
    const { error } = await supabase
      .from("reviews")
      .update({ is_approved: true })
      .eq("id", id)

    if (!error) {
      toast.success("Одобрено")
      setReviews((prev) =>
        prev.map((r) =>
          r.id === id ? { ...r, is_approved: true } : r
        )
      )
    } else {
      toast.error("Ошибка")
    }
  }

  // 🗑 удаление
  const deleteReview = async (id) => {
    const confirmDelete = confirm("Удалить отзыв?")
    if (!confirmDelete) return

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id)

    if (!error) {
      toast.success("Удалено")
      setReviews((prev) => prev.filter((r) => r.id !== id))
    } else {
      toast.error("Ошибка удаления")
    }
  }

  // 🔐 экран входа
  if (!isAuth) {
    return (
      <div className="admin-login">
        <h2 className="admin-login__title">Admin Login</h2>

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-login__input"
        />

        <button
          onClick={() => {
            if (password === ADMIN_PASSWORD) {
              setIsAuth(true)
            } else {
              toast.error("Неверный пароль")
            }
          }}
          className="admin-login__btn"
        >
          Войти
        </button>
      </div>
    )
  }

  if (loading) {
    return <p className="admin__loading">Загрузка...</p>
  }

  return (
    <div className="admin">
      <h1 className="admin__title">Отзывы (Admin)</h1>

      <div className="admin__list">

        {reviews.length === 0 && (
          <p className="admin__empty">Нет отзывов</p>
        )}

        {reviews.map((r) => (
          <div key={r.id} className="admin__card">

            <div className="admin__header">
              <div>
                <p className="admin__name">
                  {r.first_name} {r.last_name}
                </p>
                <p className="admin__email">{r.email}</p>
              </div>

              <span
                className={`admin__status ${
                  r.is_approved
                    ? "admin__status--approved"
                    : "admin__status--pending"
                }`}
              >
                {r.is_approved ? "✅ Одобрен" : "⏳ Ожидает"}
              </span>
            </div>

            <p className="admin__message">{r.message}</p>

            <div className="admin__actions">
              {!r.is_approved && (
                <button
                  onClick={() => approveReview(r.id)}
                  className="admin__btn admin__btn--approve"
                >
                  Одобрить
                </button>
              )}

              <button
                onClick={() => deleteReview(r.id)}
                className="admin__btn admin__btn--delete"
              >
                Удалить
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Admin