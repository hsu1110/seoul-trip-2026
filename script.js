// Currency Calculator Logic
const rateInput = document.getElementById("exchangeRate");
const twdInput = document.getElementById("inputTWD");
const krwInput = document.getElementById("inputKRW");
const displayRateText = document.getElementById("displayRateText");

function updateCalc(source) {
  const rate = parseFloat(rateInput.value) || 0;
  displayRateText.innerText = rate;

  if (source === "twd") {
    const twd = parseFloat(twdInput.value);
    if (!isNaN(twd)) {
      krwInput.value = Math.round(twd * rate);
    } else {
      krwInput.value = "";
    }
  } else if (source === "krw") {
    const krw = parseFloat(krwInput.value);
    if (!isNaN(krw)) {
      twdInput.value = Math.round(krw / rate);
    } else {
      twdInput.value = "";
    }
  } else if (source === "rate") {
    if (twdInput.value) {
      const twd = parseFloat(twdInput.value);
      krwInput.value = Math.round(twd * rate);
    }
  }
}

if (rateInput) rateInput.addEventListener("input", () => updateCalc("rate"));
if (twdInput) twdInput.addEventListener("input", () => updateCalc("twd"));
if (krwInput) krwInput.addEventListener("input", () => updateCalc("krw"));

// --- DETAILED ITINERARY DATA ---
const itineraryData = [
  {
    day: 1,
    date: "2/04 (三)",
    title: "入境首爾 & 明洞換匯",
    focus: "Logistics & Cash",
    details: [
      {
        time: "11:10",
        icon: "🛬",
        title: "抵達仁川機場 (ICN) T2",
        desc: "CI 0160 抵達。通關約需 1-1.5 小時。領完行李後，尋找 **機場巴士 6015** 售票處或刷 T-money 卡。",
      },
      {
        time: "13:00",
        icon: "🚌",
        title: "前往飯店",
        desc: "搭乘機場巴士 6015 (約 80 分鐘) 直達「忠武路站」。若 3 人以上建議直接叫 **Uber** (約 7-8 萬韓元，省力)。",
      },
      {
        time: "15:00",
        icon: "🏨",
        title: "Wecostay Namsan Check-in",
        desc: "寄放行李或辦理入住。稍作休息，整理輕便包包準備出門。",
      },
      {
        time: "16:00",
        icon: "💰",
        title: "明洞換錢 (重要)",
        desc: "搭地鐵 1 站或步行至明洞。前往 **大使館換錢所** 或 **一品香** (匯率最好)。換完錢手上有現金才安心。",
      },
      {
        time: "17:30",
        icon: "🦀",
        title: "晚餐：Odarijip (醬蟹)",
        desc: "許願清單 A8：**오다리집 간장게장 명동2호점**。享受第一頓韓式醬蟹 (建議先用 Google Map 確認當日排隊狀況)。",
      },
      {
        time: "19:00",
        icon: "🛍️",
        title: "明洞商圈掃街",
        desc: "Olive Young 明洞旗艦店 (先看貨不一定要全買)、ABC Mart、路邊攤小吃 (雞蛋糕、糖餅)。",
      },
      {
        time: "21:00",
        icon: "🥩",
        title: "宵夜備案：Taecho Galbi",
        desc: "許願清單 A12：若晚餐沒吃飽，可去 **태초갈비 명동점** 吃烤排骨。",
      },
    ],
  },
  {
    day: 2,
    date: "2/05 (四)",
    title: "倫敦貝果 & 韓服體驗",
    focus: "Culture & Hotspots",
    details: [
      {
        time: "07:30",
        icon: "🥯",
        title: "London Bagel Museum (安國)",
        desc: "許願清單 A10：**早起排隊戰**。搭地鐵 3 號線至安國站。先去抽號碼牌 (CatchTable)。如果等待時間長，先去下一站。",
      },
      {
        time: "09:00",
        icon: "👘",
        title: "韓服租借：Yes Hanbok",
        desc: "許願清單 B1：前往 **Yes Hanbok** (近景福宮站)。換上美美的韓服，把頭髮編好。",
      },
      {
        time: "10:30",
        icon: "📸",
        title: "景福宮 (Gyeongbokgung)",
        desc: "穿韓服免費入場。避開了週二公休。必拍：光化門、慶會樓。在古宮中留下人生美照。",
      },
      {
        time: "12:30",
        icon: "🐔",
        title: "午餐：土俗村蔘雞湯",
        desc: "許願清單 A3：歸還韓服後，步行至 **土俗村**。觀光客必吃，但翻桌率快。人蔘酒暖身。",
      },
      {
        time: "14:30",
        icon: "🍜",
        title: "下午茶/點心：Silla Jemyun",
        desc: "許願清單 A7：**신라제면 안국점** (辣刀削麵)。如果午餐吃太飽，這餐可改為純逛街或喝咖啡 (Onion/Dotori Garden)。",
      },
      {
        time: "16:00",
        icon: "🏘️",
        title: "北村 & 三清洞",
        desc: "沿著石牆路散步，逛逛三清洞的精緻選物店與畫廊。",
      },
      {
        time: "18:00",
        icon: "🏮",
        title: "益善洞 (Ikseondong)",
        desc: "搭地鐵至鐘路3街。逛益善洞韓屋村的小店。這裡有很多飾品店與復古洋裝店。",
      },
    ],
  },
  {
    day: 3,
    date: "2/06 (五)",
    title: "聖水洞：潮牌與文青麵包",
    focus: "Trend Shopping",
    details: [
      {
        time: "10:00",
        icon: "🍞",
        title: "早午餐：Standard Bread",
        desc: "許願清單 A1：前往聖水洞，第一站 **스탠다드브레드 성수**。享受超人氣吐司與咖啡。",
      },
      {
        time: "11:30",
        icon: "✨",
        title: "聖水洞地標巡禮",
        desc: "Dior Seongsu (外觀打卡)、Tamburins (香氛)、Kinfolk。這一區非常好拍。",
      },
      {
        time: "13:00",
        icon: "🍲",
        title: "午餐：Muguok (武橋)",
        desc: "許願清單 A11：**무구옥** (湯飯)。如果想吃西式，聖水洞也有很多義大利麵選擇。",
      },
      {
        time: "14:30",
        icon: "🛍️",
        title: "深度購物：Matin Kim & More",
        desc: "逛 House of Byne (Matin Kim), Marithe, ADER Error, LCDC 複合文化空間。錢包請準備好！",
      },
      {
        time: "17:30",
        icon: "☕",
        title: "下午茶/休息",
        desc: "聖水洞咖啡廳極多，隨意挑選一家順眼的 (如: Grandpa Factory, Onion Seongsu)。",
      },
      {
        time: "19:00",
        icon: "🚇",
        title: "返回飯店/忠武路",
        desc: "提著戰利品回飯店放。",
      },
      {
        time: "20:30",
        icon: "🍗",
        title: "宵夜：BHC 炸雞",
        desc: "許願清單 C5：**BHC치킨 충무로역점**。離住宿點超近，走路去吃 Buringcle (起司粉炸雞) 配啤酒。",
      },
    ],
  },
  {
    day: 4,
    date: "2/07 (六)",
    title: "弘大延南洞：醬蟹與派",
    focus: "Foodie & Youth",
    details: [
      {
        time: "11:00",
        icon: "🦀",
        title: "早午餐：真味食堂 (Jinmi)",
        desc: "許願清單 A2：**진미식당** (麻浦區)。*務必提前請飯店或信用秘書預約*。米其林推薦醬蟹。若訂不到改去弘大吃其他醬蟹。",
      },
      {
        time: "13:00",
        icon: "🥧",
        title: "甜點：Parole & Langue",
        desc: "許願清單 A6：**파롤앤랑그** (延南洞)。非常有名的玉米派/栗子派。延南洞還有很多文創小店可逛。",
      },
      {
        time: "15:00",
        icon: "🛍️",
        title: "弘大商圈 (Hongdae)",
        desc: "從延南洞走回弘大入口站。逛 AK Plaza, Gentle Monster, Shoopen, Object, Butter。",
      },
      {
        time: "17:00",
        icon: "☕",
        title: "咖啡：Gobongdang",
        desc: "許願清單 A9：**고봉당 혜화** (如果是在大學路分店，需搭地鐵前往；若只想在弘大，可改去延南洞其他咖啡廳)。建議留在弘大繼續逛。",
      },
      {
        time: "19:00",
        icon: "🥩",
        title: "晚餐：The Giwa Hapjeong",
        desc: "許願清單 A4：**더기와 합정점**。在合井站附近的精緻烤肉店，環境比弘大一般烤肉店好，適合好好吃肉。",
      },
      {
        time: "21:00",
        icon: "🎤",
        title: "弘大 Busking",
        desc: "週六晚上的弘大步行街最熱鬧，看完街頭表演後回飯店。",
      },
    ],
  },
  {
    day: 5,
    date: "2/08 (日)",
    title: "汝矣島百貨 & 東大門",
    focus: "Last Shopping",
    details: [
      {
        time: "10:30",
        icon: "🏢",
        title: "The Hyundai Seoul",
        desc: "搭地鐵至汝矣島站。首爾最大百貨。**B2 Creative Ground** 是年輕潮牌大本營 (Thisisneverthat, Nice Weather)。",
      },
      {
        time: "13:00",
        icon: "🍔",
        title: "午餐：百貨內美食",
        desc: "推薦 Five Guys (B1) 或其他美食街排隊名店。記得先用機器候位。",
      },
      {
        time: "16:00",
        icon: "🍜",
        title: "晚餐：Hani Kalguksu",
        desc: "許願清單 A5：**하니칼국수** (新堂站)。非常有名的魚卵刀削麵，外觀很復古。",
      },
      {
        time: "18:00",
        icon: "💎",
        title: "東大門飾品批發",
        desc: "前往 **NYU NYU** 或 **Mimi Line** (新堂站走過去不遠)。整棟的飾品牆，價格便宜，適合買回來送人。",
      },
      {
        time: "20:00",
        icon: "🛒",
        title: "最後補貨",
        desc: "如果還有力氣，可去附近的 DDP 設計廣場拍照。",
      },
      {
        time: "22:00",
        icon: "🍯",
        title: "最後宵夜：Kyochon 炸雞",
        desc: "許願清單 C1/C2：回到飯店，請櫃檯幫忙或用 Uber Eats 叫 **Kyochon (橋村)** 蜂蜜炸雞外送。完美 Ending。",
      },
    ],
  },
  {
    day: 6,
    date: "2/09 (一)",
    title: "打包返程 (金浦機場)",
    focus: "Departure",
    details: [
      {
        time: "09:00",
        icon: "📦",
        title: "Check-out",
        desc: "辦理退房。確認護照、錢包、隨身電源。",
      },
      {
        time: "09:30",
        icon: "🚕",
        title: "前往金浦機場 (GMP)",
        desc: "請注意：**回程是金浦，不是仁川！** 建議搭 **Uber/計程車** (約 40 分鐘) 或地鐵 5 號線 (乙支路4街->金浦機場)。",
      },
      {
        time: "10:30",
        icon: "🛂",
        title: "機場報到 & 退稅",
        desc: "華航 CI 0261 (13:45 起飛)。金浦機場人較少，但仍建議提早處理退稅單據 (Kiosk 掃描)。",
      },
      {
        time: "12:00",
        icon: "🍽️",
        title: "機場午餐",
        desc: "金浦機場樂天購物中心 (Lotte Mall) 就連著機場，如果有時間可以在那邊吃最後午餐。",
      },
      {
        time: "13:45",
        icon: "✈️",
        title: "飛機起飛",
        desc: "帶著滿滿的戰利品與回憶，飛往台北松山 (TSA)。",
      },
    ],
  },
];

