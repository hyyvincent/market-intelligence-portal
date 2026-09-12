const companies = [
  { id:"yanfeng", track:"综合内饰", name:"延锋", en:"Yanfeng", listed:false, region:"中国", products:["副仪表板","门板","内饰总成","金属扬声器罩","新材料","座椅扶手"], note:"全球汽车内饰供应商，首版重点追踪副仪表板、门板、座舱系统及关联公司。", url:"https://www.yanfeng.com/cn/floor-consoles-cn" },
  { id:"xinquan", track:"综合内饰", name:"新泉", en:"Xinquan", listed:true, ticker:"603179.SH", region:"中国", products:["仪表板","门板","内饰总成"], note:"上市主体与各生产基地分层监控。", url:"https://www.sse.com.cn/" },
  { id:"forvia", track:"综合内饰", name:"佛吉亚", en:"FORVIA / Faurecia", listed:true, ticker:"FRVIA.PA", region:"法国", products:["副仪表板","门板","新材料"], note:"佛吉亚作为 FORVIA 集团别名与业务标签，新闻和财务不重复累计。", url:"https://www.forvia.com/en/press/2025-annual-results" },
  { id:"antolin", track:"综合内饰", name:"安通林", en:"Antolin", listed:false, region:"西班牙", products:["门板","内饰总成","新材料"], note:"追踪集团、中国业务主体、照明电子化内饰与新材料。", url:"https://www.antolin.com/en/financial-info-home" },
  { id:"lear", track:"综合内饰", name:"李尔", en:"Lear", listed:true, ticker:"LEA.N", region:"美国", products:["座椅扶手","内饰总成"], note:"只保留与座椅、扶手及相关内饰业务有关的集团动态。", url:"https://www.lear.com/" },
  { id:"huaxiang", track:"综合内饰", name:"宁波华翔", en:"Ningbo Huaxiang", listed:true, ticker:"002048.SZ", region:"中国", products:["门板","内饰总成","新材料"], note:"集团与关联子公司、国内外客户项目分别记录。", url:"https://www.cninfo.com.cn/" },
  { id:"magna", track:"综合内饰", name:"麦格纳", en:"Magna", listed:true, ticker:"MGA.N / MG.TO", region:"加拿大", products:["座椅扶手","内饰总成"], note:"过滤集团噪声，仅纳入座椅与内饰相关信息。", url:"https://www.magna.com/" },
  { id:"faway", track:"综合内饰", name:"一汽富维", en:"FAWAY", listed:true, ticker:"600742.SH", region:"中国", products:["仪表板","门板","座椅扶手"], note:"优先建立集团、上市主体及关联公司关系。", url:"https://www.sse.com.cn/" },
  { id:"nobo", track:"综合内饰", name:"诺博", en:"Nobo Automotive", listed:false, region:"中国", products:["门板","座椅扶手","内饰总成"], note:"追踪集团业务、生产基地和客户定点。", url:"https://www.noboauto.com/" },
  { id:"caht", track:"综合内饰", name:"成航模塑", en:"Chengdu Aerospace Mould & Plastic", listed:false, region:"中国", products:["仪表板","门板","内饰总成"], note:"主档使用成都航天模塑有限责任公司全称。", url:"https://www.casic.com.cn/" },
  { id:"fucheng", track:"综合内饰", name:"富诚", en:"Fucheng Group", listed:false, region:"中国", products:["内饰总成","表面工艺"], note:"重点补齐关联制造主体、产品和客户证据。", url:"https://www.fcheng.com/mobilec/index.php/about/index.html" },
  { id:"pingwei", track:"综合内饰", name:"重庆平伟", en:"Perfectway Automotive", listed:false, region:"中国", products:["模具","表面工艺","内饰件"], note:"与重庆平伟半导体严格区分，监控汽车科技业务。", url:"https://www.pwjt.com/" },
  { id:"sps", track:"金属扬声器罩", name:"重庆赛帕斯", en:"Suppass", listed:false, region:"中国", products:["金属扬声器罩","细孔格栅"], note:"汽车音响金属网罩、细孔格栅及金属内饰专业制造商。", url:"https://www.spsjs.com/article/type/18-1.html" },
  { id:"tuoxin", track:"金属扬声器罩", name:"宣城托新", en:"Top Sun", listed:false, region:"中国", products:["金属扬声器罩","表面工艺"], note:"主档为宣城托新精密科技有限公司，追踪喇叭网装饰面板及金属饰件。", url:"https://www.xuancheng.gov.cn/OpennessContent/show/2328615.html" },
  { id:"oakwood", track:"金属扬声器罩", name:"奥克伍德", en:"Oakwood", listed:false, region:"美国", products:["金属扬声器罩","音频罩盖"], note:"全球汽车金属扬声器格栅专业制造商。", url:"https://www.oakwoodgroup.com/product" },
  { id:"zhuanjing", track:"金属扬声器罩", name:"吉安专精", en:"Zhuanjing", listed:false, region:"中国", products:["金属扬声器罩","表面工艺"], note:"主档为吉安专精科技有限公司，聚焦汽车金属蚀刻喇叭网、装饰条及相关表面工艺。", url:"https://www.sohu.com/a/962055381_121977469" },
  { id:"yecheng", track:"金属扬声器罩", name:"佛山叶诚", en:"Yecheng", listed:false, region:"中国", products:["金属扬声器罩"], note:"主档为佛山叶诚科技有限公司，公开项目披露年产500万件汽车喇叭网建设项目。", url:"https://www.ixbang.com/gd/area-440600/history-17/20250418.html" }
];

