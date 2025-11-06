const LANGUAGES = {
  en: {
    title: "KTVLuxury Booking",
    bookNow: "Book Now",
    rooms: [
      { name: "Regular Room 1", description: "Standard regular room, stable sound system, ideal for small groups." },
      { name: "Regular Room 2", description: "Regular room with LED lights, good for up to 8 people." },
      { name: "VIP Room 1", description: "Luxury VIP room, premium sound system, comfortable sofas." },
      { name: "VIP Room 2", description: "Spacious VIP room with stage lights and private drinks." },
      { name: "Luxury Room", description: "Royal-style luxury room with 4K screen and premium services." },
    ],
  },
  zh: {
    title: "KTVLuxury 预订网站",
    bookNow: "立即预订",
    rooms: [
      { name: "普通包厢 1", description: "标准普通包厢，音响稳定，适合小团体。" },
      { name: "普通包厢 2", description: "带有LED灯光的普通包厢，适合8人以内。" },
      { name: "VIP 包厢 1", description: "豪华VIP包厢，高级音响，舒适沙发。" },
      { name: "VIP 包厢 2", description: "宽敞VIP包厢，舞台灯光，提供私人饮品服务。" },
      { name: "豪华包厢", description: "皇家风格豪华包厢，配备4K屏幕和高级服务。" },
    ],
  },
  vi: {
    title: "KTVLuxury Đặt Phòng",
    bookNow: "Đặt Ngay",
    rooms: [
      { name: "Phòng Thường 1", description: "Phòng thường tiêu chuẩn, âm thanh ổn định, phù hợp nhóm nhỏ." },
      { name: "Phòng Thường 2", description: "Phòng thường có đèn LED, phù hợp tối đa 8 người." },
      { name: "Phòng VIP 1", description: "Phòng VIP sang trọng, hệ thống âm thanh cao cấp, sofa êm ái." },
      { name: "Phòng VIP 2", description: "Phòng VIP rộng, đèn sân khấu, dịch vụ đồ uống riêng." },
      { name: "Phòng Sang Trọng", description: "Phòng sang trọng phong cách hoàng gia, màn hình 4K, dịch vụ cao cấp." },
    ],
  },
  ko: {
    title: "KTVLuxury 예약 웹사이트",
    bookNow: "지금 예약",
    rooms: [
      { name: "일반룸 1", description: "표준 일반룸, 안정적인 사운드 시스템, 소규모 그룹에 적합." },
      { name: "일반룸 2", description: "LED 조명이 있는 일반룸, 최대 8명까지 적합." },
      { name: "VIP룸 1", description: "럭셔리 VIP룸, 프리미엄 사운드 시스템, 편안한 소파." },
      { name: "VIP룸 2", description: "넓은 VIP룸, 무대 조명, 프라이빗 음료 서비스 제공." },
      { name: "럭셔리룸", description: "로얄 스타일의 럭셔리룸, 4K 스크린, 고급 서비스 제공." },
    ],
  }
};

const SAMPLE_ROOMS = [
  { id: "regular-1", price_per_hour: 21.15, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60" },
  { id: "regular-2", price_per_hour: 23.0, image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=1200&q=60" },
  { id: "vip-1", price_per_hour: 26.53, image: "vip.jpg?auto=format&fit=crop&w=1200&q=60" },
  { id: "vip-2", price_per_hour: 29.99, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=60" },
  { id: "vip-3", price_per_hour: 35.75, image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=60" }
];

function renderRooms(langKey){
  const lang = LANGUAGES[langKey] || LANGUAGES.en;
  document.getElementById('site-title').textContent = lang.title;
  const container = document.getElementById('rooms');
  container.innerHTML = '';
  SAMPLE_ROOMS.forEach((r,i)=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${r.image}" alt="${lang.rooms[i].name}" loading="lazy" />
      <h3>${lang.rooms[i].name}</h3>
      <p>${lang.rooms[i].description}</p>
      <div class="row">
        <strong>$${r.price_per_hour}/h</strong>
        <button class="btn book" data-id="${r.id}">${lang.bookNow}</button>
      </div>
    `;
    container.appendChild(card);
  });

  // attach book handlers
  document.querySelectorAll('.book').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.id;
      alert(`${lang.bookNow} — ${lang.rooms.find((_,idx)=>SAMPLE_ROOMS[idx].id===id)?.name || id}`);
    });
  });
}

// language selector
const sel = document.getElementById('lang-select');
sel.addEventListener('change', ()=>{
  renderRooms(sel.value);
  // update contact header translations
  const map = { en: "Contact / Booking", zh: "联系 / 预订", vi: "Liên hệ / Đặt phòng", ko: "연락 / 예약" };
  const lbls = { en: ["Name","Phone","Message","Send","Reach us at:"], zh:["姓名","电话","留言","发送","联系我们："], vi:["Tên","SĐT","Lời nhắn","Gửi","Liên hệ:"], ko:["이름","전화번호","메시지","보내기","문의하기:"] };
  document.getElementById('contact-title').textContent = map[sel.value] || map.en;
  const l = lbls[sel.value] || lbls.en;
  document.getElementById('lbl-name').textContent = l[0];
  document.getElementById('lbl-phone').textContent = l[1];
  document.getElementById('lbl-msg').textContent = l[2];
  document.getElementById('send-btn').textContent = l[3];
  document.getElementById('lbl-reach').textContent = l[4];
});

// contact form - send by mailto (opens user's email client)
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('inp-name').value.trim();
  const phone = document.getElementById('inp-phone').value.trim();
  const msg = document.getElementById('inp-msg').value.trim();
  const subject = encodeURIComponent(`KTVLuxury booking request from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage:\n${msg}`);
  // recipient from user's request
  const recipient = "baxterjoeryan@gmail.com";
  // open mailto (this will open user's email client)
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

// initialize default language English
renderRooms('en');