// Chart.js Configuration

// Itinerary Rendering Logic
let currentDayIndex = 0;

function renderDayTabs() {
  const tabsContainer = document.getElementById("dayTabs");
  tabsContainer.innerHTML = "";

  itineraryData.forEach((day, index) => {
    const isSelected = index === currentDayIndex;
    const btn = document.createElement("button");
    // Updated Button Styling
    btn.className = `flex-shrink-0 px-6 py-4 rounded-xl text-left transition-all duration-200 border-2 min-w-[120px] ${
      isSelected
        ? "bg-rose-500 border-rose-500 text-white shadow-lg transform -translate-y-1"
        : "bg-white border-stone-200 text-stone-500 hover:border-rose-300 hover:text-rose-500"
    }`;
    btn.innerHTML = `
            <span class="block text-xs font-bold uppercase opacity-80 mb-1">Day ${day.day}</span>
            <span class="block text-sm font-bold truncate">${day.date.split(" ")[0]}</span>
        `;
    btn.onclick = () => {
      currentDayIndex = index;
      renderDayTabs();
      renderItineraryContent();
    };
    tabsContainer.appendChild(btn);
  });
}

function renderItineraryContent() {
  const contentContainer = document.getElementById("itineraryContent");
  const data = itineraryData[currentDayIndex];

  let html = `
        <div class="p-8 bg-gradient-to-r from-stone-50 to-white border-b border-stone-100">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-3xl font-bold text-stone-900 mb-2">${data.title}</h3>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                        ✨ 今日重點：${data.focus}
                    </span>
                </div>
                <div class="hidden sm:block text-5xl opacity-20 filter grayscale transform rotate-12">
                    ${currentDayIndex === 0 ? "✈️" : currentDayIndex === 2 ? "🛍️" : currentDayIndex === 3 ? "🦀" : "🇰🇷"}
                </div>
            </div>
        </div>
        <div class="p-6 sm:p-8 relative">
            <!-- Data Loop -->
            <div class="space-y-0">
    `;

  data.details.forEach((item, index) => {
    const isLast = index === data.details.length - 1;
    html += `
            <div class="relative pl-16 pb-8 ${isLast ? "last-item" : ""}">
                <!-- Timeline Line -->
                <div class="timeline-line"></div>
                
                <!-- Icon -->
                <div class="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-2 border-rose-100 text-2xl flex items-center justify-center shadow-sm z-10">
                    ${item.icon}
                </div>

                <!-- Content -->
                <div class="pt-1">
                    <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                        <span class="font-bold text-rose-500 font-mono text-lg">${item.time}</span>
                        <h4 class="font-bold text-stone-900 text-lg">${item.title}</h4>
                    </div>
                    <div class="bg-stone-50 rounded-xl p-4 border border-stone-100 text-stone-600 text-sm leading-relaxed hover:bg-white hover:shadow-md transition-all duration-200">
                        ${item.desc}
                    </div>
                </div>
            </div>
        `;
  });

  html += `</div></div>`;
  contentContainer.innerHTML = html;
}

// Scroll helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Address Copy
function copyAddress() {
  const address =
    "위코스테이 남산\n\n[舊式] 서울 중구 필동1가 43-1\n[新式] 서울 중구 충무로 3";
  const el = document.createElement("textarea");
  el.value = address;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("✅ 地址已複製！\n\n" + address);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderDayTabs();
  renderItineraryContent();
});

// Back to Top Logic
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "translate-y-10");
  } else {
    backToTopBtn.classList.add("opacity-0", "translate-y-10");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