const news = [
  { id:1, company:"延锋", track:"综合内饰", type:"产品与技术", date:"2026-07-08", title:"XiM27 全场景智能座舱平台发布", summary:"可量产的多功能 MPV 座舱整合集中式电子架构、生成式 AI、可重构座椅与多场景空间，是整舱集成与中控交互的重要竞争信号。", source:"延锋官网", url:"https://www.yanfeng.com/cn/yanfengzhengshifabu-xim27keliangchandequanchangjingzhinengzuocangpingtai" },
  { id:2, company:"行业", track:"综合内饰", type:"新材料", date:"2026-07-01", title:"Bcomp 为 BMW M Neue Klasse 概念车提供生物复合材料", summary:"天然纤维高性能复合材料进入内外饰概念验证，反映轻量化、低碳材料和可见纹理表面的结合趋势。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials/bcomp-supplies-biocomposites-for-bmw-m-concept-neue-klasse.html" },
  { id:3, company:"行业", track:"综合内饰", type:"行业展会", date:"2026-06-26", title:"Sekisui 展示下一代汽车内饰材料与表面技术", summary:"Automotive Interiors Expo 2026 重点关注材料触感、表面装饰、循环利用与面向量产的内饰工艺。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials" },
  { id:4, company:"行业", track:"综合内饰", type:"声学与座舱", date:"2026-06-25", title:"Toray 展示汽车内饰吸声无纺材料 Airlite", summary:"面向座舱 NVH 和轻量化的吸声材料成为展会重点，与扬声器罩、门板声学和内饰包覆协同相关。", source:"MobileTex", url:"https://www.textilemedia.com/mobiletex/latest-news/" },
  { id:5, company:"行业", track:"综合内饰", type:"产品与技术", date:"2026-06-25", title:"KEPO 展示量产级氛围灯与座椅振动技术", summary:"仪表板及门板灯带、触觉反馈和座椅振动方案已进入量产应用，体现内饰件从装饰件向交互载体演进。", source:"KEPO Technologies", url:"https://www.kepotech.com/automotive-interiors-expo-europe/" },
  { id:6, company:"行业", track:"综合内饰", type:"新材料", date:"2026-06-24", title:"FORVIA Interiors 与 Materi’Act 展示循环材料应用", summary:"材料、注塑与高品质可见件能力结合，聚焦再生与循环材料在概念车内饰中的工程化应用。", source:"MobileTex", url:"https://www.textilemedia.com/mobiletex/latest-news/" },
  { id:7, company:"行业", track:"综合内饰", type:"行业展会", date:"2026-06-23", title:"Automotive Interiors Expo Europe 聚焦数字座舱与可持续内饰", summary:"展品覆盖 HMI、数字座舱、再生材料、3D 打印、触觉反馈、氛围灯、声学与座椅材料，可作为新兴供应商扩展池。", source:"展会官网", url:"https://automotive-interiors-expo.com/en/show-news.php" },
  { id:8, company:"行业", track:"综合内饰", type:"产品与技术", date:"2026-06-18", title:"MacDermid Alpha 与 Lynctek 合作推进智能表面制造", summary:"面向无缝、触控和发光内饰表面的制造协作，直接关联门板、中控面板与功能化装饰件。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials" },
  { id:9, company:"行业", track:"综合内饰", type:"新材料", date:"2026-05-19", title:"Teknor Apex 推出最高含 70% PCR 的 PP 复合材料", summary:"高比例消费后再生材料向汽车内饰应用推进，需持续关注表面质量、气味、耐久与批次稳定性。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials" },
  { id:10, company:"行业", track:"综合内饰", type:"客户与车型", date:"2026-05-13", title:"Audi Q9 强化内饰舒适性、材料与用户体验", summary:"整车端对舒适、材料质感和座舱体验的要求提升，为门板、中控、出风口和软包覆供应商提供需求信号。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials" },
  { id:11, company:"安通林", track:"综合内饰", type:"年度报告", date:"2026-05-13", title:"Antolin 发布 2025 年综合报告", summary:"披露全年经营、转型计划、产品创新与可持续发展；2025 年 EBITDA 为 2.96 亿欧元。", source:"Antolin", url:"https://annualreport.antolin.com/2025/en/" },
  { id:12, company:"安通林", track:"综合内饰", type:"业绩财报", date:"2026-05-07", title:"Antolin 披露 2026 年第一季度经营表现", summary:"净销售额 8.516 亿欧元，同比下降 13.5%；净利润 7,250 万欧元主要受益于出售印度三家子公司，run-rate EBITDA 率为 9.2%。", source:"Antolin", url:"https://www.antolin.com/en/antolin-reports-eu725-million-profit-first-quarter-following-sale-three-subsidiaries-india" },
  { id:13, company:"李尔", track:"综合内饰", type:"业绩财报", date:"2026-07-31", title:"Lear 发布 2026 年第二季度业绩并上调全年展望", summary:"收入 62.09 亿美元，同比增长 3%；核心经营利润 3.13 亿美元，同比增长 7%，核心经营利润率为 5.0%；自由现金流 2.88 亿美元，同比增长 69%。", source:"Lear", url:"https://www.lear.com/newsroom/lear-reports-second-quarter-2026-results" },
  { id:14, company:"麦格纳", track:"综合内饰", type:"业绩财报", date:"2026-07-31", title:"Magna 发布 2026 年第二季度业绩并上调全年展望", summary:"季度销售额 109.8 亿美元，同比增长 3%；调整后 EBIT 6.77 亿美元，同比增长 16%，调整后 EBIT 利润率升至 6.2%，自由现金流为 6.17 亿美元。", source:"Magna", url:"https://www.magna.com/stories/news-press-release/2026/magna-announces-strong-second-quarter-results--raises-outlook-for-2026" },
  { id:15, company:"新泉", track:"综合内饰", type:"业绩财报", date:"2026-08-04", title:"新泉股份披露 2026 年半年报", summary:"上半年营业收入 80.15 亿元，同比增长 7.45%；归母净利润 4.14 亿元，同比下降 1.90%；经营现金流 2.05 亿元，同比增长 15.69%。仪表板与门板收入分别增长 7.25% 和 8.24%。", source:"法定披露", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12474866&stockid=603179" },
  { id:16, company:"宁波华翔", track:"综合内饰", type:"业绩财报", date:"2026-08-29", title:"宁波华翔披露 2026 年半年报", summary:"上半年营业收入 102.49 亿元，同比下降 20.42%；归母净利润 7.23 亿元，同比扭亏，扣非净利润 5.49 亿元，同比下降 8.41%；经营现金流 7.79 亿元。", source:"法定披露", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12573812&stockid=002048" },
  { id:17, company:"佛吉亚", track:"综合内饰", type:"业绩财报", date:"2026-07-31", title:"FORVIA 发布 2026 年半年报，利润率与现金流改善", summary:"上半年销售额 105.09 亿欧元，同比下降 4.3%；经营利润 6.32 亿欧元，同比增长 1.6%，经营利润率升至 6.0%；净现金流 4.32 亿欧元，同比增长 18.8%。", source:"FORVIA", url:"https://www.forvia.com/en/investors/equity-investors-analyst/financial-results" },
  { id:18, company:"一汽富维", track:"综合内饰", type:"业绩财报", date:"2026-08-29", title:"富维股份披露 2026 年半年报", summary:"上半年营业收入 71.41 亿元，同比下降 23.23%；归母净利润 1.90 亿元，同比下降 28.28%；经营现金流 11.11 亿元，同比增长 111.7%。", source:"法定披露", url:"https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12568376&stockid=600742" },
  { id:19, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-07-24", title:"家居审美重新重视天然木纹与个性化表面", summary:"消费者偏好有识别度但不过度张扬的天然纹理，并希望获得接近定制的质感。对汽车内饰的潜在影响是木纹、金属组合和个性化饰板需求上升。", source:"Livingetc", url:"https://www.livingetc.com/shopping/westwing-ako-collection" },
  { id:20, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-07-23", title:"触感和手工纹理正在替代单纯色彩表达", summary:"家居设计中雕刻、凹凸和不完全规则的表面获得关注。对门板、中控和扬声器罩的启示是通过微纹理、光影和触感建立品质感，而非只依赖颜色。", source:"Livingetc", url:"https://www.livingetc.com/ideas/dimpled-wood-trend" },
  { id:21, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-06-17", title:"AI智能设备普及，但消费者对隐私仍高度敏感", summary:"Pew 调查显示约35%的美国成年人拥有智能音箱，71%认为AI会降低个人信息安全。座舱AI需要清晰的录音状态、可见隐私提示和可立即操作的物理关闭方式。", source:"Pew Research Center", url:"https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/" },
  { id:22, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-05-27", title:"消费者希望AI提供建议，但不愿完全交出最终决定", summary:"Gartner 调查指出，消费者更接受AI帮助筛选和研究，而非替其做最终选择。对智能座舱的启示是保留确认步骤、可撤销操作和明确的人工控制权。", source:"Gartner", url:"https://www.gartner.com/en/newsroom/press-releases/2026-05-27-gartner-survey-finds-consumers-want-ai-shopping-help-but-not-ai-purchase-decisions" },
  { id:23, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-05-05", title:"42%的消费者已经使用AI工具辅助选购", summary:"NIQ 数据显示AI正参与产品发现、比较和选择，但消费者仍倾向保留控制权。汽车内饰卖点需要更结构化、可比较，并能被AI推荐系统准确理解。", source:"NIQ", url:"https://nielseniq.com/global/en/news-center/2026/42-of-consumers-now-use-ai-tools-to-shop-niq-data-shows/" },
  { id:24, company:"GRAMMER AG", track:"综合内饰", type:"业绩财报", date:"2026-08-14", title:"GRAMMER 正式发布 2026 年半年报", summary:"上半年收入 9.614 亿欧元，同比增长 0.8%；经营 EBIT 4,170 万欧元，同比增长 17.1%，经营 EBIT 率升至 4.3%；自由现金流由负转正至 150 万欧元。", source:"GRAMMER", url:"https://www.grammer.com/en/press-releases/article/grammer-ag-veroeffentlicht-ergebnisse-fuer-das-erste-halbjahr-2026/" },
  { id:25, company:"佛吉亚", track:"综合内饰", type:"新材料", date:"2026-07-09", title:"Materi’Act 与雷诺推进报废汽车回收塑料用于量产仪表板", summary:"FORVIA 旗下 Materi’Act 将报废车辆回收塑料用于 Renault Master 大型可见仪表板部件，显示闭环材料开始由概念验证走向可见内饰件量产。", source:"FORVIA / Materi’Act", url:"https://www.marketscreener.com/news/forvia-ex-faurecia-materia-act-and-renault-pioneer-the-use-of-end-of-life-vehicle-plastics-for-th-ce7f5ededb8aff22" },
  { id:26, company:"安通林", track:"综合内饰", type:"经营与战略", date:"2026-06-24", title:"Antolin 推进债务重组并获得长期营运资金安排", summary:"公司与主要银行达成再融资安排，延长债务期限并设置最高 2.2 亿欧元长期营运资金支持；该事项关系其转型执行能力、融资成本和供应稳定性。", source:"Cinco Días", url:"https://cincodias.elpais.com/companias/2026-06-24/antolin-alcanza-un-acuerdo-con-la-banca-espanola-para-refinanciar-su-deuda.html" },
  { id:27, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-07-23", title:"新车体验提升中，内饰成为消费者感知改善最大的类别", summary:"J.D. Power 2026 APEAL 研究显示，新车内饰体验得分同比提升 11 分，是所有类别中增幅最大的一项；说明触感、做工、空间便利性和整体座舱体验正更直接影响消费者评价。", source:"J.D. Power", url:"https://jdpower.com/business/press-releases/2026-u-s-automotive-performance-execution-and-layout-apeal-study" },
  { id:28, company:"华域汽车", track:"综合内饰", type:"业绩财报", date:"2026-08-28", title:"华域汽车披露 2026 年半年报", summary:"上半年营业收入 839.39 亿元，同比下降 1.43%；归母净利润 26.47 亿元，同比下降 8.67%；经营现金流 79.68 亿元，同比增长 16.69%。新能源车型与自主品牌新订单占比分别达到 78% 和 68%。", source:"法定披露", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12556283&stockid=600741" },
  { id:29, company:"常熟汽饰", track:"综合内饰", type:"业绩财报", date:"2026-08-29", title:"常熟汽饰披露 2026 年半年报", summary:"上半年营业收入 34.91 亿元，同比增长 25.58%；归母净利润 1.17 亿元，同比下降 46.09%；经营现金流 2.61 亿元，同比增长 196.63%。新工厂量产拉动收入，但成本和费用上升压低利润。", source:"法定披露", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12569272&stockid=603035" },
  { id:30, company:"岱美股份", track:"综合内饰", type:"业绩财报", date:"2026-08-29", title:"岱美股份披露 2026 年半年报", summary:"上半年营业收入 30.22 亿元，同比下降 4.82%；归母净利润 4.20 亿元，同比增长 74.16%，但扣非净利润同比下降 12.91%；经营现金流 4.36 亿元。利润高增长主要受上年墨西哥火灾低基数影响。", source:"法定披露", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12567241&stockid=603730" },
  { id:31, company:"福赛科技", track:"综合内饰", type:"业绩财报", date:"2026-08-29", title:"福赛科技披露 2026 年半年报", summary:"上半年营业收入 8.23 亿元，同比增长 0.36%；归母净利润 0.72 亿元，同比增长 14.2%；经营现金流 0.67 亿元，同比下降 57.03%。研发投入同比增长 12.72%。", source:"法定披露", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12569905&stockid=301529" },
  { id:32, company:"安通林", track:"综合内饰", type:"产品与技术", date:"2026-09-08", title:"Antolin 与 UltraSense 推进全球车型智能表面 HMI", summary:"方案把触摸、压力感知、视觉和触觉反馈集成进轻薄固态表面；Antolin 负责完整方案的集成、工程开发与工业化，显示智能表面正从概念进入全球车型平台开发。", source:"Antolin", url:"https://www.antolin.com/en/antolin-and-ultrasense-develop-smart-surface-hmi-global-vehicle-platform" },
  { id:33, company:"行业", track:"综合内饰", type:"新材料", date:"2026-09-01", title:"丰田量产内饰采用免喷涂大理石纹效果材料", summary:"SUSONITY、丰田欧洲与 PVL 将效果颜料和注塑着色工艺用于 Aygo X Hybrid 的侧出风口及中控部件，在减少后喷涂工序的同时实现高端纹理。", source:"环球新材国际", url:"https://www.chesir.com/en/2026/09/global-new-material-international-collaborates-with-toyota-susonity-premium-effect-pigment-technology-supports-toyotas-new-model-vehicles/" },
  { id:34, company:"行业", track:"综合内饰", type:"新材料", date:"2026-09-03", title:"Polyblend 投资再生塑料复合材料产能", summary:"材料企业投资 400 万欧元改造再生塑料复合材料生产，反映汽车内饰对可循环材料稳定供应和量产成本的关注继续上升。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials" }
];

const financialResults = [
  {company:"新泉股份", period:"2026 H1", revenue:"80.15亿元", growth:"+7.45%", profit:"归母净利 4.14亿元", profitMargin:"归母净利率 5.17%", profitGrowth:"-1.90%", cashFlow:"经营现金流 2.05亿元", overview:"仪表板、门板等核心产品保持增长，现金流改善；行业价格竞争、研发投入和海外产能爬坡使利润略有下降。", strategy:"扩充德国、北美产能并建设马来西亚基地，推进H股上市和海外客户本地化配套。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12474866&stockid=603179"},
  {company:"宁波华翔", period:"2026 H1", revenue:"102.49亿元", growth:"-20.42%", profit:"归母净利 7.23亿元", profitMargin:"归母净利率 7.05%", profitGrowth:"+293.60%", cashFlow:"经营现金流 7.79亿元", overview:"海外低效业务剥离导致收入下降；上年同期处置损失形成低基数，本期归母净利润扭亏，但汇兑损失使扣非利润仍下降。", strategy:"优化全球资产与客户结构，聚焦轻量化、智能底盘并拓展机器人硬件。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12573812&stockid=002048"},
  {company:"富维股份", period:"2026 H1", revenue:"71.41亿元", growth:"-23.23%", profit:"归母净利 1.90亿元", profitMargin:"归母净利率 2.66%", profitGrowth:"-28.28%", cashFlow:"经营现金流 11.11亿元", overview:"主要客户需求和销量承压拖累收入与利润；累计降本约4.2亿元、回款改善使经营现金流大幅增长。", strategy:"巩固一汽体系并拓展外部客户，推进智能座舱、轻量化及新兴业务布局。", url:"https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12568376&stockid=600742"},
  {company:"华域汽车", period:"2026 H1", revenue:"839.39亿元", growth:"-1.43%", profit:"归母净利 26.47亿元", profitMargin:"归母净利率 3.15%", profitGrowth:"-8.67%", cashFlow:"经营现金流 79.68亿元", overview:"内外饰收入小幅下降，汇率波动导致财务费用上升；经营现金流改善，电子电器业务保持较快增长。", strategy:"围绕智能座舱、智能底盘和智能动力转型，提升新能源、自主品牌及海外客户占比。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12556283&stockid=600741"},
  {company:"继峰股份", period:"2026 H1", revenue:"130.78亿元", growth:"+24.28%", profit:"归母净利 3.65亿元", profitMargin:"归母净利率 2.79%", profitGrowth:"+137.26%", cashFlow:"经营现金流 2.43亿元", overview:"乘用车座椅收入同比增长110.62%，项目放量、规模效应、格拉默整合与降本共同推动盈利和现金流显著改善。", strategy:"持续推进以乘用车座椅为核心的智能座舱战略，并以工业机器人打造第三增长曲线。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12495745&stockid=603997"},
  {company:"常熟汽饰", period:"2026 H1", revenue:"34.91亿元", growth:"+25.58%", profit:"归母净利 1.17亿元", profitMargin:"归母净利率 3.34%", profitGrowth:"-46.09%", cashFlow:"经营现金流 2.61亿元", overview:"订单增长和安庆、合肥新工厂量产拉动收入，但产能爬坡、人员及研发费用增加，利润率明显承压。", strategy:"扩大新能源客户和海外布局，提高新工厂利用率与规模化盈利。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12569272&stockid=603035"},
  {company:"岱美股份", period:"2026 H1", revenue:"30.22亿元", growth:"-4.82%", profit:"归母净利 4.20亿元", profitMargin:"归母净利率 13.90%", profitGrowth:"+74.16%", cashFlow:"经营现金流 4.36亿元", overview:"需求和汇兑损失压低收入及扣非利润；归母利润高增长主要来自上年墨西哥火灾低基数，不能直接视作经营性跃升。", strategy:"推动汽车顶棚业务放量，巩固遮阳板优势并探索机器人等第二增长曲线。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12567241&stockid=603730"},
  {company:"福赛科技", period:"2026 H1", revenue:"8.23亿元", growth:"+0.36%", profit:"归母净利 0.72亿元", profitMargin:"归母净利率 8.79%", profitGrowth:"+14.20%", cashFlow:"经营现金流 0.67亿元", overview:"收入基本持平，成本改善支持利润增长；研发投入增加，但销售回款减少使经营现金流同比下降57%。", strategy:"扩建墨西哥产能，拓展智能表面、功能件和新能源三电嵌件。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12569905&stockid=301529"},
  {company:"FORVIA", period:"2026 H1", revenue:"€10.51bn", growth:"-4.3%", profit:"经营利润 €632m", profitMargin:"经营利润率 6.0%", profitGrowth:"+1.6%", cashFlow:"净现金流 €432m", overview:"市场产量偏弱及中国客户结构拖累销售，但成本纪律与自助改善措施推动利润率和现金流提升。", strategy:"Interiors 出售预计四季度完成，继续执行 IGNITE、降本和降杠杆。", url:"https://www.forvia.com/en/investors/equity-investors-analyst/financial-results"},
  {company:"Antolin", period:"2026 Q1", revenue:"€851.6m", growth:"-13.5%", profit:"净利润 €72.5m", profitMargin:"EBITDA率 7.8%", profitGrowth:"+1,194.6%*", cashFlow:"Q1未量化披露", overview:"可比营收下降5.9%；净利润跃升主要来自出售印度三家子公司的资本收益，run-rate EBITDA率为9.2%。", strategy:"聚焦高价值内饰技术方案，继续重组与区域效率提升。", url:"https://www.antolin.com/en/antolin-reports-eu725-million-profit-first-quarter-following-sale-three-subsidiaries-india"},
  {company:"Lear", period:"2026 Q2", revenue:"$6.21bn", growth:"+3.0%", profit:"核心经营利润 $313m", profitMargin:"核心利润率 5.0%", profitGrowth:"+7.0%", cashFlow:"经营现金流 $461m / FCF $288m", overview:"重点平台增产、重组节省与运营效率改善推动利润增长，自由现金流同比增长69%。", strategy:"上调全年展望，以自动化和数字工具提效，并扩大座椅及电子系统定点。", url:"https://www.lear.com/newsroom/lear-reports-second-quarter-2026-results"},
  {company:"Magna", period:"2026 Q2", revenue:"$10.98bn", growth:"+3.0%", profit:"调整后 EBIT $677m", profitMargin:"调整后 EBIT率 6.2%", profitGrowth:"+16.0%", cashFlow:"自由现金流 $617m", overview:"新项目投产、生产率改善、重组收益及汇率正向影响推动盈利增长，抵消区域产量走弱和部分项目停产影响。", strategy:"上调全年利润率、EPS与自由现金流展望，继续优化业务组合并提高资本回报。", url:"https://www.magna.com/stories/news-press-release/2026/magna-announces-strong-second-quarter-results--raises-outlook-for-2026"},
  {company:"GRAMMER AG", period:"2026 H1", revenue:"€0.96bn", growth:"+0.8%", profit:"经营 EBIT €41.7m", profitMargin:"经营 EBIT率 4.3%", profitGrowth:"+17.1%", cashFlow:"自由现金流 €1.5m", overview:"二季度收入回升，区域整合和成本措施推动经营利润改善，自由现金流由上年同期负值转正。", strategy:"确认全年约19亿欧元收入与约8,000万欧元经营EBIT目标，继续全球协同与成本优化。", url:"https://www.grammer.com/en/press-releases/article/grammer-ag-veroeffentlicht-ergebnisse-fuer-das-erste-halbjahr-2026/"}
];

const financialDisclosureGaps = ["延锋","诺博","成航模塑","富诚","重庆平伟","重庆赛帕斯","宣城托新","奥克伍德","吉安专精","佛山叶诚"];

const audienceProfiles = {
  "销售": { en:"SALES", title:"技术、竞争环境和定点", description:"优先关注客户车型、竞争对手定点、量产技术、消费者偏好和可能改变报价策略的经营信号。", types:["客户与车型","消费者偏好","产品与技术","业绩财报","经营与战略","声学与座舱","新材料","年度报告","行业展会"] },
  "研发": { en:"R&D", title:"技术路线、材料与量产工艺", description:"优先关注消费者偏好、中控、门板、座椅、声学、智能表面、循环材料与可制造性变化。", types:["消费者偏好","产品与技术","新材料","声学与座舱","行业展会","客户与车型","业绩财报","经营与战略","年度报告"] },
  "管理层": { en:"MANAGEMENT", title:"竞争格局、盈利与战略动作", description:"优先关注收入与利润变化、消费者趋势、业务出售、客户结构和影响资源配置的行业方向。", types:["业绩财报","经营与战略","消费者偏好","年度报告","客户与车型","产品与技术","新材料","行业展会","声学与座舱"] }
};

const audiencePriorities = {
  "销售": [
    {level:"高", company:"延锋", title:"XiM27 展示可量产整舱集成能力", why:"客户对整舱、场景化和软硬件一体化的询价门槛可能提升。", action:"梳理现有中控与门板项目中可组合报价的功能件和合作伙伴。", newsId:1},
    {level:"高", company:"FORVIA", title:"推进 Interiors 业务出售", why:"潜在股权与客户关系变化可能带来供应链重新选择窗口。", action:"跟踪买方、重点客户和中国区项目团队变化，建立替代切入清单。", newsId:17},
    {level:"中", company:"Audi / 行业", title:"高端车型继续强化材料与座舱体验", why:"可见件质感、舒适性和用户体验仍是中高端项目的核心卖点。", action:"将表面工艺、低气味和触感方案转化为客户可比较的样件包。", newsId:10}
  ],
  "研发": [
    {level:"高", company:"延锋", title:"XiM27 集成 AI、可重构座椅与集中式架构", why:"内饰件正在从结构和装饰件转向可交互的整舱系统。", action:"评估中控、扶手与门板的电气接口、模块化及场景切换能力。", newsId:1},
    {level:"高", company:"材料技术", title:"高比例 PCR PP 与天然纤维复合材料加速", why:"低碳材料需要同时满足外观、气味、耐久和批次稳定性。", action:"建立 PCR PP、天然纤维及现有材料的性能与成本对标矩阵。", newsId:9},
    {level:"中", company:"智能表面", title:"触控、发光与无缝表面制造协同", why:"门板和中控可见件将承载更多交互功能，工艺链更加复杂。", action:"识别 IME/IML、透光装饰、触控膜与注塑工艺的能力缺口。", newsId:8}
  ],
  "管理层": [
    {level:"高", company:"FORVIA", title:"内饰业务出售进入推进阶段", why:"全球内饰供应格局可能重组，并影响客户、人才与产能分布。", action:"建立潜在买方情景及对中国市场竞争强度的影响评估。", newsId:17},
    {level:"高", company:"Magna", title:"二季度盈利与现金流改善并上调展望", why:"收入增长3%的同时调整后EBIT增长16%，反映生产率、重组和项目组合对利润弹性的贡献。", action:"对照自身项目爬坡、产能利用率和自由现金流，识别可以复制的运营改善抓手。", newsId:14},
    {level:"中", company:"技术投资", title:"智能座舱与循环材料继续获得投入", why:"技术升级与可持续要求将提高研发投入和供应商协同成本。", action:"明确未来两年必须自研、联合开发和外购的能力边界。", newsId:6}
  ]
};

const signalItems = [...news].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,3);
const productColumns = ["副仪表板","门板","座椅扶手","内饰总成","金属扬声器罩","新材料"];

const listedStocks = [
  { id:"xinquan", name:"新泉股份", ticker:"603179.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603179", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603179/gp" },
  { id:"huaxiang", name:"宁波华翔", ticker:"002048.SZ", market:"深交所", currency:"CNY", quoteSymbol:"sz002048", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sz002048/gp" },
  { id:"faway", name:"富维股份", ticker:"600742.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh600742", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh600742/gp" },
  { id:"jifeng", name:"继峰股份", ticker:"603997.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603997", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603997/gp" },
  { id:"changshu", name:"常熟汽饰", ticker:"603035.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603035", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603035/gp" },
  { id:"daimay", name:"岱美股份", ticker:"603730.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603730", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603730/gp" },
  { id:"foseal", name:"福赛科技", ticker:"301529.SZ", market:"深交所", currency:"CNY", quoteSymbol:"sz301529", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sz301529/gp" },
  { id:"huayu", name:"华域汽车", ticker:"600741.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh600741", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh600741/gp" },
  { id:"forvia", name:"FORVIA", ticker:"FRVIA.PA", market:"巴黎泛欧", currency:"EUR", source:"Euronext", sourceUrl:"https://live.euronext.com/en/product/equities/FR0000121147-XPAR" },
  { id:"lear", name:"李尔", ticker:"LEA.N", market:"纽约证交所", currency:"USD", quoteSymbol:"usLEA", source:"腾讯证券", sourceUrl:"https://gu.qq.com/usLEA/gp" },
  { id:"magna", name:"麦格纳", ticker:"MGA.N", market:"纽约证交所", currency:"USD", quoteSymbol:"usMGA", source:"腾讯证券", sourceUrl:"https://gu.qq.com/usMGA/gp" },
  { id:"grammer", name:"GRAMMER AG", ticker:"GMM.DE", market:"德国 Xetra", currency:"EUR", source:"GRAMMER / Stuttgart", sourceUrl:"https://www.grammer.com/en/investor-relations/share/" }
];

const fallbackQuotes = {
  xinquan:{price:37.50, previous:38.78, change:-1.28, percent:-3.30, cap:267.82, date:"2026-09-11", trend:[39.59,39.40,40.50,41.78,39.45,41.64,41.08,39.84,38.78,37.50], cached:true},
  huaxiang:{price:17.53, previous:18.15, change:-0.62, percent:-3.42, cap:124.14, date:"2026-09-11", trend:[20.05,19.57,19.25,19.22,18.72,19.26,19.06,18.71,18.15,17.53], cached:true},
  faway:{price:7.55, previous:7.76, change:-0.21, percent:-2.71, cap:56.10, date:"2026-09-11", trend:[7.75,7.82,7.82,7.77,7.76,7.81,7.92,7.87,7.76,7.55], cached:true},
  forvia:{price:8.736, previous:null, change:null, percent:null, cap:1.722, date:"2026-07-24", trend:[8.736], cached:true, official:true},
  lear:{price:130.82, previous:127.84, change:2.98, percent:2.33, cap:64.52666, date:"2026-09-11", trend:[127.84,130.82], cached:true},
  magna:{price:66.13, previous:65.14, change:0.99, percent:1.52, cap:176.91087, date:"2026-09-11", trend:[65.14,66.13], cached:true},
  jifeng:{price:11.77, previous:12.20, change:-0.43, percent:-3.52, cap:149.75, date:"2026-09-11", trend:[11.41,11.29,11.26,11.57,11.43,11.75,12.29,12.30,12.20,11.77], cached:true},
  grammer:{price:10.80, previous:null, change:null, percent:null, cap:0.165, date:"2026-07-23", trend:[10.80], cached:true, official:true},
  changshu:{price:10.32, previous:10.62, change:-0.30, percent:-2.82, cap:37.81, date:"2026-09-11", trend:[10.80,10.92,10.82,10.80,10.76,10.78,10.87,10.83,10.62,10.32], cached:true},
  daimay:{price:10.23, previous:10.67, change:-0.44, percent:-4.12, cap:219.80, date:"2026-09-11", trend:[10.48,10.33,10.57,10.77,10.84,11.21,11.35,11.07,10.67,10.23], cached:true},
  foseal:{price:113.70, previous:118.37, change:-4.67, percent:-3.95, cap:72.28, date:"2026-09-11", trend:[114.10,113.65,113.12,115.76,107.00,125.70,126.55,122.90,118.37,113.70], cached:true},
  huayu:{price:15.24, previous:15.45, change:-0.21, percent:-1.36, cap:480.48, date:"2026-09-11", trend:[15.45,15.72,15.53,15.55,15.58,15.39,15.50,15.49,15.45,15.24], cached:true}
};

function makeSparkPath(values=[]) {
  if (values.length < 2) return "M2 18 L88 18";
  const min=Math.min(...values), max=Math.max(...values), span=max-min||1;
  return values.map((value,index)=>`${index?"L":"M"}${2+(86*index/(values.length-1))} ${32-(28*(value-min)/span)}`).join(" ");
}

function StockSparkline({state="pending", values=[]}) {
  const path = makeSparkPath(values);
  return <svg className={`stock-sparkline ${state}`} viewBox="0 0 90 36" preserveAspectRatio="none" aria-hidden="true"><path className="spark-area" d={`${path} L88 36 L2 36 Z`}/><path className="spark-line" d={path}/></svg>;
}

function GrowthValue({value}) {
  const normalized=String(value||"");
  const state=normalized.includes("-")?"down":normalized.includes("+")?"up":"neutral";
  return <span className={`growth-value ${state}`}>{state!=="neutral"&&<span className="growth-triangle" aria-hidden="true">{state==="up"?"▲":"▼"}</span>}{normalized}</span>;
}

function CompactMetric({value, type, className=""}) {
  const raw=String(value||"—");
  let display=raw;
  if (type==="profit") {
    display=raw
      .replace(/^归母净利\s*/,"")
      .replace(/^净利润\s*/,"")
      .replace(/^核心经营利润\s*/,"")
      .replace(/^EBIT\s*/,"");
    if (/仅披露|调整后 EBIT$/.test(raw)) display="—";
  }
  if (type==="margin") {
    display=raw
      .replace(/^归母净利率\s*/,"")
      .replace(/^EBITDA率\s*/,"")
      .replace(/^核心利润率\s*/,"")
      .replace(/^调整后 EBIT率\s*/,"")
      .replace(/^EBIT率\s*/,"");
    if (/未披露/.test(raw)) display="—";
  }
  if (type==="cash") {
    display=raw
      .replace(/^经营现金流\s*/,"")
      .replace(/^自由现金流\s*/,"")
      .replace(" / FCF "," / ");
    if (/未量化披露/.test(raw)) display="—";
  }
  return <span className={`compact-metric ${className}`.trim()} title={raw} aria-label={raw}>{display}</span>;
}

function quoteDate(raw="") {
  const digits=raw.replace(/\D/g,"");
  return digits.length>=8?`${digits.slice(0,4)}-${digits.slice(4,6)}-${digits.slice(6,8)}`:"";
}

function formatMarketCap(stock, value) {
  if (!Number.isFinite(value)) return "—";
  if (stock.currency==="CNY") return `${value.toFixed(2)}亿元`;
  if (stock.currency==="EUR") return `€${value.toFixed(2)}bn`;
  return `$${(value/10).toFixed(2)}bn`;
}

async function fetchTencentQuote(stock) {
  const url=`https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=${stock.quoteSymbol},day,,,10,qfq`;
  const response=await fetch(url,{cache:"no-store"});
  if (!response.ok) throw new Error(`行情请求失败 ${response.status}`);
  const payload=await response.json();
  const item=payload?.data?.[stock.quoteSymbol];
  const quote=item?.qt?.[stock.quoteSymbol];
  if (!quote || !Number.isFinite(Number(quote[3]))) throw new Error("行情字段缺失");
  const rows=item.qfqday||item.day||[];
  const trend=rows.map(row=>Number(row[2])).filter(Number.isFinite).slice(-10);
  return {price:Number(quote[3]),previous:Number(quote[4]),change:Number(quote[31]),percent:Number(quote[32]),cap:Number(quote[45]),date:quoteDate(quote[30]),trend:trend.length>1?trend:[Number(quote[4]),Number(quote[3])],cached:false};
}

function IconChart() {
  return <svg className="empty-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M7 39V10M7 39h35" stroke="currentColor" strokeWidth="2"/><path d="m12 31 8-8 7 4 11-14" stroke="currentColor" strokeWidth="2.5"/><circle cx="12" cy="31" r="2" fill="currentColor"/><circle cx="20" cy="23" r="2" fill="currentColor"/><circle cx="27" cy="27" r="2" fill="currentColor"/><circle cx="38" cy="13" r="2" fill="currentColor"/></svg>;
}

function App() {
  const [audience, setAudience] = React.useState("销售");
  const [selected, setSelected] = React.useState(null);
  const [stockQuotes, setStockQuotes] = React.useState(fallbackQuotes);
  const [marketSync, setMarketSync] = React.useState("syncing");
  const refreshMarketQuotes = React.useCallback(async()=>{
    setMarketSync("syncing");
    const results=await Promise.allSettled(listedStocks.filter(stock=>stock.quoteSymbol).map(async stock=>[stock.id,await fetchTencentQuote(stock)]));
    const live={};
    results.forEach(result=>{if(result.status==="fulfilled") live[result.value[0]]=result.value[1]});
    setStockQuotes(current=>{
      const next={...current,...live};
      try {localStorage.setItem("interior-market-quotes-v2",JSON.stringify(next))} catch (error) {}
      return next;
    });
    const expected=listedStocks.filter(stock=>stock.quoteSymbol).length;
    setMarketSync(Object.keys(live).length===expected?"live":Object.keys(live).length?"partial":"cached");
  },[]);
  React.useEffect(()=>{
    const cacheKey="interior-market-quotes-v2";
    try {
      const cached=JSON.parse(localStorage.getItem(cacheKey)||"null");
      if (cached) setStockQuotes(current=>({...current,...cached}));
    } catch (error) {}
    refreshMarketQuotes();
  },[refreshMarketQuotes]);
  const profile = audienceProfiles[audience];
  const filteredCompanies = companies;
  const filteredNews = [...news].sort((a,b)=>{const ar=profile.types.indexOf(a.type),br=profile.types.indexOf(b.type);return (ar<0?999:ar)-(br<0?999:br)||b.date.localeCompare(a.date)});
  const signalStructure = [
    {name:"产品、技术与客户", value:filteredNews.filter(n=>["产品与技术","客户与车型","声学与座舱"].includes(n.type)).length},
    {name:"业绩与经营战略", value:filteredNews.filter(n=>["业绩财报","年度报告","经营与战略"].includes(n.type)).length},
    {name:"新材料与表面", value:filteredNews.filter(n=>n.type==="新材料").length},
    {name:"消费者偏好", value:filteredNews.filter(n=>n.type==="消费者偏好").length}
  ];
  const signalMax = Math.max(1, ...signalStructure.map(item=>item.value));

  return <div className="app-shell" data-screen-label="汽车内饰竞争情报总览">
    <header className="topbar">
      <div>
        <div className="eyebrow">INTERIOR COMPETITIVE INTELLIGENCE</div>
        <h1>汽车内饰竞争情报看板</h1>
        <p>综合内饰与金属扬声器罩 · 集团、关联公司、产品、财务与竞争动态</p>
      </div>
      <div className="freshness">
        <div className="freshness-row"><span className="status-dot"></span><strong>近三个月竞争信号已更新</strong></div>
        <div className="source-note">检索截至：2026-09-12 · 内部使用</div>
      </div>
    </header>

    <section className="audience-bar" aria-label="读者视角">
      <div className="audience-label">关注视角</div>
      <div className="audience-tabs">{Object.keys(audienceProfiles).map(item=><button key={item} className={`audience-tab ${audience===item?"active":""}`} onClick={()=>setAudience(item)}><span>{audienceProfiles[item].en}</span>{item}</button>)}</div>
      <div className="audience-window">近三个月 · 每日滚动更新</div>
    </section>

    <main className="main">
      <section className="audience-brief" aria-live="polite">
        <div><div className="brief-kicker">{profile.en} INTELLIGENCE</div><h2>{profile.title}</h2></div>
        <p>{profile.description}</p>
      </section>

      <section className="priority-section priority-theme-porcelain">
        <div className="section-heading"><div><div className="brief-kicker">DECISION PRIORITIES</div><h2>{audience}本周优先关注</h2></div><span>按业务影响与紧迫度排序</span></div>
        <div className="priority-grid">{audiencePriorities[audience].map((item,index)=>{const source=news.find(n=>n.id===item.newsId);return <article className="priority-card" key={item.title}><div className="priority-top"><span className={`priority-level ${item.level==="高"?"high":""}`}>{item.level}优先级</span><span>0{index+1}</span></div><div className="priority-company">{item.company}</div><h3>{item.title}</h3><div className="priority-block"><span>为什么重要</span><p>{item.why}</p></div><div className="priority-block action"><span>建议动作</span><p>{item.action}</p></div>{source&&<a href={source.url} target="_blank" rel="noreferrer">查看依据 ↗</a>}</article>})}</div>
      </section>

      <section className="grid-primary">
        <div className="panel">
          <div className="panel-header"><div><h2 className="panel-title">最新竞争动态</h2><div className="panel-hint">已按{audience}视角的重要度排序 · 正式财报与初步业绩分开标注</div></div><span className="news-count">{filteredNews.length} 条</span></div>
          <div className="news-list">{filteredNews.length ? filteredNews.map(item=><article className="news-item" key={item.id}><div><div className="news-company">{item.company}</div><span className="news-track">{item.track}</span></div><div><h3 className="news-title">{item.title}</h3><div className="news-summary">{item.summary}</div></div><div className="news-source"><span>{item.date}</span><a href={item.url} target="_blank" rel="noreferrer">{item.source} ↗</a></div></article>) : <div className="empty-news">当前筛选没有匹配的动态</div>}</div>
        </div>
        <div className="panel">
          <div className="panel-header"><div><h2 className="panel-title">信号结构</h2><div className="panel-hint">当前样板已验证的来源条目</div></div></div>
          <div className="track-stack">
            {signalStructure.map(item=><div className="track-row" key={item.name}><div className="track-row-head"><span>{item.name}</span><strong>{item.value}</strong></div><div className="track-bar"><div className="track-fill" style={{width:`${item.value/signalMax*100}%`}}></div></div></div>)}
          </div>
        </div>
      </section>

      <section className="grid-even reference-grid">
        <div className="panel">
          <div className="panel-header"><div><h2 className="panel-title">核心企业图谱</h2><div className="panel-hint">点击企业查看集团口径、产品标签与来源</div></div><span className="panel-hint">当前显示 {filteredCompanies.length} 家</span></div>
          <div className="company-grid">{filteredCompanies.map(item=><button className="company-card" key={item.id} onClick={()=>setSelected(item)}><div className="company-card-name">{item.name}</div><div className="company-card-en">{item.en}</div><div className="company-tags">{item.products.slice(0,3).map(tag=><span className={`tag ${item.track==="金属扬声器罩"?"grille":""}`} key={tag}>{tag}</span>)}</div></button>)}</div>
        </div>
        <div className="panel">
          <div className="panel-header"><div><h2 className="panel-title">企业 × 产品矩阵</h2><div className="panel-hint">完整展示17家企业；副仪表板仅标记综合内饰制造商</div></div><span className="panel-hint">综合内饰12家 · 喇叭网罩5家</span></div>
          <div className="matrix-wrap"><table className="matrix"><thead><tr><th>企业</th>{productColumns.map(p=><th key={p}>{p}</th>)}</tr></thead><tbody>{filteredCompanies.map(c=><tr key={c.id} className={c.track==="金属扬声器罩"?"matrix-grille-row":""}><td><strong>{c.name}</strong><span className="matrix-company-track">{c.track}</span></td>{productColumns.map(p=>{const marked=(p==="副仪表板"&&c.track==="综合内饰")||c.products.includes(p)||(c.products.includes("座椅扶手")&&p==="座椅扶手");return <td key={p}>{marked?<span className={`matrix-mark ${c.track==="金属扬声器罩"?"secondary":""}`}></span>:<span className="matrix-dash">—</span>}</td>})}</tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="grid-even evidence-grid">
        <div className="panel financial-panel">
          <div className="panel-header"><div><h2 className="panel-title">最新业绩与财报关键指标</h2><div className="panel-hint">8家A股已统一更新至2026 H1；海外企业使用最新正式季报/半年报；现金流口径不直接横向比较</div></div><span className="news-count">{financialResults.length} 家</span></div>
          <div className="financial-table-wrap"><table className="financial-table"><thead><tr><th>企业 / 报告期</th><th>销售额</th><th>营收增长</th><th>利润</th><th>利润率</th><th>利润增长</th><th>现金流</th><th>经营概况</th></tr></thead><tbody>{financialResults.map(item=><tr key={item.company}><td><a href={item.url} target="_blank" rel="noreferrer"><strong>{item.company}</strong><span>{item.period} ↗</span></a></td><td>{item.revenue}</td><td><GrowthValue value={item.growth}/></td><td><CompactMetric value={item.profit} type="profit"/></td><td><CompactMetric value={item.profitMargin} type="margin" className="profit-margin"/></td><td><GrowthValue value={item.profitGrowth}/></td><td><CompactMetric value={item.cashFlow} type="cash" className="cash-flow"/></td><td className="operating-overview"><span>{item.overview}</span><strong>战略：{item.strategy}</strong></td></tr>)}</tbody></table></div>
          <div className="disclosure-status"><strong>未独立披露财务指标</strong><div>{financialDisclosureGaps.map(name=><span key={name}>{name}</span>)}</div><p>以上企业多为非上市主体、集团业务单元或专业制造商；看板保留监控对象，但不以母集团数据替代。</p></div>
          <div className="stock-footnote">口径说明：A 股显示营业收入与归母净利润；海外集团优先显示销售额、核心经营利润、调整后 EBIT/EBITDA。点击企业名称可查阅原始披露。</div>
        </div>
        <div className="panel stock-panel">
          <div className="panel-header"><div><h2 className="panel-title">股市综合看板</h2><div className="panel-hint">全部上市竞争对手 · 最近交易日或盘中行情 · 打开页面自动更新</div></div><div className="market-actions"><span className={`market-status ${marketSync}`}><span></span>{marketSync==="live"?"行情已同步":marketSync==="partial"?"部分行情已同步":marketSync==="cached"?"显示最近缓存":"正在同步行情"}</span><button className={`market-refresh ${marketSync==="syncing"?"loading":""}`} type="button" onClick={refreshMarketQuotes} disabled={marketSync==="syncing"} title="手动刷新最新行情" aria-label="手动刷新最新行情"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.34 5.66M20 5v6h-6"/></svg><span>{marketSync==="syncing"?"刷新中":"刷新"}</span></button></div></div>
          <div className="stock-summary"><div><span>覆盖上市公司</span><strong>{listedStocks.length}</strong></div><div><span>A 股</span><strong>{listedStocks.filter(stock=>stock.currency==="CNY").length}</strong></div><div><span>海外市场</span><strong>{listedStocks.filter(stock=>stock.currency!=="CNY").length}</strong></div></div>
          <div className="stock-list" role="list">
            {listedStocks.map(stock=>{const quote=stockQuotes[stock.id]||{};const state=quote.percent>0?"up":quote.percent<0?"down":"pending";return <a className="stock-row" href={stock.sourceUrl} target="_self" key={stock.id} role="listitem" aria-label={`${stock.name} ${stock.ticker} 行情来源`}>
              <div className="stock-identity"><strong>{stock.name}</strong><span>{stock.ticker} · {stock.market}</span><em>{quote.date||"待同步"}{quote.cached?" · 最近缓存":""}</em></div>
              <StockSparkline state={state} values={quote.trend}/>
              <div className={`stock-quote ${state}`}><strong>{Number.isFinite(quote.price)?quote.price.toFixed(stock.currency==="EUR"?3:2):"—"}</strong><span>{Number.isFinite(quote.percent)?`${quote.percent>0?"+":""}${quote.percent.toFixed(2)}%`:"收盘价"}</span></div>
              <div className="stock-cap"><span>市值</span><strong>{formatMarketCap(stock,quote.cap)}</strong></div>
              <div className="stock-source">{stock.source} ↗</div>
            </a>})}
          </div>
          <div className="stock-footnote">全部A股、李尔和麦格纳由腾讯证券公开行情在页面打开时同步；接口短暂不可用时显示浏览器最近缓存。FORVIA与GRAMMER AG使用欧洲交易所最近公开价格快照。列表按A股在前、海外市场在后排列；不同市场保留原交易币种，不做跨币种市值合计。</div>
        </div>
      </section>

      <footer className="footer">当前竞争动态来自企业官网、监管披露、交易所/法定公告及汽车内饰专业媒体；检索窗口更新至 2026-09-12，正式财报按最新披露追溯，业绩预告不混入正式财报表。股市行情在打开页面时自动请求最近数据，并保留最近成功缓存。车型产量、客户配套量与市场份额模块按需求暂不显示。所有外部信息保留原文链接、发布时间、抓取时间和来源等级。</footer>
    </main>

    <div className={`drawer-backdrop ${selected?"open":""}`} onClick={()=>setSelected(null)}></div>
    <aside className={`drawer ${selected?"open":""}`} aria-hidden={!selected}>
      {selected && <><div className="drawer-head"><div><div className="eyebrow">COMPANY PROFILE</div><h2>{selected.name}</h2><div className="source-note">{selected.en}</div></div><button className="close-button" onClick={()=>setSelected(null)} aria-label="关闭">×</button></div><div className="drawer-body"><section className="drawer-section"><h3>监控口径</h3><div className="drawer-copy">{selected.note}</div></section><section className="drawer-section"><h3>基础属性</h3><div className="drawer-copy">赛道：{selected.track}<br/>地区：{selected.region}<br/>上市状态：{selected.listed?`上市 · ${selected.ticker}`:"非上市或集团主体"}</div></section><section className="drawer-section"><h3>产品标签</h3><div className="company-tags">{selected.products.map(tag=><span className={`tag ${selected.track==="金属扬声器罩"?"grille":""}`} key={tag}>{tag}</span>)}</div></section><section className="drawer-section"><h3>可信来源</h3><a className="drawer-link" href={selected.url} target="_blank" rel="noreferrer">打开企业或监管来源 ↗</a></section></div></>}
    </aside>
  </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
