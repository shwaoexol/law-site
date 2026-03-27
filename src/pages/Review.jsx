import { useState } from "react"; 
import { supabase } from "../helpers/supabaseClient"; 
import toast from "react-hot-toast"; 
import { useTranslation } from "react-i18next";

export default function Review() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    recommend: "",
    extra: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value, // теперь radio хранит "yes" / "no"
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // защита от двойного клика

    if (!form.first_name.trim() || !form.message.trim()) {
      toast.error(t("review_required"));
      return;
    }

    if (form.email && !form.email.includes("@")) {
      toast.error("Invalid email");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("reviews")
      .insert([form])
      .select();

    setLoading(false);

    if (!error) {
      toast.success(t("review_success"));

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        recommend: "",
        extra: "",
      });
    } else {
      toast.error(t("review_error"));
    }
  };

  return (
    <>
      {/* Оптимизированное изображение */}
      <img
        src="/images/review.webp"
        alt="review"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-full h-[45vh] object-cover"
      />

      <section className="bg-[#f4f4f4] py-16 px-4 flex justify-center">
        <div className="w-full max-w-4xl text-[#5f5f5f]">

          <h2 className="text-4xl text-center mt-3 mb-3 text-[#636260]">
            {t("reviews_title")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid grid-cols-2 gap-4 mb-10">
              <input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder={t("form_name")}
                required
                className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
              />

              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder={t("last_name")}
                className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("email")}
                className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t("phone")}
                className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("reviews_write")}
              required
              className="w-full bg-white border border-[#d6d6d6] p-4 mt-4 min-h-[200px] outline-none shadow-sm"
            />

            <div>
              <p className="mb-3 text-center">
                {t("reviews_recommend")}
              </p>

              <div className="flex justify-evenly gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="recommend"
                    value="yes"
                    checked={form.recommend === "yes"}
                    onChange={handleChange}
                  />
                  {t("yes")}
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="recommend"
                    value="no"
                    checked={form.recommend === "no"}
                    onChange={handleChange}
                  />
                  {t("no")}
                </label>
              </div>
            </div>

            <textarea
              name="extra"
              value={form.extra}
              onChange={handleChange}
              placeholder={t("reviews_additional")}
              className="w-full bg-white border border-[#d6d6d6] p-3 mt-2 min-h-[150px] outline-none"
            />

            <div className="flex justify-end">
              <button
                disabled={loading}
                className={`w-full px-12 py-3 mt-4 font-semibold border ${
                  loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#636260] text-white hover:opacity-90"
                }`}
              >
                {loading ? t("sending") : t("form_submit")}
              </button>
            </div>

            <h5 className="text-center mt-3">
              {t("review_moderation")}
            </h5>

          </form>
        </div>
      </section>
    </>
  );
}