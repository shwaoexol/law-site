import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase } from '../../helpers/supabaseClient'
import './ReviewsList.scss'

const ReviewsList = () => {
  const { t } = useTranslation()
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("is_approved", true)
      .order("id", { ascending: false })

    if (!error) {
      setReviews(data)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchReviews()

    const channel = supabase
      .channel('reviews-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'reviews',
        },
        () => {
          fetchReviews()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  if (loading) {
    return <p className="reviews__loading">{t('loading')}...</p>
  }

  return (
    <div className="reviews">
      {reviews.length === 0 && (
        <p className="reviews__empty">
          {t('review')}
        </p>
      )}

      {reviews.map((r) => (
        <div key={r.id} className="reviews__card">

          <p className="reviews__name">
            {r.first_name} {r.last_name}
          </p>

          <p className="reviews__message">
            {r.message}
          </p>

          {r.recommend && (
            <p className="reviews__recommend">
              {t('recommend')}: {r.recommend ? t('yes') : t('no')}
            </p>
          )}

        </div>
      ))}
    </div>
  )
}

export default ReviewsList