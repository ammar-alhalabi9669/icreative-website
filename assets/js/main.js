(function(){
  "use strict";
  var html = document.documentElement;

  /* ---- i18n dictionary (attribute-based text) ---- */
  var DICT = {
    ar:{
      "nav.services":"خدماتنا","nav.process":"منهجيتنا","nav.work":"أعمالنا","nav.portfolio":"المعرض","nav.reviews":"آراء العملاء","nav.cta":"تواصل معنا",
      "hero.badge":"وكالة نمو رقمية متكاملة","hero.cta1":"ابدأ مشروعك","hero.cta2":"شاهد أعمالنا","hero.scroll":"اكتشف",
      "stats.eyebrow":"أرقام تتحدث","stats.reach":"وصول شهري للعلامات","stats.projects":"مشروع تم إطلاقه","stats.retention":"نسبة رضا العملاء","stats.roi":"متوسط نمو العائد",
      "services.eyebrow":"ماذا نقدّم","services.lead":"نغطّي رحلتك بالكامل — من فهم مشروعك ووضع الاستراتيجية، إلى الإبداع والتنفيذ وقياس النتائج.",
      "process.eyebrow":"منهجيتنا","process.lead":"قبل أن نفتح الكاميرا… نفتح عقلنا. عملية واضحة من أربع مراحل توصلك إلى نتائج حقيقية.",
      "work.eyebrow":"أعمال مختارة","portfolio.eyebrow":"معرض الأعمال","tst.eyebrow":"آراء عملائنا","cta.ig":"راسلنا على إنستجرام","cta.fb":"راسلنا على فيسبوك"
    },
    en:{
      "nav.services":"Services","nav.process":"Process","nav.work":"Work","nav.portfolio":"Gallery","nav.reviews":"Reviews","nav.cta":"Contact us",
      "hero.badge":"A full-service digital growth agency","hero.cta1":"Start your project","hero.cta2":"View our work","hero.scroll":"Scroll",
      "stats.eyebrow":"Numbers that talk","stats.reach":"Monthly brand reach","stats.projects":"Projects launched","stats.retention":"Client satisfaction","stats.roi":"Average ROI growth",
      "services.eyebrow":"What we do","services.lead":"We cover your whole journey — from understanding your business and setting strategy, to creativity, execution and measuring results.",
      "process.eyebrow":"Our process","process.lead":"Before we open the camera… we open our minds. A clear four-stage process that gets you real results.",
      "work.eyebrow":"Selected work","portfolio.eyebrow":"Portfolio","tst.eyebrow":"Client stories","cta.ig":"DM us on Instagram","cta.fb":"Message us on Facebook"
    }
  };

  function applyLang(lang){
    var isAr = lang === "ar";
    html.setAttribute("lang", lang);
    html.setAttribute("dir", isAr ? "rtl" : "ltr");
    html.classList.toggle("lang-ar", isAr);
    html.classList.toggle("lang-en", !isAr);
    // attribute text
    var map = DICT[lang];
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      if(map[k]) el.textContent = map[k];
    });
    // toggle buttons state
    document.querySelectorAll(".lang-toggle button").forEach(function(b){
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".lang-toggle button").forEach(function(b){
    b.addEventListener("click", function(){ applyLang(b.getAttribute("data-lang")); });
  });
  applyLang("ar"); // default

  /* ---- Nav scroll state ---- */
  var nav = document.getElementById("nav");
  var onScroll = function(){ nav.classList.toggle("scrolled", window.scrollY > 30); };
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});

  /* ---- Mobile menu ---- */
  var burger = document.getElementById("burger");
  burger.addEventListener("click", function(){
    var open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
  });
  var navScrim = document.getElementById("navScrim");
  if (navScrim) navScrim.addEventListener("click", function(){
    document.body.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", false);
  });
  document.querySelectorAll("#navLinks a").forEach(function(a){
    a.addEventListener("click", function(){ document.body.classList.remove("menu-open"); });
  });

  /* ---- Reveal on scroll ---- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:0, rootMargin:"0px 0px 10% 0px"});   /* fires just before content enters: fast swipes never meet empty space */
  document.querySelectorAll("[data-reveal]").forEach(function(el){ io.observe(el); });

  /* ---- Count-up numbers ---- */
  function animateCount(el){
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var isFloat = target % 1 !== 0;
    var dur = 1600, start = null;
    function tick(ts){
      if(!start) start = ts;
      var p = Math.min((ts - start)/dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var countIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ animateCount(e.target); countIO.unobserve(e.target); } });
  }, {threshold:.5});
  document.querySelectorAll("[data-count]").forEach(function(el){ countIO.observe(el); });

  /* ============================================================
     PORTFOLIO — data-driven featured cases + gallery + lightbox + case modal
     Edit PROJECTS below to add/remove work. Images live in assets/images/work/.
     KPIs are illustrative — replace with real client numbers.
     ============================================================ */
  var IMGBASE = "assets/images/work/";
  var LOGOBASE = "assets/images/logos/";
  function BI(ar,en){ return '<span class="i18n-ar">'+ar+'</span><span class="i18n-en">'+en+'</span>'; }

  var INDUSTRIES = [
    {k:"all",         ar:"الكل",            en:"All"},
    {k:"restaurants", ar:"مطاعم وكافيهات",  en:"Restaurants"},
    {k:"realestate",  ar:"عقارات",          en:"Real Estate"},
    {k:"furniture",   ar:"أثاث",            en:"Furniture"},
    {k:"automotive",  ar:"سيارات",          en:"Automotive"},
    {k:"beauty",      ar:"تجميل وعناية",    en:"Beauty"},
    {k:"music",       ar:"موسيقى وحفلات",   en:"Music & Live"}
  ];

  var PROJECTS = [
    { slug:"demas", ind:"restaurants", featured:true,
      name:{ar:"مطعم ديماس", en:"Demas"}, role:{ar:"تصوير طعام · هوية توصيل", en:"Food Photography · Delivery Branding"},
      brief:{ar:"تصوير يفتح الشهية وهوية توصيل لمطعم محلي مزدحم.", en:"Appetite-first food shots and delivery branding for a busy local restaurant."},
      kpis:[{b:"15+",ar:"صورة",en:"Shots"},{b:"2.1x",ar:"تفاعل",en:"Engagement"}],
      approach:{ar:"تصوير طعام يفتح الشهية ورسائل توصيل واضحة وسريعة.", en:"Appetite-driven food photography and clear, fast delivery messaging."},
      result:{ar:"علامة تفتح النفس وتجعل الطلب سهلًا.", en:"A hungry, trustworthy brand that makes ordering effortless."},
      images:[
        {f:"demas-01", w:1050, h:1400, t:{ar:"خدمة على الطاولة", en:"Table Service"}},
        {f:"demas-chicken",  w:1024, h:1280, t:{ar:"ساندويتش دجاج", en:"Chicken Stack"}},
        {f:"demas-broasted", w:1024, h:1280, t:{ar:"بروست ديماس", en:"Broasted Platter"}},
        {f:"demas-02", w:934, h:1400, t:{ar:"صالة المطعم", en:"The Dining Hall"}},
        {f:"demas-03", w:1050, h:1400, t:{ar:"مائدة ديماس", en:"The Demas Table"}},
        {f:"demas-04", w:1050, h:1400, t:{ar:"لحظة عائلية", en:"A Family Moment"}},
        {f:"demas-05", w:1050, h:1400, t:{ar:"عائلة على المائدة", en:"Family at the Table"}},
        {f:"demas-06", w:1050, h:1400, t:{ar:"جَمعة عائلية", en:"Family Gathering"}},
        {f:"demas-07", w:1050, h:1400, t:{ar:"فطائر طازجة", en:"Fresh Pastries"}},
        {f:"demas-08", w:1050, h:1400, t:{ar:"أطباق من الفرن", en:"Oven-Baked Dishes"}},
        {f:"demas-09", w:1050, h:1400, t:{ar:"مقبلات", en:"Appetizers"}},
        {f:"demas-10", w:1400, h:1050, t:{ar:"تشكيلة الأطباق", en:"Platter Selection"}},
        {f:"demas-11", w:1050, h:1400, t:{ar:"بيتزا ديماس", en:"Demas Pizza"}},
        {f:"demas-12", w:1400, h:1050, t:{ar:"تشكيلة البيتزا", en:"Pizza Selection"}},
        {f:"demas-13", w:1050, h:1400, t:{ar:"قضمة بيتزا", en:"A Slice of Pizza"}},
        {f:"demas-14", w:1050, h:1400, t:{ar:"ساندويتشات ديماس", en:"Demas Sandwiches"}},
        {f:"demas-15", w:934, h:1400, t:{ar:"احتفالية الكريسماس", en:"Christmas Celebration"}},
        {f:"demas-16", w:934, h:1400, t:{ar:"بابا نويل مع الأطفال", en:"Santa Meets the Kids"}},
        {f:"demas-17", w:1120, h:1400, t:{ar:"احتفال 2026", en:"2026 Celebration"}}
      ]},
    { slug:"bite", ind:"restaurants", featured:true,
      name:{ar:"بايت", en:"Bite"}, role:{ar:"تصوير طعام · هوية · سوشيال", en:"Food Photography · Branding · Social"},
      brief:{ar:"تصوير طعام يفتح النفس وهوية جريئة لعلامة برجر.", en:"Crave-worthy food photography and a bold identity for a burger brand."},
      kpis:[{b:"20+",ar:"طبق",en:"Dishes"},{b:"3.4x",ar:"تفاعل",en:"Engagement"},{b:"+62%",ar:"نية الطلب",en:"Order intent"}],
      challenge:{ar:"طعام رائع لكن صور باهتة وغير متسقة لا توقف التمرير ولا تعكس الجودة.", en:"Great food, but flat and inconsistent photos that didn't stop the scroll or communicate quality."},
      approach:{ar:"بنينا لغة بصرية داكنة بإضاءة نيون، وأخرجنا كل طبق فنيًا، وصمّمنا نظام سوشيال يركّز على الشهية والاتساق.", en:"We built a dark, neon-lit visual language, art-directed every dish, and designed a social system around appetite and consistency."},
      result:{ar:"فيد متناسق وفاخر رفع التفاعل ونية الطلب — طعام يبيع قبل أول قضمة.", en:"A cohesive, premium feed that lifted engagement and order intent — food that sells before the first bite."},
      images:[
        {f:"bite-chicken", t:{ar:"برجر دجاج مقرمش", en:"Crispy Chicken Burger"}},
        {f:"bite-burger",  t:{ar:"برجر لحم كلاسيك", en:"Classic Beef Burger"}},
        {f:"bite-sub",     t:{ar:"ساندويتش سَب مميّز", en:"Signature Sub"}}
      ]},
    { slug:"coco", ind:"restaurants", featured:false,
      name:{ar:"كوكو كافيه", en:"Coco Café"}, role:{ar:"حملات إبداعية · سوشيال", en:"Creative Campaigns · Social"},
      brief:{ar:"حملات مرحة عالية الطاقة حوّلت منيو الكافيه إلى لحظات قابلة للمشاركة.", en:"Playful, high-energy campaigns that turned a café menu into shareable moments."},
      kpis:[{b:"45+",ar:"تصميم",en:"Designs"},{b:"2.8x",ar:"وصول",en:"Reach"},{b:"+40%",ar:"تفاعل",en:"Engagement"}],
      challenge:{ar:"كافيه بشخصية مرحة لم يكن المحتوى يعكسها.", en:"A café with a fun personality its content wasn't showing."},
      approach:{ar:"مفاهيم حملات مشرقة وذكية (دجاج بالمظلة، عجائب تُؤكل) مع هوية برتقالية متسقة.", en:"Bright, witty campaign concepts (skydiving chicken, edible 'wonders') with a consistent orange identity."},
      result:{ar:"فيد يشاركه الناس فعلًا — شخصية تنتقل.", en:"A feed people actually share — personality that travels."},
      images:[
        {f:"coco-parachute", t:{ar:'حملة «منطقة النكهة»', en:'"Zone of Flavour" Campaign'}},
        {f:"coco-wonder",    t:{ar:'حملة «عجيبة الدنيا»', en:'"New Wonder" Campaign'}},
        {f:"coco-bubbletea", t:{ar:"ببل تي", en:"Bubble Tea"}}
      ]},
    { slug:"mrwok", ind:"restaurants", featured:false,
      name:{ar:"مستر ووك", en:"Mr. Wok"}, role:{ar:"تصميمات سوشيال ميديا · حملات موسمية", en:"Social Media Designs · Seasonal Campaigns"},
      brief:{ar:"منشورات سوشيال وتصميمات حملات موسمية لعلامة أكل شارع آسيوي.", en:"Social posts and seasonal campaign visuals for an Asian street-food brand."},
      kpis:[],
      images:[
        {f:"mrwok-01", w:1120, h:1400, t:{ar:"نودلز مستر ووك", en:"Noodles Lifted High"}},
        {f:"mrwok-02", w:788, h:1400, t:{ar:"وليمة بالعيدان", en:"Chopstick Feast"}},
        {f:"mrwok-03", w:1120, h:1400, t:{ar:"تصميم الهالوين", en:"Halloween: Trick or Treat"}},
        {f:"mrwok-04", w:1120, h:1400, t:{ar:"مفاجأة الهالوين: سبرينج رولز مجانًا", en:"Halloween Surprise: Free Spring Rolls"}},
        {f:"mrwok-05", w:1120, h:1400, t:{ar:"مفاجأة مستر ووك للهالوين", en:"Mr. Wok's Halloween Surprise"}},
        {f:"mrwok-06", w:1120, h:1400, t:{ar:"وليمة مبهجة", en:"Joyful Feast"}},
        {f:"mrwok-07", w:1062, h:1400, t:{ar:"عرض التيك أواي", en:"Golden-Hour Takeaway Promo"}},
        {f:"mrwok-08", w:1254, h:1254, t:{ar:"نودلز مقلية", en:"Noodle Stir-Fry"}},
        {f:"mrwok-09", w:934, h:1400, t:{ar:"جمبري تيك أواي", en:"Shrimp Takeout"}},
        {f:"mrwok-10", w:1120, h:1400, t:{ar:"اختيارك لحم", en:"You Choose Beef"}},
        {f:"mrwok-11", w:1120, h:1400, t:{ar:"نودلز على طريقة الشارع", en:"Street-Style Noodles"}},
        {f:"mrwok-12", w:1050, h:1400, t:{ar:"لو كارب وأكل صحي", en:"Low Carb, Healthy Food"}},
        {f:"mrwok-13", w:934, h:1400, t:{ar:"علبة لو كارب", en:"Low-Carb Box"}},
        {f:"mrwok-14", w:1120, h:1400, t:{ar:"مستر ووك في الطريق", en:"Mr. Wok on the Go"}},
        {f:"mrwok-15", w:1128, h:1394, t:{ar:"أكل شارع آسيوي على طريقتك", en:"Asian Street Food, Built Your Way"}}
      ]},
    { slug:"elite", ind:"realestate", featured:true,
      name:{ar:"إيليت للتطوير", en:"Elite Development"}, role:{ar:"حملات · إعلانات مفاهيمية", en:"Brand Campaigns · Concept Ads"},
      brief:{ar:"حملات عقارية بمفاهيم إبداعية تبيع المكانة والثقة والاستثمار الذكي.", en:"Concept-driven real-estate campaigns that sell status, trust, and smart investment."},
      kpis:[{b:"5",ar:"حملات",en:"Campaigns"},{b:"12+",ar:"تصميم",en:"Creatives"},{b:"2029",ar:"إطلاق",en:"Launch"}],
      challenge:{ar:"في سوق مزدحم، بدت مشاريع إيليت كغيرها — مواصفات بلا مشاعر.", en:"In a crowded market, Elite's projects looked like everyone else's — features, not feelings."},
      approach:{ar:"قدنا الحملة بمفاهيم جريئة — الشطرنج، المكانة، الاستثمار — مع رندرات ثلاثية الأبعاد سينمائية ونصوص عربية قوية.", en:"We led with bold concepts — chess, status, investment — pairing cinematic 3D renders with sharp Arabic copy."},
      result:{ar:"حضور مميّز يضع إيليت كمطوّر فاخر يفكّر للمستقبل.", en:"A distinctive brand presence that positions Elite as a premium, forward-thinking developer."},
      images:[
        {f:"elite-chess",      t:{ar:"كل مبنى خطوة محسوبة", en:"Every Building a Calculated Move"}},
        {f:"elite-arch",       t:{ar:"اختيارك يعكس مكانتك", en:"Your Choice Reflects Your Status"}},
        {f:"elite-investment", t:{ar:"العقار يزيد رأس المال", en:"Real Estate Grows Capital"}},
        {f:"elite-lowprice",   t:{ar:"مش كل سعر قليل صفقة", en:"Not Every Low Price Is a Deal"}},
        {f:"elezz-render",     t:{ar:"مشروع العز — في قلب الفرصة", en:"El Ezz — At the Heart of Opportunity"}}
      ]},
    { slug:"autoway", ind:"automotive", featured:true,
      name:{ar:"أوتو واي", en:"Auto Way"}, role:{ar:"إعلانات سيارات · تصميم عروض", en:"Automotive Ads · Offer Design"},
      brief:{ar:"إعلانات عروض سيارات توقف التمرير وتصاميم إطلاق لمعرض متعدد العلامات.", en:"Scroll-stopping automotive offers and launch creatives for a multi-brand dealership."},
      kpis:[{b:"8+",ar:"علامات",en:"Brands"},{b:"20+",ar:"إعلان",en:"Ad designs"},{b:"3.1x",ar:"وصول",en:"Reach"}],
      challenge:{ar:"عشرات الموديلات والعروض بلا صوت إبداعي موحّد.", en:"Dozens of models and offers with no consistent creative voice."},
      approach:{ar:"نظام إعلاني جريء عالي التباين — سيارات بطلة، خلفيات سينمائية (أهرامات، ملاعب)، وتايبوجرافي عروض واضح تمامًا.", en:"A bold, high-contrast ad system — hero cars, cinematic backdrops (pyramids, stadiums), and crystal-clear offer typography."},
      result:{ar:"عروض توقف التمرير وتجعل التقسيط يبدو سهلًا.", en:"Offers that stop the scroll and make financing feel effortless."},
      images:[
        {f:"autoway-cupra",    t:{ar:"كوبرا فورمنتور", en:"CUPRA Formentor"}},
        {f:"autoway-kaiyi",    t:{ar:"كايي X7", en:"KAIYI X7"}},
        {f:"autoway-worldcup", t:{ar:"جاهزون لكأس العالم 2026", en:"Ready for World Cup 2026"}},
        {f:"autoway-soueast",  t:{ar:"سوايست S05", en:"SOUEAST S05"}}
      ]},
    { slug:"elevate", ind:"furniture", featured:false,
      name:{ar:"إيليفيت جاليري", en:"Elevate Gallery"}, role:{ar:"إعلانات منتجات · هوية فاخرة", en:"Product Ads · Luxury Identity"},
      brief:{ar:"نظام بصري فاخر يجعل كل قطعة أثاث تبدو كتعبير عن الذوق.", en:"A luxury visual system that makes every furniture piece feel like a statement."},
      kpis:[{b:"3",ar:"مجموعات",en:"Collections"},{b:"12+",ar:"تصميم",en:"Creatives"}],
      approach:{ar:"نظام فاخر داكن بلمسات ذهبية وإخراج منتجات تحريري.", en:"A dark, gold-accented luxury system with editorial product staging."},
      result:{ar:"أثاث يُصوَّر كأنه في مجلة تصميم.", en:"Furniture that photographs like a design magazine."},
      images:[
        {f:"elevate-outdoor", t:{ar:"طقم خارجي فايبرجلاس", en:"Fiberglass Outdoor Set"}},
        {f:"elevate-bedroom", t:{ar:"غرفة نوم فاخرة", en:"Luxury Bedroom Set"}},
        {f:"elevate-dining",  t:{ar:"سفرة جوز حديثة", en:"Modern Walnut Dining"}}
      ]},
    { slug:"cosmo", ind:"beauty", featured:false,
      name:{ar:"كوزمو", en:"Cosmo"}, role:{ar:"تصوير منتجات · حملة", en:"Product Photography · Campaign"},
      brief:{ar:"تصوير منتجات نابض وحملة تركّز على الحواس لعلامة تجميل.", en:"Vibrant product photography and a scent-forward campaign for a beauty line."},
      kpis:[{b:"2",ar:"حملات",en:"Campaigns"},{b:"10+",ar:"صورة",en:"Shots"}],
      approach:{ar:"تصوير منتجات وموديل جريء ومشبع بالألوان حول خط دراجون فروت.", en:"Bold, colour-saturated product and model photography around the Dragon Fruit line."},
      result:{ar:"رائحة وملمس تكاد تشعر بهما عبر الشاشة.", en:"A scent and texture you can almost feel through the screen."},
      images:[
        {f:"cosmo-model", t:{ar:"حملة دراجون فروت", en:"Dragon Fruit Campaign"}},
        {f:"cosmo-scrub", t:{ar:"سكراب دراجون فروت", en:"Dragon Fruit Scrub"}}
      ]},
    { slug:"loyal", ind:"beauty", featured:false,
      name:{ar:"لويال", en:"Loyal"}, role:{ar:"تصوير منتجات", en:"Product Photography"},
      brief:{ar:"تصوير منعش يبرز الفاكهة لمجموعة بخّاخ الجسم.", en:"Fresh, fruit-forward product photography for a body-mist range."},
      kpis:[{b:"8+",ar:"منتج",en:"Products"}],
      approach:{ar:"تصوير منعش بلمسة رذاذ يبرز الفاكهة.", en:"Fresh, fruit-forward splash photography."},
      result:{ar:"صور منتج منعشة بقدر الرائحة.", en:"Product shots as refreshing as the scent."},
      images:[
        {f:"loyal-candy", t:{ar:"بخّاخ الجسم", en:"Body Mist"}}
      ]},
    { slug:"eman", ind:"beauty", featured:false,
      name:{ar:"إيمان للعطور", en:"Eman Perfume"}, role:{ar:"إخراج فني لعطر", en:"Perfume Art Direction"},
      brief:{ar:"إخراج فني رومانسي مستوحى من الحدائق لعطر فاخر.", en:"Romantic, garden-inspired art direction for a premium perfume."},
      kpis:[{b:"1",ar:"إطلاق عطر",en:"Perfume launch"}],
      approach:{ar:"إخراج فني رومانسي مستوحى من الحدائق بإضاءة ناعمة وأزهار.", en:"Romantic, garden-inspired art direction with soft light and florals."},
      result:{ar:"عطر فاخر يشبه باقة ورد.", en:"A premium perfume that feels like a bouquet."},
      images:[
        {f:"eman-perfume", t:{ar:"عطر إيمان", en:"Eman Perfume"}}
      ]},
    { slug:"simorai", ind:"music", featured:false,
      name:{ar:"سيموراي", en:"SIMORAI"}, role:{ar:"صور الحفلات والعروض الحية", en:"Live-Show Imagery"},
      brief:{ar:"صور من على المسرح ولحظات من الحفلات الحية لفرقة سيموراي.", en:"On-stage and live-concert imagery for the band SIMORAI."},
      kpis:[],
      images:[
        {f:"simorai-01", w:1080, h:1350, t:{ar:"أضواء المسرح", en:"Stage Lights"}},
        {f:"simorai-02", w:1400, h:934, t:{ar:"عرض حي", en:"Live Performance"}},
        {f:"simorai-03", w:1400, h:934, t:{ar:"على المسرح", en:"On Stage"}},
        {f:"simorai-04", w:1400, h:934, t:{ar:"عرض حي", en:"Live Performance"}},
        {f:"simorai-05", w:1080, h:1080, t:{ar:"على المسرح", en:"On Stage"}},
        {f:"simorai-06", w:1006, h:1400, t:{ar:"غناء حي", en:"Live Vocals"}},
        {f:"simorai-07", w:920, h:1400, t:{ar:"ليلة الحفل", en:"Concert Night"}},
        {f:"simorai-08", w:1280, h:960, t:{ar:"خلف الكواليس", en:"Behind the Scenes"}},
        {f:"simorai-09", w:1050, h:1400, t:{ar:"المسرح كاملًا", en:"The Full Stage"}},
        {f:"simorai-10", w:1050, h:1400, t:{ar:"عرض حي", en:"Live Show"}},
        {f:"simorai-11", w:1080, h:1343, t:{ar:"على المسرح", en:"On Stage"}},
        {f:"simorai-12", w:1080, h:1349, t:{ar:"عرض حي", en:"Live Performance"}},
        {f:"simorai-13", w:1136, h:1400, t:{ar:"تحت الأضواء", en:"In the Spotlight"}},
        {f:"simorai-14", w:1400, h:1344, t:{ar:"أجواء المسرح", en:"Stage Atmosphere"}},
        {f:"simorai-15", w:1222, h:1400, t:{ar:"مؤثرات المسرح", en:"Stage Effects"}}
      ]}
  ];

  var BYSLUG = {}; PROJECTS.forEach(function(p){ BYSLUG[p.slug]=p; });
  function indLabel(k){ for(var i=0;i<INDUSTRIES.length;i++){ if(INDUSTRIES[i].k===k) return INDUSTRIES[i]; } return {ar:k,en:k}; }
  var arrowSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var zoomSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m20 20-3-3M11 8v6M8 11h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  /* DEMAS (PROJECTS[0]) keeps no case card: its card data carries illustrative KPI figures (docs/PHASE0-REPORT.md §9)
     that were never shown. It stays a full project in the portfolio gallery, and its images open Scene 03's Photo Gallery. */
  var SHOW = PROJECTS[0];

  /* ---- Render featured case cards ---- */
  var casesGrid = document.getElementById("casesGrid");
  /* Dedicated reveal observer for case cards (mirrors the gallery's pattern below) —
     defined here because it must exist before these cards are created and observed. */
  var caseObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); caseObserver.unobserve(e.target); } });
  }, {threshold:0, rootMargin:"0px 0px 10% 0px"});
  /* Real client marks already used in the Selected Clients wall — reused here (not new
     assets) as a small proof badge so each featured card reads as a named, real business. */
  var CASE_LOGOS = {bite:"bite.png",coco:"coco.png",demas:"demas.png",elite:"elite.png",autoway:"autoway.png",elevate:"elevate.png",mrwok:"mrwok.png",simorai:"simorai.png"};
  /* Each hero creative is a real ad with its own baked-in headline — a single crop point
     can't serve all of them, so every featured slug gets the vertical focal point that
     keeps its own headline/logo readable instead of sliced off by the card's aspect ratio. */
  var CASE_FOCUS = {bite:"32%", elite:"18%", autoway:"90%"};
  PROJECTS.filter(function(p){return p.featured && p !== SHOW;}).forEach(function(p, idx){
    var il = indLabel(p.ind);
    var kp = p.kpis.slice(0,3).map(function(k){ return '<div class="case__kpi"><b>'+k.b+'</b><span>'+BI(k.ar,k.en)+'</span></div>'; }).join("");
    var story = p.challenge || p.brief; /* real copy already written for the case modal — never invented here */
    var logo = CASE_LOGOS[p.slug] ? '<span class="case__logo"><img src="'+ LOGOBASE+CASE_LOGOS[p.slug] +'" alt="" loading="lazy"></span>' : "";
    var el = document.createElement("article");
    el.className = "case" + (idx === 0 ? " case--feature" : "");
    el.setAttribute("data-slug", p.slug);
    el.innerHTML =
      '<div class="case__media"><img loading="lazy" style="object-position:center '+(CASE_FOCUS[p.slug]||"32%")+'" src="'+IMGBASE+p.images[0].f+'.jpg" alt="'+p.name.en+'"></div>'+
      '<div class="case__grad"></div>'+
      '<span class="case__count">'+p.images.length+' '+BI("صور","photos")+'</span>'+
      '<div class="case__body">'+
        '<div class="case__top"><span class="case__ind">'+BI(il.ar,il.en)+'</span>'+logo+'</div>'+
        '<h3 class="case__name">'+BI(p.name.ar,p.name.en)+'</h3>'+
        '<p class="case__role">'+BI(p.role.ar,p.role.en)+'</p>'+
        '<p class="case__challenge">'+BI(story.ar,story.en)+'</p>'+
        '<div class="case__kpis">'+kp+'</div>'+
        '<span class="case__cta">'+BI("اقرأ القصة كاملة","Read the full case study")+' '+arrowSvg+'</span>'+
      '</div>';
    el.addEventListener("click", function(){ openCase(p.slug); });
    casesGrid.appendChild(el);
    caseObserver.observe(el);
  });

  /* ---- Scene 03: the cinematic Photo Gallery ----
     Every genuine portfolio image of every project, interleaved one client at a time (in the existing PROJECTS
     order) so each step moves to a different client. It opens on the first project's hero, whose proportions set the
     frame box — the plane the 3D journey projects. Every image is shown whole (contain) and, when its proportions
     differ, over a blurred, darkened copy of itself. */
  var GALLERY = (function(){
    var out = [], seen = {}, longest = Math.max.apply(null, PROJECTS.map(function(p){ return p.images.length; }));
    for (var k = 0; k < longest; k++) PROJECTS.forEach(function(p){
      var im = p.images[k];
      if (im && !seen[im.f]) { seen[im.f] = 1; out.push({ im: im, p: p }); }   // never the same image twice
    });
    return out;
  })();
  function scSlide(it, first){
    var im = it.im, ar = (im.w||1280)/(im.h||1280), h0 = GALLERY[0].im, far = (h0.w||1280)/(h0.h||1280);
    var src = IMGBASE+im.f+'.jpg', lazy = first ? ' loading="lazy"' : '';
    return '<div class="showcase__slide">'+
      (Math.abs(ar/far - 1) > 0.03 ? '<img class="showcase__fill" src="'+src+'" alt=""'+lazy+' decoding="async">' : '')+
      '<img src="'+src+'" width="'+(im.w||1280)+'" height="'+(im.h||1280)+'" alt="'+it.p.name.en+' — '+im.t.en+'"'+lazy+' decoding="async"></div>';
  }
  function pad2(n){ return (n < 10 ? "0" : "") + n; }
  function scCount(i){ return pad2(i+1)+' / '+pad2(GALLERY.length); }
  function scCaption(i){ var it = GALLERY[i], n = GALLERY.length;
    return BI(it.p.name.ar+' — '+it.im.t.ar+' — '+(i+1)+' من '+n, it.p.name.en+' — '+it.im.t.en+' — '+(i+1)+' of '+n); }
  function initShowcaseGallery(box){
    var frame = box.querySelector(".showcase__frame"), view = frame.querySelector(".showcase__view"), cap = frame.querySelector("figcaption"),
      num = box.querySelector(".showcase__num"), client = box.querySelector(".showcase__ind"), n = GALLERY.length, idx = 0, token = 0;
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var rtl = function(){ return document.documentElement.dir === "rtl"; };
    function preload(i){ var im = new Image(); im.decoding = "async"; im.src = IMGBASE+GALLERY[((i%n)+n)%n].im.f+'.jpg'; }
    function go(step){
      idx = (idx + step + n) % n;
      var it = GALLERY[idx], t = ++token, wrap = document.createElement("div");
      wrap.innerHTML = scSlide(it, false);
      var slide = wrap.firstChild, img = slide.lastChild;
      slide.classList.add("is-entering");
      /* the new image drifts in a few pixels from the side it comes from, in the reading direction */
      slide.style.setProperty("--from", (step > 0 ? 1 : -1) * (rtl() ? -1 : 1) * 14 + "px");
      cap.innerHTML = scCaption(idx);
      num.textContent = scCount(idx);
      client.innerHTML = BI(it.p.name.ar, it.p.name.en);
      frame.setAttribute("data-index", idx); box.setAttribute("data-client", it.p.slug);
      (img.decode ? img.decode() : Promise.resolve()).catch(function(){}).then(function(){
        if (t !== token) return;                          // a newer step won: never stack two arrivals
        var old = Array.prototype.slice.call(view.children);
        view.appendChild(slide);
        requestAnimationFrame(function(){ requestAnimationFrame(function(){ slide.classList.remove("is-entering"); }); });
        setTimeout(function(){ old.forEach(function(o){ if (o.parentNode === view) view.removeChild(o); }); }, REDUCED ? 0 : 650);
      });
      preload(idx + step);
    }
    /* logical controls: "previous" sits at the reading start (left in English, right in Arabic) */
    frame.querySelector(".showcase__nav--prev").addEventListener("click", function(){ go(-1); });
    frame.querySelector(".showcase__nav--next").addEventListener("click", function(){ go(1); });
    /* physical keys match the physical arrows: → is the right-hand arrow in either language */
    frame.addEventListener("keydown", function(e){
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      go((e.key === "ArrowRight") !== rtl() ? 1 : -1);
    });
    /* swipe (touch/pen): a clearly horizontal gesture changes the image; vertical drags keep scrolling the journey */
    var sx = 0, sy = 0, sid = null;
    frame.addEventListener("pointerdown", function(e){ if (e.pointerType === "mouse") return; sid = e.pointerId; sx = e.clientX; sy = e.clientY; }, { passive: true });
    frame.addEventListener("pointerup", function(e){
      if (e.pointerId !== sid) return; sid = null;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) go((dx < 0) !== rtl() ? 1 : -1);
    }, { passive: true });
    frame.addEventListener("pointercancel", function(){ sid = null; }, { passive: true });
    function warm(){ preload(1); preload(-1); }
    frame.addEventListener("pointerenter", warm, { once: true, passive: true });
    frame.addEventListener("focusin", warm, { once: true });
  }

  var showBox = document.getElementById("showcaseProject");
  if (showBox && GALLERY.length) {
    var first = GALLERY[0], hero = first.im, many = GALLERY.length > 1;
    showBox.setAttribute("data-client", first.p.slug);
    showBox.innerHTML =
      '<div class="showcase__info">'+
        '<div class="showcase__meta"><span class="showcase__num">'+scCount(0)+'</span><span class="showcase__ind">'+BI(first.p.name.ar,first.p.name.en)+'</span></div>'+
        '<h3 class="showcase__name" id="galleryTitle">'+BI("معرض الصور","Photo Gallery")+'</h3>'+
        '<p class="showcase__role">'+BI("بعض من أعمالنا","Selected Works")+'</p>'+
      '</div>'+
      '<figure class="showcase__frame" style="--ar:'+((hero.w||1280)/(hero.h||1280)).toFixed(4)+'"'+(many ? ' tabindex="0" aria-labelledby="galleryTitle"' : '')+'>'+
        '<div class="showcase__view">'+scSlide(first, true)+'</div>'+
        (many ?
          '<button class="showcase__nav showcase__nav--prev" type="button"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="sr-only">'+BI("الصورة السابقة","Previous image")+'</span></button>'+
          '<button class="showcase__nav showcase__nav--next" type="button"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="sr-only">'+BI("الصورة التالية","Next image")+'</span></button>' : '')+
        '<figcaption class="sr-only" aria-live="polite">'+scCaption(0)+'</figcaption></figure>';
    if (many) initShowcaseGallery(showBox);
  }

  /* ---- Render gallery filters ---- */
  var galFilters = document.getElementById("galleryFilters");
  INDUSTRIES.forEach(function(ind,i){
    var b=document.createElement("button");
    if(i===0) b.className="active";
    b.setAttribute("data-filter", ind.k);
    b.innerHTML = BI(ind.ar, ind.en);
    galFilters.appendChild(b);
  });

  /* ---- Render gallery items ---- */
  var galGrid = document.getElementById("galleryGrid");
  var galObserver = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); galObserver.unobserve(e.target);} });
  }, {threshold:0, rootMargin:"0px 0px 10% 0px"});
  PROJECTS.forEach(function(p){
    p.images.forEach(function(img, idx){
      var a=document.createElement("div");
      a.className="g-item";
      a.setAttribute("data-ind", p.ind);
      a.innerHTML =
        '<img loading="lazy" src="'+IMGBASE+img.f+'.jpg"'+(img.w ? ' width="'+img.w+'" height="'+img.h+'"' : "")+' alt="'+p.name.en+' — '+img.t.en+'">'+
        '<span class="g-item__zoom">'+zoomSvg+'</span>'+
        '<div class="g-item__ov">'+
          '<span class="g-item__client">'+BI(p.name.ar,p.name.en)+'</span>'+
          '<span class="g-item__proj">'+BI(img.t.ar,img.t.en)+'</span>'+
        '</div>';
      a.addEventListener("click", function(){ openLB(p.slug, idx); });
      galGrid.appendChild(a);
      galObserver.observe(a);
    });
  });

  /* ---- Gallery filter behaviour ---- */
  galFilters.addEventListener("click", function(e){
    var btn=e.target.closest("button"); if(!btn) return;
    galFilters.querySelectorAll("button").forEach(function(b){ b.classList.remove("active"); });
    btn.classList.add("active");
    var f=btn.getAttribute("data-filter");
    galGrid.querySelectorAll(".g-item").forEach(function(it){
      it.style.display = (f==="all"||it.getAttribute("data-ind")===f) ? "" : "none";
    });
  });

  /* ---- Lightbox ---- */
  var LB={group:[],i:0,slug:null};
  var lb=document.getElementById("lightbox"),
      lbImg=document.getElementById("lbImg"),
      lbClient=document.getElementById("lbClient"),
      lbProject=document.getElementById("lbProject"),
      lbCount=document.getElementById("lbCount");
  function renderLB(){
    var p=BYSLUG[LB.slug], img=p.images[LB.i];
    lbImg.src=IMGBASE+img.f+".jpg";
    lbClient.innerHTML=BI(p.name.ar,p.name.en);
    lbProject.innerHTML=BI(img.t.ar,img.t.en);
    lbCount.textContent=(LB.i+1)+" / "+p.images.length;
  }
  function openLB(slug,i){ LB.slug=slug; LB.i=i; renderLB(); lb.classList.add("open"); document.body.classList.add("modal-open"); }
  function closeLB(){ lb.classList.remove("open"); if(!caseModal.classList.contains("open")) document.body.classList.remove("modal-open"); }
  function lbStep(d){ var n=BYSLUG[LB.slug].images.length; LB.i=(LB.i+d+n)%n; renderLB(); }
  document.getElementById("lbClose").addEventListener("click", closeLB);
  document.getElementById("lbPrev").addEventListener("click", function(){ lbStep(-1); });
  document.getElementById("lbNext").addEventListener("click", function(){ lbStep(1); });
  lb.addEventListener("click", function(e){ if(e.target===lb) closeLB(); });

  /* ---- Case study modal ---- */
  var caseModal=document.getElementById("caseModal"), cmScroll=document.getElementById("cmScroll");
  function block(label_ar,label_en,val){ if(!val) return ""; return '<div class="cm-block"><h4>'+BI(label_ar,label_en)+'</h4><p>'+BI(val.ar,val.en)+'</p></div>'; }
  function openCase(slug){
    var p=BYSLUG[slug], il=indLabel(p.ind);
    var kp=p.kpis.map(function(k){ return '<div class="cm-kpi"><b>'+k.b+'</b><span>'+BI(k.ar,k.en)+'</span></div>'; }).join("");
    var gal=p.images.map(function(img,idx){ return '<img loading="lazy" src="'+IMGBASE+img.f+'.jpg" alt="'+img.t.en+'" data-i="'+idx+'">'; }).join("");
    cmScroll.innerHTML =
      '<div class="cm-hero"><img style="object-position:center '+(CASE_FOCUS[p.slug]||"32%")+'" src="'+IMGBASE+p.images[0].f+'.jpg" alt="'+p.name.en+'"><div class="cm-hero__grad"></div>'+
        '<div class="cm-hero__body"><span class="cm-hero__ind">'+BI(il.ar,il.en)+'</span>'+
        '<h3 class="cm-hero__name">'+BI(p.name.ar,p.name.en)+'</h3>'+
        '<p class="cm-hero__role">'+BI(p.role.ar,p.role.en)+'</p></div></div>'+
      '<div class="cm-content">'+
        '<div class="cm-kpis">'+kp+'</div>'+
        block("نبذة","Overview",p.brief)+
        block("التحدّي","The challenge",p.challenge)+
        block("منهجيتنا","Our approach",p.approach)+
        block("النتيجة","The result",p.result)+
        '<div class="cm-block"><h4>'+BI("من المشروع","From the project")+'</h4></div>'+
        '<div class="cm-gallery">'+gal+'</div>'+
      '</div>';
    cmScroll.querySelectorAll(".cm-gallery img").forEach(function(im){
      im.addEventListener("click", function(){ openLB(slug, parseInt(im.getAttribute("data-i"),10)); });
    });
    cmScroll.scrollTop=0;
    caseModal.classList.add("open"); document.body.classList.add("modal-open");
  }
  function closeCase(){ caseModal.classList.remove("open"); if(!lb.classList.contains("open")) document.body.classList.remove("modal-open"); }
  document.getElementById("cmClose").addEventListener("click", closeCase);
  caseModal.addEventListener("click", function(e){ if(e.target===caseModal) closeCase(); });

  /* ---- Keyboard ---- */
  document.addEventListener("keydown", function(e){
    if(lb.classList.contains("open")){
      if(e.key==="Escape") closeLB();
      else if(e.key==="ArrowRight") lbStep(html.getAttribute("dir")==="rtl"?-1:1);
      else if(e.key==="ArrowLeft") lbStep(html.getAttribute("dir")==="rtl"?1:-1);
    } else if(caseModal.classList.contains("open") && e.key==="Escape"){ closeCase(); }
  });

  /* ---- Reveal safety net ----
     IntersectionObserver can miss elements during very fast scrolling (seen on the gallery in Phase 0 and
     on fast mobile swipes). Anything that is on screen or already scrolled past is marked revealed, so
     content never stays hidden — in either scroll direction. Stops itself once everything is revealed. */
  var pendingSel = "[data-reveal]:not(.in), .case:not(.in), .g-item:not(.in)", sweepQueued = false;
  function revealSweep(){
    sweepQueued = false;
    var left = 0, vh = window.innerHeight;
    document.querySelectorAll(pendingSel).forEach(function(el){
      if (el.offsetParent === null) { left++; return; }          /* filtered out / hidden: check later */
      if (el.getBoundingClientRect().top < vh * 1.1) el.classList.add("in"); else left++;
    });
    if (!left) { window.removeEventListener("scroll", queueSweep); window.removeEventListener("scrollend", revealSweep); }
  }
  function queueSweep(){ if (!sweepQueued) { sweepQueued = true; requestAnimationFrame(revealSweep); } }
  window.addEventListener("scroll", queueSweep, {passive:true});
  window.addEventListener("scrollend", revealSweep);
  window.addEventListener("load", revealSweep);

  /* ---- Year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
