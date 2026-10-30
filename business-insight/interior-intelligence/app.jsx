const companies = [
  { id:"yanfeng", track:"综合内饰 / 座椅", name:"延锋", en:"Yanfeng", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"覆盖中国主要整车集团及全球主流汽车制造商", products:["副仪表板","门板","内饰总成","金属扬声器罩","新材料","座椅扶手","乘用车座椅"], note:"具备整椅、骨架、机构件、泡沫、软饰及扶手能力，作为内饰与座椅一体化竞争对手监控。", url:"https://www.yanfeng.com/en/seating" },
  { id:"xinquan", track:"综合内饰", name:"新泉", en:"Xinquan", listed:true, ticker:"603179.SH", region:"中国", products:["仪表板","门板","内饰总成"], note:"上市主体与各生产基地分层监控。", url:"https://www.sse.com.cn/" },
  { id:"forvia", track:"综合内饰 / 座椅", name:"佛吉亚", en:"FORVIA / Faurecia", listed:true, ticker:"FRVIA.PA", region:"法国", vehicleSegments:["乘用车"], customers:"全球主流整车厂", products:["副仪表板","门板","新材料","乘用车座椅"], note:"佛吉亚作为 FORVIA 集团别名与业务标签；Seating 与 Interiors 分业务监控，新闻和财务不重复累计。", url:"https://www.forvia.com/en/forvia-hella/divisions/seating" },
  { id:"antolin", track:"综合内饰", name:"安通林", en:"Antolin", listed:false, region:"西班牙", products:["门板","内饰总成","新材料"], note:"追踪集团、中国业务主体、照明电子化内饰与新材料。", url:"https://www.antolin.com/en/financial-info-home" },
  { id:"lear", track:"综合内饰 / 座椅", name:"李尔", en:"Lear", listed:true, ticker:"LEA.N", region:"美国", vehicleSegments:["乘用车"], customers:"2026年披露中国完整座椅定点包括北汽、东风和吉利", products:["座椅扶手","内饰总成","乘用车座椅"], note:"全球完整座椅、骨架、面套、舒适系统供应商；只保留与座椅、扶手及相关内饰业务有关的集团动态。", url:"https://www.lear.com/technology/seating" },
  { id:"huaxiang", track:"综合内饰", name:"宁波华翔", en:"Ningbo Huaxiang", listed:true, ticker:"002048.SZ", region:"中国", products:["门板","内饰总成","新材料"], note:"集团与关联子公司、国内外客户项目分别记录。", url:"https://www.cninfo.com.cn/" },
  { id:"magna", track:"综合内饰 / 座椅", name:"麦格纳", en:"Magna", listed:true, ticker:"MGA.N / MG.TO", region:"加拿大", vehicleSegments:["乘用车","商用车"], customers:"汽车、重卡及客车制造商", products:["座椅扶手","内饰总成","乘用车座椅","商用车座椅"], note:"提供完整座椅、骨架、机构件、泡沫和面套；过滤集团噪声，仅纳入座椅与内饰相关信息。", url:"https://www.magna.com/products/exterior-interior/seating/seat-complete" },
  { id:"faway", track:"综合内饰 / 座椅", name:"一汽富维", en:"FAWAY", listed:true, ticker:"600742.SH", region:"中国", vehicleSegments:["乘用车"], customers:"一汽体系，并持续拓展外部自主与合资客户", products:["仪表板","门板","座椅扶手","乘用车座椅"], note:"具备座椅设计验证至量产交付能力；2026年获合资品牌约39.36亿元生命周期座椅定点。", url:"https://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=600742" },
  { id:"nobo", track:"综合内饰 / 座椅", name:"诺博", en:"Nobo Automotive", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"长城汽车体系，并拓展外部客户", products:["门板","座椅扶手","内饰总成","乘用车座椅"], note:"追踪集团整椅、内饰业务、生产基地和外部客户定点。", url:"https://www.noboauto.com/" },
  { id:"caht", track:"综合内饰", name:"成航模塑", en:"Chengdu Aerospace Mould & Plastic", listed:false, region:"中国", products:["仪表板","门板","内饰总成"], note:"主档使用成都航天模塑有限责任公司全称。", url:"https://www.casic.com.cn/" },
  { id:"fucheng", track:"综合内饰", name:"富诚", en:"Fucheng Group", listed:false, region:"中国", products:["内饰总成","表面工艺"], note:"重点补齐关联制造主体、产品和客户证据。", url:"https://www.fcheng.com/mobilec/index.php/about/index.html" },
  { id:"pingwei", track:"综合内饰", name:"重庆平伟", en:"Perfectway Automotive", listed:false, region:"中国", products:["模具","表面工艺","内饰件"], note:"与重庆平伟半导体严格区分，监控汽车科技业务。", url:"https://www.pwjt.com/" },
  { id:"sps", track:"金属扬声器罩", name:"重庆赛帕斯", en:"Suppass", listed:false, region:"中国", products:["金属扬声器罩","细孔格栅"], note:"汽车音响金属网罩、细孔格栅及金属内饰专业制造商。", url:"https://www.spsjs.com/article/type/18-1.html" },
  { id:"tuoxin", track:"金属扬声器罩", name:"宣城托新", en:"Top Sun", listed:false, region:"中国", products:["金属扬声器罩","表面工艺"], note:"主档为宣城托新精密科技有限公司，追踪喇叭网装饰面板及金属饰件。", url:"https://www.xuancheng.gov.cn/OpennessContent/show/2328615.html" },
  { id:"oakwood", track:"金属扬声器罩", name:"奥克伍德", en:"Oakwood", listed:false, region:"美国", products:["金属扬声器罩","音频罩盖"], note:"全球汽车金属扬声器格栅专业制造商。", url:"https://www.oakwoodgroup.com/product" },
  { id:"zhuanjing", track:"金属扬声器罩", name:"吉安专精", en:"Zhuanjing", listed:false, region:"中国", products:["金属扬声器罩","表面工艺"], note:"主档为吉安专精科技有限公司，聚焦汽车金属蚀刻喇叭网、装饰条及相关表面工艺。", url:"https://www.sohu.com/a/962055381_121977469" },
  { id:"yecheng", track:"金属扬声器罩", name:"佛山叶诚", en:"Yecheng", listed:false, region:"中国", products:["金属扬声器罩"], note:"主档为佛山叶诚科技有限公司，公开项目披露年产500万件汽车喇叭网建设项目。", url:"https://www.ixbang.com/gd/area-440600/history-17/20250418.html" },
  { id:"adient", track:"座椅系统", name:"安道拓", en:"Adient", listed:true, ticker:"ADNT.N", region:"美国", vehicleSegments:["乘用车"], customers:"覆盖全球主要整车制造商；中国拥有多家合资企业和制造基地", products:["乘用车座椅","座椅骨架","座椅机构件","泡沫与面套"], note:"全球汽车座椅系统供应商，提供完整座椅及垂直整合零部件；重点追踪中国本地化与成本效率。", url:"https://www.adient.com/products/complete-seats/" },
  { id:"toyota_boshoku", track:"座椅系统", name:"丰田纺织", en:"Toyota Boshoku", listed:true, ticker:"3116.T", region:"日本", vehicleSegments:["乘用车"], customers:"丰田、雷克萨斯等，公开车型包括Sienna、Highlander、Lexus RX", products:["乘用车座椅","内饰总成","门板","滤清系统"], note:"座椅与内饰协同能力突出，重点监控轻量化、舒适机构和丰田体系外业务拓展。", url:"https://www.toyota-boshoku.com/global/products/seat/" },
  { id:"ts_tech", track:"座椅系统", name:"TS TECH", en:"TS Tech", listed:true, ticker:"7313.T", region:"日本", vehicleSegments:["乘用车"], customers:"以本田体系为核心，并向其他全球整车厂拓展", products:["乘用车座椅","座椅骨架","门板","动力运动座椅"], note:"完整座椅与内饰制造商，重点追踪轻量化、安全、二三排灵活布局和客户多元化。", url:"https://www.tstech.com/products/" },
  { id:"tachi_s", track:"座椅系统", name:"泰极爱思", en:"TACHI-S", listed:true, ticker:"7239.T", region:"日本", vehicleSegments:["乘用车","商用车"], customers:"丰田、日产、本田、三菱、马自达、雷诺及日野", products:["乘用车座椅","商用车座椅","座椅机构件","面套"], note:"独立整椅制造商，从开发到生产一体化，覆盖微型车、豪华车和卡车。", url:"https://www.tachi-s.co.jp/en/product/" },
  { id:"jifeng_seating", track:"座椅系统", name:"继峰 / GRAMMER", en:"Jifeng Seating / GRAMMER", listed:true, ticker:"603997.SH", region:"中国 / 德国", vehicleSegments:["乘用车","商用车"], customers:"乘用车覆盖理想、蔚来、奥迪、宝马、大众等；商用车覆盖卡车、工程机械、客车及轨交客户", products:["乘用车座椅","商用车座椅","座椅扶手","座椅头枕","中控系统"], note:"乘用车整椅与格拉默商用车座椅并行监控，集团财务和股票仅按继峰股份主体计算一次。", url:"https://www.jfseat.com/" },
  { id:"tenchen", track:"座椅系统", name:"天成自控", en:"Zhejiang Tenchen Controls", listed:true, ticker:"603085.SH", region:"中国", vehicleSegments:["乘用车","商用车"], customers:"乘用车进入上汽、北汽、东风、奇瑞、江淮、比亚迪等体系；商用车覆盖一汽、东风、重汽、福田戴姆勒、江淮、陕汽、宇通", products:["乘用车座椅","商用车座椅","工程机械座椅","座椅机构件"], note:"国产整椅重点追踪对象，业务横跨乘用车、商用车、工程机械和航空座椅。", url:"https://www.tenchen.com/?m=aboutus" },
  { id:"shuangying", track:"座椅系统", name:"广西双英", en:"Guangxi Shuangying", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"比亚迪、小米、上汽通用五菱、东风柳汽、吉利、长城、长安、问界等", products:["乘用车座椅","座椅骨架","仪表板","门板","副仪表板"], note:"中国新兴整椅与内外饰一体化供应商，拥有多地生产基地；重点追踪IPO、外部客户和座椅产能扩张。", url:"https://www.syjt.com/about.html" },
  { id:"isri", track:"座椅系统", name:"伊思灵豪森", en:"ISRINGHAUSEN / ISRI", listed:false, region:"德国", vehicleSegments:["商用车"], customers:"DAF、Daimler Truck、一汽、日野、依维柯、MAN、PACCAR、斯堪尼亚、沃尔沃等", products:["商用车座椅","卡车座椅","客车座椅","工程机械座椅"], note:"商用车驾驶员座椅专业厂；中国通过伊思灵华泰布局卡车、客车和工程机械座椅。", url:"https://www.isri.com/en/our-products/references" },
  { id:"cvg", track:"座椅系统", name:"CVG / KAB", en:"Commercial Vehicle Group / KAB", listed:true, ticker:"CVGI.O", region:"美国 / 英国", vehicleSegments:["商用车"], customers:"卡车、轻型商用车、工程机械、农业及军用车辆制造商与售后市场", products:["商用车座椅","工程机械座椅","驾驶室系统"], note:"以KAB和Stratos品牌覆盖商用车与工作车辆座椅，重点追踪平台整合和区域客户。", url:"https://cvgrp.com/products/seats-seating-systems/" },
  { id:"zhuojun", track:"座椅系统", name:"卓骏控股", en:"Zhuojun Holdings", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"公开确认配套理想ONE、L8、L9等车型", products:["乘用车座椅","座椅骨架","舒适系统","泡沫与面套","座舱电子"], note:"本土新兴整椅厂，提供从概念、研发、量产到售后的全生命周期服务；常州基地已形成整椅、骨架、发泡和面套能力。", url:"https://www.zhuojun.com/" },
  { id:"fudi", track:"主机厂关联座椅", name:"弗迪座椅体系", en:"FinDreams / BYD Seating", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"比亚迪体系", products:["乘用车座椅","座椅骨架","座椅机构件","泡沫与面套"], note:"比亚迪体系内部座椅供应力量；公开行业统计显示其在高销量车型配套中已形成较大规模，后续继续拆分具体法律主体和基地。", url:"https://www.bydglobal.com/cn/" },
  { id:"fuzhuo_seating", track:"座椅系统", name:"富卓汽车内饰", en:"Fuzhuo Automotive Interior", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"奇瑞、比亚迪、大众、吉利等", products:["乘用车座椅","座椅骨架","泡沫与面套"], note:"具备概念设计到工业化量产能力、座椅骨架平台及整椅主要制造工艺，是奇瑞体系的重要本土座椅供应商。", url:"https://lectra.cn/library/auto/fuzhuo-story" },
  { id:"ruitai", track:"主机厂关联座椅", name:"芜湖瑞泰", en:"Wuhu Ruitai", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"奇瑞为核心，并有零跑、吉利等公开配套线索", products:["乘用车座椅","座椅骨架","泡沫与面套"], note:"奇瑞产业链整椅厂；2026年新增年产50万套新能源汽车座椅研发与生产基地项目。", url:"https://sthjj.wuhu.gov.cn/hbyw/hjsp/jsxmhpsp/8962299.html" },
  { id:"huazhi", track:"主机厂关联座椅", name:"广州华智", en:"Guangzhou Huazhi", listed:false, region:"中国", vehicleSegments:["乘用车"], customers:"广汽传祺、广汽埃安、广汽丰田、广汽本田", products:["乘用车座椅"], note:"华南区域整椅供应商，主要围绕广汽自主及合资品牌配套；客户信息来自地方公共招聘服务与行业研究交叉验证。", url:"https://www.gzrecruit.com/comDetail/A4C3CC079B58AEAB005DB76209BE4EF9" },
  { id:"molead", track:"商用车座椅", name:"郑州精益达", en:"Molead Seating", listed:false, region:"中国", vehicleSegments:["商用车"], customers:"客车、轻型商用车、卡车和特种车辆客户；与宇通体系联系紧密", products:["商用车座椅","客车座椅","卡车座椅"], note:"覆盖驾驶员座椅、乘客座椅、校车及特种车座椅的商用车座椅解决方案供应商。", url:"https://www.moleadseat.com/" },
  { id:"champian", track:"商用车座椅", name:"盈富圳边", en:"Champian Auto Parts", listed:false, region:"中国", vehicleSegments:["商用车"], customers:"广汽、比亚迪、宇通、金龙、安凯、中车及多地公交集团", products:["商用车座椅","客车座椅","卡车座椅","内饰总成"], note:"新能源公共交通座椅与内饰供应商，具备冲压、焊接、喷涂、注塑和总装能力。", url:"https://champian.cn/" },
  { id:"jiulong_seat", track:"商用车座椅", name:"福建九龙座椅", en:"Fujian Jiulong Automobile Seat", listed:false, region:"中国", vehicleSegments:["商用车"], customers:"覆盖4—18米客车、特种车及出口客户", products:["商用车座椅","客车座椅","卡车座椅"], note:"专业客车座椅企业，企业公开资料称其在国内客车座椅市场处于重要位置；市场份额口径仍需第三方复核。", url:"https://www.lhjlzy.com.cn/aboutus" },
  { id:"jinlong_seat", track:"商用车座椅", name:"厦门金龙座椅", en:"Xiamen Golden Dragon Seat", listed:false, region:"中国", vehicleSegments:["商用车"], customers:"国内外客车制造商及定制客户", products:["商用车座椅","客车座椅","内饰总成"], note:"客车座椅与内饰配套供应商，覆盖国内、欧美、东南亚及非洲市场；具体客户和产量继续核验。", url:"https://www.autoseat.com.cn/" }
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
  { id:34, company:"行业", track:"综合内饰", type:"新材料", date:"2026-09-03", title:"Polyblend 投资再生塑料复合材料产能", summary:"材料企业投资 400 万欧元改造再生塑料复合材料生产，反映汽车内饰对可循环材料稳定供应和量产成本的关注继续上升。", source:"Automotive Interiors World", url:"https://www.automotiveinteriorsworld.com/news/materials" },
  { id:35, company:"安通林", track:"综合内饰", type:"业绩财报", date:"2026-09-10", title:"Antolin 半年订单额翻倍，经营压力仍集中在座舱与门板业务", summary:"上半年收入 17.33 亿欧元，同比下降 11%；净利润由亏损转为 5,640 万欧元，订单额增至 22 亿欧元。Cockpit & Door Systems 在欧洲和亚洲承压，净债务仍达 10.34 亿欧元。", source:"Antolin", url:"https://www.antolin.com/en/antolin-first-half-net-profit-reaches-eu564-million-order-intake-doubles" },
  { id:36, company:"行业", track:"跨行业趋势", type:"产品与技术", date:"2026-09-15", title:"HARMAN 将数字座舱软件模块化并引入 B2B 交易平台", summary:"HARMAN 在 SDVerse 提供硬件无关的智能座舱中间件、HMI 设计和验证服务，显示座舱软件能力正被拆分为可复用模块，有助于整车平台缩短开发周期。", source:"HARMAN", url:"https://news.harman.com/releases/harman-joins-sdverse-marketplace-expanding-access-to-automotive-software-and-engineering-solutions" },
  { id:37, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-09-15", title:"GM 新一代座舱界面强调少步骤、可预测和保留物理控制", summary:"新界面根据用户反馈减少层级与点击次数，保留空调等高频实体控制，并强化视觉、声音和触觉反馈。说明消费者希望大屏体验与低认知负担同时存在。", source:"GM", url:"https://news.gm.com/home.detail.html/Pages/news/us/en/2026/sep/0915-inside-gm-s-new-user-interface-a-q-a-with-the-experts.html" },
  { id:38, company:"行业", track:"综合内饰", type:"新材料", date:"2026-09-02", title:"ELIX 推出面向中控、门板和出风口的低光泽 PC/ABS", summary:"GR 5125 以免喷涂哑光表面降低反光和指纹，同时保持耐冲击、尺寸稳定、低 VOC 与低气味；另有含再生料版本，适用于仪表板、中控、门板和出风口。", source:"ELIX Polymers", url:"https://www.elix-polymers.com/en/news-events/news/elix-polymers-launches-new-low-gloss-pcabs-grades-automotive-interior-applications" },
  { id:39, company:"行业", track:"跨行业趋势", type:"产品与技术", date:"2026-09-23", title:"多模态座舱 AI 开始融合人、车与环境上下文", summary:"Smart Eye 的座舱智能体综合语音、身份、视线、注意力、情绪、乘员状态以及车内外传感信息，可理解驾驶员指向的车外对象并生成实时座舱控件，显示座舱AI正从语音问答转向情境决策。", source:"Smart Eye", url:"https://smarteye.se/news/smart-eye-unveils-world-first-multimodal-automotive-ai-agent-combining-human-vehicle-and-environmental-context/" },
  { id:40, company:"麦格纳", track:"综合内饰", type:"新材料", date:"2026-09-24", title:"Magna 推进含生物基与再生材料的高端座椅表皮", summary:"新型皮革替代材料使用苹果副产物与再生材料，在耐磨、环境耐久、外观一致性及颜色纹理定制方面对标汽车级要求，反映环保材料的竞争重点正由概念比例转向量产性能。", source:"Magna", url:"https://www.magna.com/products/exterior-interior/seating/sustainable-seating" },
  { id:41, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-09-29", title:"Porsche 为存量车型提供原厂座舱数字化升级", summary:"PCCM Plus 将无线 CarPlay、Android Auto、联网导航和 OTA 地图更新集成到 2009—2016 年款车型，并保持原车内饰设计语言，显示消费者愿意通过模块升级延长座舱数字体验寿命。", source:"Porsche", url:"https://newsroom.porsche.com/en/2026/products/porsche-classic-communication-management-plus-infotainmentsystem-43342.html" },
  { id:42, company:"行业", track:"跨行业趋势", type:"产品与技术", date:"2026-09-17", title:"座舱感知开始直接联动气囊与安全带策略", summary:"ZF LIFETEC 将摄像头、座椅和安全带传感器与自适应约束算法整合，根据乘员位置、体重和体型调整气囊及安全带，意味着座椅、门板和顶棚中的传感器集成将与整车安全开发深度绑定。", source:"ZF LIFETEC", url:"https://press.zf.com/press/en/releases/release_110145.html" },
  { id:43, company:"延锋", track:"综合内饰", type:"产品与技术", date:"2026-08-28", title:"延锋 XiM27 将流动中岛、AI光域与百变座椅整合为整舱方案", summary:"XiM27 面向高阶自动驾驶场景，组合智能全景前舱、多功能流动中岛、AI智能光域和星幕一体顶舱；部分零重力座椅、长滑轨、无线充电和集成饮水机等技术已进入客户项目产业化。", source:"华域汽车半年报", url:"https://static.cninfo.com.cn/finalpage/2026-08-28/1225516573.PDF" },
  { id:44, company:"消费者趋势", track:"跨行业趋势", type:"客户与车型", date:"2026-10-12", title:"smart #2 以贯通式座椅和 S 形座舱验证小型车空间效率", summary:"量产版 smart #2 在超紧凑车身内采用贯通式座椅、S 形座舱及温暖材料配色，强调用结构集成而非堆叠部件提升空间感；对副仪表板、储物和一体化饰件提出更高的薄型化与多功能要求。", source:"smart Newsroom", url:"https://media.smart.com/en-INT/273151-it-s-back-that-s-big-the-all-electric-smart-2-makes-its-world-premiere-at-the-paris-motor-show/" },
  { id:45, company:"华域汽车", track:"综合内饰", type:"经营与战略", date:"2026-10-09", title:"华域拟增持联创汽车电子，继续加码智能底盘与电子能力", summary:"全资子公司上海汇众拟以公开摘牌方式收购联创汽车电子 10.9569% 股权，挂牌底价约 3.20 亿元；若完成，持股比例将升至 16.25%，显示华域继续把资本配置向电子化和智能底盘延伸。", source:"法定披露", url:"https://static.cninfo.com.cn/finalpage/2026-10-09/1225598249.PDF" },
  { id:46, company:"行业", track:"综合内饰", type:"产品与技术", date:"2026-10-08", title:"智能表面竞争转向可量产、低成本与多材料兼容", summary:"Automotive Surfaces 2026 集中展示照明、HMI 与表面一体化。Preh 的无运动部件中控控制器可适配玻璃、陶瓷、金属、塑料或装饰膜，并提供触觉与视觉反馈；FORVIA、Antolin 同时强调以人为本、可负担和工业化落地。", source:"ITB Group", url:"https://www.itbgroup.com/automotive-surfaces-2026-itb-group" },
  { id:47, company:"GRAMMER AG", track:"综合内饰", type:"业绩财报", date:"2026-10-30", title:"GRAMMER 正式发布2026年前九个月结果", summary:"前九个月收入14.356亿欧元，同比增长3.5%；经营EBIT为5,320万欧元，同比增长6.6%，经营EBIT率由3.6%升至3.7%。Q3收入增长9.5%，但经营EBIT降至1,150万欧元；美洲新项目爬坡、特殊关税与外部冲突成本使全年经营EBIT指引降至约7,000万欧元。", source:"GRAMMER 9M正式报告", url:"https://www.eqs-news.com/news/corporate/grammer-ag-publishes-results-for-the-first-nine-months-of-2026/1f162619-ab59-415e-a3bd-3b29e700d7c7_en" },
  { id:48, company:"消费者趋势", track:"跨行业趋势", type:"消费者偏好", date:"2026-10-20", title:"AI 座舱竞争开始转向品牌一致性与长期可升级体验", summary:"Stellantis 与 Applied Intuition 将 Cabin Intelligence 用于 14 个品牌的个性化座舱体验，强调不同品牌仍需保持独特交互性格。对内饰供应商的影响是硬件界面、灯光和功能表面需要支持软件持续升级，同时避免所有车型体验趋同。", source:"Applied Intuition", url:"https://www.appliedintuition.com/blog/stellantis-ai-in-cabin-experience" },
  { id:49, company:"消费者趋势", track:"跨行业趋势", type:"产品与技术", date:"2026-10-23", title:"航空内饰把隐藏式 OLED 直接融合进木饰面", summary:"Lufthansa Technik、Pilatus 与 F/LIST 展示将 14.5 英寸 OLED 触控屏隐藏在深色木饰面和触觉材料中的舱内隔断，触摸时才显现。该跨行业方案对汽车门板、中控和座椅后扶手的隐形显示、真材质表面与交互融合具有直接参考价值。", source:"Aviation Week", url:"https://aviationweek.com/business-aviation/interiors-connectivity/intelligent-cabin-divider-demonstrator-unveiled-nbaa" },
  { id:50, company:"继峰股份", track:"座椅系统", type:"客户与车型", date:"2026-10-22", title:"继峰再获新能源车企整车座椅总成定点", summary:"继峰座椅（合肥）获得原有新能源汽车客户新车型整车座椅总成定点，预计2027年8月量产、生命周期2.3年、预计总金额11.8亿元。定点继续扩大在手项目，但实际收入仍取决于车型产量。", source:"上市公司披露转述", url:"https://www.minichart.com.sg/2026/10/22/%E7%BB%A7%E5%B3%B0%E8%82%A1%E4%BB%BD%E8%8E%B7%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%BC%81%E5%BA%A7%E6%A4%85%E6%80%BB%E6%88%90%E5%AE%9A%E7%82%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%87%91%E9%A2%9D/" },
  { id:51, company:"安道拓", track:"座椅系统", type:"经营与战略", date:"2026-10-07", title:"安道拓庆祝进入中国市场30周年", summary:"安道拓在重庆中国技术中心回顾本地业务发展。其中国布局依托合资企业、研发与制造网络，反映全球座椅巨头继续把本地工程、成本和客户协同作为竞争壁垒。", source:"Adient", url:"https://www.adient.com/media/news/" },
  { id:52, company:"一汽富维", track:"座椅系统", type:"客户与车型", date:"2026-08-11", title:"富维获得合资品牌约39.36亿元座椅项目定点", summary:"两个座椅项目预计分别于2027年10月和2028年1月量产，生命周期均为8年，预计销售额合计39.36亿元。该定点显示富维正在从一汽体系能力向外部合资客户复制。", source:"法定披露", url:"https://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=600742" },
  { id:53, company:"继峰股份", track:"座椅系统", type:"客户与车型", date:"2026-08-18", title:"继峰福州基地获得约21.2亿元整椅项目", summary:"继峰汽车座椅（福州）获头部主机厂新车型完整座椅定点，预计2027年6月量产、生命周期4年。连续定点有利于规模效应，但多基地同步爬坡带来的质量、人员与现金占用需要重点监控。", source:"公司披露转述", url:"https://www.pudaily.com/news/66396/jifeng-secures-cny-212-billion-passenger-vehicle-seating-program-from-leading-au" },
  { id:54, company:"座椅行业", track:"座椅系统", type:"经营与战略", date:"2026-10-29", title:"座椅竞争池扩展至乘用车与商用车整椅厂", summary:"新增安道拓、丰田纺织、TS TECH、泰极爱思、天成自控、广西双英、伊思灵豪森和CVG/KAB，并将延锋、李尔、佛吉亚、麦格纳、富维、诺博及继峰/GRAMMER按整椅能力重新归类。零部件厂不因具备骨架或面套能力自动视为整椅供应商。", source:"企业官网与法定披露汇总", url:"https://www.adient.com/products/complete-seats/" },
  { id:55, company:"天成自控", track:"座椅系统", type:"业绩财报", date:"2026-10-26", title:"天成自控前三季度收入与利润增长，现金流仍承压", summary:"前三季度营业收入22.38亿元，同比增长20.6%；归母净利润0.83亿元，同比增长65.3%；经营现金流1.34亿元，同比下降53.2%。乘用车与工程/商用车座椅放量支撑增长，但原材料、项目扩张与回款节奏仍需监控。", source:"2026年三季报", url:"https://cj.sina.com.cn/articles/view/7935425109/1d8fcfa5502001nzbo" },
  { id:56, company:"芜湖瑞泰", track:"主机厂关联座椅", type:"经营与战略", date:"2026-10-21", title:"芜湖瑞泰新增年产50万套新能源汽车座椅基地", summary:"政府项目公示显示，企业建设新能源汽车座椅研发生产基地，新增年产50万套整椅能力。项目强化奇瑞产业链本地配套，也会加大华东新能源整椅项目的产能竞争。", source:"芜湖市生态环境局", url:"https://sthjj.wuhu.gov.cn/hbyw/hjsp/jsxmhpsp/8962299.html" },
  { id:57, company:"麦格纳", track:"座椅系统", type:"经营与战略", date:"2026-10-21", title:"麦格纳座椅骨架研发生产基地落户合肥高新区", summary:"项目聚焦座椅骨架研发与生产，是完整座椅上游结构能力的本地化扩张信号，不等同于新增整椅总装产能。需继续追踪客户定点、投产节奏及与现有整椅基地的协同。", source:"Auto座椅产业链观察转载", url:"https://b2b.chem366.com/News/2026-10-21/1314746" },
  { id:58, company:"卓骏控股", track:"座椅系统", type:"客户与车型", date:"2026-10-29", title:"卓骏确认为理想车型整椅供应商并形成全链条能力", summary:"企业官网及地方报道交叉确认其配套理想ONE、L8、L9，并具备整椅、骨架、舒适系统、发泡和面套等能力。卓骏应列入新势力完整座椅项目的重点本土竞争池。", source:"企业官网与地方报道", url:"https://www.zhuojun.com/" },
  { id:59, company:"座椅行业", track:"座椅系统", type:"经营与战略", date:"2026-10-29", title:"本土完整座椅竞争池扩展至卓骏、富卓、瑞泰、华智与弗迪", summary:"本轮以企业官网、政府公示和可追溯行业资料交叉核验，补充新势力、奇瑞、广汽及比亚迪关联供应力量。主机厂关联公司与独立供应商分轨监控，避免将集团内部配套能力误判为开放市场份额。", source:"企业官网与政府公示汇总", url:"https://www.zhuojun.com/" },
  { id:60, company:"座椅行业", track:"座椅系统", type:"客户与车型", date:"2026-10-29", title:"高销量车型配套出现率显示头部集中与国产力量上升", summary:"行业样本显示FORVIA、李尔、延锋和弗迪在2024年Top 50车型配套中出现较多。该指标仅代表样本车型配套出现率，不等同于中国完整座椅总体市场份额，适合作为客户覆盖线索而非份额结论。", source:"前瞻产业研究院图表", url:"https://x.qianzhan.com/xcharts/detail/602e7bca0ae0a914.html" },
  { id:61, company:"商用车座椅", track:"商用车座椅", type:"经营与战略", date:"2026-10-29", title:"国内商用车座椅竞争池补入精益达、盈富圳边、福建九龙与厦门金龙", summary:"四家企业分别覆盖客车、卡车、轻型商用车、特种车和公共交通座椅。后续应按驾驶员座椅、乘客座椅与客车内饰拆分竞争关系，并继续核验具体客户、车型和产量。", source:"企业官网汇总", url:"https://www.moleadseat.com/" }
];

const financialResults = [
  {company:"新泉股份", period:"2026 H1", revenue:"80.15亿元", growth:"+7.45%", profit:"归母净利 4.14亿元", profitMargin:"归母净利率 5.17%", profitGrowth:"-1.90%", cashFlow:"经营现金流 2.05亿元", overview:"仪表板、门板等核心产品保持增长，现金流改善；行业价格竞争、研发投入和海外产能爬坡使利润略有下降。", strategy:"扩充德国、北美产能并建设马来西亚基地，推进H股上市和海外客户本地化配套。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12474866&stockid=603179"},
  {company:"宁波华翔", period:"2026 H1", revenue:"102.49亿元", growth:"-20.42%", profit:"归母净利 7.23亿元", profitMargin:"归母净利率 7.05%", profitGrowth:"+293.60%", cashFlow:"经营现金流 7.79亿元", overview:"海外低效业务剥离导致收入下降；上年同期处置损失形成低基数，本期归母净利润扭亏，但汇兑损失使扣非利润仍下降。", strategy:"优化全球资产与客户结构，聚焦轻量化、智能底盘并拓展机器人硬件。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12573812&stockid=002048"},
  {company:"富维股份", period:"2026 H1", revenue:"71.41亿元", growth:"-23.23%", profit:"归母净利 1.90亿元", profitMargin:"归母净利率 2.66%", profitGrowth:"-28.28%", cashFlow:"经营现金流 11.11亿元", overview:"主要客户需求和销量承压拖累收入与利润；累计降本约4.2亿元、回款改善使经营现金流大幅增长。", strategy:"巩固一汽体系并拓展外部客户，推进智能座舱、轻量化及新兴业务布局。", url:"https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12568376&stockid=600742"},
  {company:"华域汽车", period:"2026 H1", revenue:"839.39亿元", growth:"-1.43%", profit:"归母净利 26.47亿元", profitMargin:"归母净利率 3.15%", profitGrowth:"-8.67%", cashFlow:"经营现金流 79.68亿元", overview:"内外饰收入小幅下降，汇率波动导致财务费用上升；经营现金流改善，电子电器业务保持较快增长。", strategy:"围绕智能座舱、智能底盘和智能动力转型，提升新能源、自主品牌及海外客户占比。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12556283&stockid=600741"},
  {company:"继峰股份", period:"2026 H1", revenue:"130.78亿元", growth:"+24.28%", profit:"归母净利 3.65亿元", profitMargin:"归母净利率 2.79%", profitGrowth:"+137.26%", cashFlow:"经营现金流 2.43亿元", overview:"乘用车座椅收入同比增长110.62%，项目放量、规模效应、格拉默整合与降本共同推动盈利和现金流显著改善。", strategy:"持续推进以乘用车座椅为核心的智能座舱战略，并以工业机器人打造第三增长曲线。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12495745&stockid=603997"},
  {company:"天成自控", period:"2026 Q1-Q3", revenue:"22.38亿元", growth:"+20.6%", profit:"归母净利 0.83亿元", profitMargin:"归母净利率 3.72%", profitGrowth:"+65.3%", cashFlow:"经营现金流 1.34亿元", overview:"乘用车与工程机械/商用车座椅订单增长推动收入和利润提升，但经营现金流同比下降53.2%，扩张中的资金占用需要继续观察。", strategy:"扩大乘用车整椅定点并巩固商用车、工程机械座椅，同时推进轻量化与航空座椅多元化。", url:"https://static.cninfo.com.cn/finalpage/2026-08-25/1225496793.PDF"},
  {company:"常熟汽饰", period:"2026 H1", revenue:"34.91亿元", growth:"+25.58%", profit:"归母净利 1.17亿元", profitMargin:"归母净利率 3.34%", profitGrowth:"-46.09%", cashFlow:"经营现金流 2.61亿元", overview:"订单增长和安庆、合肥新工厂量产拉动收入，但产能爬坡、人员及研发费用增加，利润率明显承压。", strategy:"扩大新能源客户和海外布局，提高新工厂利用率与规模化盈利。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12569272&stockid=603035"},
  {company:"岱美股份", period:"2026 H1", revenue:"30.22亿元", growth:"-4.82%", profit:"归母净利 4.20亿元", profitMargin:"归母净利率 13.90%", profitGrowth:"+74.16%", cashFlow:"经营现金流 4.36亿元", overview:"需求和汇兑损失压低收入及扣非利润；归母利润高增长主要来自上年墨西哥火灾低基数，不能直接视作经营性跃升。", strategy:"推动汽车顶棚业务放量，巩固遮阳板优势并探索机器人等第二增长曲线。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12567241&stockid=603730"},
  {company:"福赛科技", period:"2026 H1", revenue:"8.23亿元", growth:"+0.36%", profit:"归母净利 0.72亿元", profitMargin:"归母净利率 8.79%", profitGrowth:"+14.20%", cashFlow:"经营现金流 0.67亿元", overview:"收入基本持平，成本改善支持利润增长；研发投入增加，但销售回款减少使经营现金流同比下降57%。", strategy:"扩建墨西哥产能，拓展智能表面、功能件和新能源三电嵌件。", url:"https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12569905&stockid=301529"},
  {company:"FORVIA", period:"2026 H1", revenue:"€10.51bn", growth:"-4.3%", profit:"经营利润 €632m", profitMargin:"经营利润率 6.0%", profitGrowth:"+1.6%", cashFlow:"净现金流 €432m", overview:"市场产量偏弱及中国客户结构拖累销售，但成本纪律与自助改善措施推动利润率和现金流提升。", strategy:"Interiors 出售预计四季度完成，继续执行 IGNITE、降本和降杠杆。", url:"https://www.forvia.com/en/investors/equity-investors-analyst/financial-results"},
  {company:"Antolin", period:"2026 H1", revenue:"€1.73bn", growth:"-11.0%", profit:"EBITDA €136m", profitMargin:"EBITDA率 7.8%", profitGrowth:"-18.6%", cashFlow:"现金生成 €11m", overview:"净利润由亏损转为5,640万欧元，但包含印度业务出售收益；座舱与门板业务在欧洲、亚洲承压，净债务仍为10.34亿欧元。", strategy:"维持全年34亿至35亿欧元收入指引，推进债务重组、工业布局调整，并扩大Technology Solutions高利润业务。", url:"https://www.antolin.com/en/antolin-first-half-net-profit-reaches-eu564-million-order-intake-doubles"},
  {company:"Lear", period:"2026 Q2", revenue:"$6.21bn", growth:"+3.0%", profit:"核心经营利润 $313m", profitMargin:"核心利润率 5.0%", profitGrowth:"+7.0%", cashFlow:"经营现金流 $461m / FCF $288m", overview:"重点平台增产、重组节省与运营效率改善推动利润增长，自由现金流同比增长69%。", strategy:"上调全年展望，以自动化和数字工具提效，并扩大座椅及电子系统定点。", url:"https://www.lear.com/newsroom/lear-reports-second-quarter-2026-results"},
  {company:"Magna", period:"2026 Q2", revenue:"$10.98bn", growth:"+3.0%", profit:"调整后 EBIT $677m", profitMargin:"调整后 EBIT率 6.2%", profitGrowth:"+16.0%", cashFlow:"自由现金流 $617m", overview:"新项目投产、生产率改善、重组收益及汇率正向影响推动盈利增长，抵消区域产量走弱和部分项目停产影响。", strategy:"上调全年利润率、EPS与自由现金流展望，继续优化业务组合并提高资本回报。", url:"https://www.magna.com/stories/news-press-release/2026/magna-announces-strong-second-quarter-results--raises-outlook-for-2026"},
  {company:"GRAMMER AG", period:"2026 9M", revenue:"€1.44bn", growth:"+3.5%", profit:"经营 EBIT €53.2m", profitMargin:"经营 EBIT率 3.7%", profitGrowth:"+6.6%", cashFlow:"自由现金流 -€7.1m", overview:"汽车与商用车业务均增长，APAC贡献突出，Top 10与重组措施改善累计盈利；但美洲收入下降、经营亏损扩大，项目爬坡和关税令Q3利润承压，现金流转负。", strategy:"全年收入目标维持约19亿欧元，经营EBIT指引由约8,000万欧元下调至约7,000万欧元，重点稳定美洲项目并继续效率改善。", url:"https://www.eqs-news.com/media/document/cb6238e2-be43-4cec-ae66-7c56b6a4c258/assets/DE0005895403-Q3-2026-EQ-E-00.pdf"}
];

const financialDisclosureGaps = ["延锋","诺博","成航模塑","富诚","重庆平伟","广西双英","伊思灵豪森","卓骏控股","弗迪座椅体系","富卓汽车内饰","芜湖瑞泰","广州华智","郑州精益达","盈富圳边","福建九龙座椅","厦门金龙座椅","重庆赛帕斯","宣城托新","奥克伍德","吉安专精","佛山叶诚"];

const audienceProfiles = {
  "销售": { en:"SALES", title:"技术、竞争环境和定点", description:"优先关注客户车型、竞争对手定点、量产技术、消费者偏好和可能改变报价策略的经营信号。", types:["客户与车型","消费者偏好","产品与技术","业绩财报","经营与战略","声学与座舱","新材料","年度报告","行业展会"] },
  "研发": { en:"R&D", title:"技术路线、材料与量产工艺", description:"优先关注消费者偏好、中控、门板、座椅、声学、智能表面、循环材料与可制造性变化。", types:["消费者偏好","产品与技术","新材料","声学与座舱","行业展会","客户与车型","业绩财报","经营与战略","年度报告"] },
  "管理层": { en:"MANAGEMENT", title:"竞争格局、盈利与战略动作", description:"优先关注收入与利润变化、消费者趋势、业务出售、客户结构和影响资源配置的行业方向。", types:["业绩财报","经营与战略","消费者偏好","年度报告","客户与车型","产品与技术","新材料","行业展会","声学与座舱"] }
};

const audiencePriorities = {
  "销售": [
    {level:"高", company:"本土座椅供应商", title:"整椅竞争池扩展至新势力与主机厂关联企业", why:"卓骏、富卓、瑞泰、华智和弗迪覆盖不同客户体系，完整座椅竞争已不局限于传统全球Tier 1。", action:"按客户平台梳理开放供应、体系内配套和区域供应商，逐项核验定点、SOP、产能与车型产量。", newsId:59},
    {level:"高", company:"隐藏式显示", title:"真材质表面开始承载隐形交互", why:"木饰面与OLED融合说明高端客户可能要求屏幕未启用时完全隐藏，并保留真实材料质感。", action:"联合显示、膜片和饰面伙伴准备隐藏显示样件，明确透过率、热管理和表面耐久边界。", newsId:49},
    {level:"中", company:"GRAMMER", title:"新项目投产成本正在侵蚀利润", why:"美洲项目7月投产后成本高于预期并触发全年盈利下调，反映新定点放量不等于即时盈利。", action:"在客户报价和项目评审中单列爬坡损失、关税与产能利用率敏感性。", newsId:47}
  ],
  "研发": [
    {level:"高", company:"卓骏 / 本土整椅", title:"垂直整合能力正成为新进入者门槛", why:"卓骏已形成整椅、骨架、发泡、面套、舒适系统和座舱电子能力，表明本土厂商正从制造交付走向系统集成。", action:"建立乘用车与商用车座椅技术树，分开验证零重力、安全约束、热管理、长滑轨和驾驶员减振。", newsId:58},
    {level:"高", company:"AI 座舱", title:"硬件需要支持软件长期演进与品牌化", why:"同一软件底座服务多个品牌时，灯光、触感和物理界面将成为品牌差异的重要载体。", action:"定义功能表面的可配置接口、OTA兼容边界和失效时的物理备份策略。", newsId:48},
    {level:"中", company:"智能表面", title:"无运动部件中控适配多种装饰材料", why:"触觉与视觉反馈可跨玻璃、陶瓷、金属、塑料和膜片部署，接口及表面工艺协同成为核心。", action:"建立多材料 HMI 的透光、触觉、耐久、误触与装配验证矩阵。", newsId:46}
  ],
  "管理层": [
    {level:"高", company:"座椅行业", title:"国产替代、体系内供应与全球整合同时加速", why:"独立本土整椅厂与主机厂关联企业均在扩产，而国际厂商仍凭借平台、垂直整合和全球交付保持壁垒。", action:"将独立整椅、主机厂关联座椅和商用车座椅分别建组，跟踪订单、SOP、利润兑现与客户集中度。", newsId:59},
    {level:"高", company:"Stellantis / 行业", title:"座舱价值正在从硬件交付转向持续体验运营", why:"AI软件平台跨14个品牌部署，可能压缩单纯硬件差异并提高接口、数据和持续升级能力的重要性。", action:"明确未来两年软件合作伙伴、电子接口所有权和可持续收费/服务模式。", newsId:48},
    {level:"中", company:"GRAMMER", title:"累计增长掩盖Q3美洲项目压力", why:"前九个月收入和经营EBIT仍增长，但Q3盈利同比下降、自由现金流转负，美洲项目爬坡成本和关税已触发全年指引下调。", action:"把新项目SOP盈利、区域现金占用和关税暴露列为座椅业务管理层月度监控指标。", newsId:47}
  ]
};

const signalItems = [...news].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,3);
const productColumns = ["副仪表板","门板","乘用车座椅","商用车座椅","座椅扶手","金属扬声器罩","新材料"];

const listedStocks = [
  { id:"xinquan", name:"新泉股份", ticker:"603179.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603179", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603179/gp" },
  { id:"huaxiang", name:"宁波华翔", ticker:"002048.SZ", market:"深交所", currency:"CNY", quoteSymbol:"sz002048", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sz002048/gp" },
  { id:"faway", name:"富维股份", ticker:"600742.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh600742", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh600742/gp" },
  { id:"jifeng", name:"继峰股份", ticker:"603997.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603997", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603997/gp" },
  { id:"changshu", name:"常熟汽饰", ticker:"603035.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603035", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603035/gp" },
  { id:"daimay", name:"岱美股份", ticker:"603730.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603730", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603730/gp" },
  { id:"foseal", name:"福赛科技", ticker:"301529.SZ", market:"深交所", currency:"CNY", quoteSymbol:"sz301529", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sz301529/gp" },
  { id:"huayu", name:"华域汽车", ticker:"600741.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh600741", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh600741/gp" },
  { id:"tenchen", name:"天成自控", ticker:"603085.SH", market:"上交所", currency:"CNY", quoteSymbol:"sh603085", source:"腾讯证券", sourceUrl:"https://gu.qq.com/sh603085/gp" },
  { id:"forvia", name:"FORVIA", ticker:"FRVIA.PA", market:"巴黎泛欧", currency:"EUR", source:"Euronext", sourceUrl:"https://live.euronext.com/en/product/equities/FR0000121147-XPAR" },
  { id:"adient", name:"安道拓", ticker:"ADNT.N", market:"纽约证交所", currency:"USD", quoteSymbol:"usADNT", source:"腾讯证券", sourceUrl:"https://gu.qq.com/usADNT/gp" },
  { id:"lear", name:"李尔", ticker:"LEA.N", market:"纽约证交所", currency:"USD", quoteSymbol:"usLEA", source:"腾讯证券", sourceUrl:"https://gu.qq.com/usLEA/gp" },
  { id:"magna", name:"麦格纳", ticker:"MGA.N", market:"纽约证交所", currency:"USD", quoteSymbol:"usMGA", source:"腾讯证券", sourceUrl:"https://gu.qq.com/usMGA/gp" },
  { id:"grammer", name:"GRAMMER AG", ticker:"GMM.DE", market:"德国 Xetra", currency:"EUR", source:"GRAMMER / Stuttgart", sourceUrl:"https://www.grammer.com/en/investor-relations/share/" }
];

const fallbackQuotes = {
  xinquan:{price:38.64, previous:36.39, change:2.25, percent:6.18, cap:284.06, date:"2026-10-23", trend:[40.70,40.22,40.48,37.51,37.10,35.88,34.94,32.16,32.28,34.67,37.76,36.73,36.39,38.64].slice(-10), cached:true},
  huaxiang:{price:18.57, previous:17.55, change:1.02, percent:5.81, cap:150.82, date:"2026-10-23", trend:[17.86,17.79,17.67,17.03,17.52,17.33,17.29,15.93,16.47,17.24,18.00,17.67,17.55,18.57].slice(-10), cached:true},
  faway:{price:7.58, previous:7.44, change:0.14, percent:1.88, cap:56.33, date:"2026-10-23", trend:[7.65,7.55,7.67,7.70,7.76,7.75,7.73,7.44,7.68,7.61,7.61,7.53,7.44,7.58].slice(-10), cached:true},
  forvia:{price:8.736, previous:null, change:null, percent:null, cap:1.722, date:"2026-07-24", trend:[8.736], cached:true, official:true},
  lear:{price:116.69, previous:118.61, change:-1.92, percent:-1.62, cap:57.55707, date:"2026-10-23", trend:[118.61,116.69], cached:true},
  magna:{price:63.97, previous:64.72, change:-0.75, percent:-1.16, cap:171.13245, date:"2026-10-23", trend:[64.72,63.97], cached:true},
  jifeng:{price:11.24, previous:11.17, change:0.07, percent:0.63, cap:143.01, date:"2026-10-23", trend:[13.65,13.65,13.47,13.40,13.01,11.72,11.36,11.27,11.62,11.96,11.48,11.52,11.17,11.24].slice(-10), cached:true},
  grammer:{price:10.80, previous:null, change:null, percent:null, cap:0.165, date:"2026-07-23", trend:[10.80], cached:true, official:true},
  changshu:{price:10.13, previous:9.93, change:0.20, percent:2.01, cap:37.11, date:"2026-10-23", trend:[10.47,10.40,10.50,10.39,10.49,10.48,10.26,9.82,10.03,10.11,10.14,9.99,9.93,10.13].slice(-10), cached:true},
  daimay:{price:10.95, previous:10.11, change:0.84, percent:8.31, cap:235.27, date:"2026-10-23", trend:[9.33,9.63,9.85,9.68,9.66,10.42,9.87,9.75,9.60,9.96,10.75,10.38,10.11,10.95].slice(-10), cached:true},
  foseal:{price:158.40, previous:142.14, change:16.26, percent:11.44, cap:187.59, date:"2026-10-23", trend:[132.37,136.88,140.60,133.06,131.88,125.28,126.72,116.13,116.63,132.79,144.25,141.55,142.14,158.40].slice(-10), cached:true},
  huayu:{price:15.11, previous:14.79, change:0.32, percent:2.16, cap:476.37, date:"2026-10-23", trend:[14.98,15.18,15.38,15.15,15.55,15.61,15.56,15.47,15.59,15.70,15.43,14.85,14.79,15.11].slice(-10), cached:true}
  ,tenchen:{price:9.18, previous:8.97, change:0.21, percent:2.34, cap:36.45, date:"2026-10-28", trend:[9.88,9.79,9.71,9.50,9.22,9.42,9.43,8.97,9.18], cached:true}
  ,adient:{price:17.26, previous:16.86, change:0.40, percent:2.37, cap:13.30693, date:"2026-10-28", trend:[16.86,17.26], cached:true}
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
    {name:"座椅定点与产能", value:filteredNews.filter(n=>["座椅系统","主机厂关联座椅","商用车座椅"].includes(n.track)).length},
    {name:"新材料与表面", value:filteredNews.filter(n=>n.type==="新材料").length},
    {name:"消费者偏好", value:filteredNews.filter(n=>n.type==="消费者偏好").length}
  ];
  const signalMax = Math.max(1, ...signalStructure.map(item=>item.value));

  return <div className="app-shell" data-screen-label="汽车内饰与座椅竞争情报总览">
    <header className="topbar">
      <div>
        <div className="eyebrow">INTERIOR &amp; SEATING COMPETITIVE INTELLIGENCE</div>
        <h1>汽车内饰与座椅竞争情报看板</h1>
        <p>综合内饰、乘用车/商用车座椅与金属扬声器罩 · 集团、关联公司、产品、财务与竞争动态</p>
      </div>
      <div className="freshness">
        <div className="freshness-row"><span className="status-dot"></span><strong>近三个月竞争信号已更新</strong></div>
        <div className="source-note">检索截至：2026-10-30 · 内部使用</div>
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
          <div className="panel-header"><div><h2 className="panel-title">信号结构</h2><div className="panel-hint">已验证来源条目；座椅定点与产能为跨类型专题统计</div></div></div>
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
          <div className="panel-header"><div><h2 className="panel-title">企业 × 产品矩阵</h2><div className="panel-hint">完整展示{filteredCompanies.length}家企业；整椅按乘用车与商用车分列</div></div><span className="panel-hint">座椅相关 {filteredCompanies.filter(c=>c.products.some(p=>p.includes("座椅"))).length}家 · 喇叭网罩 {filteredCompanies.filter(c=>c.track==="金属扬声器罩").length}家</span></div>
          <div className="matrix-wrap"><table className="matrix"><thead><tr><th>企业</th>{productColumns.map(p=><th key={p}>{p}</th>)}</tr></thead><tbody>{filteredCompanies.map(c=><tr key={c.id} className={c.track==="金属扬声器罩"?"matrix-grille-row":""}><td><strong>{c.name}</strong><span className="matrix-company-track">{c.track}</span></td>{productColumns.map(p=>{const marked=(p==="副仪表板"&&c.track.startsWith("综合内饰"))||c.products.includes(p);return <td key={p}>{marked?<span className={`matrix-mark ${c.track==="金属扬声器罩"?"secondary":""}`}></span>:<span className="matrix-dash">—</span>}</td>})}</tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="grid-even evidence-grid">
        <div className="panel financial-panel">
          <div className="panel-header"><div><h2 className="panel-title">最新业绩与财报关键指标</h2><div className="panel-hint">新增座椅企业优先使用最新正式披露；其余企业保留最近可比季报/半年报；现金流口径不直接横向比较</div></div><span className="news-count">{financialResults.length} 家</span></div>
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

      <footer className="footer">当前竞争动态来自企业官网、监管披露、交易所/法定公告、政府项目公示及汽车内饰/座椅专业信息；检索窗口更新至 2026-10-30，公众号和行业转载仅作为发现线索，关键客户、产能与财务关系尽量交叉核验。正式财报按最新披露追溯，初步业绩与正式财报分开标注。股市行情在打开页面时自动请求最近数据，并保留最近完整交易日缓存。车型产量、客户配套量与市场份额模块按需求暂不显示。</footer>
    </main>

    <div className={`drawer-backdrop ${selected?"open":""}`} onClick={()=>setSelected(null)}></div>
    <aside className={`drawer ${selected?"open":""}`} aria-hidden={!selected}>
      {selected && <><div className="drawer-head"><div><div className="eyebrow">COMPANY PROFILE</div><h2>{selected.name}</h2><div className="source-note">{selected.en}</div></div><button className="close-button" onClick={()=>setSelected(null)} aria-label="关闭">×</button></div><div className="drawer-body"><section className="drawer-section"><h3>监控口径</h3><div className="drawer-copy">{selected.note}</div></section><section className="drawer-section"><h3>基础属性</h3><div className="drawer-copy">赛道：{selected.track}<br/>地区：{selected.region}<br/>上市状态：{selected.listed?`上市 · ${selected.ticker}`:"非上市或集团主体"}{selected.vehicleSegments&&<><br/>车型范围：{selected.vehicleSegments.join(" / ")}</>}</div></section>{selected.customers&&<section className="drawer-section"><h3>公开客户 / 覆盖范围</h3><div className="drawer-copy">{selected.customers}</div></section>}<section className="drawer-section"><h3>产品标签</h3><div className="company-tags">{selected.products.map(tag=><span className={`tag ${selected.track==="金属扬声器罩"?"grille":""}`} key={tag}>{tag}</span>)}</div></section><section className="drawer-section"><h3>可信来源</h3><a className="drawer-link" href={selected.url} target="_blank" rel="noreferrer">打开企业或监管来源 ↗</a></section></div></>}
    </aside>
  </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
