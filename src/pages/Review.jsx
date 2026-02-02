import { useState } from "react";
import { supabase } from "../helpers/supabaseClient";
import toast from "react-hot-toast";

export default function Review() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    recommend: null,
    extra: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "radio" ? value === "yes" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.first_name || !form.message) {
      toast.error("Заполните обязательные поля");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("reviews").insert([form]);

    setLoading(false);

    if (!error) {
      toast.success("Спасибо за отзыв 💚");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        recommend: null,
        extra: "",
      });
    } else {
      toast.error("Ошибка отправки");
    }
  };

  return (
  <>
    {/* ФОТО СВЕРХУ */}
    <section
      className="w-full h-[45vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/review.jpg')" }}
    />

    {/* ФОРМА */}
    <section className="bg-[#f4f4f4] py-16 px-4 flex justify-center">
      <div className="w-full max-w-4xl text-[#5f5f5f]">

        <h2 className="text-4xl text-center mt-3 mb-3 text-[#636260]">
          Ваши впечатления о работе с адвокатом
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Имя / Фамилия */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <input 
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
            />

            <input 
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Фамилия"
              className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
            />

            <input 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Эл. почта"
              className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Телефон"
              className="w-full bg-white border border-[#d6d6d6] p-3 outline-none"
            />
          </div>


          {/* Отзыв */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Напишите отзыв"
            className="w-full bg-white border border-[#d6d6d6] p-4 mt-4 min-h-[200px] outline-none shadow-sm"
          />


          {/* Радио */}
          <div>
            <p className="mb-3 text-center">Вы бы рекомендовали нас?</p>
            <div className="flex justify-evenly gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="recommend" value="yes" onChange={handleChange} />
                Да
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="recommend" value="no" onChange={handleChange} />
                Нет
              </label>
            </div>
          </div>

          {/* Доп поле */}
          <textarea
            name="extra"
            value={form.extra}
            onChange={handleChange}
            placeholder="Хотите что-то добавить?"
            className="w-full bg-white border border-[#d6d6d6] p-3 mt-2 min-h-[150px] outline-none"
          />

          {/* Кнопка */}
          <div className="flex justify-end">
            <button 
              disabled={loading}
              className={`w-3/1 px-12 py-3 mt-4 font-semibold border ${
                loading
                  ? "bg-gray-300"
                  : "bg-[#636260] text-white hover:opacity-90"
              }`}
            >
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </div>
          <h5 className="text-center mt-3">*Размещение отзывов осуществляется после проверки модератором</h5>
        </form>
      </div>
    </section>
  </>
);



}
