import React from 'react';
import './Homepage.css'; // Make sure to link your CSS file correctly

const Homepage = () => {
  // Define the URL of the image you want to use
  const imageUrl = 'https://scontent.fgyd24-1.fna.fbcdn.net/v/t39.30808-6/294388961_495323959062220_5698983063613058543_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=urrsAYvbya8AX9N16x7&_nc_ht=scontent.fgyd24-1.fna&oh=00_AfCtW9sBpTpOlBSbxCxZCbgV_42mTtBn6czC-iYOzq_dGw&oe=650FA645';

  return (
    <div className="homepage">
      <section className="homepage-header">
        <img src={imageUrl} alt="Məktəb" className="school-photo" />
        <p>Sizin Tərəqqiniz Bizim Üçün Əhəmiyyətlidir.</p>
      </section>

      <section className="homepage-content">
        <h2>Biz Kimik?</h2>
        <p>
          Tərəqqi Liseyi, təhsil müəssəsidir ki, tələbələr üçün ən yaxşı təhsil şəraitlərini yaradır. Məktəbimiz tələbələrə interaktiv təhsil yolu ilə yüksək səviyyədə təhsil imkanları təqdim edir.
        </p>
        <h2>Nə ilə fərqlənirik?</h2>
      </section>

      <section className="homepage-features">
        <div className="feature">
          <h3>Yüksək Təhsil İmkanları</h3>
          <p>
            Tələbələrimiz üçün interaktiv təhsil imkanları ilə yüksək səviyyədə təhsil şəraiti yaradırıq. Tələbələrimiz öyrənərkən öz potensiallarını maksimum dərəcədə nümayiş etdirə bilirlər.
          </p>
        </div>
        <div className="feature">
          <h3>Tələbə Nəzarəti</h3>
          <p>
            Biz tələbələrimizin uğurunu əldə etmələri üçün tələbə nəzarətinə xüsusi diqqət yetiririk. Hər bir tələbəmizin inkişafını və nailiyyətlərini, həmçinin təhsil keyfiyyətini izləyirik.
          </p>
        </div>
        <div className="feature">
          <h3>Nailiyyətlərimiz və Uğurlarımız</h3>
          <p>
            Tələbələrimiz müxtəlif sahələrdə böyük uğurlara nail olur və nailiyyətlər əldə edir. Məktəbimizdə yetişən tələbələrimizin uğurlarını diqqətlə izləyirik və gürurla təqdim edirik.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
