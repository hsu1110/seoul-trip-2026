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
    title: "Day 1: 登陸部署 & 明洞偵查",
    focus: "入境、換匯、龍鬚糖小哥、米其林晚餐",
    details: [
      {
        time: "11:15",
        icon: "🛬",
        title: "抵達仁川機場 (T2)",
        desc: "CI 0160 降落。T2 入境大廳挑高且自動化程度高，預計 12:30 前完成通關。<br><strong>任務：</strong>前往 B1 交通中心尋找 28 號月台購票 [2, 3]。"
      },
      {
        time: "12:30",
        icon: "🚌",
        title: "移動：機場巴士 6015",
        desc: "由 T2 直達忠武路，避開地鐵換乘樓梯。<br><strong>費用：</strong>17,000 KRW (建議櫃檯或機台購票)。<br><strong>亮點：</strong>途經仁川大橋與漢江風景 [3, 8]。"
      },
      {
        time: "14:00",
        icon: "🏨",
        title: "Wecostay Namsan (寄放行李)",
        desc: "位於忠武路站附近。利用飯店 Luggage Storage 服務先寄放行李，輕裝前往明洞 [1, 4]。"
      },
      {
        time: "14:40",
        icon: "💰",
        title: "明洞換匯戰略",
        desc: "步行至中國大使館前換錢所 (明洞 5 號出口方向)。<br><strong>策略：</strong>比較 2-3 家匯率 (差距極小)，選擇人少者即可，需備妥護照 [9, 10]。"
      },
      {
        time: "15:00",
        icon: "🍢",
        title: "下午茶：明洞街頭小吃",
        desc: "撫慰旅途疲憊的熱量補給。<br><strong>必吃：</strong>堅果糖餅 (Hotteok)、雞蛋糕 (Gyeran-ppang)、可頌鯛魚燒 [5, 6]。"
      },
      {
        time: "15:30",
        icon: "💄",
        title: "購物 1：Olive Young 旗艦店",
        desc: "明洞城 (Myeongdong Town) 全球旗艦店。<br><strong>鎖定：</strong>Torriden 精華、Round Lab 獨島系列。<br><strong>提示：</strong>滿 30,000 KRW 可享即時退稅 (Immediate Tax Refund) [6]。"
      },
      {
        time: "16:30",
        icon: "🥜",
        title: "購物 2：HBAF 杏仁果店",
        desc: "體驗宛如主題樂園的堅果店。<br><strong>推薦：</strong>蜂蜜奶油、烤玉米口味。店內可自由試吃並與公仔拍照 [11]。"
      },
      {
        time: "17:00",
        icon: "🍯",
        title: "朝聖：龍鬚糖小哥 (Kkultarae)",
        desc: "<strong>地點：</strong>Noon Square 購物中心前方 (靠近 Zara)。<br><strong>互動：</strong>Youtube 熱點，小哥戴著獨特帽子，會唱著魔性的「Incheon Inje~ (仁川麟蹄)」口號與遊客互動。<br><strong>任務：</strong>買一盒龍鬚糖並錄影留念。"
      },
      {
        time: "17:30",
        icon: "🍜",
        title: "晚餐：明洞餃子 (Myeongdong Kyoja)",
        desc: "米其林必比登推薦，在地人也排隊的老字號。<br><strong>必點：</strong>濃厚雞湯刀削麵 (Kalguksu)、蒸餃。<br><strong>特色：</strong>極其辛辣的大蒜泡菜 (Garlic Kimchi) [7, 12]。"
      },
      {
        time: "18:30",
        icon: "🛍️",
        title: "購物 3：Daiso 明洞站店",
        desc: "12 層樓高的垂直購物塔。<br><strong>攻略：</strong>搭電梯直達 12 樓，走樓梯逛下來。必看 4F 迪士尼聯名區與 2F 美妝蛋/微針精華 [13]。"
      },
      {
        time: "19:30",
        icon: "🚶",
        title: "歸途：步行回飯店",
        desc: "沿退溪路 (Toegye-ro) 直行約 10 分鐘即可返回 Wecostay，無需再搭地鐵 [1, 12]。"
      },
      {
        time: "21:30",
        icon: "🍗",
        title: "宵夜：BHC 炸雞 (忠武路店)",
        desc: "位置：靠近忠武路站 2 號出口。<br><strong>必點：</strong>Bburinkle (芝士粉炸雞) + 芝士球 (Cheese Balls)。<br>可外帶回飯店吃。"
      }
    ]
  },
  {
    day: 2,
    date: "2/05 (四)",
    title: "Day 2: 安國早起戰 & 東大門批發",
    focus: "貝果排隊、韓服、批發市場",
    details: [
      {
        time: "07:15",
        icon: "⏰",
        title: "起床與出發",
        desc: "搭地鐵 3 號線：忠武路 ➜ 安國站 (Anguk)，由 2 號出口出站。"
      },
      {
        time: "07:40",
        icon: "🥯",
        title: "戰術排隊：London Bagel Museum",
        desc: "<strong>目標：</strong>08:00 開門，務必於 07:40 前抵達現場登記 Catchtable。<br><strong>必點：</strong>蔥韭菜貝果 (Spring Onion)、馬鈴薯起司貝果。<br><em>備案：若排太久，轉戰隔壁 Artist Bakery (鹽麵包)。</em>"
      },
      {
        time: "09:30",
        icon: "👘",
        title: "韓服體驗：宮女狐 (Palace Fox)",
        desc: "位置：景福宮站 2 號出口旁。建議加購毛披肩保暖。<br>隨後進入<strong>景福宮</strong> (穿韓服免門票)，避開正殿人潮，往香遠亭拍攝。"
      },
      {
        time: "12:30",
        icon: "🐔",
        title: "午餐：土俗村蔘雞湯",
        desc: "景福宮站 2 號出口附近。雖然要排隊但翻桌快。冬季補身必吃。"
      },
      {
        time: "14:00",
        icon: "☕",
        title: "北村 & 三清洞散策",
        desc: "穿越景福宮東側圍牆。造訪北村八景 (第5、6景)。下午茶推薦：Osulloc Tea House 或 Green Mile Coffee。"
      },
      {
        time: "17:00",
        icon: "🐙",
        title: "晚餐：新羅製麵 (Silla Jemyeon)",
        desc: "地點：益善洞 (鍾路三街站)。<br><strong>必點：</strong>章魚拌麵 (Nakji Bibim Kalguksu)。視覺衝擊強，微辣開胃。"
      },
      {
        time: "18:30",
        icon: "🌃",
        title: "東大門 DDP & 批發市場",
        desc: "從益善洞搭計程車至東大門 (約 10 分鐘)。<br>1. <strong>DDP：</strong>欣賞太空船建築夜景。<br>2. <strong>nyu nyu：</strong>必逛飾品批發 (款式上萬種)。<br>3. <strong>THE MASK SHOP：</strong>美妝批發補貨。"
      }
    ]
  },
  {
    day: 3,
    date: "2/06 (五)",
    title: "Day 3: 聖水洞工業風 & 馬場洞韓牛",
    focus: "潮牌巡禮、頂級牛肉",
    details: [
      {
        time: "09:30",
        icon: "☕",
        title: "早晨：Cafe Onion 聖水店",
        desc: "聖水站 2 號出口。廢墟工業風名店。必點：Pandoro (雪山麵包)。"
      },
      {
        time: "10:30",
        icon: "✨",
        title: "品牌巡禮 Part 1",
        desc: "<strong>Dior Seongsu：</strong>概念店外觀拍照。<br><strong>Tamburins：</strong>獨特混凝土建築，買香氛/護手霜。<br><strong>Stand Oil：</strong>平價設計包款。"
      },
      {
        time: "13:00",
        icon: "🍲",
        title: "午餐：傳說中的馬鈴薯排骨湯",
        desc: "店名：Sommunnan Gamjatang (祖傳馬鈴薯排骨湯)。<br>聖水站 4 號出口旁。白鐘元推薦，肉嫩湯濃。"
      },
      {
        time: "14:00",
        icon: "🧢",
        title: "品牌巡禮 Part 2",
        desc: "<strong>EMIS：</strong>買棒球帽。<br><strong>Mardi Mercredi：</strong>(29CM Seongsu 選品店)。<br><strong>Standard Bread：</strong>爆紅生吐司專賣店。"
      },
      {
        time: "17:00",
        icon: "🥩",
        title: "晚餐：馬場洞韓牛 (Majang-dong)",
        desc: "從聖水搭計程車至馬場畜產物市場 (約 10-15 分)。<br><strong>推薦餐廳：</strong>馬場谷 (Majanggol)。<br><strong>模式：</strong>一樓挑肉 (1++等級)，二樓代烤。<br><strong>必吃：</strong>雪花里肌 (Salchisal)。"
      },
      {
        time: "20:00",
        icon: "🛏️",
        title: "返程休息",
        desc: "本日步行量大，建議早點回飯店休息整理戰利品。"
      }
    ]
  },
  {
    day: 4,
    date: "2/07 (六)",
    title: "Day 4: 漢南洞名媛路線",
    focus: "高端潮牌、釜飯、梨泰院",
    details: [
      {
        time: "10:00",
        icon: "🍳",
        title: "移動與早午餐",
        desc: "地鐵：漢江鎮站 (Hangangjin) 3 號出口。<br>餐廳：Summer Lane (澳式) 或 LTP Hannam。"
      },
      {
        time: "12:00",
        icon: "🛍️",
        title: "漢南洞品牌街 (由高往低走)",
        desc: "戰術動線：從 3 號出口沿大馬路走到現代卡音樂圖書館旁階梯往下。<br>1. <strong>Mardi Mercredi：</strong>小雛菊衛衣大本營。<br>2. <strong>Rockfish：</strong>英倫雨靴/芭蕾鞋。<br>3. <strong>Marithé (Villa de Marithé)：</strong>旗艦店極美。<br>4. <strong>EMIS：</strong>漢南旗艦店。"
      },
      {
        time: "16:00",
        icon: "🍚",
        title: "晚餐：Solsot 漢南店 (釜飯)",
        desc: "<strong>注意：</strong>17:00 晚餐時段開始，強烈建議 16:30 先去排隊或登記 Catchtable。<br><strong>必點：</strong>牛排釜飯 (Steak Pot Rice)、鯛魚干貝釜飯。<br>飯後記得喝鍋巴湯 (Nurungji)。"
      },
      {
        time: "17:30",
        icon: "🍸",
        title: "梨泰院夜遊",
        desc: "步行至梨泰院主街，感受異國酒吧氛圍。"
      },
      {
        time: "20:30",
        icon: "🍗",
        title: "宵夜：60 雞 (新堂/藥水)",
        desc: "回程順路 (或外送)。<br><strong>必點：</strong>老虎炸雞 (Horangi - 蒜片甜辣) 或 Gochu (辣椒) 炸雞。"
      }
    ]
  },
  {
    day: 5,
    date: "2/08 (日)",
    title: "Day 5: 望遠市場巡禮 & 弘大商圈 & 汝矣島現代百貨",
    focus: "排隊名店、文創散策、漢江夜景、醬蟹",
    details: [
      {
        time: "09:30",
        icon: "👜",
        title: "整備出發：Wecostay Namsan",
        desc: "檢查保暖衣物。步行至忠武路站搭乘地鐵。"
      },
      {
        time: "10:40",
        icon: "🥣",
        title: "望遠市場：在地早午餐",
        desc: "<strong>必吃：</strong>QS炸雞丁（建議點半半口味）、望遠手工可樂餅（蔬菜或披薩口味）。感受週日早市的活力。"
      },
      {
        time: "11:00",
        icon: "🌶️",
        title: "雨耳樂 (Uiwirak)",
        desc: "<strong>搶頭香：</strong>購買招牌炸辣椒 (Stuffed Peppers)。若人潮眾多可選擇外帶，作為稍後排隊時的糧食。"
      },
      {
        time: "11:40",
        icon: "🍞",
        title: "麵包聖地：Ugly Bakery",
        desc: "<strong>戰術排隊：</strong>12:00 開門，務必提前 20 分鐘抵達卡位。<br><strong>必買：</strong>感動的抹茶猛瑪 (Matcha Mammoth)、黑芝麻猛瑪、鮮奶油麵包。"
      },
      {
        time: "13:00",
        icon: "🚕",
        title: "移動至弘大商圈",
        desc: "搭乘計程車前往弘大（約 10 分鐘，車資約 ₩7,000），節省體力並直達核心區，優於地鐵轉乘。"
      },
      {
        time: "13:30",
        icon: "🧸",
        title: "弘大文創與潮流巡禮",
        desc: "參觀 <strong>Object</strong> 弘大總店（文創選物），隨後逛 Musinsa Standard 與 Gentle Monster 旗艦店。"
      },
      {
        time: "15:00",
        icon: "☕",
        title: "韓屋咖啡：申李道家",
        desc: "在現代化改造的韓屋中享用草莓拿鐵，中庭設有水池與火爐，是喧鬧弘大中的寧靜避世所。"
      },
      {
        time: "16:00",
        icon: "🚌",
        title: "漢江景觀移動 (巴士 7613)",
        desc: "搭乘 <strong>7613號巴士</strong> 跨越西江大橋，沿途欣賞漢江日落與夜景，可直達現代百貨門口，避免地鐵轉乘的冗長步行。"
      },
      {
        time: "18:10",
        icon: "🏢",
        title: "汝矣島現代百貨 (The Hyundai Seoul)",
        desc: "直奔 <strong>5F Sounds Forest</strong> (室內空中花園) 拍照，隨後逛 <strong>B2 Creative Ground</strong> 潮流層。"
      },
      {
        time: "19:30",
        icon: "🦀",
        title: "晚餐：Odarijip (明洞醬蟹)",
        desc: "返回明洞吃醬蟹 (五達里家)。口味鮮甜，適合初次嘗試者。"
      },
      {
        time: "21:00",
        icon: "🛏️",
        title: "返回 Wecostay Namsan",
        desc: "利用地鐵 5 號線轉 4 號線返回忠武路。抵達後利用房間冰箱保存打包的 Ugly Bakery 麵包。"
      },
      {
        time: "22:00",
        icon: "🍗",
        title: "終極宵夜：橋村炸雞",
        desc: "回飯店叫外送。<strong>必點：</strong>Honey Combo (蜂蜜炸雞)。<br>邊吃邊整理行李，確認重量分配。"
      },
    ]
  },
  {
    day: 6,
    date: "2/09 (一)",
    title: "Day 6: 極限撤離 (金浦機場)",
    focus: "樂天超市掃貨、登機",
    details: [
      {
        time: "09:00",
        icon: "🚕",
        title: "前往金浦機場 (GMP)",
        desc: "搭乘計程車 (約 40-50 分)。目的地是金浦機場國際線航廈。"
      },
      {
        time: "09:40",
        icon: "🧳",
        title: "報到 & 托運",
        desc: "CI 0261 (13:45 起飛)。<strong>先完成報到與托運</strong>，一身輕便再去逛街。<br>若櫃檯未開，可利用 T-Luggage 寄放行李。"
      },
      {
        time: "10:30",
        icon: "🛒",
        title: "極限購物：樂天超市 (Gimpo)",
        desc: "位於金浦機場連通的 Lotte Mall B1。10:30 開門。<br><strong>任務：</strong>掃蕩海苔、HBAF 杏仁果、布朗尼。務必預留 15 分鐘結帳退稅。"
      },
      {
        time: "12:00",
        icon: "🛂",
        title: "安檢與登機",
        desc: "返回航廈安檢。13:15 登機，返回台北松山。"
      }
    ]
  }
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
