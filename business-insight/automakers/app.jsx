const FINANCIALS = [
  {company:"大众汽车集团",region:"海外母公司",period:"2026 H1",revenue:"€158.1bn",growth:"-0.2%",profit:"经营利润 €5.93bn",margin:"3.8%",profitGrowth:"-11.6%",cash:"汽车业务净现金流 €3.2bn",view:"中国权益法合资销量承压；集团成本与产品组合改善是下半年重点。",url:"https://www.volkswagen-group.com/en/half-yearly-financial-report-and-results-2026-20506",fresh:"2026-07-24"},
  {company:"特斯拉",region:"海外母公司",period:"2026 Q2",revenue:"$28.24bn",growth:"+25.5%",profit:"归母净利 $1.11bn",margin:"经营利润率 1.4%",profitGrowth:"-4.9%",cash:"经营现金流 $4.70bn",view:"交付与收入增长，但AI及产能投入压低经营利润率并使自由现金流转负。",url:"https://ir.tesla.com/press-release/tesla-releases-second-quarter-2026-financial-results",fresh:"2026-07-22"},
  {company:"比亚迪",region:"中国集团",period:"2026 H1",revenue:"¥344.82bn",growth:"-7.13%",profit:"归母净利 ¥12.33bn",margin:"3.57%*",profitGrowth:"-20.54%",cash:"经营现金流 ¥37.33bn",view:"国内收入承压、境外收入增长；汽车业务毛利率提升，但汇兑损失拖累利润。",url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12572791&stockid=002594",fresh:"2026-08-28"},
  {company:"上汽集团",region:"中国集团",period:"2026 H1",revenue:"¥298.65bn",growth:"-0.31%",profit:"归母净利 ¥5.15bn",margin:"毛利率 12.6%",profitGrowth:"-14.38%",cash:"经营现金流 ¥54.30bn",view:"自主品牌和海外业务支撑经营韧性；核心归母利润增长，但法定归母利润仍下降。",url:"https://www.saicmotor.com/m/xwzx/xwk/2026/65230.shtml",fresh:"2026-08-28"},
  {company:"蔚来",region:"中国新势力",period:"2026 Q2",revenue:"¥32.14bn",growth:"+69.1%",profit:"归母净亏损 ¥0.72bn",margin:"毛利率 18.4%",profitGrowth:"亏损收窄86.0%",cash:"经营现金流为正（金额未列）",view:"三品牌交付推动收入增长，调整后净利润转正；GAAP口径仍为小幅亏损。",url:"https://ir.nio.com/news-releases/news-release-details/nio-inc-reports-unaudited-second-quarter-2026-financial-results/",fresh:"2026-09-01"},
  {company:"理想汽车",region:"中国新势力",period:"2026 Q2",revenue:"¥25.7bn",growth:"-15.1%",profit:"净亏损 ¥1.7bn",margin:"毛利率 11.0%",profitGrowth:"由盈转亏",cash:"经营现金流 ¥0.02bn",view:"收入同比下降且仍亏损，但毛利率和经营现金流较一季度明显改善。",url:"https://ir.lixiang.com/zh-hant/news-releases/news-release-details/li-auto-inc-announces-unaudited-second-quarter-2026-financial",fresh:"2026-08-26"},
  {company:"小鹏汽车",region:"中国新势力",period:"2026 Q2",revenue:"¥19.74bn",growth:"+8.0%",profit:"归母净亏损 ¥1.34bn",margin:"毛利率 20.7%",profitGrowth:"亏损扩大179.9%",cash:"季度经营现金流未列",view:"收入环比恢复且毛利率保持20%以上；产品换代与研发投入使同比亏损扩大。",url:"https://ir.xiaopeng.com/zh-hans/news-releases/news-release-details/xpeng-reports-second-quarter-2026-unaudited-financial-results",fresh:"2026-08-24"},
  {company:"宝马集团",region:"海外母公司",period:"2026 H1",revenue:"€62.27bn",growth:"-8.0%",profit:"税前利润 €4.05bn",margin:"税前利润率 6.5%",profitGrowth:"-29.4%",cash:"汽车业务自由现金流 €1.29bn",view:"中国需求和关税拖累盈利；库存上升令汽车业务自由现金流同比下降。",url:"https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/ir/downloads/en/2026/q2/BMW_Q2-2026-EN.pdf",fresh:"2026-07-30"},
  {company:"梅赛德斯-奔驰集团",region:"海外母公司",period:"2026 Q2",revenue:"€32.06bn",growth:"-3.3%",profit:"调整后EBIT €2.30bn",margin:"调整后EBIT率 7.2%*",profitGrowth:"+15.6%",cash:"工业业务自由现金流 €1.10bn",view:"中国高端车需求、关税与产品换代仍是关键变量；调整后盈利同比改善。",url:"https://group.mercedes-benz.com/dokumente/investoren/berichte/zwischenberichte/q2/mercedes-benz-fact-sheet-q2-2026.pdf",fresh:"2026-07-22"},
  {company:"小米集团",region:"中国新势力",period:"2026 Q2",revenue:"¥108.92bn",growth:"-6.1%",profit:"调整后净利 ¥6.22bn",margin:"集团毛利率 19.8%",profitGrowth:"-42.6%",cash:"经营现金流 ¥3.84bn",view:"智能电动汽车及AI等创新业务收入249亿元；集团指标不等同于汽车业务指标。",url:"https://ir.mi.com/static-files/bdeea0b9-246c-45be-8cb4-ab4faaddf80a",fresh:"2026-08-18"}
];

const MORE_FINANCIALS = [
  {company:"吉利汽车",region:"中国集团",period:"2026 H1",revenue:"¥173.60bn",growth:"+15.0%",profit:"归母净利 ¥9.09bn",margin:"毛利率 17.9%",profitGrowth:"-2.0%",cash:"经营现金流 ¥19.92bn",view:"销量与收入增长，核心归母利润同比增长46%；可比项目影响法定归母利润。",url:"https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0817/2026081700257.pdf",fresh:"2026-08-17"},
  {company:"广汽集团",region:"中国集团",period:"2026 H1",revenue:"¥46.12bn",growth:"+9.38%",profit:"归母亏损 ¥4.47bn",margin:"-9.69%*",profitGrowth:"亏损扩大76.0%",cash:"经营现金流 -¥7.10bn",view:"自主业务收入增长，但合资盈利和投资收益承压，集团亏损同比扩大。",url:"https://www.gacgroup.com/cn/invest/notice",fresh:"2026-08-28"},
  {company:"长安汽车",region:"中国集团",period:"2026 H1",revenue:"¥65.63bn",growth:"-9.71%",profit:"归母净利 ¥0.82bn",margin:"1.25%*",profitGrowth:"-64.32%",cash:"经营现金流 -¥11.41bn",view:"销量下降和汇兑收益减少拖累利润；扣除汇兑影响后归母利润同比改善。",url:"https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=10000959&gather=1&id=12572357",fresh:"2026-08-28"},
  {company:"长城汽车",region:"中国集团",period:"2026 H1",revenue:"¥102.10bn",growth:"+10.58%",profit:"归母净利 ¥2.46bn",margin:"2.41%*",profitGrowth:"-61.11%",cash:"经营现金流 ¥10.44bn",view:"销量和收入增长，但汇率波动及上年高基数使归母利润明显下降。",url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12533776&stockid=601633",fresh:"2026-08-25"},
  {company:"东风集团股份",region:"中国集团",period:"2026 Q1",revenue:"季度未披露",growth:"—",profit:"季度未披露",margin:"—",profitGrowth:"—",cash:"季度未披露",view:"港股上市主体未发布完整一季度利润表；保持最近法定报告期口径。",url:"https://www1.hkexnews.hk/search/titlesearch.xhtml?lang=en",fresh:"截至2026-07-29"},
  {company:"北汽蓝谷",region:"中国集团",period:"2026 H1",revenue:"¥11.60bn",growth:"+21.86%",profit:"归母亏损 ¥1.94bn",margin:"-16.71%*",profitGrowth:"减亏16.0%",cash:"经营现金流 -¥1.75bn",view:"收入增长且亏损收窄，但经营现金流转为净流出。",url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12567997&stockid=600733",fresh:"2026-08-28"},
  {company:"赛力斯",region:"中国集团",period:"2026 H1",revenue:"¥57.49bn",growth:"-7.87%",profit:"归母亏损 ¥1.72bn",margin:"-2.99%*",profitGrowth:"由盈转亏",cash:"经营现金流 -¥12.38bn",view:"主力车型换代使收入和规模效应承压，销售回款减少导致现金流转负。",url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12505883&stockid=601127",fresh:"2026-08-20"},
  {company:"零跑汽车",region:"中国新势力",period:"2026 H1",revenue:"¥38.11bn",growth:"+57.1%",profit:"归母净利 ¥0.21bn",margin:"毛利率 11.7%",profitGrowth:"+600.0%",cash:"经营现金流 ¥2.17bn",view:"交付增长推动收入和利润提升，但原材料及车型结构令毛利率与现金流同比下降。",url:"https://financialfilings.com/filings/zhejiang-leapmotor-technology-co-ltd/earnings-release/2026/57412661/",fresh:"2026-08-24"},
  {company:"江淮汽车",region:"中国集团",period:"2026 H1",revenue:"¥22.13bn",growth:"+14.31%",profit:"归母亏损 ¥0.75bn",margin:"-3.38%*",profitGrowth:"减亏3.1%",cash:"经营现金流 -¥5.29bn",view:"收入增长且归母亏损略有收窄，但经营现金流出进一步扩大。",url:"https://www.jac.com.cn/u/cms/www/202608/20090324lry1.pdf",fresh:"2026-08-20"},
  {company:"中国一汽",region:"中国非上市集团",period:"最新公开信息",revenue:"未独立披露",growth:"—",profit:"未独立披露",margin:"—",profitGrowth:"—",cash:"未独立披露",view:"集团未上市且不独立发布季度财务报表；不以一汽解放等子公司数据替代。",url:"https://www.faw.com/fawcn/373694/373706/index.html",fresh:"持续监控"},
  {company:"奇瑞集团",region:"中国非上市集团",period:"最新公开信息",revenue:"未独立披露",growth:"—",profit:"未独立披露",margin:"—",profitGrowth:"—",cash:"未独立披露",view:"集团暂无独立上市季度财报；保留经营信息监控，不使用媒体估算值。",url:"https://www.cheryholding.com/news.html",fresh:"持续监控"},
  {company:"通用汽车",region:"海外母公司",period:"2026 Q2",revenue:"$48.03bn",growth:"+1.9%",profit:"归母净利 $1.30bn",margin:"2.7%*",profitGrowth:"约-31%",cash:"汽车业务经营现金流 $5.07bn",view:"北美核心业务保持韧性；中国合资权益收益改善至约0.83亿美元。",url:"https://investor.gm.com/static-files/4ee9aed7-9a23-46d5-aa6c-093668907497",fresh:"2026-07-21"},
  {company:"福特汽车",region:"海外母公司",period:"2026 Q2",revenue:"$48.3bn",growth:"约+6%",profit:"归母亏损 $1.3bn",margin:"调整后EBIT率 5.2%",profitGrowth:"由盈转亏",cash:"调整后自由现金流 $2.1bn",view:"营收与调整后经营利润增长，但特殊项目使GAAP口径转为净亏损。",url:"https://www.fromtheroad.ford.com/ca/en/articles/2026/ford-reports-second-quarter-2026-financial-results",fresh:"2026-07-29"},
  {company:"丰田汽车",region:"海外母公司",period:"FY2027 Q1",revenue:"¥13.53tn",growth:"+10.4%",profit:"归母净利 ¥1.48tn",margin:"经营利润率 7.9%",profitGrowth:"+75.6%",cash:"经营现金流 ¥0.54tn",view:"销量与收入增长，投资收益等非经营项目推动归母利润显著上升。",url:"https://global.toyota/pages/global_toyota/ir/financial-results/2027_1q_summary_en.pdf",fresh:"2026-08-04"},
  {company:"本田汽车",region:"海外母公司",period:"FY2027 Q1",revenue:"¥6.06tn",growth:"+13.5%",profit:"归母净利 ¥0.45tn",margin:"经营利润率 8.8%",profitGrowth:"+129.3%",cash:"经营现金流 ¥0.29tn",view:"金融服务与摩托车业务增长，且上年同期电动车相关损失形成低基数。",url:"https://data.swcms.net/file/honda-ir/dam/jcr%3Abd619e88-b049-4e52-aca6-670ab3081b20/140120260804508592.pdf",fresh:"2026-08-05"},
  {company:"日产汽车",region:"海外母公司",period:"FY2026 Q1",revenue:"¥2.96tn",growth:"+9.5%",profit:"归母净利 ¥3.8bn",margin:"经营利润率 2.6%",profitGrowth:"扭亏",cash:"季度未披露",view:"收入和经营利润恢复增长，但重组、产品更新与中国市场修复仍是核心议题。",url:"https://www.nissan-global.com/EN/IR/FINANCIAL_RESULTS/ASSETS/DATA/2026/20261st_summary_641_e.pdf",fresh:"2026-08-03"},
  {company:"Stellantis",region:"海外母公司",period:"2026 Q2",revenue:"€43.48bn",growth:"+13.1%",profit:"净利润 €0.29bn",margin:"调整后经营利润率 1.8%",profitGrowth:"扭亏",cash:"工业自由现金流 €1.00bn",view:"北美带动收入与经营表现改善，工业自由现金流恢复为正。",url:"https://www.media.stellantis.com/uk-en/corporate/press/stellantis-reports-q2-2026-financial-results",fresh:"2026-07-30"},
  {company:"现代汽车集团",region:"海外母公司",period:"2026 Q2",revenue:"₩49.22tn",growth:"+1.9%",profit:"净利润 ₩2.89tn",margin:"经营利润率 5.8%",profitGrowth:"-11.2%",cash:"季度未披露",view:"混动车和北美市场支撑收入，原材料及生产约束压低利润。",url:"https://www.hyundai.com/worldwide/en/newsroom/detail/0000001234",fresh:"2026-07-23"},
  {company:"雷诺集团",region:"海外母公司",period:"2026 H1",revenue:"€30.3bn",growth:"+9.5%",profit:"归母净利 €0.71bn",margin:"经营利润率 5.2%",profitGrowth:"扭亏",cash:"汽车业务自由现金流 €0.65bn",view:"收入增长且现金流稳健，集团确认全年利润率和自由现金流目标。",url:"https://media.renaultgroup.com/renault-group-delivers-robust-performance-confirms-its-2026-fy-guidance-and-rapidly-implements-futuready/?lang=eng",fresh:"2026-07-29"}
];

const ALL_FINANCIALS = [...FINANCIALS, ...MORE_FINANCIALS];
const FRONT_ORDER = ["理想汽车","蔚来","小米集团"];
const SORTED_FINANCIALS = [...ALL_FINANCIALS].sort((a,b)=>{
  const ap=FRONT_ORDER.indexOf(a.company), bp=FRONT_ORDER.indexOf(b.company);
  if(ap>=0 || bp>=0) return (ap>=0?ap:999)-(bp>=0?bp:999);
  const ac=a.region.startsWith("中国"), bc=b.region.startsWith("中国");
  return ac===bc?0:ac?-1:1;
});
const CASH_RESERVES = {
  "理想汽车":"现金头寸 ¥87.5bn",
  "蔚来":"现金及现金等价物、受限现金、短期投资和长期定期存款 ¥56.7bn",
  "小米集团":"现金储备 ¥219.3bn",
  "小鹏汽车":"现金头寸 ¥40.48bn",
  "比亚迪":"货币资金 ¥58.74bn",
  "上汽集团":"货币资金 ¥144.27bn",
  "长安汽车":"货币资金 ¥39.65bn",
  "广汽集团":"货币资金 ¥48.82bn",
  "长城汽车":"货币资金 ¥30.64bn",
  "零跑汽车":"现金及现金等价物、受限现金、金融资产和定期存款 ¥38.59bn",
  "江淮汽车":"货币资金 ¥11.98bn",
  "北汽蓝谷":"货币资金 ¥6.73bn",
  "赛力斯":"货币资金 ¥51.93bn",
  "大众汽车集团":"汽车业务净流动性 €34.24bn",
  "特斯拉":"现金、现金等价物及短期投资 $43.52bn",
  "宝马集团":"汽车业务净金融资产 €42.65bn",
  "吉利汽车":"银行结余及现金 ¥59.36bn",
  "梅赛德斯-奔驰集团":"工业业务净流动性 €30.43bn",
  "丰田汽车":"现金及现金等价物 ¥8.21tn",
  "本田汽车":"现金及现金等价物 ¥5.30tn",
  "通用汽车":"汽车业务现金及受限现金 $15.27bn",
  "福特汽车":"总流动性 超$43bn",
  "Stellantis":"工业业务可用流动性 €44.1bn",
  "雷诺集团":"汽车业务净现金 €6.57bn"
};
function cashFlowValue(item){ return /^现金储备/.test(item.cash)?"季度未披露":item.cash }
function cashReserveValue(item){ return CASH_RESERVES[item.company]||"未披露" }

const STOCKS = [
 {name:"上汽集团",ticker:"600104.SH",symbol:"sh600104",market:"A股",currency:"CNY",url:"https://gu.qq.com/sh600104/gp"},
 {name:"比亚迪",ticker:"002594.SZ / 1211.HK",symbol:"sz002594",market:"A股 / 港股",currency:"CNY",url:"https://gu.qq.com/sz002594/gp"},
 {name:"长安汽车",ticker:"000625.SZ",symbol:"sz000625",market:"A股",currency:"CNY",url:"https://gu.qq.com/sz000625/gp"},
 {name:"长城汽车",ticker:"601633.SH / 2333.HK",symbol:"sh601633",market:"A股 / 港股",currency:"CNY",url:"https://gu.qq.com/sh601633/gp"},
 {name:"广汽集团",ticker:"601238.SH / 2238.HK",symbol:"sh601238",market:"A股 / 港股",currency:"CNY",url:"https://gu.qq.com/sh601238/gp"},
 {name:"北汽蓝谷",ticker:"600733.SH",symbol:"sh600733",market:"A股",currency:"CNY",url:"https://gu.qq.com/sh600733/gp"},
 {name:"赛力斯",ticker:"601127.SH",symbol:"sh601127",market:"A股",currency:"CNY",url:"https://gu.qq.com/sh601127/gp"},
 {name:"江淮汽车",ticker:"600418.SH",symbol:"sh600418",market:"A股",currency:"CNY",url:"https://gu.qq.com/sh600418/gp"},
 {name:"吉利汽车",ticker:"0175.HK",symbol:"hk00175",market:"港股",currency:"HKD",url:"https://gu.qq.com/hk00175/gp"},
 {name:"东风集团股份",ticker:"0489.HK",symbol:"hk00489",market:"港股",currency:"HKD",url:"https://gu.qq.com/hk00489/gp"},
 {name:"零跑汽车",ticker:"9863.HK",symbol:"hk09863",market:"港股",currency:"HKD",url:"https://gu.qq.com/hk09863/gp"},
 {name:"小米集团",ticker:"1810.HK",symbol:"hk01810",market:"港股",currency:"HKD",url:"https://gu.qq.com/hk01810/gp"},
 {name:"蔚来",ticker:"NIO.N / 9866.HK",symbol:"usNIO",market:"美股 / 港股",currency:"USD",url:"https://gu.qq.com/usNIO/gp"},
 {name:"理想汽车",ticker:"LI.O / 2015.HK",symbol:"usLI",market:"美股 / 港股",currency:"USD",url:"https://gu.qq.com/usLI/gp"},
 {name:"小鹏汽车",ticker:"XPEV.N / 9868.HK",symbol:"usXPEV",market:"美股 / 港股",currency:"USD",url:"https://gu.qq.com/usXPEV/gp"},
 {name:"特斯拉",ticker:"TSLA.O",symbol:"usTSLA",market:"美股",currency:"USD",url:"https://gu.qq.com/usTSLA/gp"},
 {name:"通用汽车",ticker:"GM.N",symbol:"usGM",market:"美股",currency:"USD",url:"https://gu.qq.com/usGM/gp"},
 {name:"福特汽车",ticker:"F.N",symbol:"usF",market:"美股",currency:"USD",url:"https://gu.qq.com/usF/gp"},
 {name:"丰田汽车",ticker:"TM.N",symbol:"usTM",market:"美股 / 东京",currency:"USD",url:"https://gu.qq.com/usTM/gp"},
 {name:"本田汽车",ticker:"HMC.N",symbol:"usHMC",market:"美股 / 东京",currency:"USD",url:"https://gu.qq.com/usHMC/gp"},
 {name:"大众汽车",ticker:"VOW3.DE",market:"德国",currency:"EUR",fallbackKey:"vow3",url:"https://www.volkswagen-group.com/en/share-15791"},
 {name:"宝马集团",ticker:"BMW.DE",market:"德国",currency:"EUR",fallbackKey:"bmw",url:"https://www.bmwgroup.com/en/investor-relations/bmw-shares.html"},
 {name:"梅赛德斯-奔驰",ticker:"MBG.DE",market:"德国",currency:"EUR",fallbackKey:"mbg",url:"https://group.mercedes-benz.com/investors/share/"},
 {name:"Stellantis",ticker:"STLAM.MI / STLA.N",symbol:"usSTLA",market:"欧洲 / 美股",currency:"USD",url:"https://gu.qq.com/usSTLA/gp"},
 {name:"现代汽车",ticker:"005380.KS",market:"韩国",currency:"KRW",fallbackKey:"hyundai",url:"https://www.hyundai.com/worldwide/en/company/ir/stock-information"}
];
const CHINA_STOCK_NAMES = new Set(["理想汽车","蔚来","小米集团","小鹏汽车","上汽集团","比亚迪","长安汽车","长城汽车","广汽集团","北汽蓝谷","赛力斯","江淮汽车","吉利汽车","东风集团股份","零跑汽车"]);
const SORTED_STOCKS = [...STOCKS].sort((a,b)=>{
  const ap=FRONT_ORDER.indexOf(a.name), bp=FRONT_ORDER.indexOf(b.name);
  if(ap>=0 || bp>=0) return (ap>=0?ap:999)-(bp>=0?bp:999);
  const ac=CHINA_STOCK_NAMES.has(a.name), bc=CHINA_STOCK_NAMES.has(b.name);
  return ac===bc?0:ac?-1:1;
});
const FALLBACK_QUOTES = {
 vow3:{price:71.50,pct:-2.03,cap:35.82,date:"2026/07/28",trend:[72.98,71.50],cached:true},
 bmw:{price:56.96,pct:0.07,cap:34.16,date:"2026/07/28",trend:[56.92,56.96],cached:true},
 mbg:{price:45.32,pct:1.21,cap:43.11,date:"2026/07/27",trend:[44.78,45.32],cached:true},
 hyundai:{price:364000,pct:-9.68,cap:84083.61,date:"2026/07/28",trend:[403000,364000],cached:true},
 sh600104:{price:11.03,pct:2.41,cap:1267.93,date:"20260730",trend:[10.05,10.34,10.52,10.39,10.60,10.46,10.53,10.61,10.38,10.44,10.58,10.77,11.03],cached:true},
 sz002594:{price:95.64,pct:0.83,cap:8719.69,date:"20260730",trend:[90.18,91.76,94.14,93.47,93.92,94.30,91.57,92.65,91.89,92.40,93.35,94.85,95.64],cached:true},
 sz000625:{price:7.71,pct:2.53,cap:764.29,date:"20260730",trend:[6.824,7.034,7.19,7.11,7.28,7.20,7.21,7.33,7.20,7.26,7.31,7.52,7.71],cached:true},
 sh601633:{price:16.84,pct:1.32,cap:1440.40,date:"20260730",trend:[15.03,15.58,15.89,15.66,16.36,16.09,16.08,16.21,16.12,16.15,16.43,16.62,16.84],cached:true},
 sh601238:{price:5.52,pct:2.79,cap:562.88,date:"20260730",trend:[4.94,5.08,5.16,5.04,5.18,5.10,5.12,5.27,5.10,5.14,5.20,5.37,5.52],cached:true},
 sh600733:{price:6.10,pct:6.27,cap:388.40,date:"20260730",trend:[4.57,4.67,4.79,4.62,4.70,4.66,4.68,4.81,4.73,4.91,5.22,5.74,6.10],cached:true},
 sh601127:{price:60.40,pct:4.14,cap:1052.16,date:"20260730",trend:[53.38,55.89,56.37,54.30,55.61,55.51,55.98,56.38,54.33,55.41,55.93,58.00,60.40],cached:true},
 sh600418:{price:23.76,pct:7.17,cap:535.59,date:"20260730",trend:[22.50,22.50,22.97,21.35,21.05,20.80,20.61,20.77,19.64,20.43,20.96,22.17,23.76],cached:true},
 hk00175:{price:20.28,pct:-0.10,cap:2187.2241,date:"20260730",trend:[18.31,18.40,19.39,18.48,18.79,18.62,17.93,18.52,19.06,18.82,19.12,20.30,20.28],cached:true},
 hk00489:{price:9.54,pct:0,cap:787.2969,date:"20260318",trend:[9.81,9.70,9.71,9.70,9.81,9.61,9.41,9.44,9.35,9.66,9.38,9.54],cached:true},
 hk09863:{price:41.28,pct:-2.13,cap:586.9243,date:"20260730",trend:[36.30,36.06,37.24,35.14,34.92,35.32,33.46,34.64,36.34,37.14,38.52,42.18,41.28],cached:true},
 hk01810:{price:30.96,pct:-2.89,cap:8000.2428,date:"20260730",trend:[26.04,25.86,27.50,26.88,27.74,27.42,26.68,27.14,26.72,28.68,29.26,31.88,30.96],cached:true},
 usNIO:{price:4.76,pct:1.71,cap:119.26975,date:"20260729",trend:[4.68,4.76],cached:true},
 usLI:{price:13.80,pct:4.47,cap:143.61395,date:"20260729",trend:[13.21,13.80],cached:true},
 usXPEV:{price:13.06,pct:2.75,cap:124.93113,date:"20260729",trend:[12.71,13.06],cached:true},
 usTSLA:{price:298.32,pct:-2.97,cap:11782.28979,date:"20260729",trend:[307.45,298.32],cached:true},
 usGM:{price:89.40,pct:-1.00,cap:784.44168,date:"20260729",trend:[90.30,89.40],cached:true},
 usF:{price:15.28,pct:2.14,cap:609.30462,date:"20260729",trend:[14.96,15.28],cached:true},
 usTM:{price:192.84,pct:3.51,cap:2283.42856,date:"20260729",trend:[186.30,192.84],cached:true},
 usHMC:{price:30.68,pct:1.32,cap:398.08123,date:"20260729",trend:[30.28,30.68],cached:true},
 usSTLA:{price:6.01,pct:4.34,cap:174.14022,date:"20260729",trend:[5.76,6.01],cached:true}
};

function Growth({value}) { const down=/^-|下降|亏损扩大|由盈转亏/.test(value); const up=/^\+|收窄/.test(value); return <span title={value} className={down?"down":up?"up":"neutral"}>{down?"▼ ":up?"▲ ":""}{value}</span> }
function Metric({value,type}) {
  const raw=String(value||"—");
  const isStatus=/未披露|未单列|季度未披露|—/.test(raw);
  let short=raw;
  if(!isStatus && type==="margin") {
    short=(raw.match(/-?\d+(?:\.\d+)?%\*?/)||[raw])[0];
  } else if(!isStatus && type==="profit") {
    short=(raw.match(/-?[¥$€₩]?\d+(?:\.\d+)?(?:bn|tn)?/)||[raw])[0];
    if(/亏损|亏损/.test(raw) && !short.startsWith("-")) short=`-${short}`;
  } else if(!isStatus && type==="cash") {
    short=(raw.match(/-?[¥$€₩]?\d+(?:\.\d+)?(?:bn|tn)?/)||[raw])[0];
  }
  return <span className="metric" title={raw}>{short}</span>
}
function formatMarketCap(stock,value){
 if(!Number.isFinite(value)) return "—";
 if(stock.currency==="CNY") return `¥${value.toFixed(2)}亿`;
 if(stock.currency==="HKD") return `HK$${value.toFixed(2)}亿`;
 if(stock.currency==="EUR") return `€${value.toFixed(2)}bn`;
 if(stock.currency==="KRW") return `₩${value.toFixed(2)}bn`;
 return `$${(value/10).toFixed(2)}bn`;
}
function displayQuoteDate(value=""){const digits=String(value).replace(/\D/g,"");return digits.length>=8?`${digits.slice(0,4)}-${digits.slice(4,6)}-${digits.slice(6,8)}`:value}
function stockSource(stock){return stock.symbol?"腾讯证券":"官方投资者关系"}
function App(){
 const [quotes,setQuotes]=React.useState(FALLBACK_QUOTES); const [status,setStatus]=React.useState("显示最近行情"); const [scope,setScope]=React.useState("全部");
 const refreshMarketQuotes=React.useCallback(async()=>{setStatus("正在刷新");const rs=await Promise.allSettled(SORTED_STOCKS.filter(s=>s.symbol).map(async s=>{const u=`https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=${s.symbol},day,,,12,qfq`;const response=await fetch(u,{cache:"no-store"});if(!response.ok)throw Error();const p=await response.json();const x=p?.data?.[s.symbol];const q=x?.qt?.[s.symbol];const rows=x?.qfqday||x?.day||[];if(!q)throw Error();return [s.symbol,{price:Number(q[3]),pct:Number(q[32]),cap:Number(q[45]),date:String(q[30]||"").replace(/\D/g,"").slice(0,8),trend:rows.map(r=>Number(r[2])).filter(Number.isFinite),cached:false}] }));const live={};rs.forEach(r=>r.status==="fulfilled"&&(live[r.value[0]]=r.value[1]));setQuotes(current=>{const next={...current,...live};try{localStorage.setItem("vehicle-financial-market-quotes-v1",JSON.stringify(next))}catch(error){}return next});const expected=SORTED_STOCKS.filter(s=>s.symbol).length;setStatus(Object.keys(live).length===expected?"行情已同步":Object.keys(live).length?"部分行情已同步":"显示最近行情")},[]);
 React.useEffect(()=>{try{const cached=JSON.parse(localStorage.getItem("vehicle-financial-market-quotes-v1")||"null");if(cached)setQuotes(current=>({...current,...cached}))}catch(error){}refreshMarketQuotes()},[refreshMarketQuotes]);
 const filtered=SORTED_STOCKS.filter(s=>scope==="全部"||(scope==="中国上市主体"&&CHINA_STOCK_NAMES.has(s.name))||(scope==="海外母公司"&&!CHINA_STOCK_NAMES.has(s.name)));
 return <div className="shell">
  <header><div><div className="eyebrow">CHINA PASSENGER VEHICLE FINANCIAL DASHBOARD</div><h1>中国乘用车企业财报与资本市场看板</h1><p>中国本土车企 · 新势力 · 在华合资车企海外母公司</p></div><div className="meta"><strong><i></i>数据核验至 2026-09-02</strong><span>内部研究 · 原始披露可追溯</span></div></header>
  <main>
   <section className="summary"><div><span>财报覆盖企业</span><strong>{SORTED_FINANCIALS.length}</strong></div><div><span>全部显示</span><strong>{SORTED_FINANCIALS.length}</strong></div><div><span>上市主体</span><strong>{SORTED_STOCKS.length}</strong></div><div><span>覆盖市场</span><strong>7</strong></div></section>
   <section className="panel"><div className="panel-head"><div><b>01</b><h2>最新业绩与财报关键指标</h2><p>全部企业 · 各自最新披露 · 悬浮数值查看完整指标口径</p></div><span>{SORTED_FINANCIALS.length} 家全部显示</span></div>
    <div className="table-wrap"><table><thead><tr><th>企业 / 报告期</th><th>收入</th><th>收入增长</th><th>利润</th><th>利润率</th><th>利润变化</th><th>现金流</th><th>现金储备</th><th>经营解读</th></tr></thead><tbody>{SORTED_FINANCIALS.map(x=><tr key={x.company}><td><a href={x.url} target="_blank"><strong>{x.company}</strong><small>{x.region} · {x.period} ↗</small></a></td><td><Metric value={x.revenue}/></td><td><Growth value={x.growth}/></td><td><Metric value={x.profit} type="profit"/></td><td><Metric value={x.margin} type="margin"/></td><td><Growth value={x.profitGrowth}/></td><td><Metric value={cashFlowValue(x)} type="cash"/></td><td><Metric value={cashReserveValue(x)} type="cash"/></td><td className="view">{x.view}<small>披露：{x.fresh}</small></td></tr>)}</tbody></table></div>
    <div className="note">* 根据披露值计算。现金流采用报告期经营现金流或企业披露的自由现金流；现金储备采用报告期末现金、现金等价物及企业明确披露的短期投资或净流动性口径，悬浮数值查看完整定义。中国合资公司通常由海外母公司按权益法或区域口径披露。</div>
   </section>
   <section className="panel stock-panel"><div className="panel-head"><div><b>02</b><h2>股市综合看板</h2><p>对应实际上市主体 · 最近交易日或盘中行情 · 不同币种不做市值合计</p></div><div className="market-actions"><span className={`market-status ${status==="行情已同步"?"live":status==="部分行情已同步"?"partial":"cached"}`}><span></span>{status}</span><button className={`market-refresh ${status==="正在刷新"?"loading":""}`} type="button" onClick={refreshMarketQuotes} disabled={status==="正在刷新"} title="手动刷新最新行情" aria-label="手动刷新最新行情"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.34 5.66M20 5v6h-6"/></svg><span>{status==="正在刷新"?"刷新中":"刷新"}</span></button></div></div>
    <div className="stock-summary"><div><span>覆盖上市公司</span><strong>{SORTED_STOCKS.length}</strong></div><div><span>中国上市主体</span><strong>{SORTED_STOCKS.filter(s=>CHINA_STOCK_NAMES.has(s.name)).length}</strong></div><div><span>海外母公司</span><strong>{SORTED_STOCKS.filter(s=>!CHINA_STOCK_NAMES.has(s.name)).length}</strong></div></div>
    <div className="controls">{["全部","中国上市主体","海外母公司"].map(x=><button className={scope===x?"active":""} onClick={()=>setScope(x)} key={x}>{x}</button>)}</div>
    <div className="stock-list" role="list">{filtered.map(s=>{const q=quotes[s.symbol||s.fallbackKey]||{};const state=q.pct>0?"up":q.pct<0?"down":"pending";return <a href={s.url} target="_self" className="stock-row" key={s.name} role="listitem" aria-label={`${s.name} ${s.ticker} 行情来源`}><div className="stock-identity"><strong>{s.name}</strong><span>{s.ticker} · {s.market}</span><em>{displayQuoteDate(q.date)||"待同步"}{q.cached?" · 最近缓存":""}</em></div><StockSparkline values={q.trend} state={state}/><div className={`stock-quote ${state}`}><strong>{Number.isFinite(q.price)?q.price.toFixed(s.currency==="EUR"?3:2):"—"}</strong><span>{Number.isFinite(q.pct)?`${q.pct>0?"+":""}${q.pct.toFixed(2)}%`:"收盘价"}</span></div><div className="stock-cap"><span>市值</span><strong>{formatMarketCap(s,q.cap)}</strong></div><div className="stock-source">{stockSource(s)} ↗</div></a>})}</div>
    <div className="note">行情优先由腾讯证券公开接口在页面打开时同步；德国、韩国市场显示最近公开行情快照，并保留官方投资者关系入口。价格仅作信息展示，不构成投资建议。</div>
   </section>
  </main><footer>数据来源：上市公司公告、交易所文件及企业投资者关系页面 · 财报与行情存在披露及交易时差 · 点击企业名称或股票行查看原始来源</footer>
 </div>
}
function makeSparkPath(values=[]){if(values.length<2)return "M2 18 L88 18";const min=Math.min(...values),max=Math.max(...values),span=max-min||1;return values.map((value,index)=>`${index?"L":"M"}${2+(86*index/(values.length-1))} ${32-(28*(value-min)/span)}`).join(" ")}
function StockSparkline({state="pending",values=[]}){const path=makeSparkPath(values);return <svg className={`stock-sparkline ${state}`} viewBox="0 0 90 36" preserveAspectRatio="none" aria-hidden="true"><path className="spark-area" d={`${path} L88 36 L2 36 Z`}/><path className="spark-line" d={path}/></svg>}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
